(self.webpackChunkcumulocity_processing_widget_plugin=self.webpackChunkcumulocity_processing_widget_plugin||[]).push([[29465],{26596:function(t,e,n){const r=n(96873),o=n(70427),i=n(25003),s=n(81384);function a(t,e,n,i,s){const a=[].slice.call(arguments,1),c=a.length,u="function"==typeof a[c-1];if(!u&&!r())throw new Error("Callback required as last argument");if(!u){if(c<1)throw new Error("Too few arguments provided");return 1===c?(n=e,e=i=void 0):2!==c||e.getContext||(i=n,n=e,e=void 0),new Promise((function(r,s){try{const s=o.create(n,i);r(t(s,e,i))}catch(t){s(t)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(s=n,n=e,e=i=void 0):3===c&&(e.getContext&&void 0===s?(s=i,i=void 0):(s=i,i=n,n=e,e=void 0));try{const r=o.create(n,i);s(null,t(r,e,i))}catch(t){s(t)}}o.create,e.rT=a.bind(null,i.render),e.hz=a.bind(null,i.renderToDataURL),e.toString=a.bind(null,(function(t,e,n){return s.render(t,n)}))},96873:function(t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},29352:function(t,e,n){const r=n(17755).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7];for(let t=1;t<e-1;t++)i[t]=i[t-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||n.push([r[t],r[e]]);return n}},4718:function(t,e,n){const r=n(63639),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*o.indexOf(this.data[e]);n+=o.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},29324:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},79081:function(t){function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},81350:function(t,e,n){const r=n(62378),o=n(63639);function i(t){this.mode=o.BYTE,this.data=new Uint8Array(r(t))}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=i},51382:function(t,e,n){const r=n(74534),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},74534:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return n}}},34107:function(t,e,n){const r=n(17755).getSymbolSize;e.getPositions=function(t){const e=r(t);return[[0,0],[e-7,0],[0,e-7]]}},6048:function(t,e,n){const r=n(17755),o=r.getBCHDigit(1335);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let i=n<<10;for(;r.getBCHDigit(i)-o>=0;)i^=1335<<r.getBCHDigit(i)-o;return 21522^(n<<10|i)}},72144:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)n[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)n[t]=n[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},17523:function(t,e,n){const r=n(63639),o=n(17755);function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=o.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=i},4491:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n=3,r=3,o=40,i=10;function s(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,i=0,s=null,a=null;for(let c=0;c<e;c++){o=i=0,s=a=null;for(let u=0;u<e;u++){let e=t.get(c,u);e===s?o++:(o>=5&&(r+=n+(o-5)),s=e,o=1),e=t.get(u,c),e===a?i++:(i>=5&&(r+=n+(i-5)),a=e,i=1)}o>=5&&(r+=n+(o-5)),i>=5&&(r+=n+(i-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let n=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){const e=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);4!==e&&0!==e||n++}return n*r},e.getPenaltyN3=function(t){const e=t.size;let n=0,r=0,i=0;for(let o=0;o<e;o++){r=i=0;for(let s=0;s<e;s++)r=r<<1&2047|t.get(o,s),s>=10&&(1488===r||93===r)&&n++,i=i<<1&2047|t.get(s,o),s>=10&&(1488===i||93===i)&&n++}return n*o},e.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*i},e.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,s(t,o,r))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let s=0;s<r;s++){n(s),e.applyMask(s,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),r<i&&(i=r,o=s)}return o}},63639:function(t,e,n){const r=n(86325),o=n(11187);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return n}}},61444:function(t,e,n){const r=n(63639);function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))},t.exports=o},80896:function(t,e,n){const r=n(72144);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)n[o+i]^=r.mul(t[o],e[i]);return n},e.mod=function(t,e){let n=new Uint8Array(t);for(;n.length-e.length>=0;){const t=n[0];for(let o=0;o<e.length;o++)n[o]^=r.mul(e[o],t);let o=0;for(;o<n.length&&0===n[o];)o++;n=n.slice(o)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let o=0;o<t;o++)n=e.mul(n,new Uint8Array([1,r.exp(o)]));return n}},70427:function(t,e,n){const r=n(17755),o=n(74534),i=n(29324),s=n(79081),a=n(29352),c=n(34107),u=n(4491),l=n(51382),h=n(21732),d=n(95122),g=n(6048),f=n(63639),p=n(59004);function m(t,e,n){const r=t.size,o=g.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=1==(o>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function w(t,e,n){const o=new i;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),f.getCharCountIndicator(e.mode,t)),e.write(o)}));const s=8*(r.getSymbolTotalCodewords(t)-l.getTotalCodewordsCount(t,e));for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let t=0;t<a;t++)o.put(t%2?17:236,8);return function(t,e,n){const o=r.getSymbolTotalCodewords(e),i=l.getTotalCodewordsCount(e,n),s=o-i,a=l.getBlocksCount(e,n),c=o%a,u=a-c,d=Math.floor(o/a),g=Math.floor(s/a),f=g+1,p=d-g,m=new h(p);let w=0;const y=new Array(a),E=new Array(a);let v=0;const C=new Uint8Array(t.buffer);for(let t=0;t<a;t++){const e=t<u?g:f;y[t]=C.slice(w,w+e),E[t]=m.encode(y[t]),w+=e,v=Math.max(v,e)}const I=new Uint8Array(o);let A,b,L=0;for(A=0;A<v;A++)for(b=0;b<a;b++)A<y[b].length&&(I[L++]=y[b][A]);for(A=0;A<p;A++)for(b=0;b<a;b++)I[L++]=E[b][A];return I}(o,t,e)}function y(t,e,n,o){let i;if(Array.isArray(t))i=p.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=p.rawSplit(t);r=d.getBestVersionForData(e,n)}i=p.fromString(t,r||40)}}const l=d.getBestVersionForData(i,n);if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<l)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+l+".\n")}else e=l;const h=w(e,n,i),g=r.getSymbolSize(e),f=new s(g);return function(t,e){const n=t.size,r=c.getPositions(e);for(let e=0;e<r.length;e++){const o=r[e][0],i=r[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1||n<=o+e))for(let r=-1;r<=7;r++)i+r<=-1||n<=i+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(o+e,i+r,!0,!0):t.set(o+e,i+r,!1,!0))}}(f,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(f),function(t,e){const n=a.getPositions(e);for(let e=0;e<n.length;e++){const r=n[e][0],o=n[e][1];for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++)-2===e||2===e||-2===n||2===n||0===e&&0===n?t.set(r+e,o+n,!0,!0):t.set(r+e,o+n,!1,!0)}}(f,e),m(f,n,0),e>=7&&function(t,e){const n=t.size,r=d.getEncodedBits(e);let o,i,s;for(let e=0;e<18;e++)o=Math.floor(e/3),i=e%3+n-8-3,s=1==(r>>e&1),t.set(o,i,s,!0),t.set(i,o,s,!0)}(f,e),function(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(6===a&&a--;;){for(let n=0;n<2;n++)if(!t.isReserved(o,a-n)){let r=!1;s<e.length&&(r=1==(e[s]>>>i&1)),t.set(o,a-n,r),i--,-1===i&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}(f,h),isNaN(o)&&(o=u.getBestMask(f,m.bind(null,f,n))),u.applyMask(o,f),m(f,n,o),{modules:f,version:e,errorCorrectionLevel:n,maskPattern:o,segments:i}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,i,s=o.M;return void 0!==e&&(s=o.from(e.errorCorrectionLevel,o.M),n=d.from(e.version),i=u.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),y(t,n,s,i)}},21732:function(t,e,n){const r=n(80896);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n},t.exports=o},11187:function(t,e){const n="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const o="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(o,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const i=new RegExp("^"+r+"$"),s=new RegExp("^"+n+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return i.test(t)},e.testNumeric=function(t){return s.test(t)},e.testAlphanumeric=function(t){return a.test(t)}},59004:function(t,e,n){const r=n(63639),o=n(61444),i=n(4718),s=n(81350),a=n(17523),c=n(11187),u=n(17755),l=n(65987);function h(t){return unescape(encodeURIComponent(t)).length}function d(t,e,n){const r=[];let o;for(;null!==(o=t.exec(n));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function g(t){const e=d(c.NUMERIC,r.NUMERIC,t),n=d(c.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,i;u.isKanjiModeEnabled()?(o=d(c.BYTE,r.BYTE,t),i=d(c.KANJI,r.KANJI,t)):(o=d(c.BYTE_KANJI,r.BYTE,t),i=[]);return e.concat(n,o,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function f(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return a.getBitsLength(t);case r.BYTE:return s.getBitsLength(t)}}function p(t,e){let n;const c=r.getBestModeForData(t);if(n=r.from(e,c),n!==r.BYTE&&n.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(c));switch(n!==r.KANJI||u.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new a(t);case r.BYTE:return new s(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const o=function(t){const e=[];for(let n=0;n<t.length;n++){const o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:h(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:h(o.data)}])}}return e}(g(t,u.isKanjiModeEnabled())),i=function(t,e){const n={},o={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const a=t[s],c=[];for(let t=0;t<a.length;t++){const u=a[t],l=""+s+t;c.push(l),n[l]={node:u,lastCount:0},o[l]={};for(let t=0;t<i.length;t++){const s=i[t];n[s]&&n[s].node.mode===u.mode?(o[s][l]=f(n[s].lastCount+u.length,u.mode)-f(n[s].lastCount,u.mode),n[s].lastCount+=u.length):(n[s]&&(n[s].lastCount=u.length),o[s][l]=f(u.length,u.mode)+4+r.getCharCountIndicator(u.mode,e))}}i=c}for(let t=0;t<i.length;t++)o[i[t]].end=0;return{map:o,table:n}}(o,n),s=l.find_path(i.map,"start","end"),a=[];for(let t=1;t<s.length-1;t++)a.push(i.table[s[t]].node);return e.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(a))},e.rawSplit=function(t){return e.fromArray(g(t,u.isKanjiModeEnabled()))}},17755:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return void 0!==n},e.toSJIS=function(t){return n(t)}},86325:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},95122:function(t,e,n){const r=n(17755),o=n(51382),i=n(74534),s=n(63639),a=n(86325),c=r.getBCHDigit(7973);function u(t,e){return s.getCharCountIndicator(t,e)+4}function l(t,e){let n=0;return t.forEach((function(t){const r=u(t.mode,e);n+=r+t.getBitsLength()})),n}e.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!a.isValid(t))throw new Error("Invalid QR Code version");void 0===n&&(n=s.BYTE);const i=8*(r.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(n===s.MIXED)return i;const c=i-u(n,t);switch(n){case s.NUMERIC:return Math.floor(c/10*3);case s.ALPHANUMERIC:return Math.floor(c/11*2);case s.KANJI:return Math.floor(c/13);case s.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,n){let r;const o=i.from(n,i.M);if(Array.isArray(t)){if(t.length>1)return function(t,n){for(let r=1;r<=40;r++)if(l(t,r)<=e.getCapacity(r,n,s.MIXED))return r}(t,o);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}(r.mode,r.getLength(),o)},e.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;r.getBCHDigit(e)-c>=0;)e^=7973<<r.getBCHDigit(e)-c;return t<<12|e}},25003:function(t,e,n){const r=n(98140);e.render=function(t,e,n){let o=n,i=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=r.getOptions(o);const s=r.getImageWidth(t.modules.size,o),a=i.getContext("2d"),c=a.createImageData(s,s);return r.qrToImageData(c.data,t,o),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(a,i,s),a.putImageData(c,0,0),i},e.renderToDataURL=function(t,n,r){let o=r;void 0!==o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=e.render(t,n,o),s=o.type||"image/png",a=o.rendererOpts||{};return i.toDataURL(s,a.quality)}},81384:function(t,e,n){const r=n(98140);function o(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function i(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}e.render=function(t,e,n){const s=r.getOptions(e),a=t.modules.size,c=t.modules.data,u=a+2*s.margin,l=s.color.light.a?"<path "+o(s.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",h="<path "+o(s.color.dark,"stroke")+' d="'+function(t,e,n){let r="",o=0,s=!1,a=0;for(let c=0;c<t.length;c++){const u=Math.floor(c%e),l=Math.floor(c/e);u||s||(s=!0),t[c]?(a++,c>0&&u>0&&t[c-1]||(r+=s?i("M",u+n,.5+l+n):i("m",o,0),o=0,s=!1),u+1<e&&t[c+1]||(r+=i("h",a),a=0)):o++}return r}(c,a,s.margin)+'"/>',d='viewBox="0 0 '+u+" "+u+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+d+' shape-rendering="crispEdges">'+l+h+"</svg>\n";return"function"==typeof n&&n(null,g),g}},98140:function(t,e){function n(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,i=n.modules.data,s=e.getScale(o,r),a=Math.floor((o+2*r.margin)*s),c=r.margin*s,u=[r.color.light,r.color.dark];for(let e=0;e<a;e++)for(let n=0;n<a;n++){let l=4*(e*a+n),h=r.color.light;if(e>=c&&n>=c&&e<a-c&&n<a-c){h=u[i[Math.floor((e-c)/s)*o+Math.floor((n-c)/s)]?1:0]}t[l++]=h.r,t[l++]=h.g,t[l++]=h.b,t[l]=h.a}}},65987:function(t){"use strict";var e={single_source_shortest_paths:function(t,n,r){var o={},i={};i[n]=0;var s,a,c,u,l,h,d,g=e.PriorityQueue.make();for(g.push(n,0);!g.empty();)for(c in a=(s=g.pop()).value,u=s.cost,l=t[a]||{})l.hasOwnProperty(c)&&(h=u+l[c],d=i[c],(void 0===i[c]||d>h)&&(i[c]=h,g.push(c,h),o[c]=a));if(void 0!==r&&void 0===i[r]){var f=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(f)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,n,r){var o=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var n,r=e.PriorityQueue,o={};for(n in t=t||{},r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},62378:function(t){"use strict";t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},29465:function(t,e,n){"use strict";var r;n.r(e),n.d(e,{QRCodeComponent:function(){return a},QRCodeModule:function(){return c}});var o=n(40761),i=n(26596),s=n(15813);class a{constructor(t,e){this.renderer=t,this.sanitizer=e,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.qrCodeURL=new o.EventEmitter,this.context=null}async ngOnChanges(){await this.createQRCode()}isValidQrCodeText(t){return!1===this.allowEmptyString?!(void 0===t||""===t||"null"===t||null===t):!(void 0===t)}toDataURL(t){return new Promise(((e,n)=>{i.hz(this.qrdata,t,((t,r)=>{t?n(t):e(r)}))}))}toCanvas(t,e){return new Promise(((n,r)=>{i.rT(t,this.qrdata,e,(t=>{t?r(t):n("success")}))}))}toSVG(t){return new Promise(((e,n)=>{i.toString(this.qrdata,t,((t,r)=>{t?n(t):e(r)}))}))}renderElement(t){for(const t of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,t);this.renderer.appendChild(this.qrcElement.nativeElement,t)}async createQRCode(){this.version&&this.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),this.version=40):this.version&&this.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),this.version=1):void 0!==this.version&&isNaN(this.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),this.version=void 0);try{if(!this.isValidQrCodeText(this.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");this.isValidQrCodeText(this.qrdata)&&""===this.qrdata&&(this.qrdata=" ");const t={color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,type:this.elementType,version:this.version,width:this.width},e=this.imageSrc,n=this.imageHeight||40,r=this.imageWidth||40;switch(this.elementType){case"canvas":const o=this.renderer.createElement("canvas");this.context=o.getContext("2d"),this.toCanvas(o,t).then((()=>{if(this.ariaLabel&&this.renderer.setAttribute(o,"aria-label",`${this.ariaLabel}`),this.title&&this.renderer.setAttribute(o,"title",`${this.title}`),e&&this.context){this.centerImage=new Image(r,n),e!==this.centerImage.src&&(this.centerImage.src=e),n!==this.centerImage.height&&(this.centerImage.height=n),r!==this.centerImage.width&&(this.centerImage.width=r);const t=this.centerImage;t&&(t.onload=()=>{this.context?.drawImage(t,o.width/2-r/2,o.height/2-n/2,r,n)})}this.renderElement(o),this.emitQRCodeURL(o)})).catch((t=>{console.error("[angularx-qrcode] canvas error:",t)}));break;case"svg":const i=this.renderer.createElement("div");this.toSVG(t).then((t=>{this.renderer.setProperty(i,"innerHTML",t);const e=i.firstChild;this.renderer.setAttribute(e,"height",`${this.width}`),this.renderer.setAttribute(e,"width",`${this.width}`),this.renderElement(e),this.emitQRCodeURL(e)})).catch((t=>{console.error("[angularx-qrcode] svg error:",t)}));break;default:const s=this.renderer.createElement("img");this.toDataURL(t).then((t=>{this.alt&&s.setAttribute("alt",this.alt),this.ariaLabel&&s.setAttribute("aria-label",this.ariaLabel),s.setAttribute("src",t),this.title&&s.setAttribute("title",this.title),this.renderElement(s),this.emitQRCodeURL(s)})).catch((t=>{console.error("[angularx-qrcode] img/url error:",t)}))}}catch(t){console.error("[angularx-qrcode] Error generating QR Code:",t.message)}}emitQRCodeURL(t){const e=t.constructor.name;if(e===SVGSVGElement.name){const e=t.outerHTML,n=new Blob([e],{type:"image/svg+xml"}),r=URL.createObjectURL(n),o=this.sanitizer.bypassSecurityTrustUrl(r);return void this.qrCodeURL.emit(o)}let n="";e===HTMLCanvasElement.name&&(n=t.toDataURL("image/png")),e===HTMLImageElement.name&&(n=t.src),fetch(n).then((t=>t.blob())).then((t=>URL.createObjectURL(t))).then((t=>this.sanitizer.bypassSecurityTrustUrl(t))).then((t=>{this.qrCodeURL.emit(t)})).catch((t=>{console.error("[angularx-qrcode] Error when fetching image/png URL: "+t)}))}}a.ɵfac=o["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.1",ngImport:r||(r=n.t(o,2)),type:a,deps:[{token:o.Renderer2},{token:s.DomSanitizer}],target:o["ɵɵFactoryTarget"].Component}),a.ɵcmp=o["ɵɵngDeclareComponent"]({minVersion:"14.0.0",version:"14.0.1",type:a,selector:"qrcode",inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},viewQueries:[{propertyName:"qrcElement",first:!0,predicate:["qrcElement"],descendants:!0,static:!0}],usesOnChanges:!0,ngImport:r||(r=n.t(o,2)),template:'<div #qrcElement [class]="cssClass"></div>',isInline:!0,changeDetection:o.ChangeDetectionStrategy.OnPush}),o["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.1",ngImport:r||(r=n.t(o,2)),type:a,decorators:[{type:o.Component,args:[{selector:"qrcode",changeDetection:o.ChangeDetectionStrategy.OnPush,template:'<div #qrcElement [class]="cssClass"></div>'}]}],ctorParameters:function(){return[{type:o.Renderer2},{type:s.DomSanitizer}]},propDecorators:{allowEmptyString:[{type:o.Input}],colorDark:[{type:o.Input}],colorLight:[{type:o.Input}],cssClass:[{type:o.Input}],elementType:[{type:o.Input}],errorCorrectionLevel:[{type:o.Input}],imageSrc:[{type:o.Input}],imageHeight:[{type:o.Input}],imageWidth:[{type:o.Input}],margin:[{type:o.Input}],qrdata:[{type:o.Input}],scale:[{type:o.Input}],version:[{type:o.Input}],width:[{type:o.Input}],alt:[{type:o.Input}],ariaLabel:[{type:o.Input}],title:[{type:o.Input}],qrCodeURL:[{type:o.Output}],qrcElement:[{type:o.ViewChild,args:["qrcElement",{static:!0}]}]}});class c{}c.ɵfac=o["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.1",ngImport:r||(r=n.t(o,2)),type:c,deps:[],target:o["ɵɵFactoryTarget"].NgModule}),c.ɵmod=o["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"14.0.1",ngImport:r||(r=n.t(o,2)),type:c,declarations:[a],exports:[a]}),c.ɵinj=o["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"14.0.1",ngImport:r||(r=n.t(o,2)),type:c,providers:[]}),o["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.1",ngImport:r||(r=n.t(o,2)),type:c,decorators:[{type:o.NgModule,args:[{providers:[],declarations:[a],exports:[a]}]}]})}}]);