var Mt=t=>{throw TypeError(t)};var lt=(t,e,i)=>e.has(t)||Mt("Cannot "+i);var a=(t,e,i)=>(lt(t,e,"read from private field"),i?i.call(t):e.get(t)),p=(t,e,i)=>e.has(t)?Mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),u=(t,e,i,r)=>(lt(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),f=(t,e,i)=>(lt(t,e,"access private method"),i);import{v as Ft,w as S,x as Y,y as W,z as Zt,B as Ot,E as It,F as Wt,G as qt,I as Jt,J as At,K as tt,N as kt,O as Xt,r as g,Q as Ut,U as et,f as I,j as s,V as st,u as it,P as Pt,s as Yt,h as te,i as ee,M as q,W as se,H as ie,L as ae,c as re,C as ne,t as oe}from"./index-CgtPWoX9.js";const Dt="default",wt="ghost",le="outline",J="inbound",ct="outbound";var w,c,G,y,B,P,L,Z,D,Q,$,F,A,H,d,K,ft,pt,xt,gt,vt,bt,Ct,Qt,Bt,ce=(Bt=class extends Ft{constructor(e,i){super();p(this,d);p(this,w);p(this,c);p(this,G);p(this,y);p(this,B);p(this,P);p(this,L);p(this,Z);p(this,D);p(this,Q);p(this,$);p(this,F);p(this,A);p(this,H,new Set);this.options=i,u(this,w,e),u(this,L,null),this.bindMethods(),this.setOptions(i)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(a(this,c).addObserver(this),Tt(a(this,c),this.options)?f(this,d,K).call(this):this.updateResult(),f(this,d,gt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return yt(a(this,c),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return yt(a(this,c),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,d,vt).call(this),f(this,d,bt).call(this),a(this,c).removeObserver(this)}setOptions(e,i){const r=this.options,o=a(this,c);if(this.options=a(this,w).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof S(this.options.enabled,a(this,c))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");f(this,d,Ct).call(this),a(this,c).setOptions(this.options),r._defaulted&&!Y(this.options,r)&&a(this,w).getQueryCache().notify({type:"observerOptionsUpdated",query:a(this,c),observer:this});const h=this.hasListeners();h&&Et(a(this,c),o,this.options,r)&&f(this,d,K).call(this),this.updateResult(i),h&&(a(this,c)!==o||S(this.options.enabled,a(this,c))!==S(r.enabled,a(this,c))||W(this.options.staleTime,a(this,c))!==W(r.staleTime,a(this,c)))&&f(this,d,ft).call(this);const n=f(this,d,pt).call(this);h&&(a(this,c)!==o||S(this.options.enabled,a(this,c))!==S(r.enabled,a(this,c))||n!==a(this,A))&&f(this,d,xt).call(this,n)}getOptimisticResult(e){const i=a(this,w).getQueryCache().build(a(this,w),e),r=this.createResult(i,e);return de(this,r)&&(u(this,y,r),u(this,P,this.options),u(this,B,a(this,c).state)),r}getCurrentResult(){return a(this,y)}trackResult(e,i){const r={};return Object.keys(e).forEach(o=>{Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(o),i==null||i(o),e[o])})}),r}trackProp(e){a(this,H).add(e)}getCurrentQuery(){return a(this,c)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const i=a(this,w).defaultQueryOptions(e),r=a(this,w).getQueryCache().build(a(this,w),i);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,i))}fetch(e){return f(this,d,K).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),a(this,y)))}createResult(e,i){var St;const r=a(this,c),o=this.options,h=a(this,y),n=a(this,B),m=a(this,P),b=e!==r?e.state:a(this,G),{state:v}=e;let l={...v},E=!1,C;if(i._optimisticResults){const z=this.hasListeners(),ot=!z&&Tt(e,i),Gt=z&&Et(e,r,i,o);(ot||Gt)&&(l={...l,...Jt(v.data,e.options)}),i._optimisticResults==="isRestoring"&&(l.fetchStatus="idle")}let{error:U,errorUpdatedAt:j,status:R}=l;if(i.select&&l.data!==void 0)if(h&&l.data===(n==null?void 0:n.data)&&i.select===a(this,Z))C=a(this,D);else try{u(this,Z,i.select),C=i.select(l.data),C=At(h==null?void 0:h.data,C,i),u(this,D,C),u(this,L,null)}catch(z){u(this,L,z)}else C=l.data;if(i.placeholderData!==void 0&&C===void 0&&R==="pending"){let z;if(h!=null&&h.isPlaceholderData&&i.placeholderData===(m==null?void 0:m.placeholderData))z=h.data;else if(z=typeof i.placeholderData=="function"?i.placeholderData((St=a(this,Q))==null?void 0:St.state.data,a(this,Q)):i.placeholderData,i.select&&z!==void 0)try{z=i.select(z),u(this,L,null)}catch(ot){u(this,L,ot)}z!==void 0&&(R="success",C=At(h==null?void 0:h.data,z,i),E=!0)}a(this,L)&&(U=a(this,L),C=a(this,D),j=Date.now(),R="error");const at=l.fetchStatus==="fetching",rt=R==="pending",nt=R==="error",Rt=rt&&at,Lt=C!==void 0;return{status:R,fetchStatus:l.fetchStatus,isPending:rt,isSuccess:R==="success",isError:nt,isInitialLoading:Rt,isLoading:Rt,data:C,dataUpdatedAt:l.dataUpdatedAt,error:U,errorUpdatedAt:j,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>b.dataUpdateCount||l.errorUpdateCount>b.errorUpdateCount,isFetching:at,isRefetching:at&&!rt,isLoadingError:nt&&!Lt,isPaused:l.fetchStatus==="paused",isPlaceholderData:E,isRefetchError:nt&&Lt,isStale:_t(e,i),refetch:this.refetch}}updateResult(e){const i=a(this,y),r=this.createResult(a(this,c),this.options);if(u(this,B,a(this,c).state),u(this,P,this.options),a(this,B).data!==void 0&&u(this,Q,a(this,c)),Y(r,i))return;u(this,y,r);const o={},h=()=>{if(!i)return!0;const{notifyOnChangeProps:n}=this.options,m=typeof n=="function"?n():n;if(m==="all"||!m&&!a(this,H).size)return!0;const x=new Set(m??a(this,H));return this.options.throwOnError&&x.add("error"),Object.keys(a(this,y)).some(b=>{const v=b;return a(this,y)[v]!==i[v]&&x.has(v)})};(e==null?void 0:e.listeners)!==!1&&h()&&(o.listeners=!0),f(this,d,Qt).call(this,{...o,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,d,gt).call(this)}},w=new WeakMap,c=new WeakMap,G=new WeakMap,y=new WeakMap,B=new WeakMap,P=new WeakMap,L=new WeakMap,Z=new WeakMap,D=new WeakMap,Q=new WeakMap,$=new WeakMap,F=new WeakMap,A=new WeakMap,H=new WeakMap,d=new WeakSet,K=function(e){f(this,d,Ct).call(this);let i=a(this,c).fetch(this.options,e);return e!=null&&e.throwOnError||(i=i.catch(Zt)),i},ft=function(){f(this,d,vt).call(this);const e=W(this.options.staleTime,a(this,c));if(Ot||a(this,y).isStale||!It(e))return;const r=Wt(a(this,y).dataUpdatedAt,e)+1;u(this,$,setTimeout(()=>{a(this,y).isStale||this.updateResult()},r))},pt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(a(this,c)):this.options.refetchInterval)??!1},xt=function(e){f(this,d,bt).call(this),u(this,A,e),!(Ot||S(this.options.enabled,a(this,c))===!1||!It(a(this,A))||a(this,A)===0)&&u(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||qt.isFocused())&&f(this,d,K).call(this)},a(this,A)))},gt=function(){f(this,d,ft).call(this),f(this,d,xt).call(this,f(this,d,pt).call(this))},vt=function(){a(this,$)&&(clearTimeout(a(this,$)),u(this,$,void 0))},bt=function(){a(this,F)&&(clearInterval(a(this,F)),u(this,F,void 0))},Ct=function(){const e=a(this,w).getQueryCache().build(a(this,w),this.options);if(e===a(this,c))return;const i=a(this,c);u(this,c,e),u(this,G,e.state),this.hasListeners()&&(i==null||i.removeObserver(this),e.addObserver(this))},Qt=function(e){tt.batch(()=>{e.listeners&&this.listeners.forEach(i=>{i(a(this,y))}),a(this,w).getQueryCache().notify({query:a(this,c),type:"observerResultsUpdated"})})},Bt);function he(t,e){return S(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Tt(t,e){return he(t,e)||t.state.data!==void 0&&yt(t,e,e.refetchOnMount)}function yt(t,e,i){if(S(e.enabled,t)!==!1){const r=typeof i=="function"?i(t):i;return r==="always"||r!==!1&&_t(t,e)}return!1}function Et(t,e,i,r){return(t!==e||S(r.enabled,t)===!1)&&(!i.suspense||t.state.status!=="error")&&_t(t,i)}function _t(t,e){return S(e.enabled,t)!==!1&&t.isStaleByTime(W(e.staleTime,t))}function de(t,e){return!Y(t.getCurrentResult(),e)}var k,T,_,M,O,X,jt,$t,ue=($t=class extends Ft{constructor(e,i){super();p(this,O);p(this,k);p(this,T);p(this,_);p(this,M);u(this,k,e),this.setOptions(i),this.bindMethods(),f(this,O,X).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var r;const i=this.options;this.options=a(this,k).defaultMutationOptions(e),Y(this.options,i)||a(this,k).getMutationCache().notify({type:"observerOptionsUpdated",mutation:a(this,_),observer:this}),i!=null&&i.mutationKey&&this.options.mutationKey&&kt(i.mutationKey)!==kt(this.options.mutationKey)?this.reset():((r=a(this,_))==null?void 0:r.state.status)==="pending"&&a(this,_).setOptions(this.options)}onUnsubscribe(){var e;this.hasListeners()||(e=a(this,_))==null||e.removeObserver(this)}onMutationUpdate(e){f(this,O,X).call(this),f(this,O,jt).call(this,e)}getCurrentResult(){return a(this,T)}reset(){var e;(e=a(this,_))==null||e.removeObserver(this),u(this,_,void 0),f(this,O,X).call(this),f(this,O,jt).call(this)}mutate(e,i){var r;return u(this,M,i),(r=a(this,_))==null||r.removeObserver(this),u(this,_,a(this,k).getMutationCache().build(a(this,k),this.options)),a(this,_).addObserver(this),a(this,_).execute(e)}},k=new WeakMap,T=new WeakMap,_=new WeakMap,M=new WeakMap,O=new WeakSet,X=function(){var i;const e=((i=a(this,_))==null?void 0:i.state)??Xt();u(this,T,{...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset})},jt=function(e){tt.batch(()=>{var i,r,o,h,n,m,x,b;if(a(this,M)&&this.hasListeners()){const v=a(this,T).variables,l=a(this,T).context;(e==null?void 0:e.type)==="success"?((r=(i=a(this,M)).onSuccess)==null||r.call(i,e.data,v,l),(h=(o=a(this,M)).onSettled)==null||h.call(o,e.data,null,v,l)):(e==null?void 0:e.type)==="error"&&((m=(n=a(this,M)).onError)==null||m.call(n,e.error,v,l),(b=(x=a(this,M)).onSettled)==null||b.call(x,void 0,e.error,v,l))}this.listeners.forEach(v=>{v(a(this,T))})})},$t),Ht=g.createContext(!1),me=()=>g.useContext(Ht);Ht.Provider;function fe(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var pe=g.createContext(fe()),xe=()=>g.useContext(pe);function Vt(t,e){return typeof t=="function"?t(...e):!!t}function ge(){}var ve=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},be=t=>{g.useEffect(()=>{t.clearReset()},[t])},Ce=({result:t,errorResetBoundary:e,throwOnError:i,query:r})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&Vt(i,[t.error,r]),ye=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},je=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,we=(t,e,i)=>e.fetchOptimistic(t).catch(()=>{i.clearReset()});function _e(t,e,i){var b,v,l,E;const r=Ut(),o=me(),h=xe(),n=r.defaultQueryOptions(t);(v=(b=r.getDefaultOptions().queries)==null?void 0:b._experimental_beforeQuery)==null||v.call(b,n),n._optimisticResults=o?"isRestoring":"optimistic",ye(n),ve(n,h),be(h);const[m]=g.useState(()=>new e(r,n)),x=m.getOptimisticResult(n);if(g.useSyncExternalStore(g.useCallback(C=>{const U=o?()=>{}:m.subscribe(tt.batchCalls(C));return m.updateResult(),U},[m,o]),()=>m.getCurrentResult(),()=>m.getCurrentResult()),g.useEffect(()=>{m.setOptions(n,{listeners:!1})},[n,m]),je(n,x))throw we(n,m,h);if(Ce({result:x,errorResetBoundary:h,throwOnError:n.throwOnError,query:r.getQueryCache().get(n.queryHash)}))throw x.error;return(E=(l=r.getDefaultOptions().queries)==null?void 0:l._experimental_afterQuery)==null||E.call(l,n,x),n.notifyOnChangeProps?x:m.trackResult(x)}function Nt(t,e){return _e(t,ce)}function Ne(t,e){const i=Ut(),[r]=g.useState(()=>new ue(i,t));g.useEffect(()=>{r.setOptions(t)},[r,t]);const o=g.useSyncExternalStore(g.useCallback(n=>r.subscribe(tt.batchCalls(n)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),h=g.useCallback((n,m)=>{r.mutate(n,m).catch(ge)},[r]);if(o.error&&Vt(r.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:h,mutateAsync:o.mutate}}const ze=async()=>(await et.get("/activities")).data.filter(t=>!t.is_archived),Re=async t=>(await et.get(`/activities/${t}`)).data,Le=async()=>(await et.get("/activities")).data.filter(t=>t.is_archived),Se=async t=>(await et.patch(`/activities/${t.id}`,{is_archived:t.is_archived})).data,Me=t=>Nt({queryKey:["phone_list"],queryFn:()=>ze(),enabled:t}),rs=t=>Nt({queryKey:["phone_call",t],queryFn:()=>Re(t),enabled:!!t}),Oe=t=>Nt({queryKey:["phone_archived"],queryFn:Le,enabled:t}),Ie=()=>Ne({mutationFn:Se}),Ae=I.svg.withConfig({displayName:"Svg",componentId:"sc-13010d8-0"})(["display:inline-block;vertical-align:middle;background:none;border:none;"]),N=t=>s.jsx(Ae,{...t,height:t.size,width:"auto",children:t.children}),ns=t=>s.jsx(N,{...t,viewBox:"0 0 512 512",children:s.jsx("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})}),ke=t=>s.jsx(N,{...t,viewBox:"0 0 448 512",children:s.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})}),V=t=>s.jsx(N,{...t,viewBox:"0 0 512 512",children:s.jsx("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})}),Te=t=>s.jsx(N,{...t,viewBox:"0 0 480 512",children:s.jsx("path",{d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"})}),Ee=t=>s.jsx(N,{...t,viewBox:"0 0 512 512",children:s.jsx("path",{d:"M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"})}),os=t=>s.jsx(N,{...t,viewBox:"0 0 512 512",children:s.jsx("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})}),Be=t=>s.jsx(N,{...t,viewBox:"0 0 448 512",children:s.jsx("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})}),ls=t=>s.jsx(N,{...t,viewBox:"0 0 448 512",children:s.jsx("path",{d:"M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"})}),$e=t=>s.jsx(N,{...t,viewBox:"0 0 512 512",children:s.jsx("path",{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"})}),ht=t=>s.jsx(N,{...t,viewBox:"0 0 512 512",children:s.jsx("path",{d:"M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM367.6 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})}),cs=t=>s.jsx(N,{...t,viewBox:"0 0 512 512",children:s.jsx("path",{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"})}),dt=t=>s.jsx(N,{...t,viewBox:"0 0 576 512",children:s.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})}),Fe=I.div.withConfig({displayName:"Page",componentId:"sc-3h8tw8-0"})(["padding:20px;"]),Kt=g.forwardRef((t,e)=>s.jsx(Fe,{ref:e,...t,children:t.children})),Ue=I(Kt).withConfig({displayName:"About",componentId:"sc-37gidh-0"})([".title{font-size:40px;}.list{border-right:none;& > :not(:last-child){margin-bottom:1rem;}&__item{display:flex;align-items:center;justify-content:flex-start;}&__icon{width:fit-content;margin-right:1rem;}&__text{font-size:18px;}}.message{font-size:21px;margin-bottom:1rem;}.links{display:flex;& > *{margin-top:1rem;}& > :not(:last-child){margin-right:2rem;}}.space{margin-bottom:3rem;}"]),hs=t=>{const e=st(),i=it();return s.jsxs(Ue,{ref:i.infoRef,id:"info",children:[s.jsx("h1",{className:"title space",children:"Thank you for Visiting"}),s.jsxs("div",{children:[s.jsx("p",{className:"message space",children:"This app was created as a interview assignment for Speer Technologies. I really enjoyed working on the assignment, and I hope you enjoy my work."}),s.jsx("p",{className:"message",children:"The Original Assignment object have been meet:"}),s.jsxs("ul",{className:"list space",children:[s.jsxs("li",{className:"list__item",children:[s.jsx(V,{fill:e.current.border.color,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Call Feed Created with all messages that have not been archived"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(V,{fill:e.current.border.color,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Call Feed has the ability to archive all calls, also some filtering has been added"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(V,{fill:e.current.border.color,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Call Details where you have the ablility to archive/unarchive a single call"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(V,{fill:e.current.border.color,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Clean Code with good project structure, and best practices used"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(V,{fill:e.current.border.color,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"All screen sizes have been accounted for, and only components being used have bee loaded in"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(ht,{fill:e.current.button.variants.danger.fg,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"I tried to make the design sensible and pleasant, not my stongest skill"})]})]}),s.jsx("p",{className:"message",children:"Additions i Made that was not part of the assignment, I had extra time so I thought I would add some extra features:"}),s.jsxs("ul",{className:"list space",children:[s.jsxs("li",{className:"list__item",children:[s.jsx(dt,{fill:"#edd713",className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Light and Dark themes have been added, with a setting to toggle between"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(dt,{fill:"#edd713",className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Cached storage using local storage to save settings in case of refresh"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(dt,{fill:"#edd713",className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"A Guided Tour of the app"})]})]}),s.jsx("p",{className:"message",children:"What I ran out of time for:"}),s.jsxs("ul",{className:"list space",children:[s.jsxs("li",{className:"list__item",children:[s.jsx(ht,{fill:e.current.button.variants.danger.fg,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Adding Tutorial to Mobile Size, and adjusting some setting for Tutorial for the rest of the app"})]}),s.jsxs("li",{className:"list__item",children:[s.jsx(ht,{fill:e.current.button.variants.danger.fg,className:"list__icon",size:"25px"}),s.jsx("span",{className:"list__text",children:"Localization, almost got there, then decided I wanted to go to sleep"})]})]}),s.jsx("p",{className:"message",children:"Here are also some of my links for you, you can find all my latest work here"}),s.jsxs("div",{className:"links space",children:[s.jsx("a",{href:"https://www.justinheisler.me/",children:s.jsx(Ee,{fill:e.current.border.color,size:"45px"})}),s.jsx("a",{href:"https://github.com/Heisey",children:s.jsx(Te,{fill:"#FF5630",size:"45px"})}),s.jsx("a",{href:"https://www.linkedin.com/in/justin-heisler-35069a87/",children:s.jsx(Be,{fill:"#0077B5",size:"45px"})})]}),s.jsx("p",{className:"message",children:"Hopefully you enjoyed everything and I hope to hear from you soon"}),s.jsx("p",{className:"message",children:" Submitted on July 19, 2024 at 7AM PST"}),s.jsx("p",{className:"message",children:"Cheers"}),s.jsx("p",{className:"message",children:"Justin Heisler"})]})]})},Pe=(t,e)=>t.$variant!==Dt?"transparent":e.button.variants[t.$buttonTheme].bg,De=(t,e)=>t.$variant!==le?"none":`1px solid ${e.button.variants[t.$buttonTheme].fg}`,Qe=(t,e)=>t.$variant===wt?"inherit":e.button.variants[t.$buttonTheme].fg,He=(t,e)=>t.$variant===wt?"transparent":e.button.variants[t.$buttonTheme].hoverBg,Ve=(t,e)=>t.$variant===wt?"inherit":e.button.variants[t.$buttonTheme].hoverFg,Ke=I.button.withConfig({displayName:"Button",componentId:"sc-1az447g-0"})(["background-color:",";color:",";padding:8px 12px;transition:all 0.3s ease-in;border:",";height:fit-content;cursor:pointer;&:hover{background-color:",";color:",";}"],t=>Pe(t,t.theme),t=>Qe(t,t.theme),t=>De(t,t.theme),t=>He(t,t.theme),t=>Ve(t,t.theme)),zt=t=>s.jsx(Ke,{...t,$buttonTheme:t.$theme||Pt,$variant:t.$variant||Dt,children:t.children}),Ge=I.div.withConfig({displayName:"Toggle",componentId:"sc-1b30uuh-0"})(['display:flex;align-items:center;.label{position:relative;display:inline-block;width:50px;height:25px;}.input{opacity:0;width:0;height:0;&:checked + span{background-color:#2196F3;}&:checked + span:before{transform:translateX(25px);}}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s;border-radius:25px;&:before{position:absolute;content:"";height:21px;width:21px;left:2px;bottom:2px;background-color:white;transition:.4s;border-radius:50%;}}']),Ze=t=>s.jsx(Ge,{children:s.jsxs("label",{className:"label",children:[s.jsx("input",{className:"input",...t,readOnly:!0,type:"checkbox"}),s.jsx("span",{className:"slider"})]})}),We=I(Kt).withConfig({displayName:"Settings",componentId:"sc-bn7zz6-0"})([".title{font-size:40px;}.input{max-width:500px;width:100%;}.input{display:flex;align-items:center;justify-content:space-between;margin-bottom:0%.5;}.spacer{margin-bottom:3rem;}"]),ds=t=>{const e=Yt(),i=it(),r=st(),o=te(),h=ee(),n=()=>{o(ie),i.toggleShowTutorial(),e.setState({...e.state,ranTutorial:!1})};return s.jsxs(We,{children:[s.jsx("h1",{className:"title spacer",children:"Update your user settings"}),s.jsxs("div",{ref:i.settingsPageRef,id:"settings_menu",className:"inputs",children:[s.jsxs("div",{className:"input spacer",children:[s.jsx("p",{children:"Use dark mode"}),s.jsx(Ze,{checked:r.current.name==="dark",onClick:()=>r.toggleTheme()})]}),s.jsxs("div",{className:"input",children:[s.jsx("p",{children:"Use Guided Tutorial"}),s.jsx(zt,{$theme:h.width<q?se:Pt,disabled:h.width<q,onClick:n,children:"Restart"})]}),h.width<q&&s.jsx("p",{children:"Tutorial is not available in mobile mode"})]})]})},qe=t=>{const{$textcolor:e,...i}=t;return s.jsx(N,{...i,viewBox:"0 0 486 168",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[s.jsxs("g",{transform:"translate(207.000000, 24.000000)",children:[s.jsx("rect",{fill:e||"#424242",x:"270",y:"6",width:"9",height:"90",rx:"4.5"}),s.jsx("rect",{fill:e||"#424242",x:"249",y:"6",width:"9",height:"90",rx:"4.5"}),s.jsx("path",{d:"M228,44.5757016 L228,40.5097518 C228,38.0190847 230.019776,36 232.5,36 C234.985281,36 237,38.0134641 237,40.5097518 L237,91.4902482 C237,93.9809153 234.980224,96 232.5,96 C230.014719,96 228,93.9865359 228,91.4902482 L228,87.4242984 C222.588748,92.729045 215.17636,96 207,96 C190.431458,96 177,82.5685425 177,66 C177,49.4314575 190.431458,36 207,36 C215.17636,36 222.588748,39.270955 228,44.5757016 Z M207,87 C218.59798,87 228,77.5979797 228,66 C228,54.4020203 218.59798,45 207,45 C195.40202,45 186,54.4020203 186,66 C186,77.5979797 195.40202,87 207,87 Z",fill:e||"#424242"}),s.jsx("path",{d:"M171.566757,44.4332432 C159.655766,32.5222523 140.344234,32.5222523 128.433243,44.4332432 C116.522252,56.3442341 116.522252,75.6557659 128.433243,87.5667568 C140.344234,99.4777477 159.655766,99.4777477 171.566757,87.5667568 C173.324116,85.8093975 173.324116,82.9601551 171.566757,81.2027958 C169.809398,79.4454365 166.960155,79.4454365 165.202796,81.2027958 C156.806524,89.5990681 143.193476,89.5990681 134.797204,81.2027958 C126.400932,72.8065235 126.400932,59.1934765 134.797204,50.7972042 C143.193476,42.4009319 156.806524,42.4009319 165.202796,50.7972042 C166.960155,52.5545635 169.809398,52.5545635 171.566757,50.7972042 C173.324116,49.0398449 173.324116,46.1906025 171.566757,44.4332432 Z",fill:e||"#424242",fillRule:"nonzero"}),s.jsx("path",{d:"M102,41.650086 L102,40.5097518 C102,38.0190847 99.9802243,36 97.5,36 C95.0147186,36 93,38.0134641 93,40.5097518 L93,91.4902482 C93,93.9809153 95.0197757,96 97.5,96 C99.9852814,96 102,93.9865359 102,91.4902482 L102,65.0800149 C102.269821,52.772034 107.976408,45.0292969 116.914551,45.0292969 C119.399832,45.0292969 121.414551,43.0145782 121.414551,40.5292969 C121.414551,38.0440155 119.399832,36.0292969 116.914551,36.0292969 C110.916968,36.0292969 105.88006,38.0781857 102,41.650086 L102,41.650086 Z",fill:e||"#424242"}),s.jsx("rect",{fill:e||"#424242",x:"72",y:"36",width:"9",height:"60",rx:"4.5"}),s.jsx("circle",{fill:"#2AC420",cx:"76.5",cy:"10.5",r:"10.5"}),s.jsx("path",{d:"M51,44.5757016 L51,40.5097518 C51,38.0190847 53.0197757,36 55.5,36 C57.9852814,36 60,38.0134641 60,40.5097518 L60,91.4902482 C60,93.9809153 57.9802243,96 55.5,96 C53.0147186,96 51,93.9865359 51,91.4902482 L51,87.4242984 C45.588748,92.729045 38.1763602,96 30,96 C13.4314575,96 0,82.5685425 0,66 C0,49.4314575 13.4314575,36 30,36 C38.1763602,36 45.588748,39.270955 51,44.5757016 Z M30,87 C41.5979797,87 51,77.5979797 51,66 C51,54.4020203 41.5979797,45 30,45 C18.4020203,45 9,54.4020203 9,66 C9,77.5979797 18.4020203,87 30,87 Z",fill:e||"#424242"})]}),s.jsx("path",{d:"M84,168 C37.8,168 0,130.2 0,84 C0,37.8 37.8,0 84,0 C130.2,0 168,37.8 168,84 C168,130.2 130.2,168 84,168 Z M84,12 C44.4,12 12,44.4 12,84 C12,123.6 44.4,156 84,156 C123.6,156 156,123.6 156,84 C156,44.4 123.6,12 84,12 Z M122.342895,100.615799 C120.353028,98.7917542 118.031517,97.4651764 115.710006,96.3044208 C112.227739,94.6461985 107.08725,91.9930429 103.273338,94.4803763 C101.946761,95.3094874 100.951827,96.8018875 99.7910717,97.7968209 C98.2986716,99.2892209 96.6404493,100.781621 94.6505826,101.776554 C86.1936489,106.087932 75.0835595,104.263888 68.1190259,97.7968209 C64.1392924,93.6512651 61.651959,87.6816649 61.8177812,81.8778869 C61.9836034,77.4006867 63.4760035,72.7576643 66.2949814,69.1095752 C67.455737,67.6171752 68.948137,66.2905973 70.2747149,64.7981973 C71.6012927,63.4716194 72.4304039,61.9792194 72.4304039,59.9893526 C72.4304039,57.5020192 71.2696482,55.180508 70.2747149,52.8589968 C69.2797815,50.7033078 68.2848481,48.3817966 66.7924481,46.5577521 C65.4658702,44.7337075 63.4760035,42.7438408 61.3203145,41.9147296 C60.3253811,41.5830852 59.3304477,41.4172629 58.3355144,41.7489074 C57.0089365,42.0805519 56.0140032,43.0754852 55.0190698,43.9045964 C50.7076918,47.221041 46.2304916,51.0349522 44.0748027,56.0096191 C40.4267136,63.9690861 42.0849359,73.0893087 45.2355583,80.8829535 C48.8836473,89.6715316 54.8532476,97.6309986 61.8177812,104.098066 C65.9633369,108.243621 70.6063593,112.057533 75.5810262,115.208155 C82.0480931,119.187888 89.5100935,122.504333 97.137916,123.333444 C102.444227,123.996733 108.082183,123.167622 112.725206,120.680289 C114.715072,119.519533 116.539117,118.192955 118.197339,116.534733 C120.021384,114.710688 122.01125,112.720821 123.50365,110.730955 C124.498584,109.570199 125.825162,108.409444 125.990984,106.585399 C126.156806,104.263888 124.001117,102.108199 122.342895,100.615799 Z",fill:"#2AC420"})]})})},us=t=>{const e=st(),i=e.current.name==="dark"?e.current.text.primaryColor:void 0;return s.jsx("header",{...t,children:s.jsx(qe,{$textcolor:i,size:"45px"})})},Je=I.li.withConfig({displayName:"PhoneListItem",componentId:"sc-2o7frs-0"})(["padding:0;display:block;.container{display:flex;width:100%;border-bottom:1px solid ",";padding:10px 25px;position:relative;transition:all 0.3s ease-in;z-index:10;color:",";text-decoration:none;height:100%;&:hover{&:after{background-color:",";content:'';position:absolute;top:0;left:0;width:100%;height:100%;z-index:9;}}}.icons{position:relative;margin-right:15px;}.to{display:flex;&:not(:last-child){margin-bottom:5px;}}.text{color:",";display:block;&:not(:last-child){margin-right:5px;}}.via{color:#736867;}.arrow{position:absolute;top:4px;left:8px;transform:",";}"],t=>t.theme.border.color,t=>t.theme.text.primaryColor,t=>t.theme.name==="dark"?"#ffffff20":"#00000020",t=>t.theme.text.primaryColor,t=>t.$incoming?"rotate(150deg)":"rotate(330deg)"),Xe=t=>{const e=it(),i=st(),r=()=>e.showArchived?re.replace(":id",t.data.id):ne.replace(":id",t.data.id);return s.jsx(Je,{$incoming:t.data.direction===J,children:s.jsxs(ae,{to:r(),className:"container",children:[s.jsxs("div",{className:"icons",children:[s.jsx($e,{size:"35px",fill:i.current.text.primaryColor}),s.jsx(ke,{className:"arrow",size:"15px",fill:i.current.text.primaryColor})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"to",children:[s.jsxs("p",{className:"text",children:["From: ",t.data.from]}),s.jsxs("span",{className:"via",children:["(via $",t.data.via,")"]})]}),s.jsxs("p",{className:"text",children:["To: ",t.data.to]})]})]})})},Ye=I.div.withConfig({displayName:"PhoneList",componentId:"sc-bjr1l7-0"})(["color:white;width:400px;overflow-y:auto;@media (max-width:","px){width:100%;}ul{overflow:scroll;border-top:1px solid ",";}.buttons{width:100%;&__lists{display:grid;grid-template-columns:repeat(3,1fr);}&__archive{width:100%;}}"],q,t=>t.theme.border.color),ts=(t,e)=>t.$active?e.button.variants.primary.hoverBg:e.button.variants.primary.bg,es=(t,e)=>t.$active?e.button.variants.primary.hoverFg:e.button.variants.primary.fg,ut=I(zt).withConfig({displayName:"FilterButton",componentId:"sc-bjr1l7-1"})(["background-color:",";color:",""],t=>ts(t,t.theme),t=>es(t,t.theme)),mt="ALL",ms=g.forwardRef((t,e)=>{const i=it(),r=Me(!i.showArchived),o=Oe(i.showArchived),h=Ie(),[n,m]=g.useState(i.showArchived?o.data:r.data),[x,b]=g.useState(mt),[v,l]=oe(!1);g.useEffect(()=>{i.showArchived?m(o.data):i.showArchived||m(r.data)},[r.data,o.data,i.showArchived]);const E=()=>{let j=[];switch(x){case J:j=n==null?void 0:n.filter(R=>R.direction===x);break;case ct:j=n==null?void 0:n.filter(R=>R.direction===x);break;default:j=n;break}return j},C=async()=>{if(l(),i.showArchived){if(!o.data)return l();await Promise.all(o.data.map(async j=>await h.mutateAsync({...j,is_archived:!1}))),await o.refetch()}else{if(!r.data)return l();await Promise.all(r.data.map(async j=>await h.mutateAsync({...j,is_archived:!0}))),await r.refetch()}setTimeout(l,300)},U=()=>r.isLoading||o.isLoading||v?s.jsx("div",{children:"Loading"}):(E()||[]).map(j=>s.jsx(Xe,{data:j},j.id));return s.jsxs(Ye,{id:"list",ref:e,children:[s.jsxs("div",{className:"buttons",children:[s.jsxs("div",{className:"buttons__lists",children:[s.jsx(ut,{$active:x===mt,onClick:()=>b(mt),children:"All"}),s.jsx(ut,{$active:x===J,onClick:()=>b(J),children:"Incoming"}),s.jsx(ut,{$active:x===ct,onClick:()=>b(ct),children:"Outgoing"})]}),s.jsxs(zt,{onClick:C,className:"buttons__archive",children:[i.showArchived?"UnArchive":"Archive"," All"]})]}),U()]})});export{hs as A,zt as B,us as H,os as I,ls as M,le as O,ms as P,ds as S,Kt as a,Ie as b,ke as c,$e as d,ns as e,cs as f,Me as g,Oe as h,rs as u};
