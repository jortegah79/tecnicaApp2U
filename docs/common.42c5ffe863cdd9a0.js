"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[76],{1657:(h,d,s)=>{s.d(d,{y:()=>_});var a=s(3953);let _=(()=>{var o;class i{constructor(){this.name=""}}return(o=i).\u0275fac=function(r){return new(r||o)},o.\u0275cmp=a.VBU({type:o,selectors:[["app-title-card"]],inputs:{name:"name"},standalone:!0,features:[a.aNF],decls:4,vars:2,consts:[[1,"card-text"],[3,"src"]],template:function(r,c){1&r&&(a.j41(0,"div",0)(1,"span"),a.EFF(2),a.k0s(),a.nrm(3,"img",1),a.k0s()),2&r&&(a.R7$(2),a.JRh(c.name),a.R7$(),a.FS9("src","assets/ic_heart.svg",a.B4B))},styles:[".card-text[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:16px;font-weight:200;font-size:x-large;font-family:Arapey}.card-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px;width:35px}"]}),i})()},7291:(h,d,s)=>{s.d(d,{n:()=>l});var a=s(467),_=s(3953),o=s(369),i=s(5312);let l=(()=>{var r;class c{constructor(){this._storage=null,this.storage=(0,_.WQX)(o.w),this.init()}init(){var e=this;return(0,a.A)(function*(){const n=yield e.storage.create();e._storage=n})()}saveData(e,n){var t;null===(t=this._storage)||void 0===t||t.set(e,n)}loadData(e){var n=this;return(0,a.A)(function*(){var t;return yield null===(t=n._storage)||void 0===t?void 0:t.get(e)})()}clearData(){var e;null===(e=this._storage)||void 0===e||e.clear()}removeData(e){var n=this;return(0,a.A)(function*(){var t;yield null===(t=n._storage)||void 0===t?void 0:t.remove(e)})()}countResults(){var e=this;return(0,a.A)(function*(){var n,t;return(null!==(n=yield null===(t=e._storage)||void 0===t?void 0:t.get("results"))&&void 0!==n?n:[]).length})()}insertData(){var e=this;return(0,a.A)(function*(){fetch("assets/datos.json").then(t=>t.json()).then(t=>{e.saveData(i.c.RESULTS,t)})})()}getDataEvent(e){var n=this;return(0,a.A)(function*(){var t;const u=null!==(t=yield n.loadData(i.c.RESULTS))&&void 0!==t?t:[],v=u.findIndex(p=>p.id===parseInt(e));if(-1===v)throw new Error(`No data found for id: ${e}`);return u[v]})()}}return(r=c).\u0275fac=function(e){return new(e||r)},r.\u0275prov=_.jDH({token:r,factory:r.\u0275fac,providedIn:"root"}),c})()}}]);