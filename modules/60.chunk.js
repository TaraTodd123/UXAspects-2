(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{IbJh:function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("T/2f"),e=s("YZ8U"),l=s("mrSG"),o=(s("nmfD"),s("AVdU")),c=s("yHOM"),u=function(n){function a(){var a=n.call(this,s("qk9C"))||this;return a._now=Date.now(),a._dayInMilliSeconds=864e5,a._daysAfterFirstEvent=3,a.events=[{color:"accent",date:new Date(a._now+3*a._dayInMilliSeconds),url:"#",id:chance.integer({min:1e3,max:9999}),action:"tested",assignee:chance.name()},{color:"alternate2",date:new Date(a._now+2*a._dayInMilliSeconds),url:"#",id:chance.integer({min:1e3,max:9999}),action:"reviewed",assignee:chance.name()},{color:"grey4",date:new Date(a._now+1*a._dayInMilliSeconds),url:"#",id:chance.integer({min:1e3,max:9999}),action:"developed",assignee:chance.name()},{color:"primary",date:new Date(a._now),url:"#",id:chance.integer({min:1e3,max:9999}),action:"recorded",assignee:chance.name()}],a.playground={files:{"app.component.html":a.snippets.raw.appHtml,"app.component.ts":a.snippets.raw.appTs},modules:[{imports:["TimelineModule"],library:"@ux-aspects/ux-aspects"}]},a}return Object(l.__extends)(a,n),a.prototype.addEvent=function(){this._daysAfterFirstEvent++,this.events.unshift({color:"grey4",date:new Date(this._now+this._dayInMilliSeconds*this._daysAfterFirstEvent),url:"#",id:chance.integer({min:1e3,max:9999}),action:"updated",assignee:chance.name()})},Object(l.__decorate)([Object(c.a)("ComponentsTimelineComponent")],a)}(o.a),i={category:e.b.resolveCategoryData(e.a.Components,"Timeline")},k=function(){return function(n,a){a.registerResolver(n)}}(),r=s("WmtN"),d=s("2lL+"),m=s("pMnS"),g=s("GBPT"),v=s("rYg0"),h=s("FcDf"),f=s("Ip0R"),b=s("9hoY"),y=s("+gXg"),w=s("rpQh"),x=s("2RDK"),E=s("ZYCi"),_=s("r1ng"),C=s("COk8"),T=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,23,"ux-timeline-event",[],null,null,null,d.Ac,d.hb)),t["\u0275did"](1,49152,null,0,h.af,[],{badgeColor:[0,"badgeColor"],badgeTitle:[1,"badgeTitle"]},null),t["\u0275ppd"](2,2),(n()(),t["\u0275ted"](-1,0,["\n\n                "])),(n()(),t["\u0275eld"](4,0,null,0,11,"div",[["class","m-b-sm"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n                    "])),(n()(),t["\u0275eld"](6,0,null,null,8,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n                        "])),(n()(),t["\u0275eld"](8,0,null,null,1,"ux-icon",[["class","m-r-xs"],["name","document-time"]],[[4,"font-size",null],[2,"ux-flip-horizontal",null],[2,"ux-flip-vertical",null],[2,"ux-rotate-90",null],[2,"ux-rotate-180",null],[2,"ux-rotate-270",null]],null,null,d.Tb,d.A)),t["\u0275did"](9,4898816,null,0,h.rc,[t.ElementRef,t.Renderer2,h.tc],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,null,["\n                        "])),(n()(),t["\u0275eld"](11,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](12,null,["",""])),t["\u0275ppd"](13,2),(n()(),t["\u0275ted"](-1,null,["\n                    "])),(n()(),t["\u0275ted"](-1,null,["\n                "])),(n()(),t["\u0275ted"](-1,0,["\n                "])),(n()(),t["\u0275eld"](17,0,null,0,5,"p",[["class","m-b-nil"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Ticket\n                    "])),(n()(),t["\u0275eld"](19,0,null,null,2,"a",[],[[8,"href",4]],null,null,null,null)),t["\u0275did"](20,212992,null,0,h.ib,[t.ElementRef,h.ec,h.c,t.NgZone,[2,h.Hc]],null,null),(n()(),t["\u0275ted"](21,null,["",""])),(n()(),t["\u0275ted"](22,null,["\n                    was "," by ",".\n                "])),(n()(),t["\u0275ted"](-1,0,["\n\n            "]))],(function(n,a){var s=a.context.$implicit.color,p=t["\u0275unv"](a,1,1,n(a,2,0,t["\u0275nov"](a.parent,0),a.context.$implicit.date,"EEE LLL d"));n(a,1,0,s,p),n(a,9,0,"document-time"),n(a,20,0)}),(function(n,a){n(a,8,0,t["\u0275nov"](a,9).size,t["\u0275nov"](a,9).flipHorizontal,t["\u0275nov"](a,9).flipVertical,90==t["\u0275nov"](a,9).rotate,180==t["\u0275nov"](a,9).rotate,270==t["\u0275nov"](a,9).rotate);var s=t["\u0275unv"](a,12,0,n(a,13,0,t["\u0275nov"](a.parent,0),a.context.$implicit.date,"EEEE, MMMM d, y, h:mm:ss a"));n(a,12,0,s),n(a,19,0,a.context.$implicit.url),n(a,21,0,a.context.$implicit.id),n(a,22,0,a.context.$implicit.action,a.context.$implicit.assignee)}))}function D(n){return t["\u0275vid"](0,[t["\u0275pid"](0,f.e,[t.LOCALE_ID]),(n()(),t["\u0275eld"](1,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](3,0,null,null,12,"div",[["class","col-md-10"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](5,0,null,null,2,"button",[["class","btn button-primary"]],null,[[null,"click"]],(function(n,a,s){var t=!0;return"click"===a&&(t=!1!==n.component.addEvent()&&t),t}),null,null)),t["\u0275did"](6,212992,null,0,h.ib,[t.ElementRef,h.ec,h.c,t.NgZone,[2,h.Hc]],null,null),(n()(),t["\u0275ted"](-1,null,["Add New Event"])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](9,0,null,null,5,"ux-timeline",[],null,null,null,d.zc,d.gb)),t["\u0275did"](10,49152,null,0,h.Ze,[],null,null),(n()(),t["\u0275ted"](-1,0,["\n            "])),(n()(),t["\u0275and"](16777216,null,0,1,null,M)),t["\u0275did"](13,278528,null,0,f.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](18,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](20,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The "])),(n()(),t["\u0275eld"](22,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ux-timeline"])),(n()(),t["\u0275ted"](-1,null,[" component is a responsive, data-driven vertical component to tell a story, show history or describe a sequence of events. Events are created with the "])),(n()(),t["\u0275eld"](25,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ux-timeline-event"])),(n()(),t["\u0275ted"](-1,null,[" component, which includes a customizable badge and informational panel."])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](29,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The main content of the event will be displayed in the informational panel and should be specified inside the "])),(n()(),t["\u0275eld"](31,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ux-timeline-event"])),(n()(),t["\u0275ted"](-1,null,[" element."])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](35,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The following attributes can be used to configure the "])),(n()(),t["\u0275eld"](37,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ux-timeline-event"])),(n()(),t["\u0275ted"](-1,null,[" component:"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](41,0,null,null,14,"uxd-api-properties",[["tableTitle","Inputs"]],null,null,null,b.b,b.a)),t["\u0275did"](42,49152,null,0,y.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](44,0,null,0,6,"tr",[["name","badgeColor"],["type","string"],["uxd-api-property",""]],null,null,null,w.b,w.a)),t["\u0275did"](45,49152,null,0,x.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        The color of the badge from the "])),(n()(),t["\u0275eld"](47,0,null,0,2,"a",[["fragment","color-palette"],["routerLink","/css/color-palette"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,a,s){var p=!0;return"click"===a&&(p=!1!==t["\u0275nov"](n,48).onClick(s.button,s.ctrlKey,s.metaKey,s.shiftKey)&&p),p}),null,null)),t["\u0275did"](48,671744,null,0,E.r,[E.o,E.a,f.k],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(n()(),t["\u0275ted"](-1,null,["Color Palette"])),(n()(),t["\u0275ted"](-1,0,[".\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](52,0,null,0,2,"tr",[["name","badgeTitle"],["required","true"],["type","string"],["uxd-api-property",""]],null,null,null,w.b,w.a)),t["\u0275did"](53,49152,null,0,x.a,[],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        A short piece of text to show in the badge; typically the short-form date of the event.\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](57,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The following code can be used to create the example above:"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](60,0,null,null,20,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,d.wc,d.db)),t["\u0275prd"](512,null,h.Te,h.Te,[]),t["\u0275did"](62,4374528,null,1,h.Re,[h.Te,t.ChangeDetectorRef],{minimal:[0,"minimal"]},null),t["\u0275qud"](603979776,1,{_tabs:1}),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275eld"](65,0,null,0,6,"ux-tab",[["heading","HTML"]],null,null,null,d.vc,d.cb)),t["\u0275did"](66,245760,[[1,4]],1,h.Le,[h.Te,t.ChangeDetectorRef],{heading:[0,"heading"]},null),t["\u0275qud"](603979776,2,{headingRef:0}),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](69,0,null,0,1,"uxd-snippet",[],null,null,null,_.b,_.a)),t["\u0275did"](70,114688,null,0,C.a,[],{content:[0,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275eld"](73,0,null,0,6,"ux-tab",[["heading","TypeScript"]],null,null,null,d.vc,d.cb)),t["\u0275did"](74,245760,[[1,4]],1,h.Le,[h.Te,t.ChangeDetectorRef],{heading:[0,"heading"]},null),t["\u0275qud"](603979776,3,{headingRef:0}),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](77,0,null,0,1,"uxd-snippet",[],null,null,null,_.b,_.a)),t["\u0275did"](78,114688,null,0,C.a,[],{content:[0,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],(function(n,a){var s=a.component;n(a,6,0),n(a,13,0,s.events),n(a,42,0,"Inputs"),n(a,45,0,"badgeColor","string"),n(a,48,0,"color-palette","/css/color-palette"),n(a,53,0,"badgeTitle","true","string"),n(a,62,0,!1),n(a,66,0,"HTML"),n(a,70,0,s.snippets.compiled.appHtml),n(a,74,0,"TypeScript"),n(a,78,0,s.snippets.compiled.appTs)}),(function(n,a){n(a,47,0,t["\u0275nov"](a,48).target,t["\u0275nov"](a,48).href),n(a,60,0,"left"===t["\u0275nov"](a,62).stacked,"right"===t["\u0275nov"](a,62).stacked)}))}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-components-timeline",[],null,null,null,D,T)),t["\u0275did"](1,49152,null,0,u,[],null,null)],null,null)}var F=t["\u0275ccf"]("uxd-components-timeline",u,I,{},{},[]),L=s("M2Lx"),A=s("lLAP"),R=s("gIcY"),S=s("eDkP"),O=s("Fzqc"),q=s("dWZg"),z=s("qina"),N=s("zCE2"),Z=s("4c35"),H=s("qAlS"),$=s("FLOw"),P=s("XtaT");s.d(a,"ComponentsTimelineModuleNgFactory",(function(){return U}));var U=t["\u0275cmf"](k,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,d.tb,d.a,m.a,g.a,v.a,F]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.p,f.o,[t.LOCALE_ID,[2,f.E]]),t["\u0275mpd"](4608,L.c,L.c,[]),t["\u0275mpd"](4608,h.c,h.c,[[2,h.a]]),t["\u0275mpd"](4608,h.Q,h.Q,[]),t["\u0275mpd"](4608,h.ec,h.ec,[A.d,h.c,h.dc,[2,h.a],t.RendererFactory2]),t["\u0275mpd"](4608,h.Ic,h.Ic,[t.RendererFactory2]),t["\u0275mpd"](4608,R.A,R.A,[]),t["\u0275mpd"](4608,h.tc,h.tc,[[3,h.tc],[2,h.qc]]),t["\u0275mpd"](4608,S.a,S.a,[S.f,S.b,t.ComponentFactoryResolver,S.e,S.c,t.Injector,t.NgZone,f.d,O.b]),t["\u0275mpd"](5120,S.g,S.h,[S.a]),t["\u0275mpd"](4608,h.lf,h.lf,[]),t["\u0275mpd"](4608,h.zd,h.zd,[]),t["\u0275mpd"](1073742336,f.c,f.c,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,L.d,L.d,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,h.G,h.G,[]),t["\u0275mpd"](1073742336,h.b,h.b,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,h.rb,h.rb,[]),t["\u0275mpd"](1073742336,R.z,R.z,[]),t["\u0275mpd"](1073742336,R.l,R.l,[]),t["\u0275mpd"](1073742336,h.sc,h.sc,[]),t["\u0275mpd"](1073742336,O.a,O.a,[]),t["\u0275mpd"](1073742336,Z.c,Z.c,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,S.d,S.d,[]),t["\u0275mpd"](1073742336,h.z,h.z,[]),t["\u0275mpd"](1073742336,h.kf,h.kf,[]),t["\u0275mpd"](1073742336,h.Cd,h.Cd,[]),t["\u0275mpd"](1073742336,E.s,E.s,[[2,E.x],[2,E.o]]),t["\u0275mpd"](1073742336,h.Zd,h.Zd,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,h.yd,h.yd,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,h.Se,h.Se,[]),t["\u0275mpd"](1073742336,h.bf,h.bf,[]),t["\u0275mpd"](1073742336,k,k,[t.ComponentFactoryResolver,e.b]),t["\u0275mpd"](1024,E.m,(function(){return[[{path:"**",component:p.a,data:i}]]}),[])])}))},aCON:function(n,a){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'chance\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token punctuation">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">\'./app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> _now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> _dayInMilliSeconds <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> _daysAfterFirstEvent <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n    \n    events<span class="token punctuation">:</span> TimelineEvent<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'accent\'</span><span class="token punctuation">,</span>\n        date<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_now <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_dayInMilliSeconds <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'#\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>min<span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> max<span class="token punctuation">:</span> <span class="token number">9999</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        action<span class="token punctuation">:</span> <span class="token string">\'tested\'</span><span class="token punctuation">,</span>\n        assignee<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'alternate2\'</span><span class="token punctuation">,</span>\n        date<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_now <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_dayInMilliSeconds <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'#\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>min<span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> max<span class="token punctuation">:</span> <span class="token number">9999</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        action<span class="token punctuation">:</span> <span class="token string">\'reviewed\'</span><span class="token punctuation">,</span>\n        assignee<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'grey4\'</span><span class="token punctuation">,</span>\n        date<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_now <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_dayInMilliSeconds <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'#\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>min<span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> max<span class="token punctuation">:</span> <span class="token number">9999</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        action<span class="token punctuation">:</span> <span class="token string">\'developed\'</span><span class="token punctuation">,</span>\n        assignee<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'primary\'</span><span class="token punctuation">,</span>\n        date<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_now<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'#\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>min<span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> max<span class="token punctuation">:</span> <span class="token number">9999</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        action<span class="token punctuation">:</span> <span class="token string">\'recorded\'</span><span class="token punctuation">,</span>\n        assignee<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_daysAfterFirstEvent<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            color<span class="token punctuation">:</span> <span class="token string">\'grey4\'</span><span class="token punctuation">,</span>\n            date<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_now <span class="token operator">+</span>\n                <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_dayInMilliSeconds <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_daysAfterFirstEvent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            url<span class="token punctuation">:</span> <span class="token string">\'#\'</span><span class="token punctuation">,</span>\n            id<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>min<span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> max<span class="token punctuation">:</span> <span class="token number">9999</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            action<span class="token punctuation">:</span> <span class="token string">\'updated\'</span><span class="token punctuation">,</span>\n            assignee<span class="token punctuation">:</span> chance<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">TimelineEvent</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n    date<span class="token punctuation">:</span> Date<span class="token punctuation">;</span>\n    url<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n    id<span class="token punctuation">:</span> number<span class="token punctuation">;</span>\n    action<span class="token punctuation">:</span> <span class="token string">\'recorded\'</span> <span class="token operator">|</span> <span class="token string">\'developed\'</span> <span class="token operator">|</span> <span class="token string">\'updated\'</span> <span class="token operator">|</span> <span class="token string">\'reviewed\'</span> <span class="token operator">|</span> <span class="token string">\'tested\'</span> <span class="token operator">|</span> <span class="token string">\'closed\'</span><span class="token punctuation">;</span>\n    assignee<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n',example:"import { Component } from '@angular/core';\nimport 'chance';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent {\n\n    private _now = Date.now();\n    private _dayInMilliSeconds = 24 * 60 * 60 * 1000;\n    private _daysAfterFirstEvent = 3;\n    \n    events: TimelineEvent[] = [{\n        color: 'accent',\n        date: new Date(this._now + (this._dayInMilliSeconds * 3)),\n        url: '#',\n        id: chance.integer({min: 1000, max: 9999}),\n        action: 'tested',\n        assignee: chance.name()\n    }, {\n        color: 'alternate2',\n        date: new Date(this._now + (this._dayInMilliSeconds * 2)),\n        url: '#',\n        id: chance.integer({min: 1000, max: 9999}),\n        action: 'reviewed',\n        assignee: chance.name()\n    }, {\n        color: 'grey4',\n        date: new Date(this._now + (this._dayInMilliSeconds * 1)),\n        url: '#',\n        id: chance.integer({min: 1000, max: 9999}),\n        action: 'developed',\n        assignee: chance.name()\n    }, {\n        color: 'primary',\n        date: new Date(this._now),\n        url: '#',\n        id: chance.integer({min: 1000, max: 9999}),\n        action: 'recorded',\n        assignee: chance.name()\n    }];\n\n    addEvent(): void {\n        this._daysAfterFirstEvent++;\n        this.events.unshift({\n            color: 'grey4',\n            date: new Date(this._now +\n                (this._dayInMilliSeconds * this._daysAfterFirstEvent)),\n            url: '#',\n            id: chance.integer({min: 1000, max: 9999}),\n            action: 'updated',\n            assignee: chance.name()\n        });\n    }\n}\n\ninterface TimelineEvent {\n    color: string;\n    date: Date;\n    url: string;\n    id: number;\n    action: 'recorded' | 'developed' | 'updated' | 'reviewed' | 'tested' | 'closed';\n    assignee: string;\n}\n"}},"aPC+":function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-md-10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn button-primary<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>addEvent()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add New Event<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-timeline</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-timeline-event</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>let event of events<span class="token punctuation">"</span></span> <span class="token attr-name">[badgeColor]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>event.color<span class="token punctuation">"</span></span>\n                <span class="token attr-name">[badgeTitle]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>event.date | date:\'EEE LLL d\'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-b-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>document-time<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-r-xs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-icon</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{event.date | date:\'EEEE, MMMM d, y, h:mm:ss a\'}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-b-nil<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ticket\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">[href]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>event.url<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{event.id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n                    was {{event.action}} by {{event.assignee}}.\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-timeline-event</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-timeline</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n',example:'<div class="row">\n    <div class="col-md-10">\n        <button class="btn button-primary" (click)="addEvent()">Add New Event</button>\n        <ux-timeline>\n            <ux-timeline-event *ngFor="let event of events" [badgeColor]="event.color"\n                [badgeTitle]="event.date | date:\'EEE LLL d\'">\n\n                <div class="m-b-sm">\n                    <span>\n                        <ux-icon name="document-time" class="m-r-xs"></ux-icon>\n                        <span>{{event.date | date:\'EEEE, MMMM d, y, h:mm:ss a\'}}</span>\n                    </span>\n                </div>\n                <p class="m-b-nil">Ticket\n                    <a [href]="event.url">{{event.id}}</a>\n                    was {{event.action}} by {{event.assignee}}.\n                </p>\n\n            </ux-timeline-event>\n        </ux-timeline>\n    </div>\n</div>\n'}},qk9C:function(n,a,s){var t={"./app.html":"aPC+","./app.ts":"aCON"};function p(n){var a=e(n);return s(a)}function e(n){var a=t[n];if(!(a+1)){var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}return a}p.keys=function(){return Object.keys(t)},p.resolve=e,n.exports=p,p.id="qk9C"}}]);