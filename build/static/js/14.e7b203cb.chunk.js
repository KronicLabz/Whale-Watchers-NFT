(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[14],{1444:function(r,t){},1666:function(r,t,n){"use strict";n.r(t),function(r){n.d(t,"getED25519Key",(function(){return i}));var e=n(16),a=n(1486),c=n.n(a).a.lowlevel;function i(t){var n;n="string"===typeof t?r.from(t,"hex"):t;var a=new Uint8Array(64),i=[c.gf(),c.gf(),c.gf(),c.gf()],o=new Uint8Array([].concat(Object(e.a)(new Uint8Array(n)),Object(e.a)(new Uint8Array(32)))),f=new Uint8Array(32);c.crypto_hash(a,o,32),a[0]&=248,a[31]&=127,a[31]|=64,c.scalarbase(i,a),c.pack(f,i);for(var s=0;s<32;s+=1)o[s+32]=f[s];return{sk:r.from(o),pk:r.from(f)}}}.call(this,n(32).Buffer)}}]);
//# sourceMappingURL=14.e7b203cb.chunk.js.map