"use strict";(self.webpackChunkcumulocity_processing_widget_plugin=self.webpackChunkcumulocity_processing_widget_plugin||[]).push([[3108],{3108:function(e,n,t){var s;t.r(n),t.d(n,{TimepickerActions:function(){return d},TimepickerComponent:function(){return _},TimepickerConfig:function(){return E},TimepickerModule:function(){return V},TimepickerStore:function(){return C}});var i=t(40761),r=t(24219),o=t(89754),a=t(19501),c=t(80179);class d{writeValue(e){return{type:d.WRITE_VALUE,payload:e}}changeHours(e){return{type:d.CHANGE_HOURS,payload:e}}changeMinutes(e){return{type:d.CHANGE_MINUTES,payload:e}}changeSeconds(e){return{type:d.CHANGE_SECONDS,payload:e}}setTime(e){return{type:d.SET_TIME_UNIT,payload:e}}updateControls(e){return{type:d.UPDATE_CONTROLS,payload:e}}}d.WRITE_VALUE="[timepicker] write value from ng model",d.CHANGE_HOURS="[timepicker] change hours",d.CHANGE_MINUTES="[timepicker] change minutes",d.CHANGE_SECONDS="[timepicker] change seconds",d.SET_TIME_UNIT="[timepicker] set time unit",d.UPDATE_CONTROLS="[timepicker] update controls",d.ɵfac=i["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:d,deps:[],target:i["ɵɵFactoryTarget"].Injectable}),d.ɵprov=i["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:d,providedIn:"platform"}),i["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:d,decorators:[{type:i.Injectable,args:[{providedIn:"platform"}]}]});function l(e){return!!e&&(!(e instanceof Date&&isNaN(e.getHours()))&&("string"!=typeof e||l(new Date(e))))}function h(e,n){return!(e.min&&n<e.min)&&!(e.max&&n>e.max)}function u(e){return void 0===e?NaN:"number"==typeof e?e:parseInt(e,10)}function p(e,n=!1){const t=u(e);return isNaN(t)||t<0||t>(n?12:24)?NaN:t}function m(e){const n=u(e);return isNaN(n)||n<0||n>60?NaN:n}function g(e){const n=u(e);return isNaN(n)||n<0||n>60?NaN:n}function b(e){return"string"==typeof e?new Date(e):e}function w(e,n){if(!e)return w(y(new Date,0,0,0),n);if(!n)return e;let t=e.getHours(),s=e.getMinutes(),i=e.getSeconds();return n.hour&&(t+=u(n.hour)),n.minute&&(s+=u(n.minute)),n.seconds&&(i+=u(n.seconds)),y(e,t,s,i)}function f(e,n){let t=p(n.hour);const s=m(n.minute),i=g(n.seconds)||0;return n.isPM&&12!==t&&(t+=12),e?isNaN(t)||isNaN(s)?e:y(e,t,s,i):isNaN(t)||isNaN(s)?e:y(new Date,t,s,i)}function y(e,n,t,s){const i=new Date(e.getFullYear(),e.getMonth(),e.getDate(),n,t,s,e.getMilliseconds());return i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(e.getDate()),i}function v(e){const n=e.toString();return n.length>1?n:`0${n}`}function S(e,n){return!isNaN(p(e,n))}function I(e){return!isNaN(m(e))}function M(e){return!isNaN(g(e))}function x(e,n="0",t="0",s){return S(e,s)&&I(n)&&M(t)}function k(e,n){if(e.readonlyInput||e.disabled)return!1;if(n){if("wheel"===n.source&&!e.mousewheel)return!1;if("key"===n.source&&!e.arrowkeys)return!1}return!0}function D(e){const{hourStep:n,minuteStep:t,secondsStep:s,readonlyInput:i,disabled:r,mousewheel:o,arrowkeys:a,showSpinners:c,showMeridian:d,showSeconds:l,meridians:h,min:u,max:p}=e;return{hourStep:n,minuteStep:t,secondsStep:s,readonlyInput:i,disabled:r,mousewheel:o,arrowkeys:a,showSpinners:c,showMeridian:d,showSeconds:l,meridians:h,min:u,max:p}}class E{constructor(){this.hourStep=1,this.minuteStep=5,this.secondsStep=10,this.showMeridian=!0,this.meridians=["AM","PM"],this.readonlyInput=!1,this.disabled=!1,this.allowEmptyTime=!1,this.mousewheel=!0,this.arrowkeys=!0,this.showSpinners=!0,this.showSeconds=!1,this.showMinutes=!0,this.hoursPlaceholder="HH",this.minutesPlaceholder="MM",this.secondsPlaceholder="SS",this.ariaLabelHours="hours",this.ariaLabelMinutes="minutes",this.ariaLabelSeconds="seconds"}}E.ɵfac=i["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:E,deps:[],target:i["ɵɵFactoryTarget"].Injectable}),E.ɵprov=i["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:E,providedIn:"root"}),i["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:E,decorators:[{type:i.Injectable,args:[{providedIn:"root"}]}]});const H={value:void 0,config:new E,controls:{canIncrementHours:!0,canIncrementMinutes:!0,canIncrementSeconds:!0,canDecrementHours:!0,canDecrementMinutes:!0,canDecrementSeconds:!0,canToggleMeridian:!0}};function T(e=H,n){switch(n.type){case d.WRITE_VALUE:return Object.assign({},e,{value:n.payload});case d.CHANGE_HOURS:{if(!k(e.config,n.payload)||(t=n.payload,s=e.controls,!t.step||t.step>0&&!s.canIncrementHours||t.step<0&&!s.canDecrementHours))return e;const i=w(e.value,{hour:n.payload.step});return!e.config.max&&!e.config.min||h(e.config,i)?Object.assign({},e,{value:i}):e}case d.CHANGE_MINUTES:{if(!k(e.config,n.payload)||!function(e,n){return!(!e.step||e.step>0&&!n.canIncrementMinutes||e.step<0&&!n.canDecrementMinutes)}(n.payload,e.controls))return e;const t=w(e.value,{minute:n.payload.step});return!e.config.max&&!e.config.min||h(e.config,t)?Object.assign({},e,{value:t}):e}case d.CHANGE_SECONDS:{if(!k(e.config,n.payload)||!function(e,n){return!(!e.step||e.step>0&&!n.canIncrementSeconds||e.step<0&&!n.canDecrementSeconds)}(n.payload,e.controls))return e;const t=w(e.value,{seconds:n.payload.step});return!e.config.max&&!e.config.min||h(e.config,t)?Object.assign({},e,{value:t}):e}case d.SET_TIME_UNIT:{if(!k(e.config))return e;const t=f(e.value,n.payload);return Object.assign({},e,{value:t})}case d.UPDATE_CONTROLS:{const t=function(e,n){const{min:t,max:s,hourStep:i,minuteStep:r,secondsStep:o,showSeconds:a}=n,c={canIncrementHours:!0,canIncrementMinutes:!0,canIncrementSeconds:!0,canDecrementHours:!0,canDecrementMinutes:!0,canDecrementSeconds:!0,canToggleMeridian:!0};if(!e)return c;if(s){const n=w(e,{hour:i});if(c.canIncrementHours=s>n&&e.getHours()+i<24,!c.canIncrementHours){const n=w(e,{minute:r});c.canIncrementMinutes=a?s>n:s>=n}if(!c.canIncrementMinutes){const n=w(e,{seconds:o});c.canIncrementSeconds=s>=n}e.getHours()<12&&(c.canToggleMeridian=w(e,{hour:12})<s)}if(t){const n=w(e,{hour:-i});if(c.canDecrementHours=t<n,!c.canDecrementHours){const n=w(e,{minute:-r});c.canDecrementMinutes=a?t<n:t<=n}if(!c.canDecrementMinutes){const n=w(e,{seconds:-o});c.canDecrementSeconds=t<=n}e.getHours()>=12&&(c.canToggleMeridian=w(e,{hour:-12})>t)}return c}(e.value,n.payload),s={value:e.value,config:n.payload,controls:t};return e.config.showMeridian!==s.config.showMeridian&&e.value&&(s.value=new Date(e.value)),Object.assign({},e,s)}default:return e}var t,s}class C extends a.MiniStore{constructor(){const e=new o.BehaviorSubject({type:"[mini-ngrx] dispatcher init"});super(e,T,new a.MiniState(H,e,T))}}C.ɵfac=i["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:C,deps:[],target:i["ɵɵFactoryTarget"].Injectable}),C.ɵprov=i["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:C,providedIn:"platform"}),i["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:C,decorators:[{type:i.Injectable,args:[{providedIn:"platform"}]}],ctorParameters:function(){return[]}});const N={provide:r.NG_VALUE_ACCESSOR,useExisting:(0,i.forwardRef)((()=>_)),multi:!0};class _{constructor(e,n,t,s){this._cd=n,this._store=t,this._timepickerActions=s,this.hourStep=1,this.minuteStep=5,this.secondsStep=10,this.readonlyInput=!1,this.disabled=!1,this.mousewheel=!0,this.arrowkeys=!0,this.showSpinners=!0,this.showMeridian=!0,this.showMinutes=!0,this.showSeconds=!1,this.meridians=["AM","PM"],this.hoursPlaceholder="HH",this.minutesPlaceholder="MM",this.secondsPlaceholder="SS",this.isValid=new i.EventEmitter,this.meridianChange=new i.EventEmitter,this.hours="",this.minutes="",this.seconds="",this.meridian="",this.invalidHours=!1,this.invalidMinutes=!1,this.invalidSeconds=!1,this.labelHours="hours",this.labelMinutes="minutes",this.labelSeconds="seconds",this.canIncrementHours=!0,this.canIncrementMinutes=!0,this.canIncrementSeconds=!0,this.canDecrementHours=!0,this.canDecrementMinutes=!0,this.canDecrementSeconds=!0,this.canToggleMeridian=!0,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.config=e,Object.assign(this,this.config),this.timepickerSub=t.select((e=>e.value)).subscribe((e=>{this._renderTime(e),this.onChange(e),this._store.dispatch(this._timepickerActions.updateControls(D(this)))})),t.select((e=>e.controls)).subscribe((e=>{const t=x(this.hours,this.minutes,this.seconds,this.isPM()),s=this.config.allowEmptyTime&&this.isOneOfDatesIsEmpty()||t;this.isValid.emit(s),Object.assign(this,e),n.markForCheck()}))}get isSpinnersVisible(){return this.showSpinners&&!this.readonlyInput}get isEditable(){return!(this.readonlyInput||this.disabled)}resetValidation(){this.invalidHours=!1,this.invalidMinutes=!1,this.invalidSeconds=!1}isPM(){return this.showMeridian&&this.meridian===this.meridians[1]}prevDef(e){e.preventDefault()}wheelSign(e){return-1*Math.sign(e.deltaY||0)}ngOnChanges(){this._store.dispatch(this._timepickerActions.updateControls(D(this)))}changeHours(e,n=""){this.resetValidation(),this._store.dispatch(this._timepickerActions.changeHours({step:e,source:n}))}changeMinutes(e,n=""){this.resetValidation(),this._store.dispatch(this._timepickerActions.changeMinutes({step:e,source:n}))}changeSeconds(e,n=""){this.resetValidation(),this._store.dispatch(this._timepickerActions.changeSeconds({step:e,source:n}))}updateHours(e){this.resetValidation(),this.hours=e.value;const n=S(this.hours,this.isPM())&&this.isValidLimit();if(!(this.config.allowEmptyTime&&this.isOneOfDatesIsEmpty()||n))return this.invalidHours=!0,this.isValid.emit(!1),void this.onChange(null);this._updateTime()}updateMinutes(e){this.resetValidation(),this.minutes=e.value;const n=I(this.minutes)&&this.isValidLimit();if(!(this.config.allowEmptyTime&&this.isOneOfDatesIsEmpty()||n))return this.invalidMinutes=!0,this.isValid.emit(!1),void this.onChange(null);this._updateTime()}updateSeconds(e){this.resetValidation(),this.seconds=e.value;const n=M(this.seconds)&&this.isValidLimit();if(!(this.config.allowEmptyTime&&this.isOneOfDatesIsEmpty()||n))return this.invalidSeconds=!0,this.isValid.emit(!1),void this.onChange(null);this._updateTime()}isValidLimit(){return function(e,n,t){const s=f(new Date,e);return!(!s||n&&s>n||t&&s<t)}({hour:this.hours,minute:this.minutes,seconds:this.seconds,isPM:this.isPM()},this.max,this.min)}isOneOfDatesIsEmpty(){return e=this.hours,n=this.minutes,t=this.seconds,0===e.length||0===n.length||0===t.length;var e,n,t}_updateTime(){const e=this.showSeconds?this.seconds:void 0,n=this.showMinutes?this.minutes:void 0,t=x(this.hours,n,e,this.isPM());if(!(this.config.allowEmptyTime&&this.isOneOfDatesIsEmpty()||t))return this.isValid.emit(!1),void this.onChange(null);this._store.dispatch(this._timepickerActions.setTime({hour:this.hours,minute:this.minutes,seconds:this.seconds,isPM:this.isPM()}))}toggleMeridian(){if(!this.showMeridian||!this.isEditable)return;this._store.dispatch(this._timepickerActions.changeHours({step:12,source:""}))}writeValue(e){l(e)?(this.resetValidation(),this._store.dispatch(this._timepickerActions.writeValue(b(e)))):null==e&&this._store.dispatch(this._timepickerActions.writeValue())}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._cd.markForCheck()}ngOnDestroy(){this.timepickerSub?.unsubscribe()}_renderTime(e){if(!e||!l(e))return this.hours="",this.minutes="",this.seconds="",this.meridian=this.meridians[0],void this.meridianChange.emit(this.meridian);const n=b(e);if(!n)return;let t=n.getHours();this.showMeridian&&(this.meridian=this.meridians[t>=12?1:0],this.meridianChange.emit(this.meridian),t%=12,0===t&&(t=12)),this.hours=v(t),this.minutes=v(n.getMinutes()),this.seconds=v(n.getUTCSeconds())}}_.ɵfac=i["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:_,deps:[{token:E},{token:i.ChangeDetectorRef},{token:C},{token:d}],target:i["ɵɵFactoryTarget"].Component}),_.ɵcmp=i["ɵɵngDeclareComponent"]({minVersion:"14.0.0",version:"14.0.6",type:_,selector:"timepicker",inputs:{hourStep:"hourStep",minuteStep:"minuteStep",secondsStep:"secondsStep",readonlyInput:"readonlyInput",disabled:"disabled",mousewheel:"mousewheel",arrowkeys:"arrowkeys",showSpinners:"showSpinners",showMeridian:"showMeridian",showMinutes:"showMinutes",showSeconds:"showSeconds",meridians:"meridians",min:"min",max:"max",hoursPlaceholder:"hoursPlaceholder",minutesPlaceholder:"minutesPlaceholder",secondsPlaceholder:"secondsPlaceholder"},outputs:{isValid:"isValid",meridianChange:"meridianChange"},providers:[N,C],usesOnChanges:!0,ngImport:s||(s=t.t(i,2)),template:'<table>\n  <tbody>\n  <tr class="text-center" [hidden]="!showSpinners">\n    \x3c!-- increment hours button--\x3e\n    <td>\n      <a class="btn btn-link" [class.disabled]="!canIncrementHours || !isEditable"\n         (click)="changeHours(hourStep)"\n      ><span class="bs-chevron bs-chevron-up"></span></a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- increment minutes button --\x3e\n    <td *ngIf="showMinutes">\n      <a class="btn btn-link" [class.disabled]="!canIncrementMinutes || !isEditable"\n         (click)="changeMinutes(minuteStep)"\n      ><span class="bs-chevron bs-chevron-up"></span></a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showSeconds">&nbsp;</td>\n    \x3c!-- increment seconds button --\x3e\n    <td *ngIf="showSeconds">\n      <a class="btn btn-link" [class.disabled]="!canIncrementSeconds || !isEditable"\n         (click)="changeSeconds(secondsStep)">\n        <span class="bs-chevron bs-chevron-up"></span>\n      </a>\n    </td>\n    \x3c!-- space between --\x3e\n    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- meridian placeholder--\x3e\n    <td *ngIf="showMeridian"></td>\n  </tr>\n  <tr>\n    \x3c!-- hours --\x3e\n    <td class="form-group mb-3" [class.has-error]="invalidHours">\n      <input type="text" [class.is-invalid]="invalidHours"\n             class="form-control text-center bs-timepicker-field"\n             [placeholder]="hoursPlaceholder"\n             maxlength="2"\n             [readonly]="readonlyInput"\n             [disabled]="disabled"\n             [value]="hours"\n             (wheel)="prevDef($event);changeHours(hourStep * wheelSign($event), \'wheel\')"\n             (keydown.ArrowUp)="changeHours(hourStep, \'key\')"\n             (keydown.ArrowDown)="changeHours(-hourStep, \'key\')"\n             (change)="updateHours($event.target)" [attr.aria-label]="labelHours"></td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showMinutes">&nbsp;:&nbsp;</td>\n    \x3c!-- minutes --\x3e\n    <td class="form-group mb-3" *ngIf="showMinutes" [class.has-error]="invalidMinutes">\n      <input type="text" [class.is-invalid]="invalidMinutes"\n             class="form-control text-center bs-timepicker-field"\n             [placeholder]="minutesPlaceholder"\n             maxlength="2"\n             [readonly]="readonlyInput"\n             [disabled]="disabled"\n             [value]="minutes"\n             (wheel)="prevDef($event);changeMinutes(minuteStep * wheelSign($event), \'wheel\')"\n             (keydown.ArrowUp)="changeMinutes(minuteStep, \'key\')"\n             (keydown.ArrowDown)="changeMinutes(-minuteStep, \'key\')"\n             (change)="updateMinutes($event.target)" [attr.aria-label]="labelMinutes">\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showSeconds">&nbsp;:&nbsp;</td>\n    \x3c!-- seconds --\x3e\n    <td class="form-group mb-3" *ngIf="showSeconds" [class.has-error]="invalidSeconds">\n      <input type="text" [class.is-invalid]="invalidSeconds"\n             class="form-control text-center bs-timepicker-field"\n             [placeholder]="secondsPlaceholder"\n             maxlength="2"\n             [readonly]="readonlyInput"\n             [disabled]="disabled"\n             [value]="seconds"\n             (wheel)="prevDef($event);changeSeconds(secondsStep * wheelSign($event), \'wheel\')"\n             (keydown.ArrowUp)="changeSeconds(secondsStep, \'key\')"\n             (keydown.ArrowDown)="changeSeconds(-secondsStep, \'key\')"\n             (change)="updateSeconds($event.target)" [attr.aria-label]="labelSeconds">\n    </td>\n    \x3c!-- space between --\x3e\n    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- meridian --\x3e\n    <td *ngIf="showMeridian">\n      <button type="button" class="btn btn-default text-center"\n              [disabled]="!isEditable || !canToggleMeridian"\n              [class.disabled]="!isEditable || !canToggleMeridian"\n              (click)="toggleMeridian()"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class="text-center" [hidden]="!showSpinners">\n    \x3c!-- decrement hours button--\x3e\n    <td>\n      <a class="btn btn-link" [class.disabled]="!canDecrementHours || !isEditable"\n         (click)="changeHours(-hourStep)">\n        <span class="bs-chevron bs-chevron-down"></span>\n      </a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- decrement minutes button--\x3e\n    <td *ngIf="showMinutes">\n      <a class="btn btn-link" [class.disabled]="!canDecrementMinutes || !isEditable"\n         (click)="changeMinutes(-minuteStep)">\n        <span class="bs-chevron bs-chevron-down"></span>\n      </a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showSeconds">&nbsp;</td>\n    \x3c!-- decrement seconds button--\x3e\n    <td *ngIf="showSeconds">\n      <a class="btn btn-link" [class.disabled]="!canDecrementSeconds || !isEditable"\n         (click)="changeSeconds(-secondsStep)">\n        <span class="bs-chevron bs-chevron-down"></span>\n      </a>\n    </td>\n    \x3c!-- space between --\x3e\n    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- meridian placeholder--\x3e\n    <td *ngIf="showMeridian"></td>\n  </tr>\n  </tbody>\n</table>\n',styles:[".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"],dependencies:[{kind:"directive",type:c.NgIf,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]}],changeDetection:i.ChangeDetectionStrategy.OnPush,encapsulation:i.ViewEncapsulation.None}),i["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:_,decorators:[{type:i.Component,args:[{selector:"timepicker",changeDetection:i.ChangeDetectionStrategy.OnPush,providers:[N,C],encapsulation:i.ViewEncapsulation.None,template:'<table>\n  <tbody>\n  <tr class="text-center" [hidden]="!showSpinners">\n    \x3c!-- increment hours button--\x3e\n    <td>\n      <a class="btn btn-link" [class.disabled]="!canIncrementHours || !isEditable"\n         (click)="changeHours(hourStep)"\n      ><span class="bs-chevron bs-chevron-up"></span></a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- increment minutes button --\x3e\n    <td *ngIf="showMinutes">\n      <a class="btn btn-link" [class.disabled]="!canIncrementMinutes || !isEditable"\n         (click)="changeMinutes(minuteStep)"\n      ><span class="bs-chevron bs-chevron-up"></span></a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showSeconds">&nbsp;</td>\n    \x3c!-- increment seconds button --\x3e\n    <td *ngIf="showSeconds">\n      <a class="btn btn-link" [class.disabled]="!canIncrementSeconds || !isEditable"\n         (click)="changeSeconds(secondsStep)">\n        <span class="bs-chevron bs-chevron-up"></span>\n      </a>\n    </td>\n    \x3c!-- space between --\x3e\n    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- meridian placeholder--\x3e\n    <td *ngIf="showMeridian"></td>\n  </tr>\n  <tr>\n    \x3c!-- hours --\x3e\n    <td class="form-group mb-3" [class.has-error]="invalidHours">\n      <input type="text" [class.is-invalid]="invalidHours"\n             class="form-control text-center bs-timepicker-field"\n             [placeholder]="hoursPlaceholder"\n             maxlength="2"\n             [readonly]="readonlyInput"\n             [disabled]="disabled"\n             [value]="hours"\n             (wheel)="prevDef($event);changeHours(hourStep * wheelSign($event), \'wheel\')"\n             (keydown.ArrowUp)="changeHours(hourStep, \'key\')"\n             (keydown.ArrowDown)="changeHours(-hourStep, \'key\')"\n             (change)="updateHours($event.target)" [attr.aria-label]="labelHours"></td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showMinutes">&nbsp;:&nbsp;</td>\n    \x3c!-- minutes --\x3e\n    <td class="form-group mb-3" *ngIf="showMinutes" [class.has-error]="invalidMinutes">\n      <input type="text" [class.is-invalid]="invalidMinutes"\n             class="form-control text-center bs-timepicker-field"\n             [placeholder]="minutesPlaceholder"\n             maxlength="2"\n             [readonly]="readonlyInput"\n             [disabled]="disabled"\n             [value]="minutes"\n             (wheel)="prevDef($event);changeMinutes(minuteStep * wheelSign($event), \'wheel\')"\n             (keydown.ArrowUp)="changeMinutes(minuteStep, \'key\')"\n             (keydown.ArrowDown)="changeMinutes(-minuteStep, \'key\')"\n             (change)="updateMinutes($event.target)" [attr.aria-label]="labelMinutes">\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showSeconds">&nbsp;:&nbsp;</td>\n    \x3c!-- seconds --\x3e\n    <td class="form-group mb-3" *ngIf="showSeconds" [class.has-error]="invalidSeconds">\n      <input type="text" [class.is-invalid]="invalidSeconds"\n             class="form-control text-center bs-timepicker-field"\n             [placeholder]="secondsPlaceholder"\n             maxlength="2"\n             [readonly]="readonlyInput"\n             [disabled]="disabled"\n             [value]="seconds"\n             (wheel)="prevDef($event);changeSeconds(secondsStep * wheelSign($event), \'wheel\')"\n             (keydown.ArrowUp)="changeSeconds(secondsStep, \'key\')"\n             (keydown.ArrowDown)="changeSeconds(-secondsStep, \'key\')"\n             (change)="updateSeconds($event.target)" [attr.aria-label]="labelSeconds">\n    </td>\n    \x3c!-- space between --\x3e\n    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- meridian --\x3e\n    <td *ngIf="showMeridian">\n      <button type="button" class="btn btn-default text-center"\n              [disabled]="!isEditable || !canToggleMeridian"\n              [class.disabled]="!isEditable || !canToggleMeridian"\n              (click)="toggleMeridian()"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class="text-center" [hidden]="!showSpinners">\n    \x3c!-- decrement hours button--\x3e\n    <td>\n      <a class="btn btn-link" [class.disabled]="!canDecrementHours || !isEditable"\n         (click)="changeHours(-hourStep)">\n        <span class="bs-chevron bs-chevron-down"></span>\n      </a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- decrement minutes button--\x3e\n    <td *ngIf="showMinutes">\n      <a class="btn btn-link" [class.disabled]="!canDecrementMinutes || !isEditable"\n         (click)="changeMinutes(-minuteStep)">\n        <span class="bs-chevron bs-chevron-down"></span>\n      </a>\n    </td>\n    \x3c!-- divider --\x3e\n    <td *ngIf="showSeconds">&nbsp;</td>\n    \x3c!-- decrement seconds button--\x3e\n    <td *ngIf="showSeconds">\n      <a class="btn btn-link" [class.disabled]="!canDecrementSeconds || !isEditable"\n         (click)="changeSeconds(-secondsStep)">\n        <span class="bs-chevron bs-chevron-down"></span>\n      </a>\n    </td>\n    \x3c!-- space between --\x3e\n    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>\n    \x3c!-- meridian placeholder--\x3e\n    <td *ngIf="showMeridian"></td>\n  </tr>\n  </tbody>\n</table>\n',styles:[".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"]}]}],ctorParameters:function(){return[{type:E},{type:i.ChangeDetectorRef},{type:C},{type:d}]},propDecorators:{hourStep:[{type:i.Input}],minuteStep:[{type:i.Input}],secondsStep:[{type:i.Input}],readonlyInput:[{type:i.Input}],disabled:[{type:i.Input}],mousewheel:[{type:i.Input}],arrowkeys:[{type:i.Input}],showSpinners:[{type:i.Input}],showMeridian:[{type:i.Input}],showMinutes:[{type:i.Input}],showSeconds:[{type:i.Input}],meridians:[{type:i.Input}],min:[{type:i.Input}],max:[{type:i.Input}],hoursPlaceholder:[{type:i.Input}],minutesPlaceholder:[{type:i.Input}],secondsPlaceholder:[{type:i.Input}],isValid:[{type:i.Output}],meridianChange:[{type:i.Output}]}});class V{static forRoot(){return{ngModule:V,providers:[d,C]}}}V.ɵfac=i["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:V,deps:[],target:i["ɵɵFactoryTarget"].NgModule}),V.ɵmod=i["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:V,declarations:[_],imports:[c.CommonModule],exports:[_]}),V.ɵinj=i["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:V,providers:[C],imports:[c.CommonModule]}),i["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.6",ngImport:s||(s=t.t(i,2)),type:V,decorators:[{type:i.NgModule,args:[{imports:[c.CommonModule],declarations:[_],exports:[_],providers:[C]}]}]})}}]);