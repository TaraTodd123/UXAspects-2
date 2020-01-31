import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessibilityModule } from '../../directives/accessibility/index';
import { IconModule } from '../icon/index';
import { NumberPickerModule } from '../number-picker/index';
import { TooltipModule } from '../tooltip/index';
import { ColorPickerComponent } from './color-picker.component';

@NgModule({
    imports: [
        AccessibilityModule,
        CommonModule,
        FormsModule,
        NumberPickerModule,
        TooltipModule,
        IconModule,
        ReactiveFormsModule
    ],
    exports: [
        ColorPickerComponent
    ],
    declarations: [
        ColorPickerComponent
    ],
})
export class ColorPickerModule { }
