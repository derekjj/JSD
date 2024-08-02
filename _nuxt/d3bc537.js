/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{392:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(3),o=r(60),c=r(16),l=r(43);class d{constructor(e,t){this._delegate=e,this.firebase=t,Object(c._addComponent)(e,new o.a("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Object(c.deleteApp)(this._delegate))))}_getService(e,t=c._DEFAULT_ENTRY_NAME){var r;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(r=n.getComponent())||void 0===r?void 0:r.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=c._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(component){Object(c._addComponent)(this._delegate,component)}_addOrOverwriteComponent(component){Object(c._addOrOverwriteComponent)(this._delegate,component)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const h={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},_=new n.b("app-compat","Firebase",h);const m=function e(){const t=function(e){const t={},r={__esModule:!0,initializeApp:function(o,l={}){const d=c.initializeApp(o,l);if(Object(n.k)(t,d.name))return t[d.name];const h=new e(d,r);return t[d.name]=h,h},app:o,registerVersion:c.registerVersion,setLogLevel:c.setLogLevel,onLog:c.onLog,apps:null,SDK_VERSION:c.SDK_VERSION,INTERNAL:{registerComponent:function(component){const t=component.name,l=t.replace("-compat","");if(c._registerComponent(component)&&"PUBLIC"===component.type){const c=(e=o())=>{if("function"!=typeof e[l])throw _.create("invalid-app-argument",{appName:t});return e[l]()};void 0!==component.serviceProps&&Object(n.p)(c,component.serviceProps),r[l]=c,e.prototype[l]=function(...e){return this._getService.bind(this,t).apply(this,component.multipleInstances?e:[])}}return"PUBLIC"===component.type?r[l]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:c}};function o(e){if(e=e||c._DEFAULT_ENTRY_NAME,!Object(n.k)(t,e))throw _.create("no-app",{appName:e});return t[e]}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),o.App=e,r}(d);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(n.p)(t,e)},createSubscribe:n.m,ErrorFactory:n.b,deepExtend:n.p}),t}(),f=new l.b("@firebase/app-compat");if(Object(n.z)()&&void 0!==window.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=window.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const w=m;var O;Object(c.registerVersion)("@firebase/app-compat","0.2.38",O)},536:function(e,t,r){"use strict";r.r(t);var n=r(392),o=r(213),c=r(3),l=r(60);function d(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new o.g("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}function h(){if("undefined"==typeof Uint8Array)throw new o.g("unimplemented","Uint8Arrays are not available in this environment.")}function _(){if(!Object(o.r)())throw new o.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class m{constructor(e){this._delegate=e}static fromBase64String(e){return _(),new m(o.b.fromBase64String(e))}static fromUint8Array(e){return h(),new m(o.b.fromUint8Array(e))}toBase64(){return _(),this._delegate.toBase64()}toUint8Array(){return h(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}function f(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const object=e;for(const e of t)if(e in object&&"function"==typeof object[e])return!0;return!1}(e,["next","error","complete"])}class w{enableIndexedDbPersistence(e,t){return Object(o.F)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(o.G)(e._delegate)}clearIndexedDbPersistence(e){return Object(o.x)(e._delegate)}}class O{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof o.m||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(o.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,r={}){Object(o.A)(this._delegate,e,t,r)}enableNetwork(){return Object(o.H)(this._delegate)}disableNetwork(){return Object(o.D)(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Object(o.t)("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(o.mb)(this._delegate)}onSnapshotsInSync(e){return Object(o.Z)(this._delegate,e)}get app(){if(!this._appCompat)throw new o.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new x(this,Object(o.y)(this._delegate,e))}catch(e){throw D(e,"collection()","Firestore.collection()")}}doc(e){try{return new E(this,Object(o.E)(this._delegate,e))}catch(e){throw D(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new P(this,Object(o.z)(this._delegate,e))}catch(e){throw D(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(o.eb)(this._delegate,(t=>e(new j(this,t))))}batch(){return Object(o.K)(this._delegate),new y(new o.l(this._delegate,(e=>Object(o.L)(this._delegate,e))))}loadBundle(e){return Object(o.W)(this._delegate,e)}namedQuery(e){return Object(o.X)(this._delegate,e).then((e=>e?new P(this,e):null))}}class v extends o.a{constructor(e){super(),this.firestore=e}convertBytes(e){return new m(new o.b(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return E.forKey(t,this.firestore,null)}}class j{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=L(e);return this._delegate.get(t).then((e=>new N(this._firestore,new o.e(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,data,t){const r=L(e);return t?(d("Transaction.set",t),this._delegate.set(r,data,t)):this._delegate.set(r,data),this}update(e,t,r,...n){const o=L(e);return 2===arguments.length?this._delegate.update(o,t):this._delegate.update(o,t,r,...n),this}delete(e){const t=L(e);return this._delegate.delete(t),this}}class y{constructor(e){this._delegate=e}set(e,data,t){const r=L(e);return t?(d("WriteBatch.set",t),this._delegate.set(r,data,t)):this._delegate.set(r,data),this}update(e,t,r,...n){const o=L(e);return 2===arguments.length?this._delegate.update(o,t):this._delegate.update(o,t,r,...n),this}delete(e){const t=L(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class I{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new o.i(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new F(this._firestore,r),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=I.INSTANCES;let n=r.get(e);n||(n=new WeakMap,r.set(e,n));let o=n.get(t);return o||(o=new I(e,new v(e),t),n.set(t,o)),o}}I.INSTANCES=new WeakMap;class E{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(path,e,t){if(path.length%2!=0)throw new o.g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${path.canonicalString()} has ${path.length}`);return new E(e,new o.d(e._delegate,t,new o.n(path)))}static forKey(e,t,r){return new E(t,new o.d(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new x(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new x(this.firestore,Object(o.y)(this._delegate,e))}catch(e){throw D(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Object(c.w)(e))instanceof o.d&&Object(o.db)(this._delegate,e)}set(e,t){t=d("DocumentReference.set",t);try{return t?Object(o.gb)(this._delegate,e,t):Object(o.gb)(this._delegate,e)}catch(e){throw D(e,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return 1===arguments.length?Object(o.lb)(this._delegate,e):Object(o.lb)(this._delegate,e,t,...r)}catch(e){throw D(e,"updateDoc()","DocumentReference.update()")}}delete(){return Object(o.B)(this._delegate)}onSnapshot(...e){const t=A(e),r=C(e,(e=>new N(this.firestore,new o.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Object(o.Y)(this._delegate,t,r)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(o.N)(this._delegate):"server"===(null==e?void 0:e.source)?Object(o.O)(this._delegate):Object(o.M)(this._delegate),t.then((e=>new N(this.firestore,new o.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new E(this.firestore,e?this._delegate.withConverter(I.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function D(e,t,r){return e.message=e.message.replace(t,r),e}function A(e){for(const t of e)if("object"==typeof t&&!f(t))return t;return{}}function C(e,t){var r,n;let o;return o=f(e[0])?e[0]:f(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{o.next&&o.next(t(e))},error:null===(r=o.error)||void 0===r?void 0:r.bind(o),complete:null===(n=o.complete)||void 0===n?void 0:n.bind(o)}}class N{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new E(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(o.ib)(this._delegate,e._delegate)}}class F extends N{data(e){const data=this._delegate.data(e);return this._delegate._converter||Object(o.q)(void 0!==data,"Document in a QueryDocumentSnapshot should exist"),data}}class P{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,r){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.nb)(e,t,r)))}catch(e){throw D(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.ab)(e,t)))}catch(e){throw D(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.U)(e)))}catch(e){throw D(e,"limit()","Query.limit()")}}limitToLast(e){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.V)(e)))}catch(e){throw D(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.kb)(...e)))}catch(e){throw D(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.jb)(...e)))}catch(e){throw D(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.J)(...e)))}catch(e){throw D(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new P(this.firestore,Object(o.bb)(this._delegate,Object(o.I)(...e)))}catch(e){throw D(e,"endAt()","Query.endAt()")}}isEqual(e){return Object(o.cb)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(o.Q)(this._delegate):"server"===(null==e?void 0:e.source)?Object(o.R)(this._delegate):Object(o.P)(this._delegate),t.then((e=>new T(this.firestore,new o.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=A(e),r=C(e,(e=>new T(this.firestore,new o.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Object(o.Y)(this._delegate,t,r)}withConverter(e){return new P(this.firestore,e?this._delegate.withConverter(I.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class S{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new F(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class T{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new P(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new F(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new S(this._firestore,e)))}forEach(e,t){this._delegate.forEach((r=>{e.call(t,new F(this._firestore,r))}))}isEqual(e){return Object(o.ib)(this._delegate,e._delegate)}}class x extends P{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new E(this.firestore,e):null}doc(e){try{return new E(this.firestore,void 0===e?Object(o.E)(this._delegate):Object(o.E)(this._delegate,e))}catch(e){throw D(e,"doc()","CollectionReference.doc()")}}add(data){return Object(o.u)(this._delegate,data).then((e=>new E(this.firestore,e)))}isEqual(e){return Object(o.db)(this._delegate,e._delegate)}withConverter(e){return new x(this.firestore,e?this._delegate.withConverter(I.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function L(e){return Object(o.p)(e,o.d)}class B{constructor(...e){this._delegate=new o.f(...e)}static documentId(){return new B(o.o.keyField().canonicalString())}isEqual(e){return(e=Object(c.w)(e))instanceof o.f&&this._delegate._internalPath.isEqual(e._internalPath)}}class R{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(o.fb)();return e._methodName="FieldValue.serverTimestamp",new R(e)}static delete(){const e=Object(o.C)();return e._methodName="FieldValue.delete",new R(e)}static arrayUnion(...e){const t=Object(o.w)(...e);return t._methodName="FieldValue.arrayUnion",new R(t)}static arrayRemove(...e){const t=Object(o.v)(...e);return t._methodName="FieldValue.arrayRemove",new R(t)}static increment(e){const t=Object(o.T)(e);return t._methodName="FieldValue.increment",new R(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}const k={Firestore:O,GeoPoint:o.h,Timestamp:o.k,Blob:m,Transaction:j,WriteBatch:y,DocumentReference:E,DocumentSnapshot:N,Query:P,QueryDocumentSnapshot:F,QuerySnapshot:T,CollectionReference:x,FieldPath:B,FieldValue:R,setLogLevel:function(e){Object(o.hb)(e)},CACHE_SIZE_UNLIMITED:o.c};var W,U;W=n.a,U=(e,t)=>new O(e,t,new w),W.INTERNAL.registerComponent(new l.a("firestore-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return U(t,r)}),"PUBLIC").setServiceProps(Object.assign({},k))),W.registerVersion("@firebase/firestore-compat","0.3.34")}}]);