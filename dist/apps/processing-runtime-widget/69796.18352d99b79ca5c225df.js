/*! For license information please see 69796.18352d99b79ca5c225df.js.LICENSE.txt */
"use strict";(self.webpackChunkcumulocity_processing_widget_plugin=self.webpackChunkcumulocity_processing_widget_plugin||[]).push([[69796,9050],{69796:function(e,t,r){var o;r.r(t),r.d(t,{JitCompilerFactory:function(){return u},RESOURCE_CACHE_PROVIDER:function(){return g},VERSION:function(){return C},platformBrowserDynamic:function(){return _},"ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS":function(){return f},"ɵplatformCoreDynamic":function(){return d}});var n=r(49396),s=r(40761),a=r(80179),i=r(15813);new s.InjectionToken("ErrorCollector"),s.PACKAGE_ROOT_URL;const c=[{provide:s.Compiler,useFactory:()=>new s.Compiler}];class u{constructor(e){const t={useJit:!0,defaultEncapsulation:s.ViewEncapsulation.Emulated,missingTranslation:s.MissingTranslationStrategy.Warning};this._defaultOptions=[t,...e]}createCompiler(e=[]){const t={useJit:l((r=this._defaultOptions.concat(e)).map((e=>e.useJit))),defaultEncapsulation:l(r.map((e=>e.defaultEncapsulation))),providers:p(r.map((e=>e.providers))),missingTranslation:l(r.map((e=>e.missingTranslation))),preserveWhitespaces:l(r.map((e=>e.preserveWhitespaces)))};var r;return s.Injector.create([c,{provide:n.CompilerConfig,useFactory:()=>new n.CompilerConfig({useJit:t.useJit,jitDevMode:(0,s.isDevMode)(),defaultEncapsulation:t.defaultEncapsulation,missingTranslation:t.missingTranslation,preserveWhitespaces:t.preserveWhitespaces}),deps:[]},t.providers]).get(s.Compiler)}}function l(e){for(let t=e.length-1;t>=0;t--)if(void 0!==e[t])return e[t]}function p(e){const t=[];return e.forEach((e=>e&&t.push(...e))),t}const d=(0,s.createPlatformFactory)(s.platformCore,"coreDynamic",[{provide:s.COMPILER_OPTIONS,useValue:{},multi:!0},{provide:s.CompilerFactory,useClass:u,deps:[s.COMPILER_OPTIONS]}]);class m extends n.ResourceLoader{get(e){let t,r;const o=new Promise(((e,o)=>{t=e,r=o})),n=new XMLHttpRequest;return n.open("GET",e,!0),n.responseType="text",n.onload=function(){const o=n.response||n.responseText;let s=1223===n.status?204:n.status;0===s&&(s=o?200:0),200<=s&&s<=300?t(o):r(`Failed to load ${e}`)},n.onerror=function(){r(`Failed to load ${e}`)},n.send(),o}}m.ɵfac=s["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.6",ngImport:o||(o=r.t(s,2)),type:m,deps:null,target:s["ɵɵFactoryTarget"].Injectable}),m.ɵprov=s["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.0.6",ngImport:o||(o=r.t(s,2)),type:m}),s["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.6",ngImport:o||(o=r.t(s,2)),type:m,decorators:[{type:s.Injectable}]});const f=[i["ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS"],{provide:s.COMPILER_OPTIONS,useValue:{providers:[{provide:n.ResourceLoader,useClass:m,deps:[]}]},multi:!0},{provide:s.PLATFORM_ID,useValue:a["ɵPLATFORM_BROWSER_ID"]}];class R extends n.ResourceLoader{constructor(){if(super(),this._cache=s["ɵglobal"].$templateCache,null==this._cache)throw new Error("CachedResourceLoader: Template cache was not found in $templateCache.")}get(e){return this._cache.hasOwnProperty(e)?Promise.resolve(this._cache[e]):Promise.reject("CachedResourceLoader: Did not find cached template for "+e)}}const C=new s.Version("14.0.6"),g=[{provide:n.ResourceLoader,useClass:R,deps:[]}],_=(0,s.createPlatformFactory)(d,"browserDynamic",f)}}]);