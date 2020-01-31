import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColorPickerColor } from './color-picker-color';
import { ColorPickerButtonSize, ColorPickerButtonStyle, ColorPickerInputColors, ColorPickerInputMode } from './color-picker.type';
import { FormControl, Validators } from '@angular/forms';

// Values corresponding to stylesheet
const BUTTON_MARGIN = 8;
const BUTTON_WIDTHS = {
    'sm': 26,
    'md': 32,
    'lg': 40
};

let uniqueId = 0;

@Component({
    selector: 'ux-color-picker',
    exportAs: 'ux-color-picker',
    templateUrl: 'color-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit, OnDestroy {

    @Input()
    @HostBinding('attr.id')
    id: string = `ux-color-picker-${uniqueId++}`;

    /**
     * The collection of colors to display in the color swatch.
     *
     * Colors can be specified either as a string, which is the hex or RGBA value of the color; or as a `ColorPickerColor` object,
     * which allows a name to be associated with the color. See below for details of the `ColorPickerColor` class.
     * This property is either a one-dimensional or two-dimensional array. If a two-dimensional array is provided,
     * the colors will be split into rows, providing more control over the appearance of the swatch.
     */
    @Input()
    set colors(colors: ColorPickerInputColors[] | ColorPickerInputColors[][]) {

        let normalizedColors: ColorPickerInputColors[][];

        // If it's a 1d array, convert it to 2d
        if (colors.length === 0 || !Array.isArray(colors[0])) {
            normalizedColors = [<ColorPickerInputColors[]>colors];
        } else {
            normalizedColors = <ColorPickerInputColors[][]>colors;
        }

        // Convert any string colors to ColorPickerColor
        this._colors = normalizedColors.map(row =>
            row.map(color => color instanceof ColorPickerColor ? color : new ColorPickerColor(color, color)));
    }

    /**
     * The currently selected color. If this is one of the `colors` in the colors collection, it will be visually
     * highlighted in the swatch. It will also be shown in the input panel, if enabled (see showInput).
     * Note that this will always be a `ColorPickerColor` object, even if plain strings are provided to the colors property.
     * See below for details of the `ColorPickerColor` class.
     */
    @Input()
    set selected(value: ColorPickerColor) {
        this._selected = value;
        this.setInputValue();
    }

    get selected(): ColorPickerColor {
        return this._selected;
    }

    /**
     * The number of columns to display in the color swatch. Set this to -1 if the width should be specified by a stylesheet
     * instead, e.g. to provide a responsive layout.
     */
    @Input()
    columns: number = -1;

    /** The style of the color swatch buttons. */
    @Input()
    buttonStyle: ColorPickerButtonStyle = 'circle';

    /** The size of the color swatch buttons. Three size variants are currently supported. */
    @Input()
    buttonSize: ColorPickerButtonSize = 'md';

    /** Whether to show tooltips above the color swatch buttons. These contain the color name if provided; otherwise the color hex/RGBA value. */
    @Input()
    showTooltips: boolean = false;

    /** Whether to show the hex/RGBA input panel. */
    @Input()
    showInput: boolean = false;

    /** The default input mode to display in the input panel. The user can switch modes using the toggle button. */
    @Input()
    inputMode: ColorPickerInputMode = 'hex';

    /** Defines a function that returns an aria-label for ColorPickerColor. */
    @Input()
    colorAriaLabel: (color: ColorPickerColor) => string = this.getColorAriaLabel;

    /** Defines a function that returns an aria-label for the button that switches input modes. */
    @Input()
    switchModeAriaLabel: (mode: ColorPickerInputMode) => string = this.getSwitchModeAriaLabel;

    /** Define a function that returns an aria-label for the input control. */
    @Input()
    inputAriaLabel: (mode: ColorPickerInputMode) => string = this.getInputAriaLabel;

    /** Emitted when the user changes the selected color, either by clicking a color swatch button, or entering a valid color value into the input panel text field. */
    @Output()
    selectedChange = new EventEmitter<ColorPickerColor>();

    /** Emitted when the user presses enter in the input panel text field. This can be used to commit a color change and/or close a popup. */
    @Output()
    inputSubmit = new EventEmitter<void>();

    inputPatterns = {
        'hex': /^#(?:[\da-fA-F]{3}){1,2}$/,
        'rgba': /^(?:rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\))|(?:rgba\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*\d(\.\d+)?\))$/
    };

    // Fields that should be private but are required in the view
    _colors: ColorPickerColor[][] = [];
    _input = new FormControl(this._selection, [Validators.pattern(this._pattern)]);

    private _selected: ColorPickerColor = null;
    private _onDestroy = new Subject<void>();

    ngOnInit(): void {
        this.setInputValue();
        this._input.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(value => this.setColorValue(value));
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    @HostBinding('style.width')
    get _width(): string {
        return this.columns > 0 ? `${this.columns * (BUTTON_WIDTHS[this.buttonSize] + (2 * BUTTON_MARGIN))}px` : 'auto';
    }

    get _selection(): string {
        return this.selected ? this.selected[this.inputMode] : null;
    }

    get _pattern(): RegExp {
        return this.inputPatterns[this.inputMode];
    }

    setColorValue(value: string): void {
        if (this._pattern.test(value)) {

            // update the input value and input validation
            this.setInputValue();

            // emit the latest value
            this.selectedChange.emit(new ColorPickerColor('Custom', value, this.inputMode));
        }
    }

    toggleInputMode(): void {

        // update the input type to the next option
        this.inputMode = this.inputMode === 'hex' ? 'rgba' : 'hex';

        // update the value to display in the correct format
        this.setInputValue();
    }

    private setInputValue(): void {

        // update the value to display in the correct format
        this._input.setValue(this._selection, { emitEvent: false });

        // update the FormControl validators to reflect the new format
        this._input.setValidators([Validators.pattern(this._pattern)]);

        // perform validation
        this._input.updateValueAndValidity({ emitEvent: false });
    }

    private getColorAriaLabel(color: ColorPickerColor): string {
        return `Select color ${color.name}`;
    }

    private getSwitchModeAriaLabel(mode: ColorPickerInputMode): string {
        return `Switch input mode to ${mode === 'hex' ? 'RGBA' : 'hex'}`;
    }

    private getInputAriaLabel(mode: ColorPickerInputMode): string {
        return `Edit ${mode} color value`;
    }
}