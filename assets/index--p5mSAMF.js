var ag=Object.defineProperty;var og=(i,e,t)=>e in i?ag(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ju=(i,e,t)=>(og(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 20110-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="163",ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lg=0,Ku=1,cg=2,bf=1,ug=2,Li=3,fr=0,bn=1,hi=2,ki=0,Fs=1,Zu=2,Ju=3,Qu=4,hg=5,Ir=100,dg=101,fg=102,pg=103,mg=104,gg=200,_g=201,vg=202,xg=203,Ac=204,wc=205,yg=206,Mg=207,Sg=208,Eg=209,Tg=210,bg=211,Dg=212,Ag=213,wg=214,Cg=0,Rg=1,Pg=2,Ko=3,Lg=4,Fg=5,Ig=6,Ug=7,Df=0,Ng=1,Og=2,cr=0,Bg=1,kg=2,zg=3,Af=4,Hg=5,Vg=6,Gg=7,Hs=300,Vs=301,Gs=302,Zo=303,Cc=304,gl=306,Rc=1e3,xn=1001,Pc=1002,Sn=1003,Wg=1004,qa=1005,$t=1006,Rl=1007,kr=1008,eh=1008,si=1009,wf=1010,Cf=1011,Rf=1012,du=1013,$r=1014,ri=1015,qr=1016,Pf=1017,Lf=1018,Wa=1020,Xg=35902,Yg=1021,$g=1022,En=1023,qg=1024,jg=1025,Is=1026,Ra=1027,Kg=1028,Ff=1029,Zg=1030,If=1031,Uf=1033,Pl=33776,Ll=33777,Fl=33778,Il=33779,th=35840,nh=35841,ih=35842,rh=35843,Nf=36196,sh=37492,ah=37496,oh=37808,lh=37809,ch=37810,uh=37811,hh=37812,dh=37813,fh=37814,ph=37815,mh=37816,gh=37817,_h=37818,vh=37819,xh=37820,yh=37821,Ul=36492,Mh=36494,Sh=36495,Jg=36283,Eh=36284,Th=36285,bh=36286,Qg=3200,e0=3201,Of=0,t0=1,nr="",ni="srgb",ai="srgb-linear",fu="display-p3",_l="display-p3-linear",Jo="linear",_t="srgb",Qo="rec709",el="p3",rs=7680,Dh=519,n0=512,i0=513,r0=514,Bf=515,s0=516,a0=517,o0=518,l0=519,Ah=35044,wh="300 es",Ni=2e3,tl=2001;class Qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const ya=Math.PI/180,Ws=180/Math.PI;function Zs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function nn(i,e,t){return Math.max(e,Math.min(t,i))}function pu(i,e){return(i%e+e)%e}function c0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function u0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ma(i,e,t){return(1-t)*i+t*e}function h0(i,e,t,n){return Ma(i,e,1-Math.exp(-t*n))}function d0(i,e=1){return e-Math.abs(pu(i,e*2)-e)}function f0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function m0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function g0(i,e){return i+Math.random()*(e-i)}function _0(i){return i*(.5-Math.random())}function v0(i){i!==void 0&&(Ch=i);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(i){return i*ya}function y0(i){return i*Ws}function M0(i){return(i&i-1)===0&&i!==0}function S0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function E0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function T0(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kf={DEG2RAD:ya,RAD2DEG:Ws,generateUUID:Zs,clamp:nn,euclideanModulo:pu,mapLinear:c0,inverseLerp:u0,lerp:Ma,damp:h0,pingpong:d0,smoothstep:f0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:_0,seededRandom:v0,degToRad:x0,radToDeg:y0,isPowerOfTwo:M0,ceilPowerOfTwo:S0,floorPowerOfTwo:E0,setQuaternionFromProperEuler:T0,normalize:cn,denormalize:Ts};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,r,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],g=r[0],p=r[3],f=r[6],y=r[1],v=r[4],E=r[7],A=r[2],D=r[5],b=r[8];return s[0]=a*g+o*y+l*A,s[3]=a*p+o*v+l*D,s[6]=a*f+o*E+l*b,s[1]=c*g+u*y+h*A,s[4]=c*p+u*v+h*D,s[7]=c*f+u*E+h*b,s[2]=d*g+m*y+_*A,s[5]=d*p+m*v+_*D,s[8]=d*f+m*E+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=t*h+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nl.makeScale(e,t)),this}rotate(e){return this.premultiply(Nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nl=new tt;function zf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b0(){const i=nl("canvas");return i.style.display="block",i}const Rh={};function D0(i){i in Rh||(Rh[i]=!0,console.warn(i))}const Ph=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[ai]:{transfer:Jo,primaries:Qo,toReference:i=>i,fromReference:i=>i},[ni]:{transfer:_t,primaries:Qo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_l]:{transfer:Jo,primaries:el,toReference:i=>i.applyMatrix3(Lh),fromReference:i=>i.applyMatrix3(Ph)},[fu]:{transfer:_t,primaries:el,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Lh),fromReference:i=>i.applyMatrix3(Ph).convertLinearToSRGB()}},A0=new Set([ai,_l]),dt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!A0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ja[e].toReference,r=ja[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ja[i].primaries},getTransfer:function(i){return i===nr?Jo:ja[i].transfer}};function Us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ol(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ss;class w0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=nl("canvas")),ss.width=e.width,ss.height=e.height;const n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Us(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Us(t[n]/255)*255):t[n]=Us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C0=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bl(r[a].image)):s.push(Bl(r[a]))}else s=Bl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?w0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R0=0;class Pt extends Qr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=xn,r=xn,s=$t,a=kr,o=En,l=si,c=Pt.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Zs(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Hs;Pt.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,n=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,A=(f+1)/2,D=(u+d)/4,b=(h+g)/4,C=(_+p)/4;return v>E&&v>A?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=D/n,s=b/n):E>A?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=D/r,s=C/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=C/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P0 extends Qr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends P0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vf extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class L0 extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==m||u!==_){let p=1-o;const f=l*d+c*m+u*_+h*g,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),D=Math.atan2(A,f*y);p=Math.sin(p*D)/A,o=Math.sin(o*D)/A}const E=o*y;if(l=l*p+d*E,c=c*p+m*E,u=u*p+_*E,h=h*p+g*E,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*m-c*d,e[t+1]=l*_+u*d+c*h-o*m,e[t+2]=c*_+u*m+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new z,Fh=new pr;class Xa{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Za.subVectors(this.max,ta),as.subVectors(e.a,ta),os.subVectors(e.b,ta),ls.subVectors(e.c,ta),$i.subVectors(os,as),qi.subVectors(ls,os),Mr.subVectors(as,ls);let t=[0,-$i.z,$i.y,0,-qi.z,qi.y,0,-Mr.z,Mr.y,$i.z,0,-$i.x,qi.z,0,-qi.x,Mr.z,0,-Mr.x,-$i.y,$i.x,0,-qi.y,qi.x,0,-Mr.y,Mr.x,0];return!zl(t,as,os,ls,Za)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,as,os,ls,Za))?!1:(Ja.crossVectors($i,qi),t=[Ja.x,Ja.y,Ja.z],zl(t,as,os,ls,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new z,new z,new z,new z,new z,new z,new z,new z],Jn=new z,Ka=new Xa,as=new z,os=new z,ls=new z,$i=new z,qi=new z,Mr=new z,ta=new z,Za=new z,Ja=new z,Sr=new z;function zl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Sr.fromArray(i,s);const o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const F0=new Xa,na=new z,Hl=new z;class mu{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(na,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Hl)),this.expandByPoint(na.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new z,Vl=new z,Qa=new z,ji=new z,Gl=new z,eo=new z,Wl=new z;class Gf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vl.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Vl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qa),o=ji.dot(this.direction),l=-ji.dot(Qa),c=ji.lengthSq(),u=Math.abs(1-a*a);let h,d,m,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vl).addScaledVector(Qa,d),m}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),r=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,r,s){Gl.subVectors(t,e),eo.subVectors(n,e),Wl.crossVectors(Gl,eo);let a=this.direction.dot(Wl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ji.subVectors(this.origin,e);const l=o*this.direction.dot(eo.crossVectors(ji,eo));if(l<0)return null;const c=o*this.direction.dot(Gl.cross(ji));if(c<0||l+c>a)return null;const u=-o*ji.dot(Wl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,r,s,a,o,l,c,u,h,d,m,_,g,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,m,_,g,p)}set(e,t,n,r,s,a,o,l,c,u,h,d,m,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,U0)}lookAt(e,t,n){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ki.crossVectors(n,Pn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ki.crossVectors(n,Pn)),Ki.normalize(),to.crossVectors(Pn,Ki),r[0]=Ki.x,r[4]=to.x,r[8]=Pn.x,r[1]=Ki.y,r[5]=to.y,r[9]=Pn.y,r[2]=Ki.z,r[6]=to.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],y=n[3],v=n[7],E=n[11],A=n[15],D=r[0],b=r[4],C=r[8],M=r[12],S=r[1],F=r[5],I=r[9],R=r[13],N=r[2],V=r[6],W=r[10],Z=r[14],L=r[3],Q=r[7],H=r[11],ee=r[15];return s[0]=a*D+o*S+l*N+c*L,s[4]=a*b+o*F+l*V+c*Q,s[8]=a*C+o*I+l*W+c*H,s[12]=a*M+o*R+l*Z+c*ee,s[1]=u*D+h*S+d*N+m*L,s[5]=u*b+h*F+d*V+m*Q,s[9]=u*C+h*I+d*W+m*H,s[13]=u*M+h*R+d*Z+m*ee,s[2]=_*D+g*S+p*N+f*L,s[6]=_*b+g*F+p*V+f*Q,s[10]=_*C+g*I+p*W+f*H,s[14]=_*M+g*R+p*Z+f*ee,s[3]=y*D+v*S+E*N+A*L,s[7]=y*b+v*F+E*V+A*Q,s[11]=y*C+v*I+E*W+A*H,s[15]=y*M+v*R+E*Z+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],f=e[15];return _*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+g*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],f=e[15],y=h*p*c-g*d*c+g*l*m-o*p*m-h*l*f+o*d*f,v=_*d*c-u*p*c-_*l*m+a*p*m+u*l*f-a*d*f,E=u*g*c-_*h*c+_*o*m-a*g*m-u*o*f+a*h*f,A=_*h*l-u*g*l-_*o*d+a*g*d+u*o*p-a*h*p,D=t*y+n*v+r*E+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/D;return e[0]=y*b,e[1]=(g*d*s-h*p*s-g*r*m+n*p*m+h*r*f-n*d*f)*b,e[2]=(o*p*s-g*l*s+g*r*c-n*p*c-o*r*f+n*l*f)*b,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*b,e[4]=v*b,e[5]=(u*p*s-_*d*s+_*r*m-t*p*m-u*r*f+t*d*f)*b,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*f-t*l*f)*b,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*b,e[8]=E*b,e[9]=(_*h*s-u*g*s-_*n*m+t*g*m+u*n*f-t*h*f)*b,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*f+t*o*f)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*b,e[12]=A*b,e[13]=(u*g*r-_*h*r+_*n*d-t*g*d-u*n*p+t*h*p)*b,e[14]=(_*o*r-a*g*r-_*n*l+t*g*l+a*n*p-t*o*p)*b,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,_=s*h,g=a*u,p=a*h,f=o*h,y=l*c,v=l*u,E=l*h,A=n.x,D=n.y,b=n.z;return r[0]=(1-(g+f))*A,r[1]=(m+E)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(m-E)*D,r[5]=(1-(d+f))*D,r[6]=(p+y)*D,r[7]=0,r[8]=(_+v)*b,r[9]=(p-y)*b,r[10]=(1-(d+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const a=cs.set(r[4],r[5],r[6]).length(),o=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const c=1/s,u=1/a,h=1/o;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Ni){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,_;if(o===Ni)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===tl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Ni){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,m=(n+r)*u;let _,g;if(o===Ni)_=(a+s)*h,g=-2*h;else if(o===tl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cs=new z,Qn=new Lt,I0=new z(0,0,0),U0=new z(1,1,1),Ki=new z,to=new z,Pn=new z,Ih=new Lt,Uh=new pr;class Si{constructor(e=0,t=0,n=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N0=0;const Nh=new z,us=new pr,wi=new Lt,no=new z,ia=new z,O0=new z,B0=new pr,Oh=new z(1,0,0),Bh=new z(0,1,0),kh=new z(0,0,1),zh={type:"added"},k0={type:"removed"},hs={type:"childadded",child:null},Xl={type:"childremoved",child:null};class jt extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new z,t=new Si,n=new pr,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new tt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ia,no,this.up):wi.lookAt(no,ia,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(wi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new z(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new z,Ci=new z,Yl=new z,Ri=new z,ds=new z,fs=new z,Hh=new z,$l=new z,ql=new z,jl=new z;class di{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ei.subVectors(e,t),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ei.subVectors(r,t),Ci.subVectors(n,t),Yl.subVectors(e,t);const a=ei.dot(ei),o=ei.dot(Ci),l=ei.dot(Yl),c=Ci.dot(Ci),u=Ci.dot(Yl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static isFrontFacing(e,t,n,r){return ei.subVectors(n,t),Ci.subVectors(e,t),ei.cross(Ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return di.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ds.subVectors(r,n),fs.subVectors(s,n),$l.subVectors(e,n);const l=ds.dot($l),c=fs.dot($l);if(l<=0&&c<=0)return t.copy(n);ql.subVectors(e,r);const u=ds.dot(ql),h=fs.dot(ql);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ds,a);jl.subVectors(e,s);const m=ds.dot(jl),_=fs.dot(jl);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(fs,o);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Hh.subVectors(s,r),o=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(Hh,o);const f=1/(p+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=pu(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Kl(a,s,e+1/3),this.g=Kl(a,s,e),this.b=Kl(a,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=ni){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const n=Xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=Ol(e.r),this.g=Ol(e.g),this.b=Ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return dt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(nn(Qt.r*255,0,255))*65536+Math.round(nn(Qt.g*255,0,255))*256+Math.round(nn(Qt.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ni){dt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(io);const n=Ma(Zi.h,io.h,t),r=Ma(Zi.s,io.s,t),s=Ma(Zi.l,io.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ut;ut.NAMES=Xf;let z0=0;class Js extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Fs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=wc,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==fr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==wc&&(n.blendDst=this.blendDst),this.blendEquation!==Ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vl extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new z,ro=new Ve;class vi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return D0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ah&&(e.usage=this.usage),e}}class Yf extends vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $f extends vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xi extends vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let H0=0;const Wn=new Lt,Zl=new jt,ps=new z,Ln=new Xa,ra=new Xa,zt=new z;class vr extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?$f:Yf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Ln.min,ra.min),Ln.expandByPoint(zt),zt.addVectors(Ln.max,ra.max),Ln.expandByPoint(zt)):(Ln.expandByPoint(ra.min),Ln.expandByPoint(ra.max))}Ln.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),zt.add(ps)),r=Math.max(r,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new z,l[C]=new z;const c=new z,u=new z,h=new z,d=new Ve,m=new Ve,_=new Ve,g=new z,p=new z;function f(C,M,S){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(F),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(F),o[C].add(g),o[M].add(g),o[S].add(g),l[C].add(p),l[M].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){const S=y[C],F=S.start,I=S.count;for(let R=F,N=F+I;R<N;R+=3)f(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const v=new z,E=new z,A=new z,D=new z;function b(C){A.fromBufferAttribute(r,C),D.copy(A);const M=o[C];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(D,M);const F=E.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,F)}for(let C=0,M=y.length;C<M;++C){const S=y[C],F=S.start,I=S.count;for(let R=F,N=F+I;R<N;R+=3)b(e.getX(R+0)),b(e.getX(R+1)),b(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[m++]}return new vi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vr,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new Lt,Er=new Gf,so=new mu,Gh=new z,ms=new z,gs=new z,_s=new z,Jl=new z,ao=new z,oo=new Ve,lo=new Ve,co=new Ve,Wh=new z,Xh=new z,Yh=new z,uo=new z,ho=new z;class Tn extends jt{constructor(e=new vr,t=new vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Jl.fromBufferAttribute(h,e),a?ao.addScaledVector(Jl,u):ao.addScaledVector(Jl.sub(t),u))}t.add(ao)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(so.containsPoint(Er.origin)===!1&&(Er.intersectSphere(so,Gh)===null||Er.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,A=v;E<A;E+=3){const D=o.getX(E),b=o.getX(E+1),C=o.getX(E+2);r=fo(this,f,e,n,c,u,h,D,b,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const y=o.getX(p),v=o.getX(p+1),E=o.getX(p+2);r=fo(this,a,e,n,c,u,h,y,v,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,A=v;E<A;E+=3){const D=E,b=E+1,C=E+2;r=fo(this,f,e,n,c,u,h,D,b,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const y=p,v=p+1,E=p+2;r=fo(this,a,e,n,c,u,h,y,v,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function V0(i,e,t,n,r,s,a,o){let l;if(e.side===bn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===fr,o),l===null)return null;ho.copy(o),ho.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:i}}function fo(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ms),i.getVertexPosition(l,gs),i.getVertexPosition(c,_s);const u=V0(i,e,t,n,ms,gs,_s,uo);if(u){r&&(oo.fromBufferAttribute(r,o),lo.fromBufferAttribute(r,l),co.fromBufferAttribute(r,c),u.uv=di.getInterpolation(uo,ms,gs,_s,oo,lo,co,new Ve)),s&&(oo.fromBufferAttribute(s,o),lo.fromBufferAttribute(s,l),co.fromBufferAttribute(s,c),u.uv1=di.getInterpolation(uo,ms,gs,_s,oo,lo,co,new Ve)),a&&(Wh.fromBufferAttribute(a,o),Xh.fromBufferAttribute(a,l),Yh.fromBufferAttribute(a,c),u.normal=di.getInterpolation(uo,ms,gs,_s,Wh,Xh,Yh,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};di.getNormal(ms,gs,_s,h.normal),u.face=h}return u}class Ya extends vr{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(c,3)),this.setAttribute("normal",new xi(u,3)),this.setAttribute("uv",new xi(h,2));function _(g,p,f,y,v,E,A,D,b,C,M){const S=E/b,F=A/C,I=E/2,R=A/2,N=D/2,V=b+1,W=C+1;let Z=0,L=0;const Q=new z;for(let H=0;H<W;H++){const ee=H*F-R;for(let ye=0;ye<V;ye++){const Ue=ye*S-I;Q[g]=Ue*y,Q[p]=ee*v,Q[f]=N,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[p]=0,Q[f]=D>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ye/b),h.push(1-H/C),Z+=1}}for(let H=0;H<C;H++)for(let ee=0;ee<b;ee++){const ye=d+ee+V*H,Ue=d+ee+V*(H+1),X=d+(ee+1)+V*(H+1),ie=d+(ee+1)+V*H;l.push(ye,Ue,ie),l.push(Ue,X,ie),L+=6}o.addGroup(m,L,M),m+=L,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=Xs(i[t]);for(const r in n)e[r]=n[r]}return e}function G0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const W0={clone:Xs,merge:hn};var X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jf extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new z,$h=new Ve,qh=new Ve;class Nn extends jf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,$h,qh),t.subVectors(qh,$h)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ya*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class $0 extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(vs,xs,e,t);r.layers=this.layers,this.add(r);const s=new Nn(vs,xs,e,t);s.layers=this.layers,this.add(s);const a=new Nn(vs,xs,e,t);a.layers=this.layers,this.add(a);const o=new Nn(vs,xs,e,t);o.layers=this.layers,this.add(o);const l=new Nn(vs,xs,e,t);l.layers=this.layers,this.add(l);const c=new Nn(vs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Kf extends Pt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q0 extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ya(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:ki});s.uniforms.tEquirect.value=t;const a=new Tn(r,s),o=t.minFilter;return t.minFilter===kr&&(t.minFilter=$t),new $0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ql=new z,j0=new z,K0=new tt;class tr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ql.subVectors(n,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ql),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K0.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new mu,po=new z;class gu{constructor(e=new tr,t=new tr,n=new tr,r=new tr,s=new tr,a=new tr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],f=r[12],y=r[13],v=r[14],E=r[15];if(n[0].setComponents(l-s,d-c,p-m,E-f).normalize(),n[1].setComponents(l+s,d+c,p+m,E+f).normalize(),n[2].setComponents(l+a,d+u,p+_,E+y).normalize(),n[3].setComponents(l-a,d-u,p-_,E-y).normalize(),n[4].setComponents(l-o,d-h,p-g,E-v).normalize(),t===Ni)n[5].setComponents(l+o,d+h,p+g,E+v).normalize();else if(t===tl)n[5].setComponents(o,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(po.x=r.normal.x>0?e.max.x:e.min.x,po.y=r.normal.y>0?e.max.y:e.min.y,po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Z0(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),h.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let m=0,_=d.length;m<_;m++){const g=d[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class es extends vr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],_=[],g=[],p=[];for(let f=0;f<u;f++){const y=f*d-a;for(let v=0;v<c;v++){const E=v*h-s;_.push(E,-y,0),g.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,E=y+c*(f+1),A=y+1+c*(f+1),D=y+1+c*f;m.push(v,E,D),m.push(E,A,D)}this.setIndex(m),this.setAttribute("position",new xi(_,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,M1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,p_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,av=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ov=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_v=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ev=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:e1,alphamap_pars_fragment:t1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:r1,aomap_pars_fragment:s1,batching_pars_vertex:a1,batching_vertex:o1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:h1,bumpmap_pars_fragment:d1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:_1,color_pars_fragment:v1,color_pars_vertex:x1,color_vertex:y1,common:M1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:E1,displacementmap_pars_vertex:T1,displacementmap_vertex:b1,emissivemap_fragment:D1,emissivemap_pars_fragment:A1,colorspace_fragment:w1,colorspace_pars_fragment:C1,envmap_fragment:R1,envmap_common_pars_fragment:P1,envmap_pars_fragment:L1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:X1,envmap_vertex:I1,fog_vertex:U1,fog_pars_vertex:N1,fog_fragment:O1,fog_pars_fragment:B1,gradientmap_pars_fragment:k1,lightmap_fragment:z1,lightmap_pars_fragment:H1,lights_lambert_fragment:V1,lights_lambert_pars_fragment:G1,lights_pars_begin:W1,lights_toon_fragment:Y1,lights_toon_pars_fragment:$1,lights_phong_fragment:q1,lights_phong_pars_fragment:j1,lights_physical_fragment:K1,lights_physical_pars_fragment:Z1,lights_fragment_begin:J1,lights_fragment_maps:Q1,lights_fragment_end:e_,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:n_,logdepthbuf_pars_vertex:i_,logdepthbuf_vertex:r_,map_fragment:s_,map_pars_fragment:a_,map_particle_fragment:o_,map_particle_pars_fragment:l_,metalnessmap_fragment:c_,metalnessmap_pars_fragment:u_,morphinstance_vertex:h_,morphcolor_vertex:d_,morphnormal_vertex:f_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:v_,normal_pars_vertex:x_,normal_vertex:y_,normalmap_pars_fragment:M_,clearcoat_normal_fragment_begin:S_,clearcoat_normal_fragment_maps:E_,clearcoat_pars_fragment:T_,iridescence_pars_fragment:b_,opaque_fragment:D_,packing:A_,premultiplied_alpha_fragment:w_,project_vertex:C_,dithering_fragment:R_,dithering_pars_fragment:P_,roughnessmap_fragment:L_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:I_,shadowmap_pars_vertex:U_,shadowmap_vertex:N_,shadowmask_pars_fragment:O_,skinbase_vertex:B_,skinning_pars_vertex:k_,skinning_vertex:z_,skinnormal_vertex:H_,specularmap_fragment:V_,specularmap_pars_fragment:G_,tonemapping_fragment:W_,tonemapping_pars_fragment:X_,transmission_fragment:Y_,transmission_pars_fragment:$_,uv_pars_fragment:q_,uv_pars_vertex:j_,uv_vertex:K_,worldpos_vertex:Z_,background_vert:J_,background_frag:Q_,backgroundCube_vert:ev,backgroundCube_frag:tv,cube_vert:nv,cube_frag:iv,depth_vert:rv,depth_frag:sv,distanceRGBA_vert:av,distanceRGBA_frag:ov,equirect_vert:lv,equirect_frag:cv,linedashed_vert:uv,linedashed_frag:hv,meshbasic_vert:dv,meshbasic_frag:fv,meshlambert_vert:pv,meshlambert_frag:mv,meshmatcap_vert:gv,meshmatcap_frag:_v,meshnormal_vert:vv,meshnormal_frag:xv,meshphong_vert:yv,meshphong_frag:Mv,meshphysical_vert:Sv,meshphysical_frag:Ev,meshtoon_vert:Tv,meshtoon_frag:bv,points_vert:Dv,points_frag:Av,shadow_vert:wv,shadow_frag:Cv,sprite_vert:Rv,sprite_frag:Pv},Me={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ui={basic:{uniforms:hn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:hn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ut(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:hn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:hn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:hn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ut(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:hn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:hn([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:hn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:hn([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:hn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:hn([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:hn([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:hn([Me.lights,Me.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ui.physical={uniforms:hn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const mo={r:0,b:0,g:0},br=new Si,Lv=new Lt;function Fv(i,e,t,n,r,s,a){const o=new ut(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function _(p,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gl)?(u===void 0&&(u=new Tn(new Ya(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Xs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),br.copy(f.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(br)),u.material.toneMapped=dt.getTransfer(v.colorSpace)!==_t,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tn(new es(2,2),new Ei({name:"BackgroundMaterial",uniforms:Xs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=dt.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){p.getRGB(mo,qf(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function Iv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,F,I,R,N){let V=!1;const W=h(R,I,F);s!==W&&(s=W,c(s.object)),V=m(S,R,I,N),V&&_(S,R,I,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(S,F,I,R),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,F,I){const R=I.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let V=N[F.id];V===void 0&&(V={},N[F.id]=V);let W=V[R];return W===void 0&&(W=d(l()),V[R]=W),W}function d(S){const F=[],I=[],R=[];for(let N=0;N<t;N++)F[N]=0,I[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:R,object:S,attributes:{},index:null}}function m(S,F,I,R){const N=s.attributes,V=F.attributes;let W=0;const Z=I.getAttributes();for(const L in Z)if(Z[L].location>=0){const H=N[L];let ee=V[L];if(ee===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;W++}return s.attributesNum!==W||s.index!==R}function _(S,F,I,R){const N={},V=F.attributes;let W=0;const Z=I.getAttributes();for(const L in Z)if(Z[L].location>=0){let H=V[L];H===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(H=S.instanceColor));const ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),N[L]=ee,W++}s.attributes=N,s.attributesNum=W,s.index=R}function g(){const S=s.newAttributes;for(let F=0,I=S.length;F<I;F++)S[F]=0}function p(S){f(S,0)}function f(S,F){const I=s.newAttributes,R=s.enabledAttributes,N=s.attributeDivisors;I[S]=1,R[S]===0&&(i.enableVertexAttribArray(S),R[S]=1),N[S]!==F&&(i.vertexAttribDivisor(S,F),N[S]=F)}function y(){const S=s.newAttributes,F=s.enabledAttributes;for(let I=0,R=F.length;I<R;I++)F[I]!==S[I]&&(i.disableVertexAttribArray(I),F[I]=0)}function v(S,F,I,R,N,V,W){W===!0?i.vertexAttribIPointer(S,F,I,N,V):i.vertexAttribPointer(S,F,I,R,N,V)}function E(S,F,I,R){g();const N=R.attributes,V=I.getAttributes(),W=F.defaultAttributeValues;for(const Z in V){const L=V[Z];if(L.location>=0){let Q=N[Z];if(Q===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const H=Q.normalized,ee=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;const Ue=ye.buffer,X=ye.type,ie=ye.bytesPerElement,me=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===du;if(Q.isInterleavedBufferAttribute){const he=Q.data,De=he.stride,Le=Q.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<L.locationSize;Ge++)f(L.location+Ge,he.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<L.locationSize;Ge++)p(L.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Ge=0;Ge<L.locationSize;Ge++)v(L.location+Ge,ee/L.locationSize,X,H,De*ie,(Le+ee/L.locationSize*Ge)*ie,me)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<L.locationSize;he++)f(L.location+he,Q.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<L.locationSize;he++)p(L.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let he=0;he<L.locationSize;he++)v(L.location+he,ee/L.locationSize,X,H,ee*ie,ee/L.locationSize*he*ie,me)}}else if(W!==void 0){const H=W[Z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(L.location,H);break;case 3:i.vertexAttrib3fv(L.location,H);break;case 4:i.vertexAttrib4fv(L.location,H);break;default:i.vertexAttrib1fv(L.location,H)}}}}y()}function A(){C();for(const S in n){const F=n[S];for(const I in F){const R=F[I];for(const N in R)u(R[N].object),delete R[N];delete F[I]}delete n[S]}}function D(S){if(n[S.id]===void 0)return;const F=n[S.id];for(const I in F){const R=F[I];for(const N in R)u(R[N].object),delete R[N];delete F[I]}delete n[S.id]}function b(S){for(const F in n){const I=n[F];if(I[S.id]===void 0)continue;const R=I[S.id];for(const N in R)u(R[N].object),delete R[N];delete I[S.id]}}function C(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Uv(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(l[d],c[d]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let m=0;m<u;m++)d+=c[m];t.update(d,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Nv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:f,maxSamples:y}}function Ov(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new tr,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let E=f.clippingState||null;l.value=E,E=u(_,d,v,m);for(let A=0;A!==v;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,E=m;v!==g;++v,E+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Bv(i){let e=new WeakMap;function t(a,o){return o===Zo?a.mapping=Vs:o===Cc&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zo||o===Cc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new q0(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Jf extends jf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,jh=[.125,.215,.35,.446,.526,.582],Ur=20,ec=new Jf,Kh=new ut;let tc=null,nc=0,ic=0,rc=!1;const Rr=(1+Math.sqrt(5))/2,ys=1/Rr,Zh=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Rr,ys),new z(0,Rr,-ys),new z(ys,0,Rr),new z(-ys,0,Rr),new z(Rr,ys,0),new z(-Rr,ys,0)];class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=rc,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:qr,format:En,colorSpace:ai,depthBuffer:!1},r=Qh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kv(s)),this._blurMaterial=zv(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,r){const o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Kh),u.toneMapping=cr,u.autoClear=!1;const m=new vl({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new Tn(new Ya,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Kh),g=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;go(r,y*v,f>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zh[(r-1)%Zh.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ur-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Ur;p>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ur}`);const f=[];let y=0;for(let b=0;b<Ur;++b){const C=b/g,M=Math.exp(-C*C/2);f.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const E=this._sizeLods[r],A=3*E*(r>v-ws?r-v+ws:0),D=4*(this._cubeSize-E);go(t,A,D,3*E,2*E),l.setRenderTarget(t),l.render(h,ec)}}function kv(i){const e=[],t=[],n=[];let r=i;const s=i-ws+1+jh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ws?l=jh[a-i+ws-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,f=1,y=new Float32Array(g*_*m),v=new Float32Array(p*_*m),E=new Float32Array(f*_*m);for(let D=0;D<m;D++){const b=D%3*2/3-1,C=D>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(M,g*_*D),v.set(d,p*_*D);const S=[D,D,D,D,D,D];E.set(S,f*_*D)}const A=new vr;A.setAttribute("position",new vi(y,g)),A.setAttribute("uv",new vi(v,p)),A.setAttribute("faceIndex",new vi(E,f)),e.push(A),r>ws&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qh(i,e,t){const n=new Vi(i,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zv(i,e,t){const n=new Float32Array(Ur),r=new z(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ed(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function td(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zo||l===Cc,u=l===Vs||l===Gs;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jh(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Jh(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gv(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,f=g.length;p<f;p++)e.remove(g[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,f=g.length;p<f;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const y=m.array;g=m.version;for(let v=0,E=y.length;v<E;v+=3){const A=y[v+0],D=y[v+1],b=y[v+2];d.push(A,D,D,b,b,A)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const A=v+0,D=v+1,b=v+2;d.push(A,D,D,b,b,A)}}else return;const p=new(zf(d)?$f:Yf)(d,1);p.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Wv(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,h*a,m),t.update(d,n,m))}function u(h,d,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<m;g++)this.render(h[g]/a,d[g]);else{_.multiDrawElementsWEBGL(n,d,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Xv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Yv(i,e,t){const n=new WeakMap,r=new Wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),p===!0&&(E=3);let A=o.attributes.position.count*E,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*D*4*h),C=new Vf(b,A,D,h);C.type=ri,C.needsUpdate=!0;const M=E*4;for(let F=0;F<h;F++){const I=f[F],R=y[F],N=v[F],V=A*D*4*F;for(let W=0;W<I.count;W++){const Z=W*M;_===!0&&(r.fromBufferAttribute(I,W),b[V+Z+0]=r.x,b[V+Z+1]=r.y,b[V+Z+2]=r.z,b[V+Z+3]=0),g===!0&&(r.fromBufferAttribute(R,W),b[V+Z+4]=r.x,b[V+Z+5]=r.y,b[V+Z+6]=r.z,b[V+Z+7]=0),p===!0&&(r.fromBufferAttribute(N,W),b[V+Z+8]=r.x,b[V+Z+9]=r.y,b[V+Z+10]=r.z,b[V+Z+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new Ve(A,D)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function $v(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Qf extends Pt{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Is,u!==Is&&u!==Ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Is&&(n=$r),n===void 0&&u===Ra&&(n=Wa),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ep=new Pt,tp=new Qf(1,1);tp.compareFunction=Bf;const np=new Vf,ip=new L0,rp=new Kf,nd=[],id=[],rd=new Float32Array(16),sd=new Float32Array(9),ad=new Float32Array(4);function Qs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=nd[r];if(s===void 0&&(s=new Float32Array(r),nd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xl(i,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Jv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),kt(t,n)}}function Qv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),kt(t,n)}}function ex(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),kt(t,n)}}function tx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function sx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function cx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?tp:ep;t.setTexture2D(e||s,r)}function ux(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ip,r)}function hx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rp,r)}function dx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||np,r)}function fx(i){switch(i){case 5126:return qv;case 35664:return jv;case 35665:return Kv;case 35666:return Zv;case 35674:return Jv;case 35675:return Qv;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return rx;case 5125:return sx;case 36294:return ax;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return dx}}function px(i,e){i.uniform1fv(this.addr,e)}function mx(i,e){const t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function gx(i,e){const t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function _x(i,e){const t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function vx(i,e){const t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xx(i,e){const t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yx(i,e){const t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mx(i,e){i.uniform1iv(this.addr,e)}function Sx(i,e){i.uniform2iv(this.addr,e)}function Ex(i,e){i.uniform3iv(this.addr,e)}function Tx(i,e){i.uniform4iv(this.addr,e)}function bx(i,e){i.uniform1uiv(this.addr,e)}function Dx(i,e){i.uniform2uiv(this.addr,e)}function Ax(i,e){i.uniform3uiv(this.addr,e)}function wx(i,e){i.uniform4uiv(this.addr,e)}function Cx(i,e,t){const n=this.cache,r=e.length,s=xl(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ep,s[a])}function Rx(i,e,t){const n=this.cache,r=e.length,s=xl(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ip,s[a])}function Px(i,e,t){const n=this.cache,r=e.length,s=xl(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rp,s[a])}function Lx(i,e,t){const n=this.cache,r=e.length,s=xl(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||np,s[a])}function Fx(i){switch(i){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return vx;case 35675:return xx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return bx;case 36294:return Dx;case 36295:return Ax;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fx(t.type)}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function od(i,e){i.seq.push(e),i.map[e.id]=e}function Ox(i,e,t){const n=i.name,r=n.length;for(sc.lastIndex=0;;){const s=sc.exec(n),a=sc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){od(t,c===void 0?new Ix(o,i,e):new Ux(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Nx(o),od(t,h)),t=h}}}class No{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ox(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ld(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bx=37297;let kx=0;function zx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Hx(i){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(i);let n;switch(e===t?n="":e===el&&t===Qo?n="LinearDisplayP3ToLinearSRGB":e===Qo&&t===el&&(n="LinearSRGBToLinearDisplayP3"),i){case ai:case _l:return[n,"LinearTransferOETF"];case ni:case fu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zx(i.getShaderSource(e),a)}else return r}function Vx(i,e){const t=Hx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gx(i,e){let t;switch(e){case Bg:t="Linear";break;case kg:t="Reinhard";break;case zg:t="OptimizedCineon";break;case Af:t="ACESFilmic";break;case Vg:t="AgX";break;case Gg:t="Neutral";break;case Hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function Xx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ua(i){return i!==""}function ud(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace($x,jx)}const qx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jx(i,e){let t=et[e];if(t===void 0){const n=qx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(i){return i.replace(Kx,Zx)}function Zx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Qx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ey(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function ty(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Df:e="ENVMAP_BLENDING_MULTIPLY";break;case Ng:e="ENVMAP_BLENDING_MIX";break;case Og:e="ENVMAP_BLENDING_ADD";break}return e}function ny(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iy(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jx(t),c=Qx(t),u=ey(t),h=ty(t),d=ny(t),m=Wx(t),_=Xx(s),g=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),f.length>0&&(f+=`
`)):(p=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),f=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?et.tonemapping_pars_fragment:"",t.toneMapping!==cr?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),a=Lc(a),a=ud(a,t),a=hd(a,t),o=Lc(o),o=ud(o,t),o=hd(o,t),a=dd(a),o=dd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+p+a,E=y+f+o,A=ld(r,r.VERTEX_SHADER,v),D=ld(r,r.FRAGMENT_SHADER,E);r.attachShader(g,A),r.attachShader(g,D),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(F){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(A).trim(),N=r.getShaderInfoLog(D).trim();let V=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,D);else{const Z=cd(r,A,"vertex"),L=cd(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+I+`
`+Z+`
`+L)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(R===""||N==="")&&(W=!1);W&&(F.diagnostics={runnable:V,programLog:I,vertexShader:{log:R,prefix:p},fragmentShader:{log:N,prefix:f}})}r.deleteShader(A),r.deleteShader(D),C=new No(r,g),M=Yx(r,g)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,Bx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=D,this}let ry=0;class sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ay(e),t.set(e,n)),n}}class ay{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function oy(i,e,t,n,r,s,a){const o=new Wf,l=new sy,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,F,I,R){const N=I.fog,V=R.geometry,W=M.isMeshStandardMaterial?I.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),L=Z&&Z.mapping===gl?Z.image.height:null,Q=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const H=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=H!==void 0?H.length:0;let ye=0;V.morphAttributes.position!==void 0&&(ye=1),V.morphAttributes.normal!==void 0&&(ye=2),V.morphAttributes.color!==void 0&&(ye=3);let Ue,X,ie,me;if(Q){const fe=ui[Q];Ue=fe.vertexShader,X=fe.fragmentShader}else Ue=M.vertexShader,X=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const he=i.getRenderTarget(),De=R.isInstancedMesh===!0,Le=R.isBatchedMesh===!0,Ge=!!M.map,G=!!M.matcap,Ce=!!Z,ue=!!M.aoMap,Ze=!!M.lightMap,k=!!M.bumpMap,nt=!!M.normalMap,P=!!M.displacementMap,T=!!M.emissiveMap,j=!!M.metalnessMap,J=!!M.roughnessMap,re=M.anisotropy>0,ne=M.clearcoat>0,pe=M.iridescence>0,le=M.sheen>0,xe=M.transmission>0,se=re&&!!M.anisotropyMap,ae=ne&&!!M.clearcoatMap,oe=ne&&!!M.clearcoatNormalMap,Ne=ne&&!!M.clearcoatRoughnessMap,ge=pe&&!!M.iridescenceMap,Se=pe&&!!M.iridescenceThicknessMap,He=le&&!!M.sheenColorMap,qe=le&&!!M.sheenRoughnessMap,Je=!!M.specularMap,Qe=!!M.specularColorMap,U=!!M.specularIntensityMap,Ae=xe&&!!M.transmissionMap,x=xe&&!!M.thicknessMap,$=!!M.gradientMap,te=!!M.alphaMap,de=M.alphaTest>0,_e=!!M.alphaHash,Fe=!!M.extensions;let We=cr;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(We=i.toneMapping);const O={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:X,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,instancing:De,instancingColor:De&&R.instanceColor!==null,instancingMorph:De&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ai,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:G,envMap:Ce,envMapMode:Ce&&Z.mapping,envMapCubeUVHeight:L,aoMap:ue,lightMap:Ze,bumpMap:k,normalMap:nt,displacementMap:d&&P,emissiveMap:T,normalMapObjectSpace:nt&&M.normalMapType===t0,normalMapTangentSpace:nt&&M.normalMapType===Of,metalnessMap:j,roughnessMap:J,anisotropy:re,anisotropyMap:se,clearcoat:ne,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ne,iridescence:pe,iridescenceMap:ge,iridescenceThicknessMap:Se,sheen:le,sheenColorMap:He,sheenRoughnessMap:qe,specularMap:Je,specularColorMap:Qe,specularIntensityMap:U,transmission:xe,transmissionMap:Ae,thicknessMap:x,gradientMap:$,opaque:M.transparent===!1&&M.blending===Fs&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:de,alphaHash:_e,combine:M.combine,mapUv:Ge&&g(M.map.channel),aoMapUv:ue&&g(M.aoMap.channel),lightMapUv:Ze&&g(M.lightMap.channel),bumpMapUv:k&&g(M.bumpMap.channel),normalMapUv:nt&&g(M.normalMap.channel),displacementMapUv:P&&g(M.displacementMap.channel),emissiveMapUv:T&&g(M.emissiveMap.channel),metalnessMapUv:j&&g(M.metalnessMap.channel),roughnessMapUv:J&&g(M.roughnessMap.channel),anisotropyMapUv:se&&g(M.anisotropyMap.channel),clearcoatMapUv:ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(M.sheenRoughnessMap.channel),specularMapUv:Je&&g(M.specularMap.channel),specularColorMapUv:Qe&&g(M.specularColorMap.channel),specularIntensityMapUv:U&&g(M.specularIntensityMap.channel),transmissionMapUv:Ae&&g(M.transmissionMap.channel),thicknessMapUv:x&&g(M.thicknessMap.channel),alphaMapUv:te&&g(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(nt||re),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!V.attributes.uv&&(Ge||te),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Fe&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return O.vertexUv1s=c.has(1),O.vertexUv2s=c.has(2),O.vertexUv3s=c.has(3),c.clear(),O}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)S.push(F),S.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),M.push(o.mask)}function E(M){const S=_[M.type];let F;if(S){const I=ui[S];F=W0.clone(I.uniforms)}else F=M.uniforms;return F}function A(M,S){let F;for(let I=0,R=u.length;I<R;I++){const N=u[I];if(N.cacheKey===S){F=N,++F.usedTimes;break}}return F===void 0&&(F=new iy(i,S,M,s),u.push(F)),F}function D(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:A,releaseProgram:D,releaseShaderCache:b,programs:u,dispose:C}}function ly(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function md(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,m,_,g,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=p),e++,f}function o(h,d,m,_,g,p){const f=a(h,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,_,g,p){const f=a(h,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||cy),n.length>1&&n.sort(d||pd),r.length>1&&r.sort(d||pd)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function uy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new md,i.set(n,[a])):r>=s.length?(a=new md,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ut};break;case"SpotLight":t={position:new z,direction:new z,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function dy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fy=0;function py(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function my(i){const e=new hy,t=dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new Lt,a=new Lt;function o(c,u){let h=0,d=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let _=0,g=0,p=0,f=0,y=0,v=0,E=0,A=0,D=0,b=0,C=0;c.sort(py);const M=u===!0?Math.PI:1;for(let F=0,I=c.length;F<I;F++){const R=c[F],N=R.color,V=R.intensity,W=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*V*M,d+=N.g*V*M,m+=N.b*V*M;else if(R.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(R.sh.coefficients[L],V);C++}else if(R.isDirectionalLight){const L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity*M),R.castShadow){const Q=R.shadow,H=t.get(R);H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[_]=H,n.directionalShadowMap[_]=Z,n.directionalShadowMatrix[_]=R.shadow.matrix,v++}n.directional[_]=L,_++}else if(R.isSpotLight){const L=e.get(R);L.position.setFromMatrixPosition(R.matrixWorld),L.color.copy(N).multiplyScalar(V*M),L.distance=W,L.coneCos=Math.cos(R.angle),L.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),L.decay=R.decay,n.spot[p]=L;const Q=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,Q.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[p]=Q.matrix,R.castShadow){const H=t.get(R);H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[p]=H,n.spotShadowMap[p]=Z,A++}p++}else if(R.isRectAreaLight){const L=e.get(R);L.color.copy(N).multiplyScalar(V),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=L,f++}else if(R.isPointLight){const L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity*M),L.distance=R.distance,L.decay=R.decay,R.castShadow){const Q=R.shadow,H=t.get(R);H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=L,g++}else if(R.isHemisphereLight){const L=e.get(R);L.skyColor.copy(R.color).multiplyScalar(V*M),L.groundColor.copy(R.groundColor).multiplyScalar(V*M),n.hemi[y]=L,y++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;const S=n.hash;(S.directionalLength!==_||S.pointLength!==g||S.spotLength!==p||S.rectAreaLength!==f||S.hemiLength!==y||S.numDirectionalShadows!==v||S.numPointShadows!==E||S.numSpotShadows!==A||S.numSpotMaps!==D||S.numLightProbes!==C)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=f,n.point.length=g,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+D-b,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,S.directionalLength=_,S.pointLength=g,S.spotLength=p,S.rectAreaLength=f,S.hemiLength=y,S.numDirectionalShadows=v,S.numPointShadows=E,S.numSpotShadows=A,S.numSpotMaps=D,S.numLightProbes=C,n.version=fy++)}function l(c,u){let h=0,d=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const v=c[f];if(v.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(v.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function gd(i){const e=new my(i),t=[],n=[];function r(){t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gd(i),e.set(r,[o])):s>=a.length?(o=new gd(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class _y extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vy extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function My(i,e,t){let n=new gu;const r=new Ve,s=new Ve,a=new Wt,o=new _y({depthPacking:e0}),l=new vy,c={},u=t.maxTextureSize,h={[fr]:bn,[bn]:fr,[hi]:hi},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:xy,fragmentShader:yy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new vr;_.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let f=this.type;this.render=function(D,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ki),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const R=f!==Li&&this.type===Li,N=f===Li&&this.type!==Li;for(let V=0,W=D.length;V<W;V++){const Z=D[V],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Q=L.getFrameExtents();if(r.multiply(Q),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,L.mapSize.y=s.y)),L.map===null||R===!0||N===!0){const ee=this.type!==Li?{minFilter:Sn,magFilter:Sn}:{};L.map!==null&&L.map.dispose(),L.map=new Vi(r.x,r.y,ee),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const H=L.getViewportCount();for(let ee=0;ee<H;ee++){const ye=L.getViewport(ee);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),I.viewport(a),L.updateMatrices(Z,ee),n=L.getFrustum(),E(b,C,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===Li&&y(L,C),L.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,S,F)};function y(D,b){const C=e.update(g);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Vi(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(b,null,C,d,g,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(b,null,C,m,g,null)}function v(D,b,C,M){let S=null;const F=C.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)S=F;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=S.uuid,R=b.uuid;let N=c[I];N===void 0&&(N={},c[I]=N);let V=N[R];V===void 0&&(V=S.clone(),N[R]=V,b.addEventListener("dispose",A)),S=V}if(S.visible=b.visible,S.wireframe=b.wireframe,M===Li?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=i.properties.get(S);I.light=C}return S}function E(D,b,C,M,S){if(D.visible===!1)return;if(D.layers.test(b.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Li)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,D.matrixWorld);const R=e.update(D),N=D.material;if(Array.isArray(N)){const V=R.groups;for(let W=0,Z=V.length;W<Z;W++){const L=V[W],Q=N[L.materialIndex];if(Q&&Q.visible){const H=v(D,Q,M,S);D.onBeforeShadow(i,D,b,C,R,H,L),i.renderBufferDirect(C,null,R,H,D,L),D.onAfterShadow(i,D,b,C,R,H,L)}}}else if(N.visible){const V=v(D,N,M,S);D.onBeforeShadow(i,D,b,C,R,V,null),i.renderBufferDirect(C,null,R,V,D,null),D.onAfterShadow(i,D,b,C,R,V,null)}}const I=D.children;for(let R=0,N=I.length;R<N;R++)E(I[R],b,C,M,S)}function A(D){D.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],S=D.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Sy(i){function e(){let x=!1;const $=new Wt;let te=null;const de=new Wt(0,0,0,0);return{setMask:function(_e){te!==_e&&!x&&(i.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){x=_e},setClear:function(_e,Fe,We,O,fe){fe===!0&&(_e*=O,Fe*=O,We*=O),$.set(_e,Fe,We,O),de.equals($)===!1&&(i.clearColor(_e,Fe,We,O),de.copy($))},reset:function(){x=!1,te=null,de.set(-1,0,0,0)}}}function t(){let x=!1,$=null,te=null,de=null;return{setTest:function(_e){_e?me(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(_e){$!==_e&&!x&&(i.depthMask(_e),$=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case Cg:i.depthFunc(i.NEVER);break;case Rg:i.depthFunc(i.ALWAYS);break;case Pg:i.depthFunc(i.LESS);break;case Ko:i.depthFunc(i.LEQUAL);break;case Lg:i.depthFunc(i.EQUAL);break;case Fg:i.depthFunc(i.GEQUAL);break;case Ig:i.depthFunc(i.GREATER);break;case Ug:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=_e}},setLocked:function(_e){x=_e},setClear:function(_e){de!==_e&&(i.clearDepth(_e),de=_e)},reset:function(){x=!1,$=null,te=null,de=null}}}function n(){let x=!1,$=null,te=null,de=null,_e=null,Fe=null,We=null,O=null,fe=null;return{setTest:function(ce){x||(ce?me(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(ce){$!==ce&&!x&&(i.stencilMask(ce),$=ce)},setFunc:function(ce,Ee,Te){(te!==ce||de!==Ee||_e!==Te)&&(i.stencilFunc(ce,Ee,Te),te=ce,de=Ee,_e=Te)},setOp:function(ce,Ee,Te){(Fe!==ce||We!==Ee||O!==Te)&&(i.stencilOp(ce,Ee,Te),Fe=ce,We=Ee,O=Te)},setLocked:function(ce){x=ce},setClear:function(ce){fe!==ce&&(i.clearStencil(ce),fe=ce)},reset:function(){x=!1,$=null,te=null,de=null,_e=null,Fe=null,We=null,O=null,fe=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,f=null,y=null,v=null,E=null,A=null,D=new ut(0,0,0),b=0,C=!1,M=null,S=null,F=null,I=null,R=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=W>=2);let L=null,Q={};const H=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ye=new Wt().fromArray(H),Ue=new Wt().fromArray(ee);function X(x,$,te,de){const _e=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(x,Fe),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<te;We++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D($+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return Fe}const ie={};ie[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(i.DEPTH_TEST),s.setFunc(Ko),k(!1),nt(Ku),me(i.CULL_FACE),ue(ki);function me(x){c[x]!==!0&&(i.enable(x),c[x]=!0)}function he(x){c[x]!==!1&&(i.disable(x),c[x]=!1)}function De(x,$){return u[x]!==$?(i.bindFramebuffer(x,$),u[x]=$,x===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),x===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Le(x,$){let te=d,de=!1;if(x){te=h.get($),te===void 0&&(te=[],h.set($,te));const _e=x.textures;if(te.length!==_e.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,We=_e.length;Fe<We;Fe++)te[Fe]=i.COLOR_ATTACHMENT0+Fe;te.length=_e.length,de=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,de=!0);de&&i.drawBuffers(te)}function Ge(x){return m!==x?(i.useProgram(x),m=x,!0):!1}const G={[Ir]:i.FUNC_ADD,[dg]:i.FUNC_SUBTRACT,[fg]:i.FUNC_REVERSE_SUBTRACT};G[pg]=i.MIN,G[mg]=i.MAX;const Ce={[gg]:i.ZERO,[_g]:i.ONE,[vg]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[Tg]:i.SRC_ALPHA_SATURATE,[Sg]:i.DST_COLOR,[yg]:i.DST_ALPHA,[xg]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[Eg]:i.ONE_MINUS_DST_COLOR,[Mg]:i.ONE_MINUS_DST_ALPHA,[bg]:i.CONSTANT_COLOR,[Dg]:i.ONE_MINUS_CONSTANT_COLOR,[Ag]:i.CONSTANT_ALPHA,[wg]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(x,$,te,de,_e,Fe,We,O,fe,ce){if(x===ki){_===!0&&(he(i.BLEND),_=!1);return}if(_===!1&&(me(i.BLEND),_=!0),x!==hg){if(x!==g||ce!==C){if((p!==Ir||v!==Ir)&&(i.blendEquation(i.FUNC_ADD),p=Ir,v=Ir),ce)switch(x){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zu:i.blendFunc(i.ONE,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}f=null,y=null,E=null,A=null,D.set(0,0,0),b=0,g=x,C=ce}return}_e=_e||$,Fe=Fe||te,We=We||de,($!==p||_e!==v)&&(i.blendEquationSeparate(G[$],G[_e]),p=$,v=_e),(te!==f||de!==y||Fe!==E||We!==A)&&(i.blendFuncSeparate(Ce[te],Ce[de],Ce[Fe],Ce[We]),f=te,y=de,E=Fe,A=We),(O.equals(D)===!1||fe!==b)&&(i.blendColor(O.r,O.g,O.b,fe),D.copy(O),b=fe),g=x,C=!1}function Ze(x,$){x.side===hi?he(i.CULL_FACE):me(i.CULL_FACE);let te=x.side===bn;$&&(te=!te),k(te),x.blending===Fs&&x.transparent===!1?ue(ki):ue(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),r.setMask(x.colorWrite);const de=x.stencilWrite;a.setTest(de),de&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),T(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function k(x){M!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),M=x)}function nt(x){x!==lg?(me(i.CULL_FACE),x!==S&&(x===Ku?i.cullFace(i.BACK):x===cg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),S=x}function P(x){x!==F&&(V&&i.lineWidth(x),F=x)}function T(x,$,te){x?(me(i.POLYGON_OFFSET_FILL),(I!==$||R!==te)&&(i.polygonOffset($,te),I=$,R=te)):he(i.POLYGON_OFFSET_FILL)}function j(x){x?me(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function J(x){x===void 0&&(x=i.TEXTURE0+N-1),L!==x&&(i.activeTexture(x),L=x)}function re(x,$,te){te===void 0&&(L===null?te=i.TEXTURE0+N-1:te=L);let de=Q[te];de===void 0&&(de={type:void 0,texture:void 0},Q[te]=de),(de.type!==x||de.texture!==$)&&(L!==te&&(i.activeTexture(te),L=te),i.bindTexture(x,$||ie[x]),de.type=x,de.texture=$)}function ne(){const x=Q[L];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xe(){try{i.texSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function qe(x){ye.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),ye.copy(x))}function Je(x){Ue.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),Ue.copy(x))}function Qe(x,$){let te=l.get($);te===void 0&&(te=new WeakMap,l.set($,te));let de=te.get(x);de===void 0&&(de=i.getUniformBlockIndex($,x.name),te.set(x,de))}function U(x,$){const de=l.get($).get(x);o.get($)!==de&&(i.uniformBlockBinding($,de,x.__bindingPointIndex),o.set($,de))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},L=null,Q={},u={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,f=null,y=null,v=null,E=null,A=null,D=new ut(0,0,0),b=0,C=!1,M=null,S=null,F=null,I=null,R=null,ye.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:me,disable:he,bindFramebuffer:De,drawBuffers:Le,useProgram:Ge,setBlending:ue,setMaterial:Ze,setFlipSided:k,setCullFace:nt,setLineWidth:P,setPolygonOffset:T,setScissorTest:j,activeTexture:J,bindTexture:re,unbindTexture:ne,compressedTexImage2D:pe,compressedTexImage3D:le,texImage2D:Se,texImage3D:He,updateUBOMapping:Qe,uniformBlockBinding:U,texStorage2D:Ne,texStorage3D:ge,texSubImage2D:xe,texSubImage3D:se,compressedTexSubImage2D:ae,compressedTexSubImage3D:oe,scissor:qe,viewport:Je,reset:Ae}}function Ey(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return m?new OffscreenCanvas(P,T):nl("canvas")}function g(P,T,j){let J=1;const re=nt(P);if((re.width>j||re.height>j)&&(J=j/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(J*re.width),pe=Math.floor(J*re.height);h===void 0&&(h=_(ne,pe));const le=T?_(ne,pe):h;return le.width=ne,le.height=pe,le.getContext("2d").drawImage(P,0,0,ne,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ne+"x"+pe+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==Sn&&P.minFilter!==$t}function f(P){i.generateMipmap(P)}function y(P,T,j,J,re=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=T;if(T===i.RED&&(j===i.FLOAT&&(ne=i.R32F),j===i.HALF_FLOAT&&(ne=i.R16F),j===i.UNSIGNED_BYTE&&(ne=i.R8)),T===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.R8UI),j===i.UNSIGNED_SHORT&&(ne=i.R16UI),j===i.UNSIGNED_INT&&(ne=i.R32UI),j===i.BYTE&&(ne=i.R8I),j===i.SHORT&&(ne=i.R16I),j===i.INT&&(ne=i.R32I)),T===i.RG&&(j===i.FLOAT&&(ne=i.RG32F),j===i.HALF_FLOAT&&(ne=i.RG16F),j===i.UNSIGNED_BYTE&&(ne=i.RG8)),T===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.RG8UI),j===i.UNSIGNED_SHORT&&(ne=i.RG16UI),j===i.UNSIGNED_INT&&(ne=i.RG32UI),j===i.BYTE&&(ne=i.RG8I),j===i.SHORT&&(ne=i.RG16I),j===i.INT&&(ne=i.RG32I)),T===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),T===i.RGBA){const pe=re?Jo:dt.getTransfer(J);j===i.FLOAT&&(ne=i.RGBA32F),j===i.HALF_FLOAT&&(ne=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ne=pe===_t?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(P,T){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==$t?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){const T=P.target;T.removeEventListener("dispose",E),D(T),T.isVideoTexture&&u.delete(T)}function A(P){const T=P.target;T.removeEventListener("dispose",A),C(T)}function D(P){const T=n.get(P);if(T.__webglInit===void 0)return;const j=P.source,J=d.get(j);if(J){const re=J[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(P),Object.keys(J).length===0&&d.delete(j)}n.remove(P)}function b(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const j=P.source,J=d.get(j);delete J[T.__cacheKey],a.memory.textures--}function C(P){const T=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let re=0;re<T.__webglFramebuffer[J].length;re++)i.deleteFramebuffer(T.__webglFramebuffer[J][re]);else i.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)i.deleteFramebuffer(T.__webglFramebuffer[J]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=P.textures;for(let J=0,re=j.length;J<re;J++){const ne=n.get(j[J]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(j[J])}n.remove(P)}let M=0;function S(){M=0}function F(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function I(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function R(P,T){const j=n.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(j,P,T);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+T)}function N(P,T){const j=n.get(P);if(P.version>0&&j.__version!==P.version){ye(j,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+T)}function V(P,T){const j=n.get(P);if(P.version>0&&j.__version!==P.version){ye(j,P,T);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+T)}function W(P,T){const j=n.get(P);if(P.version>0&&j.__version!==P.version){Ue(j,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+T)}const Z={[Rc]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Pc]:i.MIRRORED_REPEAT},L={[Sn]:i.NEAREST,[Wg]:i.NEAREST_MIPMAP_NEAREST,[qa]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[kr]:i.LINEAR_MIPMAP_LINEAR},Q={[n0]:i.NEVER,[l0]:i.ALWAYS,[i0]:i.LESS,[Bf]:i.LEQUAL,[r0]:i.EQUAL,[o0]:i.GEQUAL,[s0]:i.GREATER,[a0]:i.NOTEQUAL};function H(P,T){if(T.type===ri&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===$t||T.magFilter===Rl||T.magFilter===qa||T.magFilter===kr||T.minFilter===$t||T.minFilter===Rl||T.minFilter===qa||T.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Z[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Z[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Z[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,L[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==qa&&T.minFilter!==kr||T.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ee(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));const J=T.source;let re=d.get(J);re===void 0&&(re={},d.set(J,re));const ne=I(T);if(ne!==P.__cacheKey){re[ne]===void 0&&(re[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),re[ne].usedTimes++;const pe=re[P.__cacheKey];pe!==void 0&&(re[P.__cacheKey].usedTimes--,pe.usedTimes===0&&b(T)),P.__cacheKey=ne,P.__webglTexture=re[ne].texture}return j}function ye(P,T,j){let J=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=i.TEXTURE_3D);const re=ee(P,T),ne=T.source;t.bindTexture(J,P.__webglTexture,i.TEXTURE0+j);const pe=n.get(ne);if(ne.version!==pe.__version||re===!0){t.activeTexture(i.TEXTURE0+j);const le=dt.getPrimaries(dt.workingColorSpace),xe=T.colorSpace===nr?null:dt.getPrimaries(T.colorSpace),se=T.colorSpace===nr||le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ae=g(T.image,!1,r.maxTextureSize);ae=k(T,ae);const oe=s.convert(T.format,T.colorSpace),Ne=s.convert(T.type);let ge=y(T.internalFormat,oe,Ne,T.colorSpace,T.isVideoTexture);H(J,T);let Se;const He=T.mipmaps,qe=T.isVideoTexture!==!0&&ge!==Nf,Je=pe.__version===void 0||re===!0,Qe=ne.dataReady,U=v(T,ae);if(T.isDepthTexture)ge=i.DEPTH_COMPONENT16,T.type===ri?ge=i.DEPTH_COMPONENT32F:T.type===$r?ge=i.DEPTH_COMPONENT24:T.type===Wa&&(ge=i.DEPTH24_STENCIL8),Je&&(qe?t.texStorage2D(i.TEXTURE_2D,1,ge,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,ge,ae.width,ae.height,0,oe,Ne,null));else if(T.isDataTexture)if(He.length>0){qe&&Je&&t.texStorage2D(i.TEXTURE_2D,U,ge,He[0].width,He[0].height);for(let Ae=0,x=He.length;Ae<x;Ae++)Se=He[Ae],qe?Qe&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,Se.width,Se.height,oe,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,Ae,ge,Se.width,Se.height,0,oe,Ne,Se.data);T.generateMipmaps=!1}else qe?(Je&&t.texStorage2D(i.TEXTURE_2D,U,ge,ae.width,ae.height),Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,oe,Ne,ae.data)):t.texImage2D(i.TEXTURE_2D,0,ge,ae.width,ae.height,0,oe,Ne,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,U,ge,He[0].width,He[0].height,ae.depth);for(let Ae=0,x=He.length;Ae<x;Ae++)Se=He[Ae],T.format!==En?oe!==null?qe?Qe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,Se.width,Se.height,ae.depth,oe,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ae,ge,Se.width,Se.height,ae.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,Se.width,Se.height,ae.depth,oe,Ne,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ae,ge,Se.width,Se.height,ae.depth,0,oe,Ne,Se.data)}else{qe&&Je&&t.texStorage2D(i.TEXTURE_2D,U,ge,He[0].width,He[0].height);for(let Ae=0,x=He.length;Ae<x;Ae++)Se=He[Ae],T.format!==En?oe!==null?qe?Qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ae,0,0,Se.width,Se.height,oe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,Ae,ge,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?Qe&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,Se.width,Se.height,oe,Ne,Se.data):t.texImage2D(i.TEXTURE_2D,Ae,ge,Se.width,Se.height,0,oe,Ne,Se.data)}else if(T.isDataArrayTexture)qe?(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,U,ge,ae.width,ae.height,ae.depth),Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,oe,Ne,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,ae.width,ae.height,ae.depth,0,oe,Ne,ae.data);else if(T.isData3DTexture)qe?(Je&&t.texStorage3D(i.TEXTURE_3D,U,ge,ae.width,ae.height,ae.depth),Qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,oe,Ne,ae.data)):t.texImage3D(i.TEXTURE_3D,0,ge,ae.width,ae.height,ae.depth,0,oe,Ne,ae.data);else if(T.isFramebufferTexture){if(Je)if(qe)t.texStorage2D(i.TEXTURE_2D,U,ge,ae.width,ae.height);else{let Ae=ae.width,x=ae.height;for(let $=0;$<U;$++)t.texImage2D(i.TEXTURE_2D,$,ge,Ae,x,0,oe,Ne,null),Ae>>=1,x>>=1}}else if(He.length>0){if(qe&&Je){const Ae=nt(He[0]);t.texStorage2D(i.TEXTURE_2D,U,ge,Ae.width,Ae.height)}for(let Ae=0,x=He.length;Ae<x;Ae++)Se=He[Ae],qe?Qe&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,oe,Ne,Se):t.texImage2D(i.TEXTURE_2D,Ae,ge,oe,Ne,Se);T.generateMipmaps=!1}else if(qe){if(Je){const Ae=nt(ae);t.texStorage2D(i.TEXTURE_2D,U,ge,Ae.width,Ae.height)}Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Ne,ae)}else t.texImage2D(i.TEXTURE_2D,0,ge,oe,Ne,ae);p(T)&&f(J),pe.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ue(P,T,j){if(T.image.length!==6)return;const J=ee(P,T),re=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+j);const ne=n.get(re);if(re.version!==ne.__version||J===!0){t.activeTexture(i.TEXTURE0+j);const pe=dt.getPrimaries(dt.workingColorSpace),le=T.colorSpace===nr?null:dt.getPrimaries(T.colorSpace),xe=T.colorSpace===nr||pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const se=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let x=0;x<6;x++)!se&&!ae?oe[x]=g(T.image[x],!0,r.maxCubemapSize):oe[x]=ae?T.image[x].image:T.image[x],oe[x]=k(T,oe[x]);const Ne=oe[0],ge=s.convert(T.format,T.colorSpace),Se=s.convert(T.type),He=y(T.internalFormat,ge,Se,T.colorSpace),qe=T.isVideoTexture!==!0,Je=ne.__version===void 0||J===!0,Qe=re.dataReady;let U=v(T,Ne);H(i.TEXTURE_CUBE_MAP,T);let Ae;if(se){qe&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,U,He,Ne.width,Ne.height);for(let x=0;x<6;x++){Ae=oe[x].mipmaps;for(let $=0;$<Ae.length;$++){const te=Ae[$];T.format!==En?ge!==null?qe?Qe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$,0,0,te.width,te.height,ge,te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$,He,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$,0,0,te.width,te.height,ge,Se,te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$,He,te.width,te.height,0,ge,Se,te.data)}}}else{if(Ae=T.mipmaps,qe&&Je){Ae.length>0&&U++;const x=nt(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,U,He,x.width,x.height)}for(let x=0;x<6;x++)if(ae){qe?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,oe[x].width,oe[x].height,ge,Se,oe[x].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,He,oe[x].width,oe[x].height,0,ge,Se,oe[x].data);for(let $=0;$<Ae.length;$++){const de=Ae[$].image[x].image;qe?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$+1,0,0,de.width,de.height,ge,Se,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$+1,He,de.width,de.height,0,ge,Se,de.data)}}else{qe?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,ge,Se,oe[x]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,He,ge,Se,oe[x]);for(let $=0;$<Ae.length;$++){const te=Ae[$];qe?Qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$+1,0,0,ge,Se,te.image[x]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+x,$+1,He,ge,Se,te.image[x])}}}p(T)&&f(i.TEXTURE_CUBE_MAP),ne.__version=re.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function X(P,T,j,J,re,ne){const pe=s.convert(j.format,j.colorSpace),le=s.convert(j.type),xe=y(j.internalFormat,pe,le,j.colorSpace);if(!n.get(T).__hasExternalTextures){const ae=Math.max(1,T.width>>ne),oe=Math.max(1,T.height>>ne);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,xe,ae,oe,T.depth,0,pe,le,null):t.texImage2D(re,ne,xe,ae,oe,0,pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ue(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,re,n.get(j).__webglTexture,0,Ce(T)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,re,n.get(j).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(P,T,j){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let J=i.DEPTH_COMPONENT24;if(j||ue(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===ri?J=i.DEPTH_COMPONENT32F:re.type===$r&&(J=i.DEPTH_COMPONENT24));const ne=Ce(T);ue(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,J,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,J,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const J=Ce(T);j&&ue(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,T.width,T.height):ue(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const J=T.textures;for(let re=0;re<J.length;re++){const ne=J[re],pe=s.convert(ne.format,ne.colorSpace),le=s.convert(ne.type),xe=y(ne.internalFormat,pe,le,ne.colorSpace),se=Ce(T);j&&ue(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,xe,T.width,T.height):ue(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),R(T.depthTexture,0);const J=n.get(T.depthTexture).__webglTexture,re=Ce(T);if(T.depthTexture.format===Is)ue(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(T.depthTexture.format===Ra)ue(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function he(P){const T=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");me(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=i.createRenderbuffer(),ie(T.__webglDepthbuffer[J],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),ie(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(P,T,j){const J=n.get(P);T!==void 0&&X(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&he(P)}function Le(P){const T=P.texture,j=n.get(P),J=n.get(T);P.addEventListener("dispose",A);const re=P.textures,ne=P.isWebGLCubeRenderTarget===!0,pe=re.length>1;if(pe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=T.version,a.memory.textures++),ne){j.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[le]=[];for(let xe=0;xe<T.mipmaps.length;xe++)j.__webglFramebuffer[le][xe]=i.createFramebuffer()}else j.__webglFramebuffer[le]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)j.__webglFramebuffer[le]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(pe)for(let le=0,xe=re.length;le<xe;le++){const se=n.get(re[le]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ue(P)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const xe=re[le];j.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[le]);const se=s.convert(xe.format,xe.colorSpace),ae=s.convert(xe.type),oe=y(xe.internalFormat,se,ae,xe.colorSpace,P.isXRRenderTarget===!0),Ne=Ce(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,oe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,j.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),H(i.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)X(j.__webglFramebuffer[le][xe],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else X(j.__webglFramebuffer[le],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(T)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let le=0,xe=re.length;le<xe;le++){const se=re[le],ae=n.get(se);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),H(i.TEXTURE_2D,se),X(j.__webglFramebuffer,P,se,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),p(se)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),H(le,T),T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)X(j.__webglFramebuffer[xe],P,T,i.COLOR_ATTACHMENT0,le,xe);else X(j.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,le,0);p(T)&&f(le),t.unbindTexture()}P.depthBuffer&&he(P)}function Ge(P){const T=P.textures;for(let j=0,J=T.length;j<J;j++){const re=T[j];if(p(re)){const ne=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(re).__webglTexture;t.bindTexture(ne,pe),f(ne),t.unbindTexture()}}}function G(P){if(P.samples>0&&ue(P)===!1){const T=P.textures,j=P.width,J=P.height;let re=i.COLOR_BUFFER_BIT;const ne=[],pe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(P),xe=T.length>1;if(xe)for(let se=0;se<T.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let se=0;se<T.length;se++){ne.push(i.COLOR_ATTACHMENT0+se),P.depthBuffer&&ne.push(pe);const ae=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ae===!1&&(P.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&le.__isTransmissionRenderTarget!==!0&&(re|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[se]),ae===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),xe){const oe=n.get(T[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,j,J,0,0,j,J,re,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let se=0;se<T.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,le.__webglColorRenderbuffer[se]);const ae=n.get(T[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ce(P){return Math.min(r.maxSamples,P.samples)}function ue(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function k(P,T){const j=P.colorSpace,J=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==ai&&j!==nr&&(dt.getTransfer(j)===_t?(J!==En||re!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=R,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=De,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ue}function Ty(i,e){function t(n,r=nr){let s;const a=dt.getTransfer(r);if(n===si)return i.UNSIGNED_BYTE;if(n===Pf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wf)return i.BYTE;if(n===Cf)return i.SHORT;if(n===Rf)return i.UNSIGNED_SHORT;if(n===du)return i.INT;if(n===$r)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===Yg)return i.ALPHA;if(n===$g)return i.RGB;if(n===En)return i.RGBA;if(n===qg)return i.LUMINANCE;if(n===jg)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Ra)return i.DEPTH_STENCIL;if(n===Kg)return i.RED;if(n===Ff)return i.RED_INTEGER;if(n===Zg)return i.RG;if(n===If)return i.RG_INTEGER;if(n===Uf)return i.RGBA_INTEGER;if(n===Pl||n===Ll||n===Fl||n===Il)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===th||n===nh||n===ih||n===rh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nf)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===sh||n===ah)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sh)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ah)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oh||n===lh||n===ch||n===uh||n===hh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===vh||n===xh||n===yh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ch)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ph)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_h)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ul||n===Mh||n===Sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ul)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jg||n===Eh||n===Th||n===bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ul)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Th)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class by extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _o extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dy={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _o;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ei({vertexShader:Ay,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new es(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Ry extends Qr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const g=new Cy,p=t.getContextAttributes();let f=null,y=null;const v=[],E=[],A=new Ve;let D=null;const b=new Nn;b.layers.enable(1),b.viewport=new Wt;const C=new Nn;C.layers.enable(2),C.viewport=new Wt;const M=[b,C],S=new by;S.layers.enable(1),S.layers.enable(2);let F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=v[X];return ie===void 0&&(ie=new ac,v[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=v[X];return ie===void 0&&(ie=new ac,v[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=v[X];return ie===void 0&&(ie=new ac,v[X]=ie),ie.getHandSpace()};function R(X){const ie=E.indexOf(X.inputSource);if(ie===-1)return;const me=v[ie];me!==void 0&&(me.update(X.inputSource,X.frame,c||a),me.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",V);for(let X=0;X<v.length;X++){const ie=E[X];ie!==null&&(E[X]=null,v[X].disconnect(ie))}F=null,I=null,g.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,y=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",N),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Vi(m.framebufferWidth,m.framebufferHeight,{format:En,type:si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,me=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?Ra:Is,me=p.stencil?Wa:$r);const De={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Vi(d.textureWidth,d.textureHeight,{format:En,type:si,depthTexture:new Qf(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Le=e.properties.get(y);Le.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(X){for(let ie=0;ie<X.removed.length;ie++){const me=X.removed[ie],he=E.indexOf(me);he>=0&&(E[he]=null,v[he].disconnect(me))}for(let ie=0;ie<X.added.length;ie++){const me=X.added[ie];let he=E.indexOf(me);if(he===-1){for(let Le=0;Le<v.length;Le++)if(Le>=E.length){E.push(me),he=Le;break}else if(E[Le]===null){E[Le]=me,he=Le;break}if(he===-1)break}const De=v[he];De&&De.connect(me)}}const W=new z,Z=new z;function L(X,ie,me){W.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const he=W.distanceTo(Z),De=ie.projectionMatrix.elements,Le=me.projectionMatrix.elements,Ge=De[14]/(De[10]-1),G=De[14]/(De[10]+1),Ce=(De[9]+1)/De[5],ue=(De[9]-1)/De[5],Ze=(De[8]-1)/De[0],k=(Le[8]+1)/Le[0],nt=Ge*Ze,P=Ge*k,T=he/(-Ze+k),j=T*-Ze;ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(j),X.translateZ(T),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const J=Ge+T,re=G+T,ne=nt-j,pe=P+(he-j),le=Ce*G/re*J,xe=ue*G/re*J;X.projectionMatrix.makePerspective(ne,pe,le,xe,J,re),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Q(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;g.texture!==null&&(X.near=g.depthNear,X.far=g.depthFar),S.near=C.near=b.near=X.near,S.far=C.far=b.far=X.far,(F!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,I=S.far,b.near=F,b.far=I,C.near=F,C.far=I,b.updateProjectionMatrix(),C.updateProjectionMatrix(),X.updateProjectionMatrix());const ie=X.parent,me=S.cameras;Q(S,ie);for(let he=0;he<me.length;he++)Q(me[he],ie);me.length===2?L(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),H(X,S,ie)};function H(X,ie,me){me===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ws*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null};let ee=null;function ye(X,ie){if(u=ie.getViewerPose(c||a),_=ie,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let he=!1;me.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Le=0;Le<me.length;Le++){const Ge=me[Le];let G=null;if(m!==null)G=m.getViewport(Ge);else{const ue=h.getViewSubImage(d,Ge);G=ue.viewport,Le===0&&(e.setRenderTargetTextures(y,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(y))}let Ce=M[Le];Ce===void 0&&(Ce=new Nn,Ce.layers.enable(Le),Ce.viewport=new Wt,M[Le]=Ce),Ce.matrix.fromArray(Ge.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ge.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(G.x,G.y,G.width,G.height),Le===0&&(S.matrix.copy(Ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(Ce)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Le=h.getDepthInformation(me[0]);Le&&Le.isValid&&Le.texture&&g.init(e,Le,r.renderState)}}for(let me=0;me<v.length;me++){const he=E[me],De=v[me];he!==null&&De!==void 0&&De.update(he,ie,c||a)}g.render(e,S),ee&&ee(X,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ue=new Zf;Ue.setAnimationLoop(ye),this.setAnimationLoop=function(X){ee=X},this.dispose=function(){}}}const Dr=new Si,Py=new Lt;function Ly(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,qf(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===bn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===bn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f),v=y.envMap,E=y.envMapRotation;if(v&&(p.envMap.value=v,Dr.copy(E),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),p.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(Dr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const A=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*A,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Fy(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=r[y.id];E===void 0&&(_(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(y,A);const D=e.render.frame;s[y.id]!==D&&(d(y),s[y.id]=D)}function u(y){const v=h();y.__bindingPointIndex=v;const E=i.createBuffer(),A=y.__size,D=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],E=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,b=E.length;D<b;D++){const C=Array.isArray(E[D])?E[D]:[E[D]];for(let M=0,S=C.length;M<S;M++){const F=C[M];if(m(F,D,M,A)===!0){const I=F.__offset,R=Array.isArray(F.value)?F.value:[F.value];let N=0;for(let V=0;V<R.length;V++){const W=R[V],Z=g(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,I+N,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,E,A){const D=y.value,b=v+"_"+E;if(A[b]===void 0)return typeof D=="number"||typeof D=="boolean"?A[b]=D:A[b]=D.clone(),!0;{const C=A[b];if(typeof D=="number"||typeof D=="boolean"){if(C!==D)return A[b]=D,!0}else if(C.equals(D)===!1)return C.copy(D),!0}return!1}function _(y){const v=y.uniforms;let E=0;const A=16;for(let b=0,C=v.length;b<C;b++){const M=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,F=M.length;S<F;S++){const I=M[S],R=Array.isArray(I.value)?I.value:[I.value];for(let N=0,V=R.length;N<V;N++){const W=R[N],Z=g(W),L=E%A;L!==0&&A-L<Z.boundary&&(E+=A-L),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Z.storage}}}const D=E%A;return D>0&&(E+=A-D),y.__size=E,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class sp{constructor(e={}){const{canvas:t=b0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const v=this;let E=!1,A=0,D=0,b=null,C=-1,M=null;const S=new Wt,F=new Wt;let I=null;const R=new ut(0);let N=0,V=t.width,W=t.height,Z=1,L=null,Q=null;const H=new Wt(0,0,V,W),ee=new Wt(0,0,V,W);let ye=!1;const Ue=new gu;let X=!1,ie=!1;const me=new Lt,he=new Ve,De=new z,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return b===null?Z:1}let G=n;function Ce(w,B){const q=t.getContext(w,B);return q!==null?q:null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hu}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",de,!1),G===null){const B="webgl2";if(G=Ce(B,w),G===null)throw Ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ue,Ze,k,nt,P,T,j,J,re,ne,pe,le,xe,se,ae,oe,Ne,ge,Se,He,qe,Je,Qe,U;function Ae(){ue=new Vv(G),ue.init(),Ze=new Nv(G,ue,e),Je=new Ty(G,ue),k=new Sy(G),nt=new Xv(G),P=new ly,T=new Ey(G,ue,k,P,Ze,Je,nt),j=new Bv(v),J=new Hv(v),re=new Z0(G),Qe=new Iv(G,re),ne=new Gv(G,re,nt,Qe),pe=new $v(G,ne,re,nt),Se=new Yv(G,Ze,T),oe=new Ov(P),le=new oy(v,j,J,ue,Ze,Qe,oe),xe=new Ly(v,P),se=new uy,ae=new gy(ue),ge=new Fv(v,j,J,k,pe,d,l),Ne=new My(v,pe,Ze),U=new Fy(G,nt,Ze,k),He=new Uv(G,ue,nt),qe=new Wv(G,ue,nt),nt.programs=le.programs,v.capabilities=Ze,v.extensions=ue,v.properties=P,v.renderLists=se,v.shadowMap=Ne,v.state=k,v.info=nt}Ae();const x=new Ry(v,G);this.xr=x,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(V,W,!1))},this.getSize=function(w){return w.set(V,W)},this.setSize=function(w,B,q=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,W=B,t.width=Math.floor(w*Z),t.height=Math.floor(B*Z),q===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(V*Z,W*Z).floor()},this.setDrawingBufferSize=function(w,B,q){V=w,W=B,Z=q,t.width=Math.floor(w*q),t.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,B,q,K){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,B,q,K),k.viewport(S.copy(H).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,B,q,K){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,B,q,K),k.scissor(F.copy(ee).multiplyScalar(Z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){k.setScissorTest(ye=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(w=!0,B=!0,q=!0){let K=0;if(w){let Y=!1;if(b!==null){const ve=b.texture.format;Y=ve===Uf||ve===If||ve===Ff}if(Y){const ve=b.texture.type,be=ve===si||ve===$r||ve===Rf||ve===Wa||ve===Pf||ve===Lf,Oe=ge.getClearColor(),Pe=ge.getClearAlpha(),Be=Oe.r,ze=Oe.g,Ie=Oe.b;be?(m[0]=Be,m[1]=ze,m[2]=Ie,m[3]=Pe,G.clearBufferuiv(G.COLOR,0,m)):(_[0]=Be,_[1]=ze,_[2]=Ie,_[3]=Pe,G.clearBufferiv(G.COLOR,0,_))}else K|=G.COLOR_BUFFER_BIT}B&&(K|=G.DEPTH_BUFFER_BIT),q&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",de,!1),se.dispose(),ae.dispose(),P.dispose(),j.dispose(),J.dispose(),pe.dispose(),Qe.dispose(),U.dispose(),le.dispose(),x.dispose(),x.removeEventListener("sessionstart",Ee),x.removeEventListener("sessionend",Te),Re.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=nt.autoReset,B=Ne.enabled,q=Ne.autoUpdate,K=Ne.needsUpdate,Y=Ne.type;Ae(),nt.autoReset=w,Ne.enabled=B,Ne.autoUpdate=q,Ne.needsUpdate=K,Ne.type=Y}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _e(w){const B=w.target;B.removeEventListener("dispose",_e),Fe(B)}function Fe(w){We(w),P.remove(w)}function We(w){const B=P.get(w).programs;B!==void 0&&(B.forEach(function(q){le.releaseProgram(q)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,K,Y,ve){B===null&&(B=Le);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=wt(w,B,q,K,Y);k.setMaterial(K,be);let Pe=q.index,Be=1;if(K.wireframe===!0){if(Pe=ne.getWireframeAttribute(q),Pe===void 0)return;Be=2}const ze=q.drawRange,Ie=q.attributes.position;let ht=ze.start*Be,Kt=(ze.start+ze.count)*Be;ve!==null&&(ht=Math.max(ht,ve.start*Be),Kt=Math.min(Kt,(ve.start+ve.count)*Be)),Pe!==null?(ht=Math.max(ht,0),Kt=Math.min(Kt,Pe.count)):Ie!=null&&(ht=Math.max(ht,0),Kt=Math.min(Kt,Ie.count));const Ft=Kt-ht;if(Ft<0||Ft===1/0)return;Qe.setup(Y,K,Oe,q,Pe);let yn,ft=He;if(Pe!==null&&(yn=re.get(Pe),ft=qe,ft.setIndex(yn)),Y.isMesh)K.wireframe===!0?(k.setLineWidth(K.wireframeLinewidth*Ge()),ft.setMode(G.LINES)):ft.setMode(G.TRIANGLES);else if(Y.isLine){let je=K.linewidth;je===void 0&&(je=1),k.setLineWidth(je*Ge()),Y.isLineSegments?ft.setMode(G.LINES):Y.isLineLoop?ft.setMode(G.LINE_LOOP):ft.setMode(G.LINE_STRIP)}else Y.isPoints?ft.setMode(G.POINTS):Y.isSprite&&ft.setMode(G.TRIANGLES);if(Y.isBatchedMesh)ft.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ft.renderInstances(ht,Ft,Y.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Xi=Math.min(q.instanceCount,je);ft.renderInstances(ht,Ft,Xi)}else ft.render(ht,Ft)};function O(w,B,q){w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,xt(w,B,q),w.side=fr,w.needsUpdate=!0,xt(w,B,q),w.side=hi):xt(w,B,q)}this.compile=function(w,B,q=null){q===null&&(q=w),p=ae.get(q),p.init(),y.push(p),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),w!==q&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);const K=new Set;return w.traverse(function(Y){const ve=Y.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const Oe=ve[be];O(Oe,q,Y),K.add(Oe)}else O(ve,q,Y),K.add(ve)}),y.pop(),p=null,K},this.compileAsync=function(w,B,q=null){const K=this.compile(w,B,q);return new Promise(Y=>{function ve(){if(K.forEach(function(be){P.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){Y(w);return}setTimeout(ve,10)}ue.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let fe=null;function ce(w){fe&&fe(w)}function Ee(){Re.stop()}function Te(){Re.start()}const Re=new Zf;Re.setAnimationLoop(ce),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(w){fe=w,x.setAnimationLoop(w),w===null?Re.stop():Re.start()},x.addEventListener("sessionstart",Ee),x.addEventListener("sessionend",Te),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(B),B=x.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,b),p=ae.get(w,y.length),p.init(),y.push(p),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ue.setFromProjectionMatrix(me),ie=this.localClippingEnabled,X=oe.init(this.clippingPlanes,ie),g=se.get(w,f.length),g.init(),f.push(g),at(w,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(L,Q),this.info.render.frame++,X===!0&&oe.beginShadows();const q=p.state.shadowsArray;if(Ne.render(q,w,B),X===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1)&&ge.render(g,w),p.setupLights(v._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let Y=0,ve=K.length;Y<ve;Y++){const be=K[Y];gt(g,w,be,be.viewport)}}else gt(g,w,B);b!==null&&(T.updateMultisampleRenderTarget(b),T.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(v,w,B),Qe.resetDefaultState(),C=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function at(w,B,q,K){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ue.intersectsSprite(w)){K&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const be=pe.update(w),Oe=w.material;Oe.visible&&g.push(w,be,Oe,q,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ue.intersectsObject(w))){const be=pe.update(w),Oe=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),De.copy(be.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Oe)){const Pe=be.groups;for(let Be=0,ze=Pe.length;Be<ze;Be++){const Ie=Pe[Be],ht=Oe[Ie.materialIndex];ht&&ht.visible&&g.push(w,be,ht,q,De.z,Ie)}}else Oe.visible&&g.push(w,be,Oe,q,De.z,null)}}const ve=w.children;for(let be=0,Oe=ve.length;be<Oe;be++)at(ve[be],B,q,K)}function gt(w,B,q,K){const Y=w.opaque,ve=w.transmissive,be=w.transparent;p.setupLightsView(q),X===!0&&oe.setGlobalState(v.clippingPlanes,q),ve.length>0&&Ke(Y,ve,B,q),K&&k.viewport(S.copy(K)),Y.length>0&&st(Y,B,q),ve.length>0&&st(ve,B,q),be.length>0&&st(be,B,q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Ke(w,B,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Vi(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?qr:si,minFilter:kr,samples:4,stencilBuffer:s});const Be=P.get(p.state.transmissionRenderTarget);Be.__isTransmissionRenderTarget=!0}const ve=p.state.transmissionRenderTarget;v.getDrawingBufferSize(he),ve.setSize(he.x,he.y);const be=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(R),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=cr,st(w,q,K),T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve);let Pe=!1;for(let Be=0,ze=B.length;Be<ze;Be++){const Ie=B[Be],ht=Ie.object,Kt=Ie.geometry,Ft=Ie.material,yn=Ie.group;if(Ft.side===hi&&ht.layers.test(K.layers)){const ft=Ft.side;Ft.side=bn,Ft.needsUpdate=!0,At(ht,q,K,Kt,Ft,yn),Ft.side=ft,Ft.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(ve),T.updateRenderTargetMipmap(ve)),v.setRenderTarget(be),v.setClearColor(R,N),v.toneMapping=Oe}function st(w,B,q){const K=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,ve=w.length;Y<ve;Y++){const be=w[Y],Oe=be.object,Pe=be.geometry,Be=K===null?be.material:K,ze=be.group;Oe.layers.test(q.layers)&&At(Oe,B,q,Pe,Be,ze)}}function At(w,B,q,K,Y,ve){w.onBeforeRender(v,B,q,K,Y,ve),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,B,q,K,w,ve),Y.transparent===!0&&Y.side===hi&&Y.forceSinglePass===!1?(Y.side=bn,Y.needsUpdate=!0,v.renderBufferDirect(q,B,K,Y,w,ve),Y.side=fr,Y.needsUpdate=!0,v.renderBufferDirect(q,B,K,Y,w,ve),Y.side=hi):v.renderBufferDirect(q,B,K,Y,w,ve),w.onAfterRender(v,B,q,K,Y,ve)}function xt(w,B,q){B.isScene!==!0&&(B=Le);const K=P.get(w),Y=p.state.lights,ve=p.state.shadowsArray,be=Y.state.version,Oe=le.getParameters(w,Y.state,ve,B,q),Pe=le.getProgramCacheKey(Oe);let Be=K.programs;K.environment=w.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(w.isMeshStandardMaterial?J:j).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",_e),Be=new Map,K.programs=Be);let ze=Be.get(Pe);if(ze!==void 0){if(K.currentProgram===ze&&K.lightsStateVersion===be)return ct(w,Oe),ze}else Oe.uniforms=le.getUniforms(w),w.onBuild(q,Oe,v),w.onBeforeCompile(Oe,v),ze=le.acquireProgram(Oe,Pe),Be.set(Pe,ze),K.uniforms=Oe.uniforms;const Ie=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=oe.uniform),ct(w,Oe),K.needsLights=bi(w),K.lightsStateVersion=be,K.needsLights&&(Ie.ambientLightColor.value=Y.state.ambient,Ie.lightProbe.value=Y.state.probe,Ie.directionalLights.value=Y.state.directional,Ie.directionalLightShadows.value=Y.state.directionalShadow,Ie.spotLights.value=Y.state.spot,Ie.spotLightShadows.value=Y.state.spotShadow,Ie.rectAreaLights.value=Y.state.rectArea,Ie.ltc_1.value=Y.state.rectAreaLTC1,Ie.ltc_2.value=Y.state.rectAreaLTC2,Ie.pointLights.value=Y.state.point,Ie.pointLightShadows.value=Y.state.pointShadow,Ie.hemisphereLights.value=Y.state.hemi,Ie.directionalShadowMap.value=Y.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ie.spotShadowMap.value=Y.state.spotShadowMap,Ie.spotLightMatrix.value=Y.state.spotLightMatrix,Ie.spotLightMap.value=Y.state.spotLightMap,Ie.pointShadowMap.value=Y.state.pointShadowMap,Ie.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=ze,K.uniformsList=null,ze}function Vn(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=No.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function ct(w,B){const q=P.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function wt(w,B,q,K,Y){B.isScene!==!0&&(B=Le),T.resetTextureUnits();const ve=B.fog,be=K.isMeshStandardMaterial?B.environment:null,Oe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ai,Pe=(K.isMeshStandardMaterial?J:j).get(K.envMap||be),Be=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ie=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,Kt=!!q.morphAttributes.color;let Ft=cr;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ft=v.toneMapping);const yn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ft=yn!==void 0?yn.length:0,je=P.get(K),Xi=p.state.lights;if(X===!0&&(ie===!0||w!==M)){const Gn=w===M&&K.id===C;oe.setState(K,w,Gn)}let yt=!1;K.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Xi.state.version||je.outputColorSpace!==Oe||Y.isBatchedMesh&&je.batching===!1||!Y.isBatchedMesh&&je.batching===!0||Y.isInstancedMesh&&je.instancing===!1||!Y.isInstancedMesh&&je.instancing===!0||Y.isSkinnedMesh&&je.skinning===!1||!Y.isSkinnedMesh&&je.skinning===!0||Y.isInstancedMesh&&je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&je.instancingMorph===!1&&Y.morphTexture!==null||je.envMap!==Pe||K.fog===!0&&je.fog!==ve||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==oe.numPlanes||je.numIntersection!==oe.numIntersection)||je.vertexAlphas!==Be||je.vertexTangents!==ze||je.morphTargets!==Ie||je.morphNormals!==ht||je.morphColors!==Kt||je.toneMapping!==Ft||je.morphTargetsCount!==ft)&&(yt=!0):(yt=!0,je.__version=K.version);let yr=je.currentProgram;yt===!0&&(yr=xt(K,B,Y));let $u=!1,ea=!1,Al=!1;const Zt=yr.getUniforms(),Yi=je.uniforms;if(k.useProgram(yr.program)&&($u=!0,ea=!0,Al=!0),K.id!==C&&(C=K.id,ea=!0),$u||M!==w){Zt.setValue(G,"projectionMatrix",w.projectionMatrix),Zt.setValue(G,"viewMatrix",w.matrixWorldInverse);const Gn=Zt.map.cameraPosition;Gn!==void 0&&Gn.setValue(G,De.setFromMatrixPosition(w.matrixWorld)),Ze.logarithmicDepthBuffer&&Zt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Zt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ea=!0,Al=!0)}if(Y.isSkinnedMesh){Zt.setOptional(G,Y,"bindMatrix"),Zt.setOptional(G,Y,"bindMatrixInverse");const Gn=Y.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Zt.setValue(G,"boneTexture",Gn.boneTexture,T))}Y.isBatchedMesh&&(Zt.setOptional(G,Y,"batchingTexture"),Zt.setValue(G,"batchingTexture",Y._matricesTexture,T));const wl=q.morphAttributes;if((wl.position!==void 0||wl.normal!==void 0||wl.color!==void 0)&&Se.update(Y,q,yr),(ea||je.receiveShadow!==Y.receiveShadow)&&(je.receiveShadow=Y.receiveShadow,Zt.setValue(G,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Yi.envMap.value=Pe,Yi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(Yi.envMapIntensity.value=B.environmentIntensity),ea&&(Zt.setValue(G,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&Yt(Yi,Al),ve&&K.fog===!0&&xe.refreshFogUniforms(Yi,ve),xe.refreshMaterialUniforms(Yi,K,Z,W,p.state.transmissionRenderTarget),No.upload(G,Vn(je),Yi,T)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(No.upload(G,Vn(je),Yi,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Zt.setValue(G,"center",Y.center),Zt.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Zt.setValue(G,"normalMatrix",Y.normalMatrix),Zt.setValue(G,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Gn=K.uniformsGroups;for(let Cl=0,sg=Gn.length;Cl<sg;Cl++){const qu=Gn[Cl];U.update(qu,yr),U.bind(qu,yr)}}return yr}function Yt(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function bi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,B,q){P.get(w.texture).__webglTexture=B,P.get(w.depthTexture).__webglTexture=q;const K=P.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const q=P.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){b=w,A=B,D=q;let K=!0,Y=null,ve=!1,be=!1;if(w){const Pe=P.get(w);Pe.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):Pe.__webglFramebuffer===void 0?T.setupRenderTarget(w):Pe.__hasExternalTextures&&T.rebindTextures(w,P.get(w.texture).__webglTexture,P.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const ze=P.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?Y=ze[B][q]:Y=ze[B],ve=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?Y=P.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?Y=ze[q]:Y=ze,S.copy(w.viewport),F.copy(w.scissor),I=w.scissorTest}else S.copy(H).multiplyScalar(Z).floor(),F.copy(ee).multiplyScalar(Z).floor(),I=ye;if(k.bindFramebuffer(G.FRAMEBUFFER,Y)&&K&&k.drawBuffers(w,Y),k.viewport(S),k.scissor(F),k.setScissorTest(I),ve){const Pe=P.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,q)}else if(be){const Pe=P.get(w.texture),Be=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.__webglTexture,q||0,Be)}C=-1},this.readRenderTargetPixels=function(w,B,q,K,Y,ve,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe){k.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const Pe=w.texture,Be=Pe.format,ze=Pe.type;if(Be!==En&&Je.convert(Be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=ze===qr&&(ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float"));if(ze!==si&&Je.convert(ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&ze!==ri&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-K&&q>=0&&q<=w.height-Y&&G.readPixels(B,q,K,Y,Je.convert(Be),Je.convert(ze),ve)}finally{const Pe=b!==null?P.get(b).__webglFramebuffer:null;k.bindFramebuffer(G.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(w,B,q=0){const K=Math.pow(2,-q),Y=Math.floor(B.image.width*K),ve=Math.floor(B.image.height*K);T.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,w.x,w.y,Y,ve),k.unbindTexture()},this.copyTextureToTexture=function(w,B,q,K=0){const Y=B.image.width,ve=B.image.height,be=Je.convert(q.format),Oe=Je.convert(q.type);T.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,w.x,w.y,Y,ve,be,Oe,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,be,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,w.x,w.y,be,Oe,B.image),K===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(w,B,q,K,Y=0){const ve=Math.round(w.max.x-w.min.x),be=Math.round(w.max.y-w.min.y),Oe=w.max.z-w.min.z+1,Pe=Je.convert(K.format),Be=Je.convert(K.type);let ze;if(K.isData3DTexture)T.setTexture3D(K,0),ze=G.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)T.setTexture2DArray(K,0),ze=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const Ie=G.getParameter(G.UNPACK_ROW_LENGTH),ht=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Kt=G.getParameter(G.UNPACK_SKIP_PIXELS),Ft=G.getParameter(G.UNPACK_SKIP_ROWS),yn=G.getParameter(G.UNPACK_SKIP_IMAGES),ft=q.isCompressedTexture?q.mipmaps[Y]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(ze,Y,B.x,B.y,B.z,ve,be,Oe,Pe,Be,ft.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(ze,Y,B.x,B.y,B.z,ve,be,Oe,Pe,ft.data):G.texSubImage3D(ze,Y,B.x,B.y,B.z,ve,be,Oe,Pe,Be,ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ie),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ht),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ft),G.pixelStorei(G.UNPACK_SKIP_IMAGES,yn),Y===0&&K.generateMipmaps&&G.generateMipmap(ze),k.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),k.unbindTexture()},this.resetState=function(){A=0,D=0,b=null,k.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fu?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===_l?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}let ap=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Iy extends Pt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Sn,u=Sn,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl extends vr{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,d=new z,m=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let E=0;f===0&&a===0?E=.5/t:f===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const D=A/t;h.x=-e*Math.cos(r+D*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+D*s)*Math.sin(a+v*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(D+E,1-v),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const v=u[f][y+1],E=u[f][y],A=u[f+1][y],D=u[f+1][y+1];(f!==0||a>0)&&m.push(v,E,D),(f!==n-1||l<Math.PI)&&m.push(E,A,D)}this.setIndex(m),this.setAttribute("position",new xi(_,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uy extends Js{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ut(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ny extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const _d={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class op{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Oy=new op;class vu{constructor(e){this.manager=e!==void 0?e:Oy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class By extends Error{constructor(e,t){super(e),this.response=t}}class ky extends vu{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_d.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:r});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pi[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0;let g=0;const p=new ReadableStream({start(f){y();function y(){h.read().then(({done:v,value:E})=>{if(v)f.close();else{g+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let D=0,b=u.length;D<b;D++){const C=u[D];C.onProgress&&C.onProgress(A)}f.enqueue(E),y()}})}}});return new Response(p)}else throw new By(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{_d.add(e,c);const u=Pi[e];delete Pi[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zy extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const oc=new Lt,vd=new z,xd=new z;class Hy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gu,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vy extends Hy{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ws*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gy extends zy{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);const Md={type:"change"},lc={type:"start"},Sd={type:"end"},vo=new Gf,Ed=new tr,Wy=Math.cos(70*kf.DEG2RAD);class Xy extends Qr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",oe),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Md),n.update(),s=r.NONE},this.update=function(){const x=new z,$=new pr().setFromUnitVectors(e.up,new z(0,1,0)),te=$.clone().invert(),de=new z,_e=new pr,Fe=new z,We=2*Math.PI;return function(fe=null){const ce=n.object.position;x.copy(ce).sub(n.target),x.applyQuaternion($),o.setFromVector3(x),n.autoRotate&&s===r.NONE&&I(S(fe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ee=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(Ee)&&isFinite(Te)&&(Ee<-Math.PI?Ee+=We:Ee>Math.PI&&(Ee-=We),Te<-Math.PI?Te+=We:Te>Math.PI&&(Te-=We),Ee<=Te?o.theta=Math.max(Ee,Math.min(Te,o.theta)):o.theta=o.theta>(Ee+Te)/2?Math.max(Ee,o.theta):Math.min(Te,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Re=!1;if(n.zoomToCursor&&D||n.object.isOrthographicCamera)o.radius=H(o.radius);else{const at=o.radius;o.radius=H(o.radius*c),Re=at!=o.radius}if(x.setFromSpherical(o),x.applyQuaternion(te),ce.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&D){let at=null;if(n.object.isPerspectiveCamera){const gt=x.length();at=H(gt*c);const Ke=gt-at;n.object.position.addScaledVector(E,Ke),n.object.updateMatrixWorld(),Re=!!Ke}else if(n.object.isOrthographicCamera){const gt=new z(A.x,A.y,0);gt.unproject(n.object);const Ke=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Re=Ke!==n.object.zoom;const st=new z(A.x,A.y,0);st.unproject(n.object),n.object.position.sub(st).add(gt),n.object.updateMatrixWorld(),at=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;at!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(at).add(n.object.position):(vo.origin.copy(n.object.position),vo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(vo.direction))<Wy?e.lookAt(n.target):(Ed.setFromNormalAndCoplanarPoint(n.object.up,n.target),vo.intersectPlane(Ed,n.target))))}else if(n.object.isOrthographicCamera){const at=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),at!==n.object.zoom&&(n.object.updateProjectionMatrix(),Re=!0)}return c=1,D=!1,Re||de.distanceToSquared(n.object.position)>a||8*(1-_e.dot(n.object.quaternion))>a||Fe.distanceToSquared(n.target)>a?(n.dispatchEvent(Md),de.copy(n.object.position),_e.copy(n.object.quaternion),Fe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Se),n.domElement.removeEventListener("pointerdown",j),n.domElement.removeEventListener("pointercancel",re),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",re),n.domElement.getRootNode().removeEventListener("keydown",se,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",oe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new yd,l=new yd;let c=1;const u=new z,h=new Ve,d=new Ve,m=new Ve,_=new Ve,g=new Ve,p=new Ve,f=new Ve,y=new Ve,v=new Ve,E=new z,A=new Ve;let D=!1;const b=[],C={};let M=!1;function S(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function F(x){const $=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*$)}function I(x){l.theta-=x}function R(x){l.phi-=x}const N=function(){const x=new z;return function(te,de){x.setFromMatrixColumn(de,0),x.multiplyScalar(-te),u.add(x)}}(),V=function(){const x=new z;return function(te,de){n.screenSpacePanning===!0?x.setFromMatrixColumn(de,1):(x.setFromMatrixColumn(de,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(te),u.add(x)}}(),W=function(){const x=new z;return function(te,de){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Fe=n.object.position;x.copy(Fe).sub(n.target);let We=x.length();We*=Math.tan(n.object.fov/2*Math.PI/180),N(2*te*We/_e.clientHeight,n.object.matrix),V(2*de*We/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(te*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),V(de*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(x,$){if(!n.zoomToCursor)return;D=!0;const te=n.domElement.getBoundingClientRect(),de=x-te.left,_e=$-te.top,Fe=te.width,We=te.height;A.x=de/Fe*2-1,A.y=-(_e/We)*2+1,E.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function H(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function ee(x){h.set(x.clientX,x.clientY)}function ye(x){Q(x.clientX,x.clientX),f.set(x.clientX,x.clientY)}function Ue(x){_.set(x.clientX,x.clientY)}function X(x){d.set(x.clientX,x.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const $=n.domElement;I(2*Math.PI*m.x/$.clientHeight),R(2*Math.PI*m.y/$.clientHeight),h.copy(d),n.update()}function ie(x){y.set(x.clientX,x.clientY),v.subVectors(y,f),v.y>0?Z(F(v.y)):v.y<0&&L(F(v.y)),f.copy(y),n.update()}function me(x){g.set(x.clientX,x.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),W(p.x,p.y),_.copy(g),n.update()}function he(x){Q(x.clientX,x.clientY),x.deltaY<0?L(F(x.deltaY)):x.deltaY>0&&Z(F(x.deltaY)),n.update()}function De(x){let $=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),$=!0;break}$&&(x.preventDefault(),n.update())}function Le(x){if(b.length===1)h.set(x.pageX,x.pageY);else{const $=U(x),te=.5*(x.pageX+$.x),de=.5*(x.pageY+$.y);h.set(te,de)}}function Ge(x){if(b.length===1)_.set(x.pageX,x.pageY);else{const $=U(x),te=.5*(x.pageX+$.x),de=.5*(x.pageY+$.y);_.set(te,de)}}function G(x){const $=U(x),te=x.pageX-$.x,de=x.pageY-$.y,_e=Math.sqrt(te*te+de*de);f.set(0,_e)}function Ce(x){n.enableZoom&&G(x),n.enablePan&&Ge(x)}function ue(x){n.enableZoom&&G(x),n.enableRotate&&Le(x)}function Ze(x){if(b.length==1)d.set(x.pageX,x.pageY);else{const te=U(x),de=.5*(x.pageX+te.x),_e=.5*(x.pageY+te.y);d.set(de,_e)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const $=n.domElement;I(2*Math.PI*m.x/$.clientHeight),R(2*Math.PI*m.y/$.clientHeight),h.copy(d)}function k(x){if(b.length===1)g.set(x.pageX,x.pageY);else{const $=U(x),te=.5*(x.pageX+$.x),de=.5*(x.pageY+$.y);g.set(te,de)}p.subVectors(g,_).multiplyScalar(n.panSpeed),W(p.x,p.y),_.copy(g)}function nt(x){const $=U(x),te=x.pageX-$.x,de=x.pageY-$.y,_e=Math.sqrt(te*te+de*de);y.set(0,_e),v.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),Z(v.y),f.copy(y);const Fe=(x.pageX+$.x)*.5,We=(x.pageY+$.y)*.5;Q(Fe,We)}function P(x){n.enableZoom&&nt(x),n.enablePan&&k(x)}function T(x){n.enableZoom&&nt(x),n.enableRotate&&Ze(x)}function j(x){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",J),n.domElement.addEventListener("pointerup",re)),!Je(x)&&(He(x),x.pointerType==="touch"?Ne(x):ne(x)))}function J(x){n.enabled!==!1&&(x.pointerType==="touch"?ge(x):pe(x))}function re(x){switch(qe(x),b.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",re),n.dispatchEvent(Sd),s=r.NONE;break;case 1:const $=b[0],te=C[$];Ne({pointerId:$,pageX:te.x,pageY:te.y});break}}function ne(x){let $;switch(x.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case ns.DOLLY:if(n.enableZoom===!1)return;ye(x),s=r.DOLLY;break;case ns.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;Ue(x),s=r.PAN}else{if(n.enableRotate===!1)return;ee(x),s=r.ROTATE}break;case ns.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;ee(x),s=r.ROTATE}else{if(n.enablePan===!1)return;Ue(x),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(lc)}function pe(x){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;X(x);break;case r.DOLLY:if(n.enableZoom===!1)return;ie(x);break;case r.PAN:if(n.enablePan===!1)return;me(x);break}}function le(x){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(x.preventDefault(),n.dispatchEvent(lc),he(xe(x)),n.dispatchEvent(Sd))}function xe(x){const $=x.deltaMode,te={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch($){case 1:te.deltaY*=16;break;case 2:te.deltaY*=100;break}return x.ctrlKey&&!M&&(te.deltaY*=10),te}function se(x){x.key==="Control"&&(M=!0,n.domElement.getRootNode().addEventListener("keyup",ae,{passive:!0,capture:!0}))}function ae(x){x.key==="Control"&&(M=!1,n.domElement.getRootNode().removeEventListener("keyup",ae,{passive:!0,capture:!0}))}function oe(x){n.enabled===!1||n.enablePan===!1||De(x)}function Ne(x){switch(Qe(x),b.length){case 1:switch(n.touches.ONE){case is.ROTATE:if(n.enableRotate===!1)return;Le(x),s=r.TOUCH_ROTATE;break;case is.PAN:if(n.enablePan===!1)return;Ge(x),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case is.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(x),s=r.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(x),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(lc)}function ge(x){switch(Qe(x),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ze(x),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;k(x),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(x),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;T(x),n.update();break;default:s=r.NONE}}function Se(x){n.enabled!==!1&&x.preventDefault()}function He(x){b.push(x.pointerId)}function qe(x){delete C[x.pointerId];for(let $=0;$<b.length;$++)if(b[$]==x.pointerId){b.splice($,1);return}}function Je(x){for(let $=0;$<b.length;$++)if(b[$]==x.pointerId)return!0;return!1}function Qe(x){let $=C[x.pointerId];$===void 0&&($=new Ve,C[x.pointerId]=$),$.set(x.pageX,x.pageY)}function U(x){const $=x.pointerId===b[0]?b[1]:b[0];return C[$]}n.domElement.addEventListener("contextmenu",Se),n.domElement.addEventListener("pointerdown",j),n.domElement.addEventListener("pointercancel",re),n.domElement.addEventListener("wheel",le,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class yi{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),yi.nextNameID=yi.nextNameID||0,this.$name.id=`lil-gui-name-${++yi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Yy extends yi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fc(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const $y={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Fc,toHexString:Fc},Pa={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},qy={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Pa.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Pa.toHexString(r)}},jy={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Pa.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Pa.toHexString(r)}},Ky=[$y,Pa,qy,jy];function Zy(i){return Ky.find(e=>e.match(i))}class Jy extends yi{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Zy(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Fc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class cc extends yi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Qy extends yi{constructor(e,t,n,r,s,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+y),this.$input.value=this.getValue())},r=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,o,l,c,u,h;const d=5,m=y=>{o=y.clientX,l=c=y.clientY,a=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=y=>{if(a){const v=y.clientX-o,E=y.clientY-l;Math.abs(E)>d?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&g()}if(!a){const v=y.clientY-c;h-=v*this._step*this._arrowKeyMultiplier(y),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=y.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,y,v,E,A)=>(f-y)/(v-y)*(A-E)+E,t=f=>{const y=this.$slider.getBoundingClientRect();let v=e(f,y.left,y.right,this._min,this._max);this._snapClampSetValue(v)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(a){const y=f.touches[0].clientX-o,v=f.touches[0].clientY-l;Math.abs(y)>Math.abs(v)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),_=400;let g;const p=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const v=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class eM extends yi{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class tM extends yi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const nM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function iM(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Td=!1;class xu{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Td&&o&&(iM(nM),Td=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,n,r,s){if(Object(n)===n)return new eM(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Qy(this,e,t,n,r,s);case"boolean":return new Yy(this,e,t);case"string":return new tM(this,e,t);case"function":return new cc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Jy(this,e,t,n)}addFolder(e){const t=new xu({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof cc||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof cc)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const lp=(i,e,t)=>{let n;switch(i){case si:n=new Uint8ClampedArray(e*t*4);break;case qr:n=new Uint16Array(e*t*4);break;case $r:n=new Uint32Array(e*t*4);break;case wf:n=new Int8Array(e*t*4);break;case Cf:n=new Int16Array(e*t*4);break;case du:n=new Int32Array(e*t*4);break;case ri:n=new Float32Array(e*t*4);break;default:throw new Error("Unsupported data type")}return n};let xo;const rM=(i,e,t,n)=>{if(xo!==void 0)return xo;const r=new Vi(1,1,n);e.setRenderTarget(r);const s=new Tn(new es,new vl({color:16777215}));e.render(s,t),e.setRenderTarget(null);const a=lp(i,r.width,r.height);return e.readRenderTargetPixels(r,0,0,r.width,r.height,a),r.dispose(),s.geometry.dispose(),s.material.dispose(),xo=a[0]!==0,xo};class yu{constructor(e){var t,n,r,s,a,o,l,c,u,h,d,m,_,g,p,f;this._rendererIsDisposable=!1,this._supportsReadPixels=!0,this.render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(v){throw this._renderer.setRenderTarget(null),v}this._renderer.setRenderTarget(null)},this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;const y={format:En,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((t=e.renderTargetOptions)===null||t===void 0?void 0:t.anisotropy)!==void 0?(n=e.renderTargetOptions)===null||n===void 0?void 0:n.anisotropy:1,generateMipmaps:((r=e.renderTargetOptions)===null||r===void 0?void 0:r.generateMipmaps)!==void 0?(s=e.renderTargetOptions)===null||s===void 0?void 0:s.generateMipmaps:!1,magFilter:((a=e.renderTargetOptions)===null||a===void 0?void 0:a.magFilter)!==void 0?(o=e.renderTargetOptions)===null||o===void 0?void 0:o.magFilter:$t,minFilter:((l=e.renderTargetOptions)===null||l===void 0?void 0:l.minFilter)!==void 0?(c=e.renderTargetOptions)===null||c===void 0?void 0:c.minFilter:$t,samples:((u=e.renderTargetOptions)===null||u===void 0?void 0:u.samples)!==void 0?(h=e.renderTargetOptions)===null||h===void 0?void 0:h.samples:void 0,wrapS:((d=e.renderTargetOptions)===null||d===void 0?void 0:d.wrapS)!==void 0?(m=e.renderTargetOptions)===null||m===void 0?void 0:m.wrapS:xn,wrapT:((_=e.renderTargetOptions)===null||_===void 0?void 0:_.wrapT)!==void 0?(g=e.renderTargetOptions)===null||g===void 0?void 0:g.wrapT:xn};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=yu.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new ap,this._camera=new Jf,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!rM(this._type,this._renderer,this._camera,y)){let v;switch(this._type){case qr:v=this._renderer.extensions.has("EXT_color_buffer_float")?ri:void 0;break}v!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${ri}`),this._type=v):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new Tn(new es,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new Vi(this.width,this.height,y),this._renderTarget.texture.mapping=((p=e.renderTargetOptions)===null||p===void 0?void 0:p.mapping)!==void 0?(f=e.renderTargetOptions)===null||f===void 0?void 0:f.mapping:Hs}static instantiateRenderer(){const e=new sp;return e.setSize(128,128),e}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const e=lp(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){const t=new Iy(this.toArray(),this.width,this.height,En,this._type,(e==null?void 0:e.mapping)||Hs,(e==null?void 0:e.wrapS)||xn,(e==null?void 0:e.wrapT)||xn,(e==null?void 0:e.magFilter)||$t,(e==null?void 0:e.minFilter)||$t,(e==null?void 0:e.anisotropy)||1,ai);return t.generateMipmaps=(e==null?void 0:e.generateMipmaps)!==void 0?e==null?void 0:e.generateMipmaps:!1,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof Ei&&Object.values(this.material.uniforms).forEach(t=>{t.value instanceof Pt&&t.value.dispose()}),Object.values(this.material).forEach(t=>{t instanceof Pt&&t.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}const sM=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,aM=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class oM extends Ei{constructor({gamma:e,offsetHdr:t,offsetSdr:n,gainMapMin:r,gainMapMax:s,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:l,sdr:c,gainMap:u}){super({name:"GainMapDecoderMaterial",vertexShader:sM,fragmentShader:aM,uniforms:{sdr:{value:c},gainMap:{value:u},gamma:{value:new z(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new z().fromArray(t)},offsetSdr:{value:new z().fromArray(n)},gainMapMin:{value:new z().fromArray(r)},gainMapMax:{value:new z().fromArray(s)},weightFactor:{value:(Math.log2(a)-o)/(l-o)}},blending:ki,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){const e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){const t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){const e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}}class cp extends Error{}class up extends Error{}const sa=(i,e,t)=>{var n;let r;const s=(n=i.attributes.getNamedItem(e))===null||n===void 0?void 0:n.nodeValue;if(s)r=s;else{const a=i.getElementsByTagName(e)[0];if(a){const o=a.getElementsByTagName("rdf:li");if(o.length===3)r=Array.from(o).map(l=>l.innerHTML);else throw new Error(`Gainmap metadata contains an array of items for ${e} but its length is not 3`)}else{if(t)return t;throw new Error(`Can't find ${e} in gainmap metadata`)}}return r},lM=i=>{var e,t;let n;typeof TextDecoder<"u"?n=new TextDecoder().decode(i):n=i.toString();let r=n.indexOf("<x:xmpmeta");const s=new DOMParser;for(;r!==-1;){const a=n.indexOf("x:xmpmeta>",r);n.slice(r,a+10);const o=n.slice(r,a+10);try{const c=s.parseFromString(o,"text/xml").getElementsByTagName("rdf:Description")[0],u=sa(c,"hdrgm:GainMapMin","0"),h=sa(c,"hdrgm:GainMapMax"),d=sa(c,"hdrgm:Gamma","1"),m=sa(c,"hdrgm:OffsetSDR","0.015625"),_=sa(c,"hdrgm:OffsetHDR","0.015625");let g=(e=c.attributes.getNamedItem("hdrgm:HDRCapacityMin"))===null||e===void 0?void 0:e.nodeValue;g||(g="0");const p=(t=c.attributes.getNamedItem("hdrgm:HDRCapacityMax"))===null||t===void 0?void 0:t.nodeValue;if(!p)throw new Error("Incomplete gainmap metadata");return{gainMapMin:Array.isArray(u)?u.map(f=>parseFloat(f)):[parseFloat(u),parseFloat(u),parseFloat(u)],gainMapMax:Array.isArray(h)?h.map(f=>parseFloat(f)):[parseFloat(h),parseFloat(h),parseFloat(h)],gamma:Array.isArray(d)?d.map(f=>parseFloat(f)):[parseFloat(d),parseFloat(d),parseFloat(d)],offsetSdr:Array.isArray(m)?m.map(f=>parseFloat(f)):[parseFloat(m),parseFloat(m),parseFloat(m)],offsetHdr:Array.isArray(_)?_.map(f=>parseFloat(f)):[parseFloat(_),parseFloat(_),parseFloat(_)],hdrCapacityMin:parseFloat(g),hdrCapacityMax:parseFloat(p)}}catch{}r=n.indexOf("<x:xmpmeta",a)}};class cM{constructor(e){this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,n)=>{const r=this.options.debug,s=new DataView(e.buffer);if(s.getUint16(0)!==65496){n(new Error("Not a valid jpeg"));return}const a=s.byteLength;let o=2,l=0,c;for(;o<a;){if(++l>250){n(new Error(`Found no marker after ${l} loops 😵`));return}if(s.getUint8(o)!==255){n(new Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${s.getUint8(o).toString(16)}`));return}if(c=s.getUint8(o+1),r&&console.log(`Marker: ${c.toString(16)}`),c===226){r&&console.log("Found APP2 marker (0xffe2)");const u=o+4;if(s.getUint32(u)===1297106432){const h=u+4;let d;if(s.getUint16(h)===18761)d=!1;else if(s.getUint16(h)===19789)d=!0;else{n(new Error("No valid endianness marker found in TIFF header"));return}if(s.getUint16(h+2,!d)!==42){n(new Error("Not valid TIFF data! (no 0x002A marker)"));return}const m=s.getUint32(h+4,!d);if(m<8){n(new Error("Not valid TIFF data! (First offset less than 8)"));return}const _=h+m,g=s.getUint16(_,!d),p=_+2;let f=0;for(let A=p;A<p+12*g;A+=12)s.getUint16(A,!d)===45057&&(f=s.getUint32(A+8,!d));const v=_+2+g*12+4,E=[];for(let A=v;A<v+f*16;A+=16){const D={MPType:s.getUint32(A,!d),size:s.getUint32(A+4,!d),dataOffset:s.getUint32(A+8,!d),dependantImages:s.getUint32(A+12,!d),start:-1,end:-1,isFII:!1};D.dataOffset?(D.start=h+D.dataOffset,D.isFII=!1):(D.start=0,D.isFII=!0),D.end=D.start+D.size,E.push(D)}if(this.options.extractNonFII&&E.length){const A=new Blob([s]),D=[];for(const b of E){if(b.isFII&&!this.options.extractFII)continue;const C=A.slice(b.start,b.end+1,"image/jpeg");D.push(C)}t(D)}}}o+=2+s.getUint16(o+2)}})}}const uM=async i=>{const e=lM(i);if(!e)throw new up("Gain map XMP metadata not found");const n=await new cM({extractFII:!0,extractNonFII:!0}).extract(i);if(n.length!==2)throw new cp("Gain map recovery image not found");return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:e}},bd=i=>new Promise((e,t)=>{const n=document.createElement("img");n.onload=()=>{e(n)},n.onerror=r=>{t(r)},n.src=URL.createObjectURL(i)});class hM extends vu{constructor(e,t){super(t),this._renderer=e,this._internalLoadingManager=new op}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){const e=new oM({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new Pt,sdr:new Pt});return new yu({width:16,height:16,type:qr,colorSpace:ai,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async render(e,t,n,r){const s=r?new Blob([r],{type:"image/jpeg"}):void 0,a=new Blob([n],{type:"image/jpeg"});let o,l,c=!1;if(typeof createImageBitmap>"u"){const d=await Promise.all([s?bd(s):Promise.resolve(void 0),bd(a)]);l=d[0],o=d[1],c=!0}else{const d=await Promise.all([s?createImageBitmap(s,{imageOrientation:"flipY"}):Promise.resolve(void 0),createImageBitmap(a,{imageOrientation:"flipY"})]);l=d[0],o=d[1]}const u=new Pt(l||new ImageData(2,2),Hs,xn,xn,$t,eh,En,si,1,ai);u.flipY=c,u.needsUpdate=!0;const h=new Pt(o,Hs,xn,xn,$t,eh,En,si,1,ni);h.flipY=c,h.needsUpdate=!0,e.width=o.width,e.height=o.height,e.material.gainMap=u,e.material.sdr=h,e.material.gainMapMin=t.gainMapMin,e.material.gainMapMax=t.gainMapMax,e.material.offsetHdr=t.offsetHdr,e.material.offsetSdr=t.offsetSdr,e.material.gamma=t.gamma,e.material.hdrCapacityMin=t.hdrCapacityMin,e.material.hdrCapacityMax=t.hdrCapacityMax,e.material.maxDisplayBoost=Math.pow(2,t.hdrCapacityMax),e.material.needsUpdate=!0,e.render()}}class dM extends hM{load(e,t,n,r){const s=this.prepareQuadRenderer(),a=new ky(this._internalLoadingManager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async o=>{if(typeof o=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const l=new Uint8Array(o);let c,u,h;try{const d=await uM(l);c=d.sdr,u=d.gainMap,h=d.metadata}catch(d){if(d instanceof up||d instanceof cp)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),h={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},c=l;else throw d}try{await this.render(s,h,c,u)}catch(d){this.manager.itemError(e),typeof r=="function"&&r(d),s.disposeOnDemandRenderer();return}typeof t=="function"&&t(s),this.manager.itemEnd(e),s.disposeOnDemandRenderer()},n,o=>{this.manager.itemError(e),typeof r=="function"&&r(o)}),s}}class fM extends Tn{constructor(e,t,n,r=128){if(t<=0||n<=0||r<=0)throw new Error("GroundedSkybox height, radius, and resolution must be positive.");const s=new yl(n,2*r,r);s.scale(1,1,-1);const a=s.getAttribute("position"),o=new z;for(let l=0;l<a.count;++l)if(o.fromBufferAttribute(a,l),o.y<0){const c=-t*3/2,u=o.y<c?-t/o.y:1-o.y*o.y/(3*c*c);o.multiplyScalar(u),o.toArray(a.array,3*l)}a.needsUpdate=!0,super(s,new vl({map:e,depthWrite:!1}))}}function Fi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function hp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},Mu,an,Mt,$n=1e8,mt=1/$n,Ic=Math.PI*2,pM=Ic/4,mM=0,dp=Math.sqrt,gM=Math.cos,_M=Math.sin,Xt=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Gi=function(e){return typeof e=="number"},Su=function(e){return typeof e>"u"},Ti=function(e){return typeof e=="object"},Dn=function(e){return e!==!1},Eu=function(){return typeof window<"u"},yo=function(e){return Dt(e)||Xt(e)},fp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Uc=/(?:-?\.?\d|\.)+/gi,pp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mp=/[+-]=-?[.\d]+/,gp=/[^,'"\[\]\s]+/gi,vM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,li,Nc,Tu,Hn={},il={},_p,vp=function(e){return(il=jr(e,Hn))&&Rn},bu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},La=function(e,t){return!t&&console.warn(e)},xp=function(e,t){return e&&(Hn[e]=t)&&il&&(il[e]=t)||Hn},Fa=function(){return 0},xM={suppressEvents:!0,isStart:!0,kill:!1},Oo={suppressEvents:!0,kill:!1},yM={suppressEvents:!0},Du={},ur=[],Oc={},yp,Un={},hc={},Dd=30,Bo=[],Au="",wu=function(e){var t=e[0],n,r;if(Ti(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Bo.length;r--&&!Bo[r].targetTest(t););n=Bo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Wp(e[r],n)))||e.splice(r,1);return e},Hr=function(e){return e._gsap||wu(qn(e))[0]._gsap},Mp=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():Su(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},MM=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},rl=function(){var e=ur.length,t=ur.slice(0),n,r;for(Oc={},ur.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Sp=function(e,t,n,r){ur.length&&!an&&rl(),e.render(t,n,r||an&&t<0&&(e._initted||e._startAt)),ur.length&&!an&&rl()},Ep=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gp).length<2?t:Xt(e)?e.trim():e},Tp=function(e){return e},Zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},SM=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},jr=function(e,t){for(var n in t)e[n]=t[n];return e},Ad=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ti(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},sl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Sa=function(e){var t=e.parent||Tt,n=e.keyframes?SM(on(e.keyframes)):Zn;if(Dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},EM=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},bp=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ml=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},TM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bc=function(e,t,n,r){return e._startAt&&(an?e._startAt.revert(Oo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},bM=function i(e){return!e||e._ts&&i(e.parent)},wd=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sl=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||mt)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sl(e),n._dirty||Vr(n,e)),e},Dp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=al(e.rawTime(),t),(!t._dur||$a(0,t.totalDuration(),n)-t._tTime>mt)&&t.render(n,!0)),Vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-mt}},fi=function(e,t,n,r){return t.parent&&mr(t),t._start=Gt((Gi(n)?n:n||e!==Tt?Xn(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bp(e,t,"_first","_last",e._sort?"_start":0),kc(t)||(e._recent=t),r||Dp(e,t),e._ts<0&&El(e,e._tTime),e},Ap=function(e,t){return(Hn.ScrollTrigger||bu("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},wp=function(e,t,n,r,s){if(Ru(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yp!==On.frame)return ur.push(e),e._lazy=[s,r],1},DM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},kc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},AM=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&DM(e)&&!(!e._initted&&kc(e))||(e._ts<0||e._dp._ts<0)&&!kc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=$a(0,e._tDur,t),u=$s(l,o),e._yoyo&&u&1&&(a=1-a),u!==$s(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||an||r||e._zTime===mt||!t&&e._zTime){if(!e._initted&&wp(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?mt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Bc(e,t,n,!0),e._onUpdate&&!n&&kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&mr(e,1),!n&&!an&&(kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wM=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},qs=function(e,t,n,r){var s=e._repeat,a=Gt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Gt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&El(e,e._tTime=e._tDur*o),e.parent&&Sl(e),n||Vr(e.parent,e),e},Cd=function(e){return e instanceof mn?Vr(e):qs(e,e._dur)},CM={_start:0,endTime:Fa,totalDuration:Fa},Xn=function i(e,t,n){var r=e.labels,s=e._recent||CM,a=e.duration()>=$n?s.endTime(!1):e._dur,o,l,c;return Xt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ea=function(e,t,n){var r=Gi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Dn(l.vars.inherit)&&l.parent;a.immediateRender=Dn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ut(t[0],a,t[s+1])},xr=function(e,t){return e||e===0?t(e):t},$a=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!Xt(e)||!(t=vM.exec(e))?"":t[1]},RM=function(e,t,n){return xr(n,function(r){return $a(e,t,r)})},zc=[].slice,Cp=function(e,t){return e&&Ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ti(e[0]))&&!e.nodeType&&e!==li},PM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Xt(r)&&!t||Cp(r,1)?(s=n).push.apply(s,qn(r)):n.push(r)})||n},qn=function(e,t,n){return Mt&&!t&&Mt.selector?Mt.selector(e):Xt(e)&&!n&&(Nc||!js())?zc.call((t||Tu).querySelectorAll(e),0):on(e)?PM(e,n):Cp(e)?zc.call(e,0):e?[e]:[]},Hc=function(e){return e=qn(e)[0]||La("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return qn(t,n.querySelectorAll?n:n===e?La("Invalid scope")||Tu.createElement("div"):e)}},Rp=function(e){return e.sort(function(){return .5-Math.random()})},Pp=function(e){if(Dt(e))return e;var t=Ti(e)?e:{each:e},n=Gr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return Xt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,m,_){var g=(_||t).length,p=a[g],f,y,v,E,A,D,b,C,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,$n])[1],!M){for(b=-$n;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=a[g]=[],f=l?Math.min(M,g)*u-.5:r%M,y=M===$n?0:l?g*h/M-.5:r/M|0,b=0,C=$n,D=0;D<g;D++)v=D%M-f,E=y-(D/M|0),p[D]=A=c?Math.abs(c==="y"?E:v):dp(v*v+E*E),A>b&&(b=A),A<C&&(C=A);r==="random"&&Rp(p),p.max=b-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=sn(t.amount||t.each)||0,n=n&&g<0?Hp(n):n}return g=(p[d]-p.min)/p.max||0,Gt(p.b+(n?n(g):g)*p.v)+p.u}},Vc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Gt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Gi(n)?0:sn(n))}},Lp=function(e,t){var n=on(e),r,s;return!n&&Ti(e)&&(r=n=e.radius||$n,e.values?(e=qn(e.values),(s=!Gi(e[0]))&&(r*=r)):e=Vc(e.increment)),xr(t,n?Dt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=$n,u=0,h=e.length,d,m;h--;)s?(d=e[h].x-o,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:a,s||u===a||Gi(a)?u:u+sn(a)}:Vc(e))},Fp=function(e,t,n,r){return xr(on(e)?!t:n===!0?!!(n=0):!r,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},LM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},FM=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},IM=function(e,t,n){return Up(e,t,0,1,n)},Ip=function(e,t,n){return xr(n,function(r){return e[~~t(r)]})},UM=function i(e,t,n){var r=t-e;return on(e)?Ip(e,i(0,e.length),t):xr(n,function(s){return(r+(s-e)%r)%r+e})},NM=function i(e,t,n){var r=t-e,s=r*2;return on(e)?Ip(e,i(0,e.length-1),t):xr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ia=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?gp:Uc),n+=e.substr(t,r-t)+Fp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Up=function(e,t,n,r,s){var a=t-e,o=r-n;return xr(s,function(l){return n+((l-e)/a*o||0)})},OM=function i(e,t,n,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=Xt(e),o={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else r||(e=jr(on(e)?[]:{},e));if(!u){for(l in t)Cu.call(o,e,l,"get",t[l]);s=function(_){return Fu(_,o)||(a?e.p:e)}}}return xr(n,s)},Rd=function(e,t,n){var r=e.labels,s=$n,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},kn=function(e,t,n){var r=e.vars,s=r[t],a=Mt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&ur.length&&rl(),o&&(Mt=o),u=l?s.apply(c,l):s.call(c),Mt=a,u},ha=function(e){return mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&kn(e,"onInterrupt"),e},Rs,Np=[],Op=function(e){if(e)if(e=!e.name&&e.default||e,Eu()||e.headless){var t=e.name,n=Dt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Fa,render:Fu,add:Cu,kill:QM,modifier:JM,rawVars:0},a={targetTest:0,get:0,getSetter:Lu,aliases:{},register:0};if(js(),e!==r){if(Un[t])return;Zn(r,Zn(sl(e,s),a)),jr(r.prototype,jr(s,sl(e,a))),Un[r.prop=t]=r,e.targetTest&&(Bo.push(r),Du[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xp(t,r),e.register&&e.register(Rn,r,wn)}else Np.push(e)},pt=255,da={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},dc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},Bp=function(e,t,n){var r=e?Gi(e)?[e>>16,e>>8&pt,e&pt]:0:da.black,s,a,o,l,c,u,h,d,m,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),da[e])r=da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&pt,r&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Uc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=dc(l+1/3,s,a),r[1]=dc(l,s,a),r[2]=dc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(pp),n&&r.length<4&&(r[3]=1),r}else r=e.match(Uc)||da.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/pt,a=r[1]/pt,o=r[2]/pt,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},kp=function(e){var t=[],n=[],r=-1;return e.split(hr).forEach(function(s){var a=s.match(Cs)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Pd=function(e,t,n){var r="",s=(e+r).match(hr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Bp(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=kp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(hr,"1").split(Cs),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(hr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},hr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in da)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),BM=/hsl[a]?\(/,zp=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=BM.test(t),e[1]=Pd(e[1],n),e[0]=Pd(e[0],n,kp(e[1])),!0},Ua,On=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,d,m,_=function g(p){var f=i()-r,y=p===!0,v,E,A,D;if((f>e||f<0)&&(n+=f-t),r+=f,A=r-n,v=A-a,(v>0||y)&&(D=++h.frame,d=A-h.time*1e3,h.time=A=A/1e3,a+=v+(v>=s?4:s-v),E=1),y||(l=c(g)),E)for(m=0;m<o.length;m++)o[m](A,d,D,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){_p&&(!Nc&&Eu()&&(li=Nc=window,Tu=li.document||{},Hn.gsap=Rn,(li.gsapVersions||(li.gsapVersions=[])).push(Rn.version),vp(il||li.GreenSockGlobals||!li.gsap&&li||{}),Np.forEach(Op)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ua=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ua=0,c=Fa},lagSmoothing:function(p,f){e=p||1/0,t=Math.min(f||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,f,y){var v=f?function(E,A,D,b){p(E,A,D,b),h.remove(v)}:p;return h.remove(p),o[y?"unshift":"push"](v),js(),v},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},h}(),js=function(){return!Ua&&On.wake()},lt={},kM=/^[\d.\-M][\d.\-,\s]/,zM=/["']/g,HM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(zM,"").trim():+c,r=l.substr(o+1).trim();return t},VM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},GM=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[HM(t[1])]:VM(e).split(",").map(Ep)):lt._CE&&kM.test(e)?lt._CE("",e):n},Hp=function(e){return function(t){return 1-e(1-t)}},Vp=function i(e,t){for(var n=e._first,r;n;)n instanceof mn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Gr=function(e,t){return e&&(Dt(e)?e:lt[e]||GM(e))||t},ts=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return An(e,function(o){lt[o]=Hn[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},Gp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ic*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*_M((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Gp(o);return s=Ic/s,l.config=function(c,u){return i(e,c,u)},l},pc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Gp(n);return r.config=function(s){return i(e,s)},r};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ts(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;ts("Elastic",fc("in"),fc("out"),fc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};ts("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ts("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});ts("Circ",function(i){return-(dp(1-i*i)-1)});ts("Sine",function(i){return i===1?1:-gM(i*pM)+1});ts("Back",pc("in"),pc("out"),pc());lt.SteppedEase=lt.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-mt;return function(o){return((r*$a(0,a,o)|0)+s)*n}}};Ys.ease=lt["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Au+=i+","+i+"Params,"});var Wp=function(e,t){this.id=mM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Mp,this.set=t?t.getSetter:Lu},Na=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),Ua||On.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(El(this,n),!s._dp||s.parent||Dp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-mt?0:this._rts,this.totalTime($a(-Math.abs(this._delay),this._tDur,s),r!==!1),Sl(this),TM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mt&&(this._tTime-=mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=yM);var r=an;return an=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Cd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Xn(this,n),Dn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Dn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-mt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-mt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Dt(n)?n:Tp,o=function(){var c=r.then;r.then=null,Dt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){ha(this)},i}();Zn(Na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-mt,_prom:0,_ps:!1,_rts:1});var mn=function(i){hp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Dn(n.sortChildren),Tt&&fi(n.parent||Tt,Fi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ap(Fi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ea(0,arguments,this),this},t.from=function(r,s,a){return Ea(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ea(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(r,s,Xn(this,a),1),this},t.call=function(r,s,a){return fi(this,Ut.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ut(r,a,Xn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Sa(a).immediateRender=Dn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Sa(o).immediateRender=Dn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Gt(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,m,_,g,p,f,y,v,E,A,D,b;if(this!==Tt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,E=this._start,v=this._ts,f=!v,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(D=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(d=Gt(u%p),u===l?(g=this._repeat,d=c):(g=~~(u/p),g&&g===u/p&&(d=c,g--),d>c&&(d=c)),A=$s(this._tTime,p),!o&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),D&&g&1&&(d=c-d,b=1),g!==A&&!this._lock){var C=D&&A&1,M=C===(D&&g&1);if(g<A&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Gt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Vp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=wM(this,Gt(o),Gt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&!s&&!g&&(kn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!f){y=0,_&&(u+=this._zTime=-mt);break}}m=_}else{m=this._last;for(var S=r<0?r:d;m;){if(_=m._prev,(m._act||S<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(S-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(S-m._start)*m._ts,s,a||an&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!f){y=0,_&&(u+=this._zTime=S?-mt:mt);break}}m=_}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-mt)._zTime=d>=o?1:-1,this._ts))return this._start=E,Sl(this),this.render(r,s,a);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&mr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(kn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Gi(s)||(s=Xn(this,s,r)),!(r instanceof Na)){if(on(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Xt(r))return this.addLabel(r,s);if(Dt(r))r=Ut.delayedCall(0,r);else return this}return this!==r?fi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-$n);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ut?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Xt(r)?this.removeLabel(r):Dt(r)?this.killTweensOf(r):(Ml(this,r),r===this._recent&&(this._recent=this._last),Vr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(On.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Ut.delayedCall(0,s||Fa,a);return o.data="isPause",this._hasPause=1,fi(this,o,Xn(this,r))},t.removePause=function(r){var s=this._first;for(r=Xn(this,r);s;)s._start===r&&s.data==="isPause"&&mr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)ir!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=qn(r),l=this._first,c=Gi(s),u;l;)l instanceof Ut?MM(l._targets,o)&&(c?(!ir||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Xn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,_=Ut.to(a,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||mt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&qs(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Zn({startAt:{time:Xn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rd(this,Xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rd(this,Xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+mt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Vr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=$n,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,fi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qs(a,a===Tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Tt._ts&&(Sp(Tt,al(r,Tt)),yp=On.frame),On.frame>=Dd){Dd+=zn.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&zn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},e}(Na);Zn(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var WM=function(e,t,n,r,s,a,o){var l=new wn(this._pt,e,t,0,1,Kp,null,s),c=0,u=0,h,d,m,_,g,p,f,y;for(l.b=n,l.e=r,n+="",r+="",(f=~r.indexOf("random("))&&(r=Ia(r)),a&&(y=[n,r],a(y,e,t),n=y[0],r=y[1]),d=n.match(uc)||[];h=uc.exec(r);)_=h[0],g=r.substring(c,h.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ns(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=uc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(mp.test(r)||f)&&(l.e=0),this._pt=l,l},Cu=function(e,t,n,r,s,a,o,l,c,u){Dt(r)&&(r=r(s||0,e,a));var h=e[t],d=n!=="get"?n:Dt(h)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=Dt(h)?c?jM:qp:Pu,_;if(Xt(r)&&(~r.indexOf("random(")&&(r=Ia(r)),r.charAt(1)==="="&&(_=Ns(d,r)+(sn(d)||0),(_||_===0)&&(r=_))),!u||d!==r||Gc)return!isNaN(d*r)&&r!==""?(_=new wn(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?ZM:jp,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&bu(t,r),WM.call(this,e,t,d,r,m,l||zn.stringFilter,c))},XM=function(e,t,n,r,s){if(Dt(e)&&(e=Ta(e,s,t,n,r)),!Ti(e)||e.style&&e.nodeType||on(e)||fp(e))return Xt(e)?Ta(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Ta(e[o],s,t,n,r);return a},Xp=function(e,t,n,r,s,a){var o,l,c,u;if(Un[e]&&(o=new Un[e]).init(s,o.rawVars?t[e]:XM(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new wn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ir,Gc,Ru=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,m=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,f=e.parent,y=f&&f.data==="nested"?f.vars.targets:p,v=e._overwrite==="auto"&&!Mu,E=e.timeline,A,D,b,C,M,S,F,I,R,N,V,W,Z;if(E&&(!d||!s)&&(s="none"),e._ease=Gr(s,Ys.ease),e._yEase=h?Hp(Gr(h===!0?s:h,Ys.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!E&&!!r.runBackwards,!E||d&&!r.stagger){if(I=p[0]?Hr(p[0]).harness:0,W=I&&r[I.prop],A=sl(r,Du),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!m?g.render(-1,!0):g.revert(u&&_?Oo:xM),g._lazy=0),a){if(mr(e._startAt=Ut.set(p,Zn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Dn(l),startAt:null,delay:0,onUpdate:c&&function(){return kn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!o&&!m)&&e._startAt.revert(Oo),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),b=Zn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Dn(l),immediateRender:o,stagger:0,parent:f},A),W&&(b[I.prop]=W),mr(e._startAt=Ut.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Oo):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,mt,mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Dn(l)||l&&!_,D=0;D<p.length;D++){if(M=p[D],F=M._gsap||wu(p)[D]._gsap,e._ptLookup[D]=N={},Oc[F.id]&&ur.length&&rl(),V=y===p?D:y.indexOf(M),I&&(R=new I).init(M,W||A,e,V,y)!==!1&&(e._pt=C=new wn(e._pt,M,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(L){N[L]=C}),R.priority&&(S=1)),!I||W)for(b in A)Un[b]&&(R=Xp(b,A,e,V,M,y))?R.priority&&(S=1):N[b]=C=Cu.call(e,M,b,"get",A[b],V,y,0,r.stringFilter);e._op&&e._op[D]&&e.kill(M,e._op[D]),v&&e._pt&&(ir=e,Tt.killTweensOf(M,N,e.globalTime(t)),Z=!e.parent,ir=0),e._pt&&l&&(Oc[F.id]=1)}S&&Zp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&E.render($n,!0,!0)},YM=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,m;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Gc=1,e.vars[t]="+=0",Ru(e,o),Gc=0,l?La(t+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ct(n)+sn(h.e)),h.b&&(h.b=u.s+sn(h.b))},$M=function(e,t){var n=e[0]?Hr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=jr({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},qM=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(on(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ta=function(e,t,n,r,s){return Dt(e)?e.call(t,n,r,s):Xt(e)&&~e.indexOf("random(")?Ia(e):e},Yp=Au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$p={};An(Yp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return $p[i]=1});var Ut=function(i){hp(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Sa(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,y=r.parent||Tt,v=(on(n)||fp(n)?Gi(n[0]):"length"in r)?[n]:qn(n),E,A,D,b,C,M,S,F;if(o._targets=v.length?wu(v):La("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||d||yo(c)||yo(u)){if(r=o.vars,E=o.timeline=new mn({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),E.kill(),E.parent=E._dp=Fi(o),E._start=0,d||yo(c)||yo(u)){if(b=v.length,S=d&&Pp(d),Ti(d))for(C in d)~Yp.indexOf(C)&&(F||(F={}),F[C]=d[C]);for(A=0;A<b;A++)D=sl(r,$p),D.stagger=0,f&&(D.yoyoEase=f),F&&jr(D,F),M=v[A],D.duration=+Ta(c,Fi(o),A,M,v),D.delay=(+Ta(u,Fi(o),A,M,v)||0)-o._delay,!d&&b===1&&D.delay&&(o._delay=u=D.delay,o._start+=u,D.delay=0),E.to(M,D,S?S(A,M,v):0),E._ease=lt.none;E.duration()?c=u=0:o.timeline=0}else if(_){Sa(Zn(E.vars.defaults,{ease:"none"})),E._ease=Gr(_.ease||r.ease||"none");var I=0,R,N,V;if(on(_))_.forEach(function(W){return E.to(v,W,">")}),E.duration();else{D={};for(C in _)C==="ease"||C==="easeEach"||qM(C,_[C],D,_.easeEach);for(C in D)for(R=D[C].sort(function(W,Z){return W.t-Z.t}),I=0,A=0;A<R.length;A++)N=R[A],V={ease:N.e,duration:(N.t-(A?R[A-1].t:0))/100*c},V[C]=N.v,E.to(v,V,I),I+=V.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return m===!0&&!Mu&&(ir=Fi(o),Tt.killTweensOf(v),ir=0),fi(y,Fi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!_&&o._start===Gt(y._time)&&Dn(h)&&bM(Fi(o))&&y.data!=="nested")&&(o._tTime=-mt,o.render(Math.max(0,-u)||0)),p&&Ap(Fi(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-mt&&!u?l:r<mt?0:r,d,m,_,g,p,f,y,v,E;if(!c)AM(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(d=Gt(h%g),h===l?(_=this._repeat,d=c):(_=~~(h/g),_&&_===Gt(h/g)&&(d=c,_--),d>c&&(d=c)),f=this._yoyo&&_&1,f&&(E=this._yEase,d=c-d),p=$s(this._tTime,g),d===o&&!a&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&Vp(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Gt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(wp(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!o&&!s&&!_&&(kn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;v&&v.render(r<0?r:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Bc(this,r,s,a),kn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Bc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!s&&!(u&&!o)&&(h||o||f)&&(kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Ua||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ru(this,c),u=this._ease(c/this._dur),YM(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(El(this,0),this.parent||bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ha(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ir&&ir.vars.overwrite!==!0)._first||ha(this),this.parent&&a!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?qn(r):o,c=this._ptLookup,u=this._pt,h,d,m,_,g,p,f;if((!s||s==="all")&&EM(o,l))return s==="all"&&(this._pt=0),ha(this);for(h=this._op=this._op||[],s!=="all"&&(Xt(s)&&(g={},An(s,function(y){return g[y]=1}),s=g),s=$M(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(h[f]=s,_=d,m={}):(m=h[f]=h[f]||{},_=s);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ml(this,p,"_pt"),delete d[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&ha(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ea(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ea(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Tt.killTweensOf(r,s,a)},e}(Na);Zn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(i){Ut[i]=function(){var e=new mn,t=zc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Pu=function(e,t,n){return e[t]=n},qp=function(e,t,n){return e[t](n)},jM=function(e,t,n,r){return e[t](r.fp,n)},KM=function(e,t,n){return e.setAttribute(t,n)},Lu=function(e,t){return Dt(e[t])?qp:Su(e[t])&&e.setAttribute?KM:Pu},jp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ZM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Kp=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Fu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},JM=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},QM=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ml(this,t,"_pt"):t.dep||(n=1),t=r;return!n},eS=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Zp=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},wn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||jp,this.d=l||this,this.set=c||Pu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=eS,this.m=n,this.mt=s,this.tween=r},i}();An(Au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Du[i]=1});Hn.TweenMax=Hn.TweenLite=Ut;Hn.TimelineLite=Hn.TimelineMax=mn;Tt=new mn({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=zp;var Wr=[],ko={},tS=[],Ld=0,nS=0,mc=function(e){return(ko[e]||tS).map(function(t){return t()})},Wc=function(){var e=Date.now(),t=[];e-Ld>2&&(mc("matchMediaInit"),Wr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=li.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),mc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ld=e,mc("matchMedia"))},Jp=function(){function i(t,n){this.selector=n&&Hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Dt(n)&&(s=r,r=n,n=Dt);var a=this,o=function(){var c=Mt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hc(s)),Mt=a,h=r.apply(a,arguments),Dt(h)&&a._r.push(h),Mt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Dt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Mt;Mt=null,n(this),Mt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ut&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ut)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Wr.length;a--;)Wr[a].id===this.id&&Wr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),iS=function(){function i(t){this.contexts=[],this.scope=t,Mt&&Mt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Ti(n)||(n={matches:n});var a=new Jp(0,s||this.scope),o=a.conditions={},l,c,u;Mt&&!a.selector&&(a.selector=Mt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=li.matchMedia(n[c]),l&&(Wr.indexOf(a)<0&&Wr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wc):l.addEventListener("change",Wc)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Op(r)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Xt(e)&&(e=qn(e)[0]);var s=Hr(e||{}).get,a=n?Tp:Ep;return n==="native"&&(n=""),e&&(t?a((Un[t]&&Un[t].get||s)(e,t,n,r)):function(o,l,c){return a((Un[o]&&Un[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=qn(e),e.length>1){var r=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=Un[t],o=Hr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Rs._pt=0,h.init(e,n?u+n:u,Rs,0,[e]),h.render(1,h),Rs._pt&&Fu(1,Rs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Rn.to(e,jr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gr(e.ease,Ys.ease)),Ad(Ys,e||{})},config:function(e){return Ad(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Un[o]&&!Hn[o]&&La(t+" effect requires "+o+" plugin.")}),hc[t]=function(o,l,c){return n(qn(o),Zn(l||{},s),c)},a&&(mn.prototype[t]=function(o,l,c){return this.add(hc[t](o,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Gr(t)},parseEase:function(e,t){return arguments.length?Gr(e,t):lt},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),r,s;for(n.smoothChildTiming=Dn(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,r=Tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]))&&fi(n,r,r._start-r._delay),r=s;return fi(Tt,n,0),n},context:function(e,t){return e?new Jp(e,t):Mt},matchMedia:function(e){return new iS(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Wc()},addEventListener:function(e,t){var n=ko[e]||(ko[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ko[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:UM,wrapYoyo:NM,distribute:Pp,random:Fp,snap:Lp,normalize:IM,getUnit:sn,clamp:RM,splitColor:Bp,toArray:qn,selector:Hc,mapRange:Up,pipe:LM,unitize:FM,interpolate:OM,shuffle:Rp},install:vp,effects:hc,ticker:On,updateRoot:mn.updateRoot,plugins:Un,globalTimeline:Tt,core:{PropTween:wn,globals:xp,Tween:Ut,Timeline:mn,Animation:Na,getCache:Hr,_removeLinkedListItem:Ml,reverting:function(){return an},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return Mu=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ol[i]=Ut[i]});On.add(mn.updateRoot);Rs=ol.to({},{duration:0});var rS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},sS=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=rS(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},gc=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Xt(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}sS(o,s)}}}},Rn=ol.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gc("roundProps",Vc),gc("modifiers"),gc("snap",Lp))||ol;Ut.version=mn.version=Rn.version="3.12.5";_p=1;Eu()&&js();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fd,rr,Os,Iu,zr,Id,Uu,aS=function(){return typeof window<"u"},Wi={},Pr=180/Math.PI,Bs=Math.PI/180,Ms=Math.atan2,Ud=1e8,Nu=/([A-Z])/g,oS=/(left|right|width|margin|padding|x)/i,lS=/[\s,\(]\S/,pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},em=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dS=function(e,t,n){return e.style[t]=n},fS=function(e,t,n){return e.style.setProperty(t,n)},pS=function(e,t,n){return e._gsap[t]=n},mS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},gS=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_S=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},bt="transform",Cn=bt+"Origin",vS=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Wi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ii(r,o)}):this.tfm[e]=a.x?a[e]:Ii(r,e),e===Cn&&(this.tfm.zOrigin=a.zOrigin);else return pi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(bt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},tm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xS=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Nu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Uu(),(!s||!s.isStart)&&!n[bt]&&(tm(n),r.zOrigin&&n[Cn]&&(n[Cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},nm=function(e,t){var n={target:e,props:[],revert:xS,save:vS};return e._gsap||Rn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},im,Yc=function(e,t){var n=rr.createElementNS?rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):rr.createElement(e);return n&&n.style?n:rr.createElement(e)},Mi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Nu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ks(t)||t,1)||""},Nd="O,Moz,ms,Ms,Webkit".split(","),Ks=function(e,t,n){var r=t||zr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Nd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Nd[a]:"")+e},$c=function(){aS()&&window.document&&(Fd=window,rr=Fd.document,Os=rr.documentElement,zr=Yc("div")||{style:{}},Yc("div"),bt=Ks(bt),Cn=bt+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",im=!!Ks("perspective"),Uu=Rn.core.reverting,Iu=1)},_c=function i(e){var t=Yc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Os.removeChild(t),this.style.cssText=s,a},Od=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},rm=function(e){var t;try{t=e.getBBox()}catch{t=_c.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===_c||(t=_c.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Od(e,["x","cx","x1"])||0,y:+Od(e,["y","cy","y1"])||0,width:0,height:0}:t},sm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rm(e))},Kr=function(e,t){if(t){var n=e.style,r;t in Wi&&t!==Cn&&(t=bt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Nu,"-$1").toLowerCase())):n.removeAttribute(t)}},sr=function(e,t,n,r,s,a){var o=new wn(e._pt,t,n,0,1,a?em:Qp);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Bd={deg:1,rad:1,turn:1},yS={grid:1,flex:1},gr=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=zr.style,l=oS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",m=r==="%",_,g,p,f;if(r===a||!s||Bd[r]||Bd[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),f=e.getCTM&&sm(e),(m||a==="%")&&(Wi[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[u],Ct(m?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===rr||!g.appendChild)&&(g=rr.body),p=g._gsap,p&&m&&p.width&&l&&p.time===On.time&&!p.uncache)return Ct(s/p.width*h);if(m&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+r,_=e[u],y?e.style[t]=y:Kr(e,t)}else(m||a==="%")&&!yS[Mi(g,"display")]&&(o.position=Mi(e,"position")),g===e&&(o.position="static"),g.appendChild(zr),_=zr[u],g.removeChild(zr),o.position="absolute";return l&&m&&(p=Hr(g),p.time=On.time,p.width=g[u]),Ct(d?_*s/h:_&&s?h/_*s:0)},Ii=function(e,t,n,r){var s;return Iu||$c(),t in pi&&t!=="transform"&&(t=pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wi[t]&&t!=="transform"?(s=Ba(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cl(Mi(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ll[t]&&ll[t](e,t,n)||Mi(e,t)||Mp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gr(e,t,s,n)+n:s},MS=function(e,t,n,r){if(!n||n==="none"){var s=Ks(t,e,1),a=s&&Mi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var o=new wn(this._pt,e.style,t,0,1,Kp),l=0,c=0,u,h,d,m,_,g,p,f,y,v,E,A;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=Mi(e,t)||r,g?e.style[t]=g:Kr(e,t)),u=[n,r],zp(u),n=u[0],r=u[1],d=n.match(Cs)||[],A=r.match(Cs)||[],A.length){for(;h=Cs.exec(r);)p=h[0],y=r.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(m=parseFloat(g)||0,E=g.substr((m+"").length),p.charAt(1)==="="&&(p=Ns(m,p)+E),f=parseFloat(p),v=p.substr((f+"").length),l=Cs.lastIndex-v.length,v||(v=v||zn.units[t]||E,l===r.length&&(r+=v,o.e+=v)),E!==v&&(m=gr(e,t,g,v)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:f-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?em:Qp;return mp.test(r)&&(o.e=0),this._pt=o,o},kd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},SS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=kd[n]||n,t[1]=kd[r]||r,t.join(" ")},ES=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Wi[o]&&(l=1,o=o==="transformOrigin"?Cn:bt),Kr(n,o);l&&(Kr(n,bt),a&&(a.svg&&n.removeAttribute("transform"),Ba(n,1),a.uncache=1,tm(r)))}},ll={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new wn(e._pt,t,n,0,0,ES);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Oa=[1,0,0,1,0,0],am={},om=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zd=function(e){var t=Mi(e,bt);return om(t)?Oa:t.substr(7).match(pp).map(Ct)},Ou=function(e,t){var n=e._gsap||Hr(e),r=e.style,s=zd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oa:s):(s===Oa&&!e.offsetParent&&e!==Os&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Os.appendChild(e)),s=zd(e),l?r.display=l:Kr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qc=function(e,t,n,r,s,a){var o=e._gsap,l=s||Ou(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],_=l[1],g=l[2],p=l[3],f=l[4],y=l[5],v=t.split(" "),E=parseFloat(v[0])||0,A=parseFloat(v[1])||0,D,b,C,M;n?l!==Oa&&(b=m*p-_*g)&&(C=E*(p/b)+A*(-g/b)+(g*y-p*f)/b,M=E*(-_/b)+A*(m/b)-(m*y-_*f)/b,E=C,A=M):(D=rm(e),E=D.x+(~v[0].indexOf("%")?E/100*D.width:E),A=D.y+(~(v[1]||v[0]).indexOf("%")?A/100*D.height:A)),r||r!==!1&&o.smooth?(f=E-c,y=A-u,o.xOffset=h+(f*m+y*g)-f,o.yOffset=d+(f*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=A,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Cn]="0px 0px",a&&(sr(a,o,"xOrigin",c,E),sr(a,o,"yOrigin",u,A),sr(a,o,"xOffset",h,o.xOffset),sr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+A)},Ba=function(e,t){var n=e._gsap||new Wp(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Mi(e,Cn)||"0",u,h,d,m,_,g,p,f,y,v,E,A,D,b,C,M,S,F,I,R,N,V,W,Z,L,Q,H,ee,ye,Ue,X,ie;return u=h=d=g=p=f=y=v=E=0,m=_=1,n.svg=!!(e.getCTM&&sm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),r.scale=r.rotate=r.translate="none"),b=Ou(e,n.svg),n.svg&&(n.uncache?(L=e.getBBox(),c=n.xOrigin-L.x+"px "+(n.yOrigin-L.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),qc(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,D=n.yOrigin||0,b!==Oa&&(F=b[0],I=b[1],R=b[2],N=b[3],u=V=b[4],h=W=b[5],b.length===6?(m=Math.sqrt(F*F+I*I),_=Math.sqrt(N*N+R*R),g=F||I?Ms(I,F)*Pr:0,y=R||N?Ms(R,N)*Pr+g:0,y&&(_*=Math.abs(Math.cos(y*Bs))),n.svg&&(u-=A-(A*F+D*R),h-=D-(A*I+D*N))):(ie=b[6],Ue=b[7],H=b[8],ee=b[9],ye=b[10],X=b[11],u=b[12],h=b[13],d=b[14],C=Ms(ie,ye),p=C*Pr,C&&(M=Math.cos(-C),S=Math.sin(-C),Z=V*M+H*S,L=W*M+ee*S,Q=ie*M+ye*S,H=V*-S+H*M,ee=W*-S+ee*M,ye=ie*-S+ye*M,X=Ue*-S+X*M,V=Z,W=L,ie=Q),C=Ms(-R,ye),f=C*Pr,C&&(M=Math.cos(-C),S=Math.sin(-C),Z=F*M-H*S,L=I*M-ee*S,Q=R*M-ye*S,X=N*S+X*M,F=Z,I=L,R=Q),C=Ms(I,F),g=C*Pr,C&&(M=Math.cos(C),S=Math.sin(C),Z=F*M+I*S,L=V*M+W*S,I=I*M-F*S,W=W*M-V*S,F=Z,V=L),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,f=180-f),m=Ct(Math.sqrt(F*F+I*I+R*R)),_=Ct(Math.sqrt(W*W+ie*ie)),C=Ms(V,W),y=Math.abs(C)>2e-4?C*Pr:0,E=X?1/(X<0?-X:X):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!om(Mi(e,bt)),Z&&e.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ct(m),n.scaleY=Ct(_),n.rotation=Ct(g)+o,n.rotationX=Ct(p)+o,n.rotationY=Ct(f)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Cn]=cl(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?bS:im?lm:TS,n.uncache=0,n},cl=function(e){return(e=e.split(" "))[0]+" "+e[1]},vc=function(e,t,n){var r=sn(t);return Ct(parseFloat(t)+parseFloat(gr(e,"x",n+"px",r)))+r},TS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lm(e,t)},Ar="0deg",aa="0px",wr=") ",lm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,f=n.force3D,y=n.target,v=n.zOrigin,E="",A=f==="auto"&&e&&e!==1||f===!0;if(v&&(h!==Ar||u!==Ar)){var D=parseFloat(u)*Bs,b=Math.sin(D),C=Math.cos(D),M;D=parseFloat(h)*Bs,M=Math.cos(D),a=vc(y,a,b*M*-v),o=vc(y,o,-Math.sin(D)*-v),l=vc(y,l,C*M*-v+v)}p!==aa&&(E+="perspective("+p+wr),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(A||a!==aa||o!==aa||l!==aa)&&(E+=l!==aa||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+wr),c!==Ar&&(E+="rotate("+c+wr),u!==Ar&&(E+="rotateY("+u+wr),h!==Ar&&(E+="rotateX("+h+wr),(d!==Ar||m!==Ar)&&(E+="skew("+d+", "+m+wr),(_!==1||g!==1)&&(E+="scale("+_+", "+g+wr),y.style[bt]=E||"translate(0, 0)"},bS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,f=n.yOffset,y=n.forceCSS,v=parseFloat(a),E=parseFloat(o),A,D,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Bs,c*=Bs,A=Math.cos(l)*h,D=Math.sin(l)*h,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Bs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,D*=M)),A=Ct(A),D=Ct(D),b=Ct(b),C=Ct(C)):(A=h,C=d,D=b=0),(v&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(v=gr(m,"x",a,"px"),E=gr(m,"y",o,"px")),(_||g||p||f)&&(v=Ct(v+_-(_*A+g*b)+p),E=Ct(E+g-(_*D+g*C)+f)),(r||s)&&(M=m.getBBox(),v=Ct(v+r/100*M.width),E=Ct(E+s/100*M.height)),M="matrix("+A+","+D+","+b+","+C+","+v+","+E+")",m.setAttribute("transform",M),y&&(m.style[bt]=M)},DS=function(e,t,n,r,s){var a=360,o=Xt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Pr:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Ud)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Ud)%a-~~(c/a)*a)),e._pt=d=new wn(e._pt,t,n,r,c,cS),d.e=u,d.u="deg",e._props.push(n),d},Hd=function(e,t){for(var n in t)e[n]=t[n];return e},AS=function(e,t,n){var r=Hd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,m,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[bt]=t,o=Ba(n,1),Kr(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],a[bt]=t,o=Ba(n,1),a[bt]=c);for(l in Wi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=sn(c),_=sn(u),h=m!==_?gr(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new wn(e._pt,o,l,h,d-h,Xc),e._pt.u=_||0,e._props.push(l));Hd(o,r)};An("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});ll[e>1?"border"+i:i]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(_){return Ii(o,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(_,g){return m[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,m,h)}});var cm={name:"css",register:$c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,m,_,g,p,f,y,v,E,A,D,b,C;Iu||$c(),this.styles=this.styles||nm(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Un[g]&&Xp(g,t,n,r,e,s)))){if(m=typeof u,_=ll[g],m==="function"&&(u=u.call(n,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ia(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",hr.lastIndex=0,hr.test(c)||(p=sn(c),f=sn(u)),f?p!==f&&(c=gr(e,g,c,f)+f):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Xt(c)&&~c.indexOf("random(")&&(c=Ia(c)),sn(c+"")||c==="auto"||(c+=zn.units[g]||sn(Ii(e,g))||""),(c+"").charAt(1)==="="&&(c=Ii(e,g))):c=Ii(e,g),d=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in pi&&(g==="autoAlpha"&&(d===1&&Ii(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),sr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=pi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Wi,v){if(this.styles.save(g),E||(A=e._gsap,A.renderTransform&&!t.parseTransform||Ba(e,t.parseTransform),D=t.smoothOrigin!==!1&&A.smooth,E=this._pt=new wn(this._pt,o,bt,0,1,A.renderTransform,A,0,-1),E.dep=1),g==="scale")this._pt=new wn(this._pt,A,"scaleY",A.scaleY,(y?Ns(A.scaleY,y+h):h)-A.scaleY||0,Xc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Cn,0,o[Cn]),u=SS(u),A.svg?qc(e,u,0,D,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==A.zOrigin&&sr(this,A,"zOrigin",A.zOrigin,f),sr(this,o,g,cl(c),cl(u)));continue}else if(g==="svgOrigin"){qc(e,u,1,D,0,this);continue}else if(g in am){DS(this,A,g,d,y?Ns(d,y+u):u);continue}else if(g==="smoothOrigin"){sr(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){AS(this,u,e);continue}}else g in o||(g=Ks(g)||g);if(v||(h||h===0)&&(d||d===0)&&!lS.test(u)&&g in o)p=(c+"").substr((d+"").length),h||(h=0),f=sn(u)||(g in zn.units?zn.units[g]:p),p!==f&&(d=gr(e,g,c,f)),this._pt=new wn(this._pt,v?A:o,g,d,(y?Ns(d,y+h):h)-d,!v&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?hS:Xc),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=uS);else if(g in o)MS.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,r,s);else if(g!=="parseTransform"){bu(g,u);continue}v||(g in o?C.push(g,0,o[g]):C.push(g,1,c||e[g])),a.push(g)}}b&&Zp(this)},render:function(e,t){if(t.tween._time||!Uu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ii,aliases:pi,getSetter:function(e,t,n){var r=pi[t];return r&&r.indexOf(",")<0&&(t=r),t in Wi&&t!==Cn&&(e._gsap.x||Ii(e,"x"))?n&&Id===n?t==="scale"?mS:pS:(Id=n||{})&&(t==="scale"?gS:_S):e.style&&!Su(e.style[t])?dS:~t.indexOf("-")?fS:Lu(e,t)},core:{_removeProperty:Kr,_getMatrix:Ou}};Rn.utils.checkPrefix=Ks;Rn.core.getStyleSaver=nm;(function(i,e,t,n){var r=An(i+","+e+","+t,function(s){Wi[s]=1});An(e,function(s){zn.units[s]="deg",am[s]=1}),pi[r[13]]=i+","+e,An(n,function(s){var a=s.split(":");pi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){zn.units[i]="px"});Rn.registerPlugin(cm);var St=Rn.registerPlugin(cm)||Rn;St.core.Tween;/*!
 * CustomEase 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */let wS=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,CS=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,RS=Math.PI/180,Mo=Math.sin,So=Math.cos,ba=Math.abs,oa=Math.sqrt,Qi=i=>Math.round(1e5*i)/1e5||0;function PS(i,e,t,n,r,s,a,o,l){if(i===o&&e===l)return;t=ba(t),n=ba(n);let c=r%360*RS,u=So(c),h=Mo(c),d=Math.PI,m=2*d,_=(i-o)/2,g=(e-l)/2,p=u*_+h*g,f=-h*_+u*g,y=p*p,v=f*f,E=y/(t*t)+v/(n*n);E>1&&(t=oa(E)*t,n=oa(E)*n);let A=t*t,D=n*n,b=(A*D-A*v-D*y)/(A*v+D*y);b<0&&(b=0);let C=(s===a?-1:1)*oa(b),M=C*(t*f/n),S=C*(-n*p/t),F=(i+o)/2+(u*M-h*S),I=(e+l)/2+(h*M+u*S),R=(p-M)/t,N=(f-S)/n,V=(-p-M)/t,W=(-f-S)/n,Z=R*R+N*N,L=(N<0?-1:1)*Math.acos(R/oa(Z)),Q=(R*W-N*V<0?-1:1)*Math.acos((R*V+N*W)/oa(Z*(V*V+W*W)));isNaN(Q)&&(Q=d),!a&&Q>0?Q-=m:a&&Q<0&&(Q+=m),L%=m,Q%=m;let H,ee=Math.ceil(ba(Q)/(m/4)),ye=[],Ue=Q/ee,X=4/3*Mo(Ue/2)/(1+So(Ue/2)),ie=u*t,me=h*t,he=h*-n,De=u*n;for(H=0;H<ee;H++)p=So(r=L+H*Ue),f=Mo(r),R=So(r+=Ue),N=Mo(r),ye.push(p-X*f,f+X*p,R+X*N,N-X*R,R,N);for(H=0;H<ye.length;H+=2)p=ye[H],f=ye[H+1],ye[H]=p*ie+f*he+F,ye[H+1]=p*me+f*De+I;return ye[H-2]=o,ye[H-1]=l,ye}let rn,um,hm=()=>rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn,Vd=()=>{rn=hm(),rn?(rn.registerEase("_CE",ka.create),um=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Eo=i=>~~(1e3*i+(i<0?-.5:.5))/1e3,Xe=function(){return String.fromCharCode.apply(null,arguments)},Gd=Xe(103,114,101,101,110,115,111,99,107,46,99,111,109),LS=Xe(103,115,97,112,46,99,111,109),FS=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,IS=function(i){var e=typeof window<"u",t=(e?window.location.href:"").indexOf(Xe(102,105,108,101,58,47,47))===0||i.indexOf(Xe(108,111,99,97,108,104,111,115,116))!==-1||FS.test(i)||(e?window.location.hostname:"").split(".").pop()===Xe(108,111,99,97,108),n=[Gd,LS,Xe(99,111,100,101,112,101,110,46,105,111),Xe(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),Xe(99,111,100,101,112,101,110,46,100,101,118),Xe(99,111,100,101,112,101,110,46,97,112,112),Xe(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),Xe(112,101,110,115,46,99,108,111,117,100),Xe(99,115,115,45,116,114,105,99,107,115,46,99,111,109),Xe(99,100,112,110,46,105,111),Xe(112,101,110,115,46,105,111),Xe(103,97,110,110,111,110,46,116,118),Xe(99,111,100,101,99,97,110,121,111,110,46,110,101,116),Xe(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),Xe(99,101,114,101,98,114,97,120,46,99,111,46,117,107),Xe(116,121,109,112,97,110,117,115,46,110,101,116),Xe(116,119,101,101,110,109,97,120,46,99,111,109),Xe(112,108,110,107,114,46,99,111),Xe(104,111,116,106,97,114,46,99,111,109),Xe(119,101,98,112,97,99,107,98,105,110,46,99,111,109),Xe(97,114,99,104,105,118,101,46,111,114,103),Xe(99,111,100,101,115,97,110,100,98,111,120,46,105,111),Xe(99,115,98,46,97,112,112),Xe(115,116,97,99,107,98,108,105,116,122,46,99,111,109),Xe(115,116,97,99,107,98,108,105,116,122,46,105,111),Xe(99,111,100,105,101,114,46,105,111),Xe(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),Xe(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),Xe(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),Xe(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),Xe(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),Xe(114,49,45,120,105,46,118,101,114,99,101,108,46,97,112,112)],r=function(){if(e)if(document.readyState==="loading"||document.readyState==="interactive")document.addEventListener("readystatechange",r);else{document.removeEventListener("readystatechange",r);var a=typeof rn=="object"?rn:e&&window.gsap;e&&window.console&&!window._gsapWarned&&typeof a=="object"&&a.config().trialWarn!==!1&&(console.log(Xe(37,99,87,97,114,110,105,110,103),Xe(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(Xe(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"CustomEase"+Xe(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(Xe(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),Xe(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},s=n.length;for(setTimeout(r,50);--s>-1;)if(i.indexOf(n[s])!==-1)return!0;return t||!setTimeout(function(){e&&(window.location.href=Xe(104,116,116,112,115,58,47,47)+Gd+Xe(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=CustomEase&source=trial")},4e3)}(typeof window<"u"?window.location.host:""),US=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,NS=/[cLlsSaAhHvVtTqQ]/g,jc=function(i,e,t,n,r,s,a,o,l,c,u){let h,d=(i+t)/2,m=(e+n)/2,_=(t+r)/2,g=(n+s)/2,p=(r+a)/2,f=(s+o)/2,y=(d+_)/2,v=(m+g)/2,E=(_+p)/2,A=(g+f)/2,D=(y+E)/2,b=(v+A)/2,C=a-i,M=o-e,S=Math.abs((t-a)*M-(n-o)*C),F=Math.abs((r-a)*M-(s-o)*C);return c||(c=[{x:i,y:e},{x:a,y:o}],u=1),c.splice(u||c.length-1,0,{x:D,y:b}),(S+F)*(S+F)>l*(C*C+M*M)&&(h=c.length,jc(i,e,d,m,y,v,D,b,l,c,u),jc(D,b,E,A,p,f,a,o,l,c,u+1+(c.length-h))),c},ka=class zo{constructor(e,t,n){um||Vd(),this.id=e,IS&&this.setData(t,n)}setData(e,t){t=t||{};let n,r,s,a,o,l,c,u,h,d=(e=e||"0,0,1,1").match(US),m=1,_=[],g=[],p=t.precision||1,f=p<=1;if(this.data=e,(NS.test(e)||~e.indexOf("M")&&e.indexOf("C")<0)&&(d=function(y){let v,E,A,D,b,C,M,S,F,I,R,N,V,W,Z,L=(y+"").replace(CS,me=>{let he=+me;return he<1e-4&&he>-1e-4?0:he}).match(wS)||[],Q=[],H=0,ee=0,ye=L.length,Ue=0,X="ERROR: malformed path: "+y,ie=function(me,he,De,Le){I=(De-me)/3,R=(Le-he)/3,M.push(me+I,he+R,De-I,Le-R,De,Le)};if(!y||!isNaN(L[0])||isNaN(L[1]))return console.log(X),Q;for(v=0;v<ye;v++)if(V=b,isNaN(L[v])?(b=L[v].toUpperCase(),C=b!==L[v]):v--,A=+L[v+1],D=+L[v+2],C&&(A+=H,D+=ee),v||(S=A,F=D),b==="M")M&&(M.length<8?Q.length-=1:Ue+=M.length),H=S=A,ee=F=D,M=[A,D],Q.push(M),v+=2,b="L";else if(b==="C")M||(M=[0,0]),C||(H=ee=0),M.push(A,D,H+1*L[v+3],ee+1*L[v+4],H+=1*L[v+5],ee+=1*L[v+6]),v+=6;else if(b==="S")I=H,R=ee,V!=="C"&&V!=="S"||(I+=H-M[M.length-4],R+=ee-M[M.length-3]),C||(H=ee=0),M.push(I,R,A,D,H+=1*L[v+3],ee+=1*L[v+4]),v+=4;else if(b==="Q")I=H+2/3*(A-H),R=ee+2/3*(D-ee),C||(H=ee=0),H+=1*L[v+3],ee+=1*L[v+4],M.push(I,R,H+2/3*(A-H),ee+2/3*(D-ee),H,ee),v+=4;else if(b==="T")I=H-M[M.length-4],R=ee-M[M.length-3],M.push(H+I,ee+R,A+2/3*(H+1.5*I-A),D+2/3*(ee+1.5*R-D),H=A,ee=D),v+=2;else if(b==="H")ie(H,ee,H=A,ee),v+=1;else if(b==="V")ie(H,ee,H,ee=A+(C?ee-H:0)),v+=1;else if(b==="L"||b==="Z")b==="Z"&&(A=S,D=F,M.closed=!0),(b==="L"||ba(H-A)>.5||ba(ee-D)>.5)&&(ie(H,ee,A,D),b==="L"&&(v+=2)),H=A,ee=D;else if(b==="A"){if(W=L[v+4],Z=L[v+5],I=L[v+6],R=L[v+7],E=7,W.length>1&&(W.length<3?(R=I,I=Z,E--):(R=Z,I=W.substr(2),E-=2),Z=W.charAt(1),W=W.charAt(0)),N=PS(H,ee,+L[v+1],+L[v+2],+L[v+3],+W,+Z,(C?H:0)+1*I,(C?ee:0)+1*R),v+=E,N)for(E=0;E<N.length;E++)M.push(N[E]);H=M[M.length-2],ee=M[M.length-1]}else console.log(X);return v=M.length,v<6?(Q.pop(),v=0):M[0]===M[v-2]&&M[1]===M[v-1]&&(M.closed=!0),Q.totalPoints=Ue+v,Q}(e)[0]),n=d.length,n===4)d.unshift(0,0),d.push(1,1),n=8;else if((n-2)%6)throw"Invalid CustomEase";for(+d[0]==0&&+d[n-2]==1||((y,v,E)=>{E||E===0||(E=Math.max(+y[y.length-1],+y[1]));let A,D=-1*+y[0],b=-E,C=y.length,M=1/(+y[C-2]+D),S=-v||(Math.abs(+y[C-1]-+y[1])<.01*(+y[C-2]-+y[0])?(F=>{let I,R=F.length,N=1e20;for(I=1;I<R;I+=6)+F[I]<N&&(N=+F[I]);return N})(y)+b:+y[C-1]+b);for(S=S?1/S:-M,A=0;A<C;A+=2)y[A]=(+y[A]+D)*M,y[A+1]=(+y[A+1]+b)*S})(d,t.height,t.originY),this.segment=d,a=2;a<n;a+=6)r={x:+d[a-2],y:+d[a-1]},s={x:+d[a+4],y:+d[a+5]},_.push(r,s),jc(r.x,r.y,+d[a],+d[a+1],+d[a+2],+d[a+3],s.x,s.y,1/(2e5*p),_,_.length-1);for(n=_.length,a=0;a<n;a++)c=_[a],u=_[a-1]||c,(c.x>u.x||u.y!==c.y&&u.x===c.x||c===u)&&c.x<=1?(u.cx=c.x-u.x,u.cy=c.y-u.y,u.n=c,u.nx=c.x,f&&a>1&&Math.abs(u.cy/u.cx-_[a-2].cy/_[a-2].cx)>2&&(f=0),u.cx<m&&(u.cx?m=u.cx:(u.cx=.001,a===n-1&&(u.x-=.001,m=Math.min(m,.001),f=0)))):(_.splice(a--,1),n--);if(n=1/m+1|0,o=1/n,l=0,c=_[0],f){for(a=0;a<n;a++)h=a*o,c.nx<h&&(c=_[++l]),r=c.y+(h-c.x)/c.cx*c.cy,g[a]={x:h,cx:o,y:r,cy:0,nx:9},a&&(g[a-1].cy=r-g[a-1].y);g[n-1].cy=_[_.length-1].y-r}else{for(a=0;a<n;a++)c.nx<a*o&&(c=_[++l]),g[a]=c;l<_.length-1&&(g[a-1]=_[_.length-2])}return this.ease=y=>{let v=g[y*n|0]||g[n-1];return v.nx<y&&(v=v.n),v.y+(y-v.x)/v.cx*v.cy},this.ease.custom=this,this.id&&rn&&rn.registerEase(this.id,this.ease),this}getSVGData(e){return zo.getSVGData(this,e)}static create(e,t,n){return new zo(e,t,n).ease}static register(e){rn=e,Vd()}static get(e){return rn.parseEase(e)}static getSVGData(e,t){let n,r,s,a,o,l,c,u,h,d,m=(t=t||{}).width||100,_=t.height||100,g=t.x||0,p=(t.y||0)+_,f=rn.utils.toArray(t.path)[0];if(t.invert&&(_=-_,p=0),typeof e=="string"&&(e=rn.parseEase(e)),e.custom&&(e=e.custom),e instanceof zo)n=function(y){typeof y[0]=="number"&&(y=[y]);let v,E,A,D,b="",C=y.length;for(E=0;E<C;E++){for(D=y[E],b+="M"+Qi(D[0])+","+Qi(D[1])+" C",v=D.length,A=2;A<v;A++)b+=Qi(D[A++])+","+Qi(D[A++])+" "+Qi(D[A++])+","+Qi(D[A++])+" "+Qi(D[A++])+","+Qi(D[A])+" ";D.closed&&(b+="z")}return b}(function(y,v,E,A,D,b,C){let M,S,F,I,R,N=y.length;for(;--N>-1;)for(M=y[N],S=M.length,F=0;F<S;F+=2)I=M[F],R=M[F+1],M[F]=I*v+R*A+b,M[F+1]=I*E+R*D+C;return y._dirty=1,y}([e.segment],m,0,0,-_,g,p));else{for(n=[g,p],c=Math.max(5,200*(t.precision||1)),a=1/c,c+=2,u=5/c,h=Eo(g+a*m),d=Eo(p+e(a)*-_),r=(d-p)/(h-g),s=2;s<c;s++)o=Eo(g+s*a*m),l=Eo(p+e(s*a)*-_),(Math.abs((l-d)/(o-h)-r)>u||s===c-1)&&(n.push(h,d),r=(l-d)/(o-h)),h=o,d=l;n="M"+n.join(",")}return f&&f.setAttribute("d",n),n}};hm()&&rn.registerPlugin(ka),ka.version="3.12.5";St.registerPlugin(ka);class OS{constructor(){ju(this,"skyBoxCreation",async()=>{const e=new dM(this.renderer);this.envMap=await e.loadAsync(this.props.skybox.img),this.envMapTexture=this.envMap.renderTarget.texture,this.envMapTexture.mapping=Zo,this.envMapTexture.needsUpdate=!0,this.scene.environment=this.envMapTexture,this.skybox&&this.scene.remove(this.skybox),this.skybox=new fM(this.envMapTexture,this.props.skybox.height,this.props.skybox.radius),this.scene.add(this.skybox)});this.props={material:{metalness:.9,roughness1:0,roughness2:.089,color1:"#949494",color2:"#f84012"},sphere:{numSpheres:9,reductionFactor:.06,baseRadius:15,phiStart:0,phiEnd:Math.PI,thetaStart:0,thetaEnd:Math.PI},skybox:{img:"./assets/hdr/12.jpg",height:15,radius:100,freeControl:!1}},this.init()}async init(){this.scene=new ap,this.camera=new Nn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new sp({antialias:!0}),this.skyBoxCreation(),this.lightCreation(),this.cameraSettings(),this.rendererSettings(),this.sphereCreation(),this.sphereShadowCreation(),this.sphereAnimations(),this.GUISettings(),this.cameraAnimations()}GUISettings(){const e=new xu;e.close();const t=e.addFolder("Skybox");e.addFolder("Sphere"),t.add(this.props.skybox,"height").onChange(()=>this.skyBoxCreation()),t.add(this.props.skybox,"radius").onChange(()=>this.skyBoxCreation());const n=["11.jpg","12.jpg","14.jpg","17.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg"].map(r=>"./assets/hdr/"+r);t.add(this.props.skybox,"img",n).onChange(()=>this.skyBoxCreation()),t.add(this.props.skybox,"freeControl").name("FREE CONTROL").onChange(r=>{document.querySelectorAll(".headerContent, .WhoweAre, .benefitsContent, .topBar").forEach(a=>{r?(a.style.display="none",this.Cameraanimation.pause()):(a.style.display="",this.Cameraanimation.play())})})}rendererSettings(){this.renderer.shadowMap.enabled=!0,this.renderer.toneMapping=Af,this.renderer.toneMappingExposure=1.462,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.animate()}cameraSettings(){this.camera.position.z=35,this.camera.position.y=0,this.controls=new Xy(this.camera,this.renderer.domElement)}lightCreation(){const e=new Gy(16711680,10);e.castShadow=!0,e.position.set(30,50,10);const t=new jt;t.position.set(0,0,0),this.scene.add(t),e.target=t,this.scene.add(e)}sphereCreation(){const e=(r,s)=>new Ny({color:new ut(r),side:hi,metalness:this.props.material.metalness,roughness:s}),t=e(this.props.material.color1,null,this.props.material.roughness1),n=e(this.props.material.color2,null,this.props.material.roughness2);this.spheres=[];for(let r=0;r<this.props.sphere.numSpheres;r++){let s,a;r<6?(s=t,a=n):(s=n,a=t);const o=this.props.sphere.baseRadius-this.props.sphere.baseRadius*this.props.sphere.reductionFactor*r,l=(d,m)=>{const _=new yl(d,64,32,this.props.sphere.phiStart,this.props.sphere.phiEnd,this.props.sphere.thetaStart,this.props.sphere.thetaEnd),g=new Tn(_,m);return g.castShadow=!0,g.receiveShadow=!0,g.position.y=-this.props.skybox.height+this.props.sphere.baseRadius+1,this.scene.add(g),g.scale.set(1,1,1),g},c=l(o,s),u=l(o*.95,a),h=l(o*.95+.01,e("#000000",1));this.spheres.push(c,u,h)}this.spheres.forEach(r=>{this.scene.add(r)})}sphereShadowCreation(){const e=new es(100,100),t=new Uy({opacity:.5});this.shadow=new Tn(e,t),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=-15,this.shadow.receiveShadow=!0,this.scene.add(this.shadow)}sphereAnimations(){let e=St.timeline();document.addEventListener("keydown",function(a){a.key==="w"&&e.pause()}),document.addEventListener("keydown",function(a){a.key==="q"&&e.restart()}),document.querySelectorAll(".hcServiceItem").forEach(a=>{a.addEventListener("mouseover",function(){e.isActive()||e.restart()})});const n=new pr;function r(a,o,l){return St.to(a,{duration:o,onUpdate:function(){let c=this.progress()*o,u,h;u=kf.lerp(0,-3.14/2,c),h=0;let d=u+(h-u)*this.progress();n.setFromAxisAngle(new z(-1,0,0),d),this.targets().forEach(m=>{m.setRotationFromQuaternion(n)})}})}function s(a,o,l){ka.create("custom","M0,0 C0.026,0.051 0.092,0.131 0.128,0.242 0.182,0.413 0.619,1 1,1 ");const u=St.timeline();return a.forEach((h,d)=>{const m=Math.floor(d/3)*.293;u.add(St.to(h.rotation,{duration:l,y:`+=${o}`,ease:null}),m)}),u}e.add(r(this.spheres,2),0),e.add(s(this.spheres,Math.PI*4,8),0)}cameraAnimations(){const e=()=>{this.Cameraanimation=St.to(this.camera.position,{duration:10,z:35+Math.random()*20-10,x:Math.random()*35-20,y:Math.random()*10-5,ease:"slow(0.9,0.4,true)",yoyo:!0,onComplete:e})};e();const t=this;let n=new z;document.addEventListener("mousemove",function(r){const s=r.clientX/window.innerWidth*4-1,a=-(r.clientY/window.innerHeight)*4+1;St.to(n,{x:t.camera.position.x+s,y:t.camera.position.y+a,duration:.5,onUpdate:function(){t.camera.lookAt(n)}})})}animate(){requestAnimationFrame(this.animate.bind(this)),this.renderer.render(this.scene,this.camera)}}new OS;/*!
 * DrawSVGPlugin 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */let jn,Bu,ul,dm,fm,Wd,Kc,pm,mm=()=>typeof window<"u",gm=()=>jn||mm()&&(jn=window.gsap)&&jn.registerPlugin&&jn,BS=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,xc={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},Nr=i=>Math.round(1e4*i)/1e4,Oi=i=>parseFloat(i)||0,Xd=(i,e)=>{let t=Oi(i);return~i.indexOf("%")?t/100*e:t},To=(i,e)=>Oi(i.getAttribute(e)),Ho=Math.sqrt,Yd=(i,e,t,n,r,s)=>Ho(((Oi(t)-Oi(i))*r)**2+((Oi(n)-Oi(e))*s)**2),$d=i=>console.warn(i),_m=i=>i.getAttribute("vector-effect")==="non-scaling-stroke",Ye=function(){return String.fromCharCode.apply(null,arguments)},qd=Ye(103,114,101,101,110,115,111,99,107,46,99,111,109),kS=Ye(103,115,97,112,46,99,111,109),zS=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,HS=function(i){var e=typeof window<"u",t=(e?window.location.href:"").indexOf(Ye(102,105,108,101,58,47,47))===0||i.indexOf(Ye(108,111,99,97,108,104,111,115,116))!==-1||zS.test(i)||(e?window.location.hostname:"").split(".").pop()===Ye(108,111,99,97,108),n=[qd,kS,Ye(99,111,100,101,112,101,110,46,105,111),Ye(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),Ye(99,111,100,101,112,101,110,46,100,101,118),Ye(99,111,100,101,112,101,110,46,97,112,112),Ye(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),Ye(112,101,110,115,46,99,108,111,117,100),Ye(99,115,115,45,116,114,105,99,107,115,46,99,111,109),Ye(99,100,112,110,46,105,111),Ye(112,101,110,115,46,105,111),Ye(103,97,110,110,111,110,46,116,118),Ye(99,111,100,101,99,97,110,121,111,110,46,110,101,116),Ye(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),Ye(99,101,114,101,98,114,97,120,46,99,111,46,117,107),Ye(116,121,109,112,97,110,117,115,46,110,101,116),Ye(116,119,101,101,110,109,97,120,46,99,111,109),Ye(112,108,110,107,114,46,99,111),Ye(104,111,116,106,97,114,46,99,111,109),Ye(119,101,98,112,97,99,107,98,105,110,46,99,111,109),Ye(97,114,99,104,105,118,101,46,111,114,103),Ye(99,111,100,101,115,97,110,100,98,111,120,46,105,111),Ye(99,115,98,46,97,112,112),Ye(115,116,97,99,107,98,108,105,116,122,46,99,111,109),Ye(115,116,97,99,107,98,108,105,116,122,46,105,111),Ye(99,111,100,105,101,114,46,105,111),Ye(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),Ye(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),Ye(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),Ye(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),Ye(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),Ye(114,49,45,120,105,46,118,101,114,99,101,108,46,97,112,112)],r=function(){if(e)if(document.readyState==="loading"||document.readyState==="interactive")document.addEventListener("readystatechange",r);else{document.removeEventListener("readystatechange",r);var a=typeof jn=="object"?jn:e&&window.gsap;e&&window.console&&!window._gsapWarned&&typeof a=="object"&&a.config().trialWarn!==!1&&(console.log(Ye(37,99,87,97,114,110,105,110,103),Ye(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(Ye(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"DrawSVGPlugin"+Ye(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(Ye(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),Ye(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},s=n.length;for(setTimeout(r,50);--s>-1;)if(i.indexOf(n[s])!==-1)return!0;return t||!setTimeout(function(){e&&(window.location.href=Ye(104,116,116,112,115,58,47,47)+qd+Ye(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=DrawSVGPlugin&source=trial")},4e3)}(typeof window<"u"?window.location.host:""),Vo=i=>{if(!(i=Bu(i)[0]))return 0;let e,t,n,r,s,a,o,l=i.tagName.toLowerCase(),c=i.style,u=1,h=1;_m(i)&&(h=i.getScreenCTM(),u=Ho(h.a*h.a+h.b*h.b),h=Ho(h.d*h.d+h.c*h.c));try{t=i.getBBox()}catch{$d("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}let{x:d,y:m,width:_,height:g}=t||{x:0,y:0,width:0,height:0};if(t&&(_||g)||!xc[l]||(_=To(i,xc[l][0]),g=To(i,xc[l][1]),l!=="rect"&&l!=="line"&&(_*=2,g*=2),l==="line"&&(d=To(i,"x1"),m=To(i,"y1"),_=Math.abs(_-d),g=Math.abs(g-m))),l==="path")r=c.strokeDasharray,c.strokeDasharray="none",e=i.getTotalLength()||0,Nr(u)!==Nr(h)&&!Wd&&(Wd=1)&&$d("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),e*=(u+h)/2,c.strokeDasharray=r;else if(l==="rect")e=2*_*u+2*g*h;else if(l==="line")e=Yd(d,m,d+_,m+g,u,h);else if(l==="polyline"||l==="polygon")for(n=i.getAttribute("points").match(BS)||[],l==="polygon"&&n.push(n[0],n[1]),e=0,s=2;s<n.length;s+=2)e+=Yd(n[s-2],n[s-1],n[s],n[s+1],u,h)||0;else l!=="circle"&&l!=="ellipse"||(a=_/2*u,o=g/2*h,e=Math.PI*(3*(a+o)-Ho((3*a+o)*(a+3*o))));return e||0},jd=(i,e)=>{if(!(i=Bu(i)[0]))return[0,0];e||(e=Vo(i)+1);let t=ul.getComputedStyle(i),n=t.strokeDasharray||"",r=Oi(t.strokeDashoffset),s=n.indexOf(",");return s<0&&(s=n.indexOf(" ")),n=s<0?e:Oi(n.substr(0,s)),n>e&&(n=e),[-r||0,n-r||0]},Kd=()=>{mm()&&(ul=window,fm=jn=gm(),Bu=jn.utils.toArray,Kc=jn.core.getStyleSaver,pm=jn.core.reverting||function(){},dm=((ul.navigator||{}).userAgent||"").indexOf("Edge")!==-1)};const vm={version:"3.12.5",name:"drawSVG",register(i){jn=i,Kd()},init(i,e,t,n,r){if(!i.getBBox)return!1;fm||Kd();let s,a,o,l=Vo(i);return this.styles=Kc&&Kc(i,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=t,this._style=i.style,this._target=i,e+""=="true"?e="0 100%":e?(e+"").indexOf(" ")===-1&&(e="0 "+e):e="0 0",s=jd(i,l),a=((c,u,h)=>{let d,m,_=c.indexOf(" ");return _<0?(d=h!==void 0?h+"":c,m=c):(d=c.substr(0,_),m=c.substr(_+1)),d=Xd(d,u),m=Xd(m,u),d>m?[m,d]:[d,m]})(e,l,s[0]),this._length=Nr(l),this._dash=Nr(s[1]-s[0]),this._offset=Nr(-s[0]),this._dashPT=this.add(this,"_dash",this._dash,Nr(a[1]-a[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,Nr(-a[0]),0,0,0,0,0,1),dm&&(o=ul.getComputedStyle(i),o.strokeLinecap!==o.strokeLinejoin&&(a=Oi(o.strokeMiterlimit),this.add(i.style,"strokeMiterlimit",a,a+.01))),this._live=_m(i)||~(e+"").indexOf("live"),this._nowrap=~(e+"").indexOf("nowrap"),this._props.push("drawSVG"),HS},render(i,e){if(e.tween._time||!pm()){let t,n,r,s,a=e._pt,o=e._style;if(a){for(e._live&&(t=Vo(e._target),t!==e._length&&(n=t/e._length,e._length=t,e._offsetPT&&(e._offsetPT.s*=n,e._offsetPT.c*=n),e._dashPT?(e._dashPT.s*=n,e._dashPT.c*=n):e._dash*=n));a;)a.r(i,a.d),a=a._next;r=e._dash||(i&&i!==1?1e-4:0),t=e._length-r+.1,s=e._offset,r&&s&&r+Math.abs(s%e._length)>e._length-.2&&(s+=s<0?.1:-.1)&&(t+=.1),o.strokeDashoffset=r?s:s+.001,o.strokeDasharray=t<.2?"none":r?r+"px,"+(e._nowrap?999999:t)+"px":"0px, 999999px"}}else e.styles.revert()},getLength:Vo,getPosition:jd};gm()&&jn.registerPlugin(vm);const VS=vm;/*!
 * SplitText 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */const GS=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;let Ps,Zc,xm,Or,ym,Tl,WS=/(?:\r|\n|\t\t)/g,XS=/(?:\s\s+)/g,YS=" ",Mm=i=>{Ps=document,Zc=window,Or=Or||i||Zc.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),Or&&(Tl=Or.utils.toArray,ym=Or.core.context||function(){},xm=1)},$e=function(){return String.fromCharCode.apply(null,arguments)},Zd=$e(103,114,101,101,110,115,111,99,107,46,99,111,109),$S=$e(103,115,97,112,46,99,111,109),qS=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,jS=function(i){var e=typeof window<"u",t=(e?window.location.href:"").indexOf($e(102,105,108,101,58,47,47))===0||i.indexOf($e(108,111,99,97,108,104,111,115,116))!==-1||qS.test(i)||(e?window.location.hostname:"").split(".").pop()===$e(108,111,99,97,108),n=[Zd,$S,$e(99,111,100,101,112,101,110,46,105,111),$e(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),$e(99,111,100,101,112,101,110,46,100,101,118),$e(99,111,100,101,112,101,110,46,97,112,112),$e(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),$e(112,101,110,115,46,99,108,111,117,100),$e(99,115,115,45,116,114,105,99,107,115,46,99,111,109),$e(99,100,112,110,46,105,111),$e(112,101,110,115,46,105,111),$e(103,97,110,110,111,110,46,116,118),$e(99,111,100,101,99,97,110,121,111,110,46,110,101,116),$e(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),$e(99,101,114,101,98,114,97,120,46,99,111,46,117,107),$e(116,121,109,112,97,110,117,115,46,110,101,116),$e(116,119,101,101,110,109,97,120,46,99,111,109),$e(112,108,110,107,114,46,99,111),$e(104,111,116,106,97,114,46,99,111,109),$e(119,101,98,112,97,99,107,98,105,110,46,99,111,109),$e(97,114,99,104,105,118,101,46,111,114,103),$e(99,111,100,101,115,97,110,100,98,111,120,46,105,111),$e(99,115,98,46,97,112,112),$e(115,116,97,99,107,98,108,105,116,122,46,99,111,109),$e(115,116,97,99,107,98,108,105,116,122,46,105,111),$e(99,111,100,105,101,114,46,105,111),$e(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),$e(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),$e(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),$e(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),$e(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),$e(114,49,45,120,105,46,118,101,114,99,101,108,46,97,112,112)],r=function(){if(e)if(document.readyState==="loading"||document.readyState==="interactive")document.addEventListener("readystatechange",r);else{document.removeEventListener("readystatechange",r);var a=typeof Or=="object"?Or:e&&window.gsap;e&&window.console&&!window._gsapWarned&&typeof a=="object"&&a.config().trialWarn!==!1&&(console.log($e(37,99,87,97,114,110,105,110,103),$e(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log($e(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"SplitText"+$e(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log($e(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),$e(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},s=n.length;for(setTimeout(r,50);--s>-1;)if(i.indexOf(n[s])!==-1)return!0;return t||!setTimeout(function(){e&&(window.location.href=$e(104,116,116,112,115,58,47,47)+Zd+$e(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=SplitText&source=trial")},4e3)}(typeof window<"u"?window.location.host:""),Sm=i=>Zc.getComputedStyle(i),ku=i=>i.position==="absolute"||i.absolute===!0,KS=(i,e)=>{let t,n=e.length;for(;--n>-1;)if(t=e[n],i.substr(0,t.length)===t)return t.length},Jd=(i="",e)=>{let t=~i.indexOf("++"),n=1;return t&&(i=i.split("++").join("")),()=>"<"+e+" style='position:relative;display:inline-block;'"+(i?" class='"+i+(t?n++:"")+"'>":">")},zu=(i,e,t)=>{let n=i.nodeType;if(n===1||n===9||n===11)for(i=i.firstChild;i;i=i.nextSibling)zu(i,e,t);else n!==3&&n!==4||(i.nodeValue=i.nodeValue.split(e).join(t))},yc=(i,e)=>{let t=e.length;for(;--t>-1;)i.push(e[t])},Qd=(i,e,t)=>{let n;for(;i&&i!==e;){if(n=i._next||i.nextSibling,n)return n.textContent.charAt(0)===t;i=i.parentNode||i._parent}},Em=i=>{let e,t,n=Tl(i.childNodes),r=n.length;for(e=0;e<r;e++)t=n[e],t._isSplit?Em(t):e&&t.previousSibling&&t.previousSibling.nodeType===3?(t.previousSibling.nodeValue+=t.nodeType===3?t.nodeValue:t.firstChild.nodeValue,i.removeChild(t)):t.nodeType!==3&&(i.insertBefore(t.firstChild,t),i.removeChild(t))},oi=(i,e)=>parseFloat(e[i])||0,ZS=(i,e,t,n,r,s,a)=>{let o,l,c,u,h,d,m,_,g,p,f,y,v=Sm(i),E=oi("paddingLeft",v),A=-999,D=oi("borderBottomWidth",v)+oi("borderTopWidth",v),b=oi("borderLeftWidth",v)+oi("borderRightWidth",v),C=oi("paddingTop",v)+oi("paddingBottom",v),M=oi("paddingLeft",v)+oi("paddingRight",v),S=oi("fontSize",v)*(e.lineThreshold||.2),F=v.textAlign,I=[],R=[],N=[],V=e.wordDelimiter||" ",W=e.tag?e.tag:e.span?"span":"div",Z=e.type||e.split||"chars,words,lines",L=r&&~Z.indexOf("lines")?[]:null,Q=~Z.indexOf("words"),H=~Z.indexOf("chars"),ee=ku(e),ye=e.linesClass,Ue=~(ye||"").indexOf("++"),X=[],ie=v.display==="flex",me=i.style.display;for(Ue&&(ye=ye.split("++").join("")),ie&&(i.style.display="block"),l=i.getElementsByTagName("*"),c=l.length,h=[],o=0;o<c;o++)h[o]=l[o];if(L||ee)for(o=0;o<c;o++)u=h[o],d=u.parentNode===i,(d||ee||H&&!Q)&&(y=u.offsetTop,L&&d&&Math.abs(y-A)>S&&(u.nodeName!=="BR"||o===0)&&(m=[],L.push(m),A=y),ee&&(u._x=u.offsetLeft,u._y=y,u._w=u.offsetWidth,u._h=u.offsetHeight),L&&((u._isSplit&&d||!H&&d||Q&&d||!Q&&u.parentNode.parentNode===i&&!u.parentNode._isSplit)&&(m.push(u),u._x-=E,Qd(u,i,V)&&(u._wordEnd=!0)),u.nodeName==="BR"&&(u.nextSibling&&u.nextSibling.nodeName==="BR"||o===0)&&L.push([])));for(o=0;o<c;o++)if(u=h[o],d=u.parentNode===i,u.nodeName!=="BR")if(ee&&(g=u.style,Q||d||(u._x+=u.parentNode._x,u._y+=u.parentNode._y),g.left=u._x+"px",g.top=u._y+"px",g.position="absolute",g.display="block",g.width=u._w+1+"px",g.height=u._h+"px"),!Q&&H)if(u._isSplit)for(u._next=l=u.nextSibling,u.parentNode.appendChild(u);l&&l.nodeType===3&&l.textContent===" ";)u._next=l.nextSibling,u.parentNode.appendChild(l),l=l.nextSibling;else u.parentNode._isSplit?(u._parent=u.parentNode,!u.previousSibling&&u.firstChild&&(u.firstChild._isFirst=!0),u.nextSibling&&u.nextSibling.textContent===" "&&!u.nextSibling.nextSibling&&X.push(u.nextSibling),u._next=u.nextSibling&&u.nextSibling._isFirst?null:u.nextSibling,u.parentNode.removeChild(u),h.splice(o--,1),c--):d||(y=!u.nextSibling&&Qd(u.parentNode,i,V),u.parentNode._parent&&u.parentNode._parent.appendChild(u),y&&u.parentNode.appendChild(Ps.createTextNode(" ")),W==="span"&&(u.style.display="inline"),I.push(u));else u.parentNode._isSplit&&!u._isSplit&&u.innerHTML!==""?R.push(u):H&&!u._isSplit&&(W==="span"&&(u.style.display="inline"),I.push(u));else L||ee?(u.parentNode&&u.parentNode.removeChild(u),h.splice(o--,1),c--):Q||i.appendChild(u);for(o=X.length;--o>-1;)X[o].parentNode.removeChild(X[o]);if(L){for(ee&&(p=Ps.createElement(W),i.appendChild(p),f=p.offsetWidth+"px",y=p.offsetParent===i?0:i.offsetLeft,i.removeChild(p)),g=i.style.cssText,i.style.cssText="display:none;";i.firstChild;)i.removeChild(i.firstChild);for(_=V===" "&&(!ee||!Q&&!H),o=0;o<L.length;o++){for(m=L[o],p=Ps.createElement(W),p.style.cssText="display:block;text-align:"+F+";position:"+(ee?"absolute;":"relative;"),ye&&(p.className=ye+(Ue?o+1:"")),N.push(p),c=m.length,l=0;l<c;l++)m[l].nodeName!=="BR"&&(u=m[l],p.appendChild(u),_&&u._wordEnd&&p.appendChild(Ps.createTextNode(" ")),ee&&(l===0&&(p.style.top=u._y+"px",p.style.left=E+y+"px"),u.style.top="0px",y&&(u.style.left=u._x-y+"px")));c===0?p.innerHTML="&nbsp;":Q||H||(Em(p),zu(p," "," ")),ee&&(p.style.width=f,p.style.height=u._h+"px"),i.appendChild(p)}i.style.cssText=g}ee&&(a>i.clientHeight&&(i.style.height=a-C+"px",i.clientHeight<a&&(i.style.height=a+D+"px")),s>i.clientWidth&&(i.style.width=s-M+"px",i.clientWidth<s&&(i.style.width=s+b+"px"))),ie&&(me?i.style.display=me:i.style.removeProperty("display")),yc(t,I),Q&&yc(n,R),yc(r,N)},JS=(i,e,t,n)=>{let r,s,a,o,l,c,u,h,d=e.tag?e.tag:e.span?"span":"div",m=~(e.type||e.split||"chars,words,lines").indexOf("chars"),_=ku(e),g=e.wordDelimiter||" ",p=b=>b===g||b===YS&&g===" ",f=g!==" "?"":_?"&#173; ":" ",y="</"+d+">",v=1,E=e.specialChars?typeof e.specialChars=="function"?e.specialChars:KS:null,A=Ps.createElement("div"),D=i.parentNode;for(D.insertBefore(A,i),A.textContent=i.nodeValue,D.removeChild(i),r=function b(C){let M=C.nodeType,S="";if(M===1||M===9||M===11){if(typeof C.textContent=="string")return C.textContent;for(C=C.firstChild;C;C=C.nextSibling)S+=b(C)}else if(M===3||M===4)return C.nodeValue;return S}(i=A),u=r.indexOf("<")!==-1,e.reduceWhiteSpace!==!1&&(r=r.replace(XS," ").replace(WS,"")),u&&(r=r.split("<").join("{{LT}}")),l=r.length,s=(r.charAt(0)===" "?f:"")+t(),a=0;a<l;a++)if(c=r.charAt(a),E&&(h=E(r.substr(a),e.specialChars)))c=r.substr(a,h||1),s+=m&&c!==" "?n()+c+"</"+d+">":c,a+=h-1;else if(p(c)&&!p(r.charAt(a-1))&&a){for(s+=v?y:"",v=0;p(r.charAt(a+1));)s+=f,a++;a===l-1?s+=f:r.charAt(a+1)!==")"&&(s+=f+t(),v=1)}else c==="{"&&r.substr(a,6)==="{{LT}}"?(s+=m?n()+"{{LT}}</"+d+">":"{{LT}}",a+=5):c.charCodeAt(0)>=55296&&c.charCodeAt(0)<=56319||r.charCodeAt(a+1)>=65024&&r.charCodeAt(a+1)<=65039?(o=((r.substr(a,12).split(GS)||[])[1]||"").length||2,s+=m&&c!==" "?n()+r.substr(a,o)+"</"+d+">":r.substr(a,o),a+=o-1):s+=m&&c!==" "?n()+c+"</"+d+">":c;i.outerHTML=s+(v?y:""),u&&zu(D,"{{LT}}","<")},Tm=(i,e,t,n)=>{let r,s,a=Tl(i.childNodes),o=a.length,l=ku(e);if(i.nodeType!==3||o>1){for(e.absolute=!1,r=0;r<o;r++)s=a[r],s._next=s._isFirst=s._parent=s._wordEnd=null,(s.nodeType!==3||/\S+/.test(s.nodeValue))&&(l&&s.nodeType!==3&&Sm(s).display==="inline"&&(s.style.display="inline-block",s.style.position="relative"),s._isSplit=!0,Tm(s,e,t,n));return e.absolute=l,void(i._isSplit=!0)}JS(i,e,t,n)},Jc=class bm{constructor(e,t){xm||Mm(),this.elements=Tl(e),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},ym(this),jS&&this.split(t)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;let t,n,r,s=this.elements.length,a=e.tag?e.tag:e.span?"span":"div",o=Jd(e.wordsClass,a),l=Jd(e.charsClass,a);for(;--s>-1;)r=this.elements[s],this._originals[s]={html:r.innerHTML,style:r.getAttribute("style")},t=r.clientHeight,n=r.clientWidth,Tm(r,e,o,l),ZS(r,e,this.chars,this.words,this.lines,n,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this}revert(){let e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach((t,n)=>{t.innerHTML=e[n].html,t.setAttribute("style",e[n].style)}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this}static create(e,t){return new bm(e,t)}};Jc.version="3.12.5",Jc.register=Mm;const Dm=Jc;/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */let gn,Am,zi,mi,dr,wm,Cm,bo,Rm=()=>typeof window<"u",Pm=()=>gn||Rm()&&(gn=window.gsap)&&gn.registerPlugin&&gn,Lm=i=>typeof i=="string",ef=i=>typeof i=="function",za=(i,e)=>{let t=e==="x"?"Width":"Height",n="scroll"+t,r="client"+t;return i===zi||i===mi||i===dr?Math.max(mi[n],dr[n])-(zi["inner"+t]||mi[r]||dr[r]):i[n]-i["offset"+t]},Ha=(i,e)=>{let t="scroll"+(e==="x"?"Left":"Top");return i===zi&&(i.pageXOffset!=null?t="page"+e.toUpperCase()+"Offset":i=mi[t]!=null?mi:dr),()=>i[t]},Fm=(i,e)=>{if(!(i=wm(i)[0])||!i.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};let t=i.getBoundingClientRect(),n=!e||e===zi||e===dr,r=n?{top:mi.clientTop-(zi.pageYOffset||mi.scrollTop||dr.scrollTop||0),left:mi.clientLeft-(zi.pageXOffset||mi.scrollLeft||dr.scrollLeft||0)}:e.getBoundingClientRect(),s={x:t.left-r.left,y:t.top-r.top};return!n&&e&&(s.x+=Ha(e,"x")(),s.y+=Ha(e,"y")()),s},tf=(i,e,t,n,r)=>isNaN(i)||typeof i=="object"?Lm(i)&&i.charAt(1)==="="?parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+n-r:i==="max"?za(e,t)-r:Math.min(za(e,t),Fm(i,e)[t]-r):parseFloat(i)-r,nf=()=>{gn=Pm(),Rm()&&gn&&typeof document<"u"&&document.body&&(zi=window,dr=document.body,mi=document.documentElement,wm=gn.utils.toArray,gn.config({autoKillThreshold:7}),Cm=gn.config(),Am=1)};const fa={version:"3.12.5",name:"scrollTo",rawVars:1,register(i){gn=i,nf()},init(i,e,t,n,r){Am||nf();let s=this,a=gn.getProperty(i,"scrollSnapType");s.isWin=i===zi,s.target=i,s.tween=t,e=((o,l,c,u)=>{if(ef(o)&&(o=o(l,c,u)),typeof o!="object")return Lm(o)&&o!=="max"&&o.charAt(1)!=="="?{x:o,y:o}:{y:o};if(o.nodeType)return{y:o,x:o};{let h,d={};for(h in o)d[h]=h!=="onAutoKill"&&ef(o[h])?o[h](l,c,u):o[h];return d}})(e,n,i,r),s.vars=e,s.autoKill=!!e.autoKill,s.getX=Ha(i,"x"),s.getY=Ha(i,"y"),s.x=s.xPrev=s.getX(),s.y=s.yPrev=s.getY(),bo||(bo=gn.core.globals().ScrollTrigger),gn.getProperty(i,"scrollBehavior")==="smooth"&&gn.set(i,{scrollBehavior:"auto"}),a&&a!=="none"&&(s.snap=1,s.snapInline=i.style.scrollSnapType,i.style.scrollSnapType="none"),e.x!=null?(s.add(s,"x",s.x,tf(e.x,i,"x",s.x,e.offsetX||0),n,r),s._props.push("scrollTo_x")):s.skipX=1,e.y!=null?(s.add(s,"y",s.y,tf(e.y,i,"y",s.y,e.offsetY||0),n,r),s._props.push("scrollTo_y")):s.skipY=1},render(i,e){let t,n,r,s,a,o=e._pt,{target:l,tween:c,autoKill:u,xPrev:h,yPrev:d,isWin:m,snap:_,snapInline:g}=e;for(;o;)o.r(i,o.d),o=o._next;t=m||!e.skipX?e.getX():h,n=m||!e.skipY?e.getY():d,r=n-d,s=t-h,a=Cm.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),u&&(!e.skipX&&(s>a||s<-a)&&t<za(l,"x")&&(e.skipX=1),!e.skipY&&(r>a||r<-a)&&n<za(l,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(c.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(c,e.vars.onAutoKillParams||[]))),m?zi.scrollTo(e.skipX?t:e.x,e.skipY?n:e.y):(e.skipY||(l.scrollTop=e.y),e.skipX||(l.scrollLeft=e.x)),!_||i!==1&&i!==0||(n=l.scrollTop,t=l.scrollLeft,g?l.style.scrollSnapType=g:l.style.removeProperty("scroll-snap-type"),l.scrollTop=n+1,l.scrollLeft=t+1,l.scrollTop=n,l.scrollLeft=t),e.xPrev=e.x,e.yPrev=e.y,bo&&bo.update()},kill(i){let e=i==="scrollTo",t=this._props.indexOf(i);return(e||i==="scrollTo_x")&&(this.skipX=1),(e||i==="scrollTo_y")&&(this.skipY=1),t>-1&&this._props.splice(t,1),!this._props.length}};fa.max=za,fa.getOffset=Fm,fa.buildGetter=Ha,Pm()&&gn.registerPlugin(fa);const QS=fa;/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */let qt,Go,Bn,ar,or,ks,Im,Lr,pa,Um,Bi,ti,Nm,Om=()=>qt||typeof window<"u"&&(qt=window.gsap)&&qt.registerPlugin&&qt,Bm=1,Ls=[],rt=[],gi=[],Da=Date.now,Qc=(i,e)=>e,lr=(i,e)=>~gi.indexOf(i)&&gi[gi.indexOf(i)+1][e],Aa=i=>!!~Um.indexOf(i),un=(i,e,t,n,r)=>i.addEventListener(e,t,{passive:n!==!1,capture:!!r}),ln=(i,e,t,n)=>i.removeEventListener(e,t,!!n),eu=()=>Bi&&Bi.isPressed||rt.cache++,hl=(i,e)=>{let t=n=>{if(n||n===0){Bm&&(Bn.history.scrollRestoration="manual");let r=Bi&&Bi.isPressed;n=t.v=Math.round(n)||(Bi&&Bi.iOS?1:0),i(n),t.cacheID=rt.cache,r&&Qc("ss",n)}else(e||rt.cache!==t.cacheID||Qc("ref"))&&(t.cacheID=rt.cache,t.v=i());return t.v+t.offset};return t.offset=0,i&&t},_n={s:"scrollLeft",p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:hl(function(i){return arguments.length?Bn.scrollTo(i,Ot.sc()):Bn.pageXOffset||ar.scrollLeft||or.scrollLeft||ks.scrollLeft||0})},Ot={s:"scrollTop",p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:hl(function(i){return arguments.length?Bn.scrollTo(_n.sc(),i):Bn.pageYOffset||ar.scrollTop||or.scrollTop||ks.scrollTop||0})},Mn=(i,e)=>(e&&e._ctx&&e._ctx.selector||qt.utils.toArray)(i)[0]||(typeof i=="string"&&qt.config().nullTargetWarn!==!1?console.warn("Element not found:",i):null),_r=(i,{s:e,sc:t})=>{Aa(i)&&(i=ar.scrollingElement||or);let n=rt.indexOf(i),r=t===Ot.sc?1:2;!~n&&(n=rt.push(i)-1),rt[n+r]||un(i,"scroll",eu);let s=rt[n+r],a=s||(rt[n+r]=hl(lr(i,e),!0)||(Aa(i)?t:hl(function(o){return arguments.length?i[e]=o:i[e]})));return a.target=i,s||(a.smooth=qt.getProperty(i,"scrollBehavior")==="smooth"),a},tu=(i,e,t)=>{let n=i,r=i,s=Da(),a=s,o=e||50,l=Math.max(500,3*o),c=(u,h)=>{let d=Da();h||d-s>o?(r=n,n=u,a=s,s=d):t?n+=u:n=r+(u-r)/(d-a)*(s-a)};return{update:c,reset:()=>{r=n=t?0:n,a=s=0},getVelocity:u=>{let h=a,d=r,m=Da();return(u||u===0)&&u!==n&&c(u),s===a||m-a>l?0:(n+(t?d:-d))/((t?m:s)-h)*1e3}}},la=(i,e)=>(e&&!i._gsapAllow&&i.preventDefault(),i.changedTouches?i.changedTouches[0]:i),rf=i=>{let e=Math.max(...i),t=Math.min(...i);return Math.abs(e)>=Math.abs(t)?e:t},km=()=>{pa=qt.core.globals().ScrollTrigger,pa&&pa.core&&(()=>{let i=pa.core,e=i.bridge||{},t=i._scrollers,n=i._proxies;t.push(...rt),n.push(...gi),rt=t,gi=n,Qc=(r,s)=>e[r](s)})()},zm=i=>(qt=i||Om(),!Go&&qt&&typeof document<"u"&&document.body&&(Bn=window,ar=document,or=ar.documentElement,ks=ar.body,Um=[Bn,ar,or,ks],qt.utils.clamp,Nm=qt.core.context||function(){},Lr="onpointerenter"in ks?"pointer":"mouse",Im=Rt.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=Rt.eventTypes=("ontouchstart"in or?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in or?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(()=>Bm=0,500),km(),Go=1),Go);_n.op=Ot,rt.cache=0;class Rt{constructor(e){this.init(e)}init(e){Go||zm(qt)||console.warn("Please gsap.registerPlugin(Observer)"),pa||km();let{tolerance:t,dragMinimum:n,type:r,target:s,lineHeight:a,debounce:o,preventDefault:l,onStop:c,onStopDelay:u,ignore:h,wheelSpeed:d,event:m,onDragStart:_,onDragEnd:g,onDrag:p,onPress:f,onRelease:y,onRight:v,onLeft:E,onUp:A,onDown:D,onChangeX:b,onChangeY:C,onChange:M,onToggleX:S,onToggleY:F,onHover:I,onHoverEnd:R,onMove:N,ignoreCheck:V,isNormalizer:W,onGestureStart:Z,onGestureEnd:L,onWheel:Q,onEnable:H,onDisable:ee,onClick:ye,scrollSpeed:Ue,capture:X,allowClicks:ie,lockAxis:me,onLockAxis:he}=e;this.target=s=Mn(s)||or,this.vars=e,h&&(h=qt.utils.toArray(h)),t=t||1e-9,n=n||0,d=d||1,Ue=Ue||1,r=r||"wheel,touch,pointer",o=o!==!1,a||(a=parseFloat(Bn.getComputedStyle(ks).lineHeight)||22);let De,Le,Ge,G,Ce,ue,Ze,k=this,nt=0,P=0,T=e.passive||!l,j=_r(s,_n),J=_r(s,Ot),re=j(),ne=J(),pe=~r.indexOf("touch")&&!~r.indexOf("pointer")&&ti[0]==="pointerdown",le=Aa(s),xe=s.ownerDocument||ar,se=[0,0,0],ae=[0,0,0],oe=0,Ne=()=>oe=Da(),ge=(O,fe)=>(k.event=O)&&h&&~h.indexOf(O.target)||fe&&pe&&O.pointerType!=="touch"||V&&V(O,fe),Se=()=>{let O=k.deltaX=rf(se),fe=k.deltaY=rf(ae),ce=Math.abs(O)>=t,Ee=Math.abs(fe)>=t;M&&(ce||Ee)&&M(k,O,fe,se,ae),ce&&(v&&k.deltaX>0&&v(k),E&&k.deltaX<0&&E(k),b&&b(k),S&&k.deltaX<0!=nt<0&&S(k),nt=k.deltaX,se[0]=se[1]=se[2]=0),Ee&&(D&&k.deltaY>0&&D(k),A&&k.deltaY<0&&A(k),C&&C(k),F&&k.deltaY<0!=P<0&&F(k),P=k.deltaY,ae[0]=ae[1]=ae[2]=0),(G||Ge)&&(N&&N(k),Ge&&(p(k),Ge=!1),G=!1),ue&&!(ue=!1)&&he&&he(k),Ce&&(Q(k),Ce=!1),De=0},He=(O,fe,ce)=>{se[ce]+=O,ae[ce]+=fe,k._vx.update(O),k._vy.update(fe),o?De||(De=requestAnimationFrame(Se)):Se()},qe=(O,fe)=>{me&&!Ze&&(k.axis=Ze=Math.abs(O)>Math.abs(fe)?"x":"y",ue=!0),Ze!=="y"&&(se[2]+=O,k._vx.update(O,!0)),Ze!=="x"&&(ae[2]+=fe,k._vy.update(fe,!0)),o?De||(De=requestAnimationFrame(Se)):Se()},Je=O=>{if(ge(O,1))return;let fe=(O=la(O,l)).clientX,ce=O.clientY,Ee=fe-k.x,Te=ce-k.y,Re=k.isDragging;k.x=fe,k.y=ce,(Re||Math.abs(k.startX-fe)>=n||Math.abs(k.startY-ce)>=n)&&(p&&(Ge=!0),Re||(k.isDragging=!0),qe(Ee,Te),Re||_&&_(k))},Qe=k.onPress=O=>{ge(O,1)||O&&O.button||(k.axis=Ze=null,Le.pause(),k.isPressed=!0,O=la(O),nt=P=0,k.startX=k.x=O.clientX,k.startY=k.y=O.clientY,k._vx.reset(),k._vy.reset(),un(W?s:xe,ti[1],Je,T,!0),k.deltaX=k.deltaY=0,f&&f(k))},U=k.onRelease=O=>{if(ge(O,1))return;ln(W?s:xe,ti[1],Je,!0);let fe=!isNaN(k.y-k.startY),ce=k.isDragging,Ee=ce&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Te=la(O);!Ee&&fe&&(k._vx.reset(),k._vy.reset(),l&&ie&&qt.delayedCall(.08,()=>{if(Da()-oe>300&&!O.defaultPrevented){if(O.target.click)O.target.click();else if(xe.createEvent){let Re=xe.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Bn,1,Te.screenX,Te.screenY,Te.clientX,Te.clientY,!1,!1,!1,!1,0,null),O.target.dispatchEvent(Re)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,c&&ce&&!W&&Le.restart(!0),g&&ce&&g(k),y&&y(k,Ee)},Ae=O=>O.touches&&O.touches.length>1&&(k.isGesturing=!0)&&Z(O,k.isDragging),x=()=>(k.isGesturing=!1)||L(k),$=O=>{if(ge(O))return;let fe=j(),ce=J();He((fe-re)*Ue,(ce-ne)*Ue,1),re=fe,ne=ce,c&&Le.restart(!0)},te=O=>{if(ge(O))return;O=la(O,l),Q&&(Ce=!0);let fe=(O.deltaMode===1?a:O.deltaMode===2?Bn.innerHeight:1)*d;He(O.deltaX*fe,O.deltaY*fe,0),c&&!W&&Le.restart(!0)},de=O=>{if(ge(O))return;let fe=O.clientX,ce=O.clientY,Ee=fe-k.x,Te=ce-k.y;k.x=fe,k.y=ce,G=!0,c&&Le.restart(!0),(Ee||Te)&&qe(Ee,Te)},_e=O=>{k.event=O,I(k)},Fe=O=>{k.event=O,R(k)},We=O=>ge(O)||la(O,l)&&ye(k);Le=k._dc=qt.delayedCall(u||.25,()=>{k._vx.reset(),k._vy.reset(),Le.pause(),c&&c(k)}).pause(),k.deltaX=k.deltaY=0,k._vx=tu(0,50,!0),k._vy=tu(0,50,!0),k.scrollX=j,k.scrollY=J,k.isDragging=k.isGesturing=k.isPressed=!1,Nm(this),k.enable=O=>(k.isEnabled||(un(le?xe:s,"scroll",eu),r.indexOf("scroll")>=0&&un(le?xe:s,"scroll",$,T,X),r.indexOf("wheel")>=0&&un(s,"wheel",te,T,X),(r.indexOf("touch")>=0&&Im||r.indexOf("pointer")>=0)&&(un(s,ti[0],Qe,T,X),un(xe,ti[2],U),un(xe,ti[3],U),ie&&un(s,"click",Ne,!0,!0),ye&&un(s,"click",We),Z&&un(xe,"gesturestart",Ae),L&&un(xe,"gestureend",x),I&&un(s,Lr+"enter",_e),R&&un(s,Lr+"leave",Fe),N&&un(s,Lr+"move",de)),k.isEnabled=!0,O&&O.type&&Qe(O),H&&H(k)),k),k.disable=()=>{k.isEnabled&&(Ls.filter(O=>O!==k&&Aa(O.target)).length||ln(le?xe:s,"scroll",eu),k.isPressed&&(k._vx.reset(),k._vy.reset(),ln(W?s:xe,ti[1],Je,!0)),ln(le?xe:s,"scroll",$,X),ln(s,"wheel",te,X),ln(s,ti[0],Qe,X),ln(xe,ti[2],U),ln(xe,ti[3],U),ln(s,"click",Ne,!0),ln(s,"click",We),ln(xe,"gesturestart",Ae),ln(xe,"gestureend",x),ln(s,Lr+"enter",_e),ln(s,Lr+"leave",Fe),ln(s,Lr+"move",de),k.isEnabled=k.isPressed=k.isDragging=!1,ee&&ee(k))},k.kill=k.revert=()=>{k.disable();let O=Ls.indexOf(k);O>=0&&Ls.splice(O,1),Bi===k&&(Bi=0)},Ls.push(k),W&&Aa(s)&&(Bi=k),k.enable(m)}get velocityX(){return this._vx.getVelocity()}get velocityY(){return this._vy.getVelocity()}}Rt.version="3.12.5",Rt.create=i=>new Rt(i),Rt.register=zm,Rt.getAll=()=>Ls.slice(),Rt.getById=i=>Ls.filter(e=>e.vars.id===i)[0],Om()&&qt.registerPlugin(Rt);let we,bs,ot,Et,ii,vt,Hm,dl,Va,wa,ma,Do,en,bl,nu,fn,sf,af,Ds,Vm,Mc,Gm,dn,iu,Wm,Xm,er,ru,Hu,zs,Vu,fl,su,Sc,Ga,pn,of,Ca,Ao=1,tn=Date.now,Ec=tn(),Kn=0,ga=0,lf=(i,e,t)=>{let n=In(i)&&(i.substr(0,6)==="clamp("||i.indexOf("max")>-1);return t["_"+e+"Clamp"]=n,n?i.substr(6,i.length-7):i},cf=(i,e)=>!e||In(i)&&i.substr(0,6)==="clamp("?i:"clamp("+i+")",Ym=()=>ga&&requestAnimationFrame(Ym),uf=()=>bl=1,hf=()=>bl=0,ci=i=>i,_a=i=>Math.round(1e5*i)/1e5||0,$m=()=>typeof window<"u",qm=()=>we||$m()&&(we=window.gsap)&&we.registerPlugin&&we,Zr=i=>!!~Hm.indexOf(i),jm=i=>(i==="Height"?Vu:ot["inner"+i])||ii["client"+i]||vt["client"+i],Km=i=>lr(i,"getBoundingClientRect")||(Zr(i)?()=>(qo.width=ot.innerWidth,qo.height=Vu,qo):()=>Ui(i)),_i=(i,{s:e,d2:t,d:n,a:r})=>Math.max(0,(e="scroll"+t)&&(r=lr(i,e))?r()-Km(i)()[n]:Zr(i)?(ii[e]||vt[e])-jm(t):i[e]-i["offset"+t]),wo=(i,e)=>{for(let t=0;t<Ds.length;t+=3)(!e||~e.indexOf(Ds[t+1]))&&i(Ds[t],Ds[t+1],Ds[t+2])},In=i=>typeof i=="string",vn=i=>typeof i=="function",va=i=>typeof i=="number",Fr=i=>typeof i=="object",ca=(i,e,t)=>i&&i.progress(e?0:1)&&t&&i.pause(),Tc=(i,e)=>{if(i.enabled){let t=i._ctx?i._ctx.add(()=>e(i)):e(i);t&&t.totalTime&&(i.callbackAnimation=t)}},Ss=Math.abs,au="padding",Nt="px",Yn=i=>ot.getComputedStyle(i),df=(i,e)=>{for(let t in e)t in i||(i[t]=e[t]);return i},Ui=(i,e)=>{let t=e&&Yn(i)[nu]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(i,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=i.getBoundingClientRect();return t&&t.progress(0).kill(),n},pl=(i,{d2:e})=>i["offset"+e]||i["client"+e]||0,ff=i=>{let e,t=[],n=i.labels,r=i.duration();for(e in n)t.push(n[e]/r);return t},ou=i=>{let e=we.utils.snap(i),t=Array.isArray(i)&&i.slice(0).sort((n,r)=>n-r);return t?(n,r,s=.001)=>{let a;if(!r)return e(n);if(r>0){for(n-=s,a=0;a<t.length;a++)if(t[a]>=n)return t[a];return t[a-1]}for(a=t.length,n+=s;a--;)if(t[a]<=n)return t[a];return t[0]}:(n,r,s=.001)=>{let a=e(n);return!r||Math.abs(a-n)<s||a-n<0==r<0?a:e(r<0?n-i:n+i)}},Co=(i,e,t,n)=>t.split(",").forEach(r=>i(e,r,n)),Vt=(i,e,t,n,r)=>i.addEventListener(e,t,{passive:!n,capture:!!r}),Ht=(i,e,t,n)=>i.removeEventListener(e,t,!!n),Ro=(i,e,t)=>{(t=t&&t.wheelHandler)&&(i(e,"wheel",t),i(e,"touchmove",t))},pf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Po={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},Wo=(i,e)=>{if(In(i)){let t=i.indexOf("="),n=~t?+(i.charAt(t-1)+1)*parseFloat(i.substr(t+1)):0;~t&&(i.indexOf("%")>t&&(n*=e/100),i=i.substr(0,t-1)),i=n+(i in ml?ml[i]*e:~i.indexOf("%")?parseFloat(i)*e/100:parseFloat(i)||0)}return i},Lo=(i,e,t,n,{startColor:r,endColor:s,fontSize:a,indent:o,fontWeight:l},c,u,h)=>{let d=Et.createElement("div"),m=Zr(t)||lr(t,"pinType")==="fixed",_=i.indexOf("scroller")!==-1,g=m?vt:t,p=i.indexOf("start")!==-1,f=p?r:s,y="border-color:"+f+";font-size:"+a+";color:"+f+";font-weight:"+l+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((_||h)&&m?"fixed;":"absolute;"),(_||h||!m)&&(y+=(n===Ot?"right":"bottom")+":"+(c+parseFloat(o))+"px;"),u&&(y+="box-sizing:border-box;text-align:left;width:"+u.offsetWidth+"px;"),d._isStart=p,d.setAttribute("class","gsap-marker-"+i+(e?" marker-"+e:"")),d.style.cssText=y,d.innerText=e||e===0?i+"-"+e:i,g.children[0]?g.insertBefore(d,g.children[0]):g.appendChild(d),d._offset=d["offset"+n.op.d2],Xo(d,0,n,p),d},Xo=(i,e,t,n)=>{let r={display:"block"},s=t[n?"os2":"p2"],a=t[n?"p2":"os2"];i._isFlipped=n,r[t.a+"Percent"]=n?-100:0,r[t.a]=n?"1px":0,r["border"+s+"Width"]=1,r["border"+a+"Width"]=0,r[t.p]=e+"px",we.set(i,r)},it=[],lu={},mf=()=>tn()-Kn>34&&(Ga||(Ga=requestAnimationFrame(Hi))),Es=()=>{(!dn||!dn.isPressed||dn.startX>vt.clientWidth)&&(rt.cache++,dn?Ga||(Ga=requestAnimationFrame(Hi)):Hi(),Kn||Jr("scrollStart"),Kn=tn())},bc=()=>{Xm=ot.innerWidth,Wm=ot.innerHeight},xa=()=>{rt.cache++,!en&&!Gm&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!iu||Xm!==ot.innerWidth||Math.abs(ot.innerHeight-Wm)>.25*ot.innerHeight)&&dl.restart(!0)},Xr={},eE=[],Gu=()=>Ht(ke,"scrollEnd",Gu)||Br(!0),Jr=i=>Xr[i]&&Xr[i].map(e=>e())||eE,Fn=[],Zm=i=>{for(let e=0;e<Fn.length;e+=5)(!i||Fn[e+4]&&Fn[e+4].query===i)&&(Fn[e].style.cssText=Fn[e+1],Fn[e].getBBox&&Fn[e].setAttribute("transform",Fn[e+2]||""),Fn[e+3].uncache=1)},Wu=(i,e)=>{let t;for(fn=0;fn<it.length;fn++)t=it[fn],!t||e&&t._ctx!==e||(i?t.kill(1):t.revert(!0,!0));fl=!0,e&&Zm(e),e||Jr("revert")},Jm=(i,e)=>{rt.cache++,(e||!pn)&&rt.forEach(t=>vn(t)&&t.cacheID++&&(t.rec=0)),In(i)&&(ot.history.scrollRestoration=Hu=i)},Yr=0,Qm=()=>{vt.appendChild(zs),Vu=!dn&&zs.offsetHeight||ot.innerHeight,vt.removeChild(zs)},gf=i=>Va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(e=>e.style.display=i?"none":"block"),Br=(i,e)=>{if(Kn&&!i&&!fl)return void Vt(ke,"scrollEnd",Gu);Qm(),pn=ke.isRefreshing=!0,rt.forEach(n=>vn(n)&&++n.cacheID&&(n.rec=n()));let t=Jr("refreshInit");Vm&&ke.sort(),e||Wu(),rt.forEach(n=>{vn(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),it.slice(0).forEach(n=>n.refresh()),fl=!1,it.forEach(n=>{if(n._subPinOffset&&n.pin){let r=n.vars.horizontal?"offsetWidth":"offsetHeight",s=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-s),n.refresh()}}),su=1,gf(!0),it.forEach(n=>{let r=_i(n.scroller,n._dir),s=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(s||a)&&n.setPositions(a?r-1:n.start,s?Math.max(a?r:n.start+1,r):n.end,!0)}),gf(!1),su=0,t.forEach(n=>n&&n.render&&n.render(-1)),rt.forEach(n=>{vn(n)&&(n.smooth&&requestAnimationFrame(()=>n.target.style.scrollBehavior="smooth"),n.rec&&n(n.rec))}),Jm(Hu,1),dl.pause(),Yr++,pn=2,Hi(2),it.forEach(n=>vn(n.vars.onRefresh)&&n.vars.onRefresh(n)),pn=ke.isRefreshing=!1,Jr("refresh")},cu=0,Yo=1,Hi=i=>{if(i===2||!pn&&!fl){ke.isUpdating=!0,Ca&&Ca.update(0);let e=it.length,t=tn(),n=t-Ec>=50,r=e&&it[0].scroll();if(Yo=cu>r?-1:1,pn||(cu=r),n&&(Kn&&!bl&&t-Kn>200&&(Kn=0,Jr("scrollEnd")),ma=Ec,Ec=t),Yo<0){for(fn=e;fn-- >0;)it[fn]&&it[fn].update(0,n);Yo=1}else for(fn=0;fn<e;fn++)it[fn]&&it[fn].update(0,n);ke.isUpdating=!1}Ga=0},uu=["left","top","bottom","right","marginBottom","marginRight","marginTop","marginLeft","display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$o=uu.concat(["width","height","boxSizing","maxWidth","maxHeight","position","margin",au,"paddingTop","paddingRight","paddingBottom","paddingLeft"]),Dc=(i,e,t,n)=>{if(!i._gsap.swappedIn){let r,s=uu.length,a=e.style,o=i.style;for(;s--;)r=uu[s],a[r]=t[r];a.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(a.display="inline-block"),o.bottom=o.right="auto",a.flexBasis=t.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a.width=pl(i,_n)+Nt,a.height=pl(i,Ot)+Nt,a.padding=o.margin=o.top=o.left="0",As(n),o.width=o.maxWidth=t.width,o.height=o.maxHeight=t.height,o.padding=t.padding,i.parentNode!==e&&(i.parentNode.insertBefore(e,i),e.appendChild(i)),i._gsap.swappedIn=!0}},tE=/([A-Z])/g,As=i=>{if(i){let e,t,n=i.t.style,r=i.length,s=0;for((i.t._gsap||we.core.getCache(i.t)).uncache=1;s<r;s+=2)t=i[s+1],e=i[s],t?n[e]=t:n[e]&&n.removeProperty(e.replace(tE,"-$1").toLowerCase())}},Fo=i=>{let e=$o.length,t=i.style,n=[],r=0;for(;r<e;r++)n.push($o[r],t[$o[r]]);return n.t=i,n},qo={left:0,top:0},_f=(i,e,t,n,r,s,a,o,l,c,u,h,d,m)=>{vn(i)&&(i=i(o)),In(i)&&i.substr(0,3)==="max"&&(i=h+(i.charAt(4)==="="?Wo("0"+i.substr(3),t):0));let _,g,p,f=d?d.time():0;if(d&&d.seek(0),isNaN(i)||(i=+i),va(i))d&&(i=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,i)),a&&Xo(a,t,n,!0);else{vn(e)&&(e=e(o));let y,v,E,A,D=(i||"0").split(" ");p=Mn(e,o)||vt,y=Ui(p)||{},y&&(y.left||y.top)||Yn(p).display!=="none"||(A=p.style.display,p.style.display="block",y=Ui(p),A?p.style.display=A:p.style.removeProperty("display")),v=Wo(D[0],y[n.d]),E=Wo(D[1]||"0",t),i=y[n.p]-l[n.p]-c+v+r-E,a&&Xo(a,E,n,t-E<20||a._isStart&&E>20),t-=t-E}if(m&&(o[m]=i||-.001,i<0&&(i=0)),s){let y=i+t,v=s._isStart;_="scroll"+n.d2,Xo(s,y,n,v&&y>20||!v&&(u?Math.max(vt[_],ii[_]):s.parentNode[_])<=y+1),u&&(l=Ui(a),u&&(s.style[n.op.p]=l[n.op.p]-n.op.m-s._offset+Nt))}return d&&p&&(_=Ui(p),d.seek(h),g=Ui(p),d._caScrollDist=_[n.p]-g[n.p],i=i/d._caScrollDist*h),d&&d.seek(f),d?i:Math.round(i)},nE=/(webkit|moz|length|cssText|inset)/i,vf=(i,e,t,n)=>{if(i.parentNode!==e){let r,s,a=i.style;if(e===vt){for(r in i._stOrig=a.cssText,s=Yn(i),s)+r||nE.test(r)||!s[r]||typeof a[r]!="string"||r==="0"||(a[r]=s[r]);a.top=t,a.left=n}else a.cssText=i._stOrig;we.core.getCache(i).uncache=1,e.appendChild(i)}},eg=(i,e,t)=>{let n=e,r=n;return s=>{let a=Math.round(i());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(s=a,t&&t()),r=n,n=s,s}},Io=(i,e,t)=>{let n={};n[e.p]="+="+t,we.set(i,n)},xf=(i,e)=>{let t=_r(i,e),n="_scroll"+e.p2,r=(s,a,o,l,c)=>{let u=r.tween,h=a.onComplete,d={};o=o||t();let m=eg(t,o,()=>{u.kill(),r.tween=0});return c=l&&c||0,l=l||s-o,u&&u.kill(),a[n]=s,a.inherit=!1,a.modifiers=d,d[n]=()=>m(o+l*u.ratio+c*u.ratio*u.ratio),a.onUpdate=()=>{rt.cache++,r.tween&&Hi()},a.onComplete=()=>{r.tween=0,h&&h.call(u)},u=r.tween=we.to(i,a),u};return i[n]=t,t.wheelHandler=()=>r.tween&&r.tween.kill()&&(r.tween=0),Vt(i,"wheel",t.wheelHandler),ke.isTouch&&Vt(i,"touchmove",t.wheelHandler),r};class ke{constructor(e,t){bs||ke.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ru(this),this.init(e,t)}init(e,t){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ga)return void(this.update=this.refresh=this.kill=ci);e=df(In(e)||va(e)||e.nodeType?{trigger:e}:e,Po);let n,r,s,a,o,l,c,u,h,d,m,_,g,p,f,y,v,E,A,D,b,C,M,S,F,I,R,N,V,W,Z,L,Q,H,ee,ye,Ue,X,ie,{onUpdate:me,toggleClass:he,id:De,onToggle:Le,onRefresh:Ge,scrub:G,trigger:Ce,pin:ue,pinSpacing:Ze,invalidateOnRefresh:k,anticipatePin:nt,onScrubComplete:P,onSnapComplete:T,once:j,snap:J,pinReparent:re,pinSpacer:ne,containerAnimation:pe,fastScrollEnd:le,preventOverlaps:xe}=e,se=e.horizontal||e.containerAnimation&&e.horizontal!==!1?_n:Ot,ae=!G&&G!==0,oe=Mn(e.scroller||ot),Ne=we.core.getCache(oe),ge=Zr(oe),Se=("pinType"in e?e.pinType:lr(oe,"pinType")||ge&&"fixed")==="fixed",He=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],qe=ae&&e.toggleActions.split(" "),Je="markers"in e?e.markers:Po.markers,Qe=ge?0:parseFloat(Yn(oe)["border"+se.p2+"Width"])||0,U=this,Ae=e.onRefreshInit&&(()=>e.onRefreshInit(U)),x=((O,fe,{d:ce,d2:Ee,a:Te})=>(Te=lr(O,"getBoundingClientRect"))?()=>Te()[ce]:()=>(fe?jm(Ee):O["client"+Ee])||0)(oe,ge,se),$=((O,fe)=>!fe||~gi.indexOf(O)?Km(O):()=>qo)(oe,ge),te=0,de=0,_e=0,Fe=_r(oe,se);var We;if(U._startClamp=U._endClamp=!1,U._dir=se,nt*=45,U.scroller=oe,U.scroll=pe?pe.time.bind(pe):Fe,a=Fe(),U.vars=e,t=t||e.animation,"refreshPriority"in e&&(Vm=1,e.refreshPriority===-9999&&(Ca=U)),Ne.tweenScroll=Ne.tweenScroll||{top:xf(oe,Ot),left:xf(oe,_n)},U.tweenTo=n=Ne.tweenScroll[se.p],U.scrubDuration=O=>{Q=va(O)&&O,Q?L?L.duration(O):L=we.to(t,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:()=>P&&P(U)}):(L&&L.progress(1).kill(),L=0)},t&&(t.vars.lazy=!1,t._initted&&!U.isReverted||t.vars.immediateRender!==!1&&e.immediateRender!==!1&&t.duration()&&t.render(0,!0,!0),U.animation=t.pause(),t.scrollTrigger=U,U.scrubDuration(G),W=0,De||(De=t.vars.id)),J&&(Fr(J)&&!J.push||(J={snapTo:J}),"scrollBehavior"in vt.style&&we.set(ge?[vt,ii]:oe,{scrollBehavior:"auto"}),rt.forEach(O=>vn(O)&&O.target===(ge?Et.scrollingElement||ii:oe)&&(O.smooth=!1)),s=vn(J.snapTo)?J.snapTo:J.snapTo==="labels"?(O=>fe=>we.utils.snap(ff(O),fe))(t):J.snapTo==="labelsDirectional"?(We=t,(O,fe)=>ou(ff(We))(O,fe.direction)):J.directional!==!1?(O,fe)=>ou(J.snapTo)(O,tn()-de<500?0:fe.direction):we.utils.snap(J.snapTo),H=J.duration||{min:.1,max:2},H=Fr(H)?wa(H.min,H.max):wa(H,H),ee=we.delayedCall(J.delay||Q/2||.1,()=>{let O=Fe(),fe=tn()-de<500,ce=n.tween;if(!(fe||Math.abs(U.getVelocity())<10)||ce||bl||te===O)U.isActive&&te!==O&&ee.restart(!0);else{let Ee,Te,Re=(O-l)/p,at=t&&!ae?t.totalProgress():Re,gt=fe?0:(at-Z)/(tn()-ma)*1e3||0,Ke=we.utils.clamp(-Re,1-Re,Ss(gt/2)*gt/.185),st=Re+(J.inertia===!1?0:Ke),{onStart:At,onInterrupt:xt,onComplete:Vn}=J;if(Ee=s(st,U),va(Ee)||(Ee=st),Te=Math.round(l+Ee*p),O<=c&&O>=l&&Te!==O){if(ce&&!ce._initted&&ce.data<=Ss(Te-O))return;J.inertia===!1&&(Ke=Ee-Re),n(Te,{duration:H(Ss(.185*Math.max(Ss(st-at),Ss(Ee-at))/gt/.05||0)),ease:J.ease||"power3",data:Ss(Te-O),onInterrupt:()=>ee.restart(!0)&&xt&&xt(U),onComplete(){U.update(),te=Fe(),t&&(L?L.resetTo("totalProgress",Ee,t._tTime/t._tDur):t.progress(Ee)),W=Z=t&&!ae?t.totalProgress():U.progress,T&&T(U),Vn&&Vn(U)}},O,Ke*p,Te-O-Ke*p),At&&At(U,n.tween)}}}).pause()),De&&(lu[De]=U),Ce=U.trigger=Mn(Ce||ue!==!0&&ue),ie=Ce&&Ce._gsap&&Ce._gsap.stRevert,ie&&(ie=ie(U)),ue=ue===!0?Ce:Mn(ue),In(he)&&(he={targets:Ce,className:he}),ue&&(Ze===!1||Ze==="margin"||(Ze=!(!Ze&&ue.parentNode&&ue.parentNode.style&&Yn(ue.parentNode).display==="flex")&&au),U.pin=ue,r=we.core.getCache(ue),r.spacer?f=r.pinState:(ne&&(ne=Mn(ne),ne&&!ne.nodeType&&(ne=ne.current||ne.nativeElement),r.spacerIsNative=!!ne,ne&&(r.spacerState=Fo(ne))),r.spacer=E=ne||Et.createElement("div"),E.classList.add("pin-spacer"),De&&E.classList.add("pin-spacer-"+De),r.pinState=f=Fo(ue)),e.force3D!==!1&&we.set(ue,{force3D:!0}),U.spacer=E=r.spacer,V=Yn(ue),S=V[Ze+se.os2],D=we.getProperty(ue),b=we.quickSetter(ue,se.a,Nt),Dc(ue,E,V),v=Fo(ue)),Je){_=Fr(Je)?df(Je,pf):pf,d=Lo("scroller-start",De,oe,se,_,0),m=Lo("scroller-end",De,oe,se,_,0,d),A=d["offset"+se.op.d2];let O=Mn(lr(oe,"content")||oe);u=this.markerStart=Lo("start",De,O,se,_,A,0,pe),h=this.markerEnd=Lo("end",De,O,se,_,A,0,pe),pe&&(X=we.quickSetter([u,h],se.a,Nt)),Se||gi.length&&lr(oe,"fixedMarkers")===!0||((fe=>{let ce=Yn(fe).position;fe.style.position=ce==="absolute"||ce==="fixed"?ce:"relative"})(ge?vt:oe),we.set([d,m],{force3D:!0}),I=we.quickSetter(d,se.a,Nt),N=we.quickSetter(m,se.a,Nt))}if(pe){let O=pe.vars.onUpdate,fe=pe.vars.onUpdateParams;pe.eventCallback("onUpdate",()=>{U.update(0,0,1),O&&O.apply(pe,fe||[])})}if(U.previous=()=>it[it.indexOf(U)-1],U.next=()=>it[it.indexOf(U)+1],U.revert=(O,fe)=>{if(!fe)return U.kill(!0);let ce=O!==!1||!U.enabled,Ee=en;ce!==U.isReverted&&(ce&&(ye=Math.max(Fe(),U.scroll.rec||0),_e=U.progress,Ue=t&&t.progress()),u&&[u,h,d,m].forEach(Te=>Te.style.display=ce?"none":"block"),ce&&(en=U,U.update(ce)),!ue||re&&U.isActive||(ce?((Te,Re,at)=>{As(at);let gt=Te._gsap;if(gt.spacerIsNative)As(gt.spacerState);else if(Te._gsap.swappedIn){let Ke=Re.parentNode;Ke&&(Ke.insertBefore(Te,Re),Ke.removeChild(Re))}Te._gsap.swappedIn=!1})(ue,E,f):Dc(ue,E,Yn(ue),F)),ce||U.update(ce),en=Ee,U.isReverted=ce)},U.refresh=(O,fe,ce,Ee)=>{if((en||!U.enabled)&&!fe)return;if(ue&&O&&Kn)return void Vt(ke,"scrollEnd",Gu);!pn&&Ae&&Ae(U),en=U,n.tween&&!ce&&(n.tween.kill(),n.tween=0),L&&L.pause(),k&&t&&t.revert({kill:!1}).invalidate(),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;let Te,Re,at,gt,Ke,st,At,xt,Vn,ct,wt,Yt,bi,w=x(),B=$(),q=pe?pe.duration():_i(oe,se),K=p<=.01,Y=0,ve=Ee||0,be=Fr(ce)?ce.end:e.end,Oe=e.endTrigger||Ce,Pe=Fr(ce)?ce.start:e.start||(e.start!==0&&Ce?ue?"0 0":"0 100%":0),Be=U.pinnedContainer=e.pinnedContainer&&Mn(e.pinnedContainer,U),ze=Ce&&Math.max(0,it.indexOf(U))||0,Ie=ze;for(Je&&Fr(ce)&&(Yt=we.getProperty(d,se.p),bi=we.getProperty(m,se.p));Ie--;)st=it[Ie],st.end||st.refresh(0,1)||(en=U),At=st.pin,!At||At!==Ce&&At!==ue&&At!==Be||st.isReverted||(ct||(ct=[]),ct.unshift(st),st.revert(!0,!0)),st!==it[Ie]&&(ze--,Ie--);for(vn(Pe)&&(Pe=Pe(U)),Pe=lf(Pe,"start",U),l=_f(Pe,Ce,w,se,Fe(),u,d,U,B,Qe,Se,q,pe,U._startClamp&&"_startClamp")||(ue?-.001:0),vn(be)&&(be=be(U)),In(be)&&!be.indexOf("+=")&&(~be.indexOf(" ")?be=(In(Pe)?Pe.split(" ")[0]:"")+be:(Y=Wo(be.substr(2),w),be=In(Pe)?Pe:(pe?we.utils.mapRange(0,pe.duration(),pe.scrollTrigger.start,pe.scrollTrigger.end,l):l)+Y,Oe=Ce)),be=lf(be,"end",U),c=Math.max(l,_f(be||(Oe?"100% 0":q),Oe,w,se,Fe()+Y,h,m,U,B,Qe,Se,q,pe,U._endClamp&&"_endClamp"))||-.001,Y=0,Ie=ze;Ie--;)st=it[Ie],At=st.pin,At&&st.start-st._pinPush<=l&&!pe&&st.end>0&&(Te=st.end-(U._startClamp?Math.max(0,st.start):st.start),(At===Ce&&st.start-st._pinPush<l||At===Be)&&isNaN(Pe)&&(Y+=Te*(1-st.progress)),At===ue&&(ve+=Te));if(l+=Y,c+=Y,U._startClamp&&(U._startClamp+=Y),U._endClamp&&!pn&&(U._endClamp=c||-.001,c=Math.min(c,_i(oe,se))),p=c-l||(l-=.01)&&.001,K&&(_e=we.utils.clamp(0,1,we.utils.normalize(l,c,ye))),U._pinPush=ve,u&&Y&&(Te={},Te[se.a]="+="+Y,Be&&(Te[se.p]="-="+Fe()),we.set([u,h],Te)),!ue||su&&U.end>=_i(oe,se)){if(Ce&&Fe()&&!pe)for(Re=Ce.parentNode;Re&&Re!==vt;)Re._pinOffset&&(l-=Re._pinOffset,c-=Re._pinOffset),Re=Re.parentNode}else Te=Yn(ue),gt=se===Ot,at=Fe(),C=parseFloat(D(se.a))+ve,!q&&c>1&&(wt=(ge?Et.scrollingElement||ii:oe).style,wt={style:wt,value:wt["overflow"+se.a.toUpperCase()]},ge&&Yn(vt)["overflow"+se.a.toUpperCase()]!=="scroll"&&(wt.style["overflow"+se.a.toUpperCase()]="scroll")),Dc(ue,E,Te),v=Fo(ue),Re=Ui(ue,!0),xt=Se&&_r(oe,gt?_n:Ot)(),Ze?(F=[Ze+se.os2,p+ve+Nt],F.t=E,Ie=Ze===au?pl(ue,se)+p+ve:0,Ie&&(F.push(se.d,Ie+Nt),E.style.flexBasis!=="auto"&&(E.style.flexBasis=Ie+Nt)),As(F),Be&&it.forEach(ht=>{ht.pin===Be&&ht.vars.pinSpacing!==!1&&(ht._subPinOffset=!0)}),Se&&Fe(ye)):(Ie=pl(ue,se),Ie&&E.style.flexBasis!=="auto"&&(E.style.flexBasis=Ie+Nt)),Se&&(Ke={top:Re.top+(gt?at-l:xt)+Nt,left:Re.left+(gt?xt:at-l)+Nt,boxSizing:"border-box",position:"fixed"},Ke.width=Ke.maxWidth=Math.ceil(Re.width)+Nt,Ke.height=Ke.maxHeight=Math.ceil(Re.height)+Nt,Ke.margin=Ke.marginTop=Ke.marginRight=Ke.marginBottom=Ke.marginLeft="0",Ke.padding=Te.padding,Ke.paddingTop=Te.paddingTop,Ke.paddingRight=Te.paddingRight,Ke.paddingBottom=Te.paddingBottom,Ke.paddingLeft=Te.paddingLeft,y=((ht,Kt,Ft)=>{let yn,ft=[],je=ht.length,Xi=Ft?8:0;for(;Xi<je;Xi+=2)yn=ht[Xi],ft.push(yn,yn in Kt?Kt[yn]:ht[Xi+1]);return ft.t=ht.t,ft})(f,Ke,re),pn&&Fe(0)),t?(Vn=t._initted,Mc(1),t.render(t.duration(),!0,!0),M=D(se.a)-C+p+ve,R=Math.abs(p-M)>1,Se&&R&&y.splice(y.length-2,2),t.render(0,!0,!0),Vn||t.invalidate(!0),t.parent||t.totalTime(t.totalTime()),Mc(0)):M=p,wt&&(wt.value?wt.style["overflow"+se.a.toUpperCase()]=wt.value:wt.style.removeProperty("overflow-"+se.a));ct&&ct.forEach(ht=>ht.revert(!1,!0)),U.start=l,U.end=c,a=o=pn?ye:Fe(),pe||pn||(a<ye&&Fe(ye),U.scroll.rec=0),U.revert(!1,!0),de=tn(),ee&&(te=-1,ee.restart(!0)),en=0,t&&ae&&(t._initted||Ue)&&t.progress()!==Ue&&t.progress(Ue||0,!0).render(t.time(),!0,!0),(K||_e!==U.progress||pe||k)&&(t&&!ae&&t.totalProgress(pe&&l<-.001&&!_e?we.utils.normalize(l,c,0):_e,!0),U.progress=K||(a-l)/p===_e?0:_e),ue&&Ze&&(E._pinOffset=Math.round(U.progress*M)),L&&L.invalidate(),isNaN(Yt)||(Yt-=we.getProperty(d,se.p),bi-=we.getProperty(m,se.p),Io(d,se,Yt),Io(u,se,Yt-(Ee||0)),Io(m,se,bi),Io(h,se,bi-(Ee||0))),K&&!pn&&U.update(),!Ge||pn||g||(g=!0,Ge(U),g=!1)},U.getVelocity=()=>(Fe()-o)/(tn()-ma)*1e3||0,U.endAnimation=()=>{ca(U.callbackAnimation),t&&(L?L.progress(1):t.paused()?ae||ca(t,U.direction<0,1):ca(t,t.reversed()))},U.labelToScroll=O=>t&&t.labels&&(l||U.refresh()||l)+t.labels[O]/t.duration()*p||0,U.getTrailing=O=>{let fe=it.indexOf(U),ce=U.direction>0?it.slice(0,fe).reverse():it.slice(fe+1);return(In(O)?ce.filter(Ee=>Ee.vars.preventOverlaps===O):ce).filter(Ee=>U.direction>0?Ee.end<=l:Ee.start>=c)},U.update=(O,fe,ce)=>{if(pe&&!ce&&!O)return;let Ee,Te,Re,at,gt,Ke,st,At,xt=pn===!0?ye:U.scroll(),Vn=O?0:(xt-l)/p,ct=Vn<0?0:Vn>1?1:Vn||0,wt=U.progress;if(fe&&(o=a,a=pe?Fe():xt,J&&(Z=W,W=t&&!ae?t.totalProgress():ct)),nt&&ue&&!en&&!Ao&&Kn&&(!ct&&l<xt+(xt-o)/(tn()-ma)*nt?ct=1e-4:ct===1&&c>xt+(xt-o)/(tn()-ma)*nt&&(ct=.9999)),ct!==wt&&U.enabled){if(Ee=U.isActive=!!ct&&ct<1,Te=!!wt&&wt<1,Ke=Ee!==Te,gt=Ke||!!ct!=!!wt,U.direction=ct>wt?1:-1,U.progress=ct,gt&&!en&&(Re=ct&&!wt?0:ct===1?1:wt===1?2:3,ae&&(at=!Ke&&qe[Re+1]!=="none"&&qe[Re+1]||qe[Re],At=t&&(at==="complete"||at==="reset"||at in t))),xe&&(Ke||At)&&(At||G||!t)&&(vn(xe)?xe(U):U.getTrailing(xe).forEach(Yt=>Yt.endAnimation())),ae||(!L||en||Ao?t&&t.totalProgress(ct,!(!en||!de&&!O)):(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",ct,t._tTime/t._tDur):(L.vars.totalProgress=ct,L.invalidate().restart()))),ue)if(O&&Ze&&(E.style[Ze+se.os2]=S),Se){if(gt){if(st=!O&&ct>wt&&c+1>xt&&xt+1>=_i(oe,se),re)if(O||!Ee&&!st)vf(ue,E);else{let Yt=Ui(ue,!0),bi=xt-l;vf(ue,vt,Yt.top+(se===Ot?bi:0)+Nt,Yt.left+(se===Ot?0:bi)+Nt)}As(Ee||st?y:v),R&&ct<1&&Ee||b(C+(ct!==1||st?0:M))}}else b(_a(C+M*ct));J&&!n.tween&&!en&&!Ao&&ee.restart(!0),he&&(Ke||j&&ct&&(ct<1||!Sc))&&Va(he.targets).forEach(Yt=>Yt.classList[Ee||j?"add":"remove"](he.className)),me&&!ae&&!O&&me(U),gt&&!en?(ae&&(At&&(at==="complete"?t.pause().totalProgress(1):at==="reset"?t.restart(!0).pause():at==="restart"?t.restart(!0):t[at]()),me&&me(U)),!Ke&&Sc||(Le&&Ke&&Tc(U,Le),He[Re]&&Tc(U,He[Re]),j&&(ct===1?U.kill(!1,1):He[Re]=0),Ke||(Re=ct===1?1:3,He[Re]&&Tc(U,He[Re]))),le&&!Ee&&Math.abs(U.getVelocity())>(va(le)?le:2500)&&(ca(U.callbackAnimation),L?L.progress(1):ca(t,at==="reverse"?1:!ct,1))):ae&&me&&!en&&me(U)}if(N){let Yt=pe?xt/pe.duration()*(pe._caScrollDist||0):xt;I(Yt+(d._isFlipped?1:0)),N(Yt)}X&&X(-xt/pe.duration()*(pe._caScrollDist||0))},U.enable=(O,fe)=>{U.enabled||(U.enabled=!0,Vt(oe,"resize",xa),ge||Vt(oe,"scroll",Es),Ae&&Vt(ke,"refreshInit",Ae),O!==!1&&(U.progress=_e=0,a=o=te=Fe()),fe!==!1&&U.refresh())},U.getTween=O=>O&&n?n.tween:L,U.setPositions=(O,fe,ce,Ee)=>{if(pe){let Te=pe.scrollTrigger,Re=pe.duration(),at=Te.end-Te.start;O=Te.start+at*O/Re,fe=Te.start+at*fe/Re}U.refresh(!1,!1,{start:cf(O,ce&&!!U._startClamp),end:cf(fe,ce&&!!U._endClamp)},Ee),U.update()},U.adjustPinSpacing=O=>{if(F&&O){let fe=F.indexOf(se.d)+1;F[fe]=parseFloat(F[fe])+O+Nt,F[1]=parseFloat(F[1])+O+Nt,As(F)}},U.disable=(O,fe)=>{if(U.enabled&&(O!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,fe||L&&L.pause(),ye=0,r&&(r.uncache=1),Ae&&Ht(ke,"refreshInit",Ae),ee&&(ee.pause(),n.tween&&n.tween.kill()&&(n.tween=0)),!ge)){let ce=it.length;for(;ce--;)if(it[ce].scroller===oe&&it[ce]!==U)return;Ht(oe,"resize",xa),ge||Ht(oe,"scroll",Es)}},U.kill=(O,fe)=>{U.disable(O,fe),L&&!fe&&L.kill(),De&&delete lu[De];let ce=it.indexOf(U);ce>=0&&it.splice(ce,1),ce===fn&&Yo>0&&fn--,ce=0,it.forEach(Ee=>Ee.scroller===U.scroller&&(ce=1)),ce||pn||(U.scroll.rec=0),t&&(t.scrollTrigger=null,O&&t.revert({kill:!1}),fe||t.kill()),u&&[u,h,d,m].forEach(Ee=>Ee.parentNode&&Ee.parentNode.removeChild(Ee)),Ca===U&&(Ca=0),ue&&(r&&(r.uncache=1),ce=0,it.forEach(Ee=>Ee.pin===ue&&ce++),ce||(r.spacer=0)),e.onKill&&e.onKill(U)},it.push(U),U.enable(!1,!1),ie&&ie(U),t&&t.add&&!p){let O=U.update;U.update=()=>{U.update=O,l||c||U.refresh()},we.delayedCall(.01,U.update),p=.01,l=c=0}else U.refresh();ue&&(()=>{if(of!==Yr){let O=of=Yr;requestAnimationFrame(()=>O===Yr&&Br(!0))}})()}static register(e){return bs||(we=e||qm(),$m()&&window.document&&ke.enable(),bs=ga),bs}static defaults(e){if(e)for(let t in e)Po[t]=e[t];return Po}static disable(e,t){ga=0,it.forEach(n=>n[t?"kill":"disable"](e)),Ht(ot,"wheel",Es),Ht(Et,"scroll",Es),clearInterval(Do),Ht(Et,"touchcancel",ci),Ht(vt,"touchstart",ci),Co(Ht,Et,"pointerdown,touchstart,mousedown",uf),Co(Ht,Et,"pointerup,touchend,mouseup",hf),dl.kill(),wo(Ht);for(let n=0;n<rt.length;n+=3)Ro(Ht,rt[n],rt[n+1]),Ro(Ht,rt[n],rt[n+2])}static enable(){if(ot=window,Et=document,ii=Et.documentElement,vt=Et.body,we&&(Va=we.utils.toArray,wa=we.utils.clamp,ru=we.core.context||ci,Mc=we.core.suppressOverwrites||ci,Hu=ot.history.scrollRestoration||"auto",cu=ot.pageYOffset,we.core.globals("ScrollTrigger",ke),vt)){ga=1,zs=document.createElement("div"),zs.style.height="100vh",zs.style.position="absolute",Qm(),Ym(),Rt.register(we),ke.isTouch=Rt.isTouch,er=Rt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),iu=Rt.isTouch===1,Vt(ot,"wheel",Es),Hm=[ot,Et,ii,vt],we.matchMedia?(ke.matchMedia=a=>{let o,l=we.matchMedia();for(o in a)l.add(o,a[o]);return l},we.addEventListener("matchMediaInit",()=>Wu()),we.addEventListener("matchMediaRevert",()=>Zm()),we.addEventListener("matchMedia",()=>{Br(0,1),Jr("matchMedia")}),we.matchMedia("(orientation: portrait)",()=>(bc(),bc))):console.warn("Requires GSAP 3.11.0 or later"),bc(),Vt(Et,"scroll",Es);let e,t,n=vt.style,r=n.borderTopStyle,s=we.core.Animation.prototype;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",e=Ui(vt),Ot.m=Math.round(e.top+Ot.sc())||0,_n.m=Math.round(e.left+_n.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Do=setInterval(mf,250),we.delayedCall(.5,()=>Ao=0),Vt(Et,"touchcancel",ci),Vt(vt,"touchstart",ci),Co(Vt,Et,"pointerdown,touchstart,mousedown",uf),Co(Vt,Et,"pointerup,touchend,mouseup",hf),nu=we.utils.checkPrefix("transform"),$o.push(nu),bs=tn(),dl=we.delayedCall(.2,Br).pause(),Ds=[Et,"visibilitychange",()=>{let a=ot.innerWidth,o=ot.innerHeight;Et.hidden?(sf=a,af=o):sf===a&&af===o||xa()},Et,"DOMContentLoaded",Br,ot,"load",Br,ot,"resize",xa],wo(Vt),it.forEach(a=>a.enable(0,1)),t=0;t<rt.length;t+=3)Ro(Ht,rt[t],rt[t+1]),Ro(Ht,rt[t],rt[t+2])}}static config(e){"limitCallbacks"in e&&(Sc=!!e.limitCallbacks);let t=e.syncInterval;t&&clearInterval(Do)||(Do=t)&&setInterval(mf,t),"ignoreMobileResize"in e&&(iu=ke.isTouch===1&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(wo(Ht)||wo(Vt,e.autoRefreshEvents||"none"),Gm=(e.autoRefreshEvents+"").indexOf("resize")===-1)}static scrollerProxy(e,t){let n=Mn(e),r=rt.indexOf(n),s=Zr(n);~r&&rt.splice(r,s?6:2),t&&(s?gi.unshift(ot,t,vt,t,ii,t):gi.unshift(n,t))}static clearMatchMedia(e){it.forEach(t=>t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0))}static isInViewport(e,t,n){let r=(In(e)?Mn(e):e).getBoundingClientRect(),s=r[n?"width":"height"]*t||0;return n?r.right-s>0&&r.left+s<ot.innerWidth:r.bottom-s>0&&r.top+s<ot.innerHeight}static positionInViewport(e,t,n){In(e)&&(e=Mn(e));let r=e.getBoundingClientRect(),s=r[n?"width":"height"],a=t==null?s/2:t in ml?ml[t]*s:~t.indexOf("%")?parseFloat(t)*s/100:parseFloat(t)||0;return n?(r.left+a)/ot.innerWidth:(r.top+a)/ot.innerHeight}static killAll(e){if(it.slice(0).forEach(t=>t.vars.id!=="ScrollSmoother"&&t.kill()),e!==!0){let t=Xr.killAll||[];Xr={},t.forEach(n=>n())}}}ke.version="3.12.5",ke.saveStyles=i=>i?Va(i).forEach(e=>{if(e&&e.style){let t=Fn.indexOf(e);t>=0&&Fn.splice(t,5),Fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),ru())}}):Fn,ke.revert=(i,e)=>Wu(!i,e),ke.create=(i,e)=>new ke(i,e),ke.refresh=i=>i?xa():(bs||ke.register())&&Br(!0),ke.update=i=>++rt.cache&&Hi(i===!0?2:0),ke.clearScrollMemory=Jm,ke.maxScroll=(i,e)=>_i(i,e?_n:Ot),ke.getScrollFunc=(i,e)=>_r(Mn(i),e?_n:Ot),ke.getById=i=>lu[i],ke.getAll=()=>it.filter(i=>i.vars.id!=="ScrollSmoother"),ke.isScrolling=()=>!!Kn,ke.snapDirectional=ou,ke.addEventListener=(i,e)=>{let t=Xr[i]||(Xr[i]=[]);~t.indexOf(e)||t.push(e)},ke.removeEventListener=(i,e)=>{let t=Xr[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},ke.batch=(i,e)=>{let t,n=[],r={},s=e.interval||.016,a=e.batchMax||1e9,o=(l,c)=>{let u=[],h=[],d=we.delayedCall(s,()=>{c(u,h),u=[],h=[]}).pause();return m=>{u.length||d.restart(!0),u.push(m.trigger),h.push(m),a<=u.length&&d.progress(1)}};for(t in e)r[t]=t.substr(0,2)==="on"&&vn(e[t])&&t!=="onRefreshInit"?o(0,e[t]):e[t];return vn(a)&&(a=a(),Vt(ke,"refresh",()=>a=e.batchMax())),Va(i).forEach(l=>{let c={};for(t in r)c[t]=r[t];c.trigger=l,n.push(ke.create(c))}),n};let yf,Mf=(i,e,t,n)=>(e>n?i(n):e<0&&i(0),t>n?(n-e)/(t-e):t<0?e/(e-t):1),jo=(i,e)=>{e===!0?i.style.removeProperty("touch-action"):i.style.touchAction=e===!0?"auto":e?"pan-"+e+(Rt.isTouch?" pinch-zoom":""):"none",i===ii&&jo(vt,e)},Uo={auto:1,scroll:1},iE=({event:i,target:e,axis:t})=>{let n,r=(i.changedTouches?i.changedTouches[0]:i).target,s=r._gsap||we.core.getCache(r),a=tn();if(!s._isScrollT||a-s._isScrollT>2e3){for(;r&&r!==vt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!Uo[(n=Yn(r)).overflowY]&&!Uo[n.overflowX]);)r=r.parentNode;s._isScroll=r&&r!==e&&!Zr(r)&&(Uo[(n=Yn(r)).overflowY]||Uo[n.overflowX]),s._isScrollT=a}(s._isScroll||t==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},tg=(i,e,t,n)=>Rt.create({target:i,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&iE,onPress:n,onDrag:n,onScroll:n,onEnable:()=>t&&Vt(Et,Rt.eventTypes[0],Sf,!1,!0),onDisable:()=>Ht(Et,Rt.eventTypes[0],Sf,!0)}),rE=/(input|label|select|textarea)/i,Sf=i=>{let e=rE.test(i.target.tagName);(e||yf)&&(i._gsapAllow=!0,yf=e)},sE=i=>{Fr(i)||(i={}),i.preventDefault=i.isNormalizer=i.allowClicks=!0,i.type||(i.type="wheel,touch"),i.debounce=!!i.debounce,i.id=i.id||"normalizer";let e,t,n,r,s,a,o,l,{normalizeScrollX:c,momentum:u,allowNestedScroll:h,onRelease:d}=i,m=Mn(i.target)||ii,_=we.core.globals().ScrollSmoother,g=_&&_.get(),p=er&&(i.content&&Mn(i.content)||g&&i.content!==!1&&!g.smooth()&&g.content()),f=_r(m,Ot),y=_r(m,_n),v=1,E=(Rt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,A=0,D=vn(u)?()=>u(e):()=>u||2.8,b=tg(m,i.type,!0,h),C=()=>r=!1,M=ci,S=ci,F=()=>{t=_i(m,Ot),S=wa(er?1:0,t),c&&(M=wa(0,_i(m,_n))),n=Yr},I=()=>{p._gsap.y=_a(parseFloat(p._gsap.y)+f.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},R=()=>{F(),s.isActive()&&s.vars.scrollY>t&&(f()>t?s.progress(1)&&f(t):s.resetTo("scrollY",t))};return p&&we.set(p,{y:"+=0"}),i.ignoreCheck=N=>er&&N.type==="touchmove"&&(()=>{if(r){requestAnimationFrame(C);let V=_a(e.deltaY/2),W=S(f.v-V);if(p&&W!==f.v+f.offset){f.offset=W-f.v;let Z=_a((parseFloat(p&&p._gsap.y)||0)-f.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+Z+", 0, 1)",p._gsap.y=Z+"px",f.cacheID=rt.cache,Hi()}return!0}f.offset&&I(),r=!0})()||v>1.05&&N.type!=="touchstart"||e.isGesturing||N.touches&&N.touches.length>1,i.onPress=()=>{r=!1;let N=v;v=_a((ot.visualViewport&&ot.visualViewport.scale||1)/E),s.pause(),N!==v&&jo(m,v>1.01||!c&&"x"),a=y(),o=f(),F(),n=Yr},i.onRelease=i.onGestureStart=(N,V)=>{if(f.offset&&I(),V){rt.cache++;let W,Z,L=D();c&&(W=y(),Z=W+.05*L*-N.velocityX/.227,L*=Mf(y,W,Z,_i(m,_n)),s.vars.scrollX=M(Z)),W=f(),Z=W+.05*L*-N.velocityY/.227,L*=Mf(f,W,Z,_i(m,Ot)),s.vars.scrollY=S(Z),s.invalidate().duration(L).play(.01),(er&&s.vars.scrollY>=t||W>=t-1)&&we.to({},{onUpdate:R,duration:L})}else l.restart(!0);d&&d(N)},i.onWheel=()=>{s._ts&&s.pause(),tn()-A>1e3&&(n=0,A=tn())},i.onChange=(N,V,W,Z,L)=>{if(Yr!==n&&F(),V&&c&&y(M(Z[2]===V?a+(N.startX-N.x):y()+V-Z[1])),W){f.offset&&I();let Q=L[2]===W,H=Q?o+N.startY-N.y:f()+W-L[1],ee=S(H);Q&&H!==ee&&(o+=ee-H),f(ee)}(W||V)&&Hi()},i.onEnable=()=>{jo(m,!c&&"x"),ke.addEventListener("refresh",R),Vt(ot,"resize",R),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=y.smooth=!1),b.enable()},i.onDisable=()=>{jo(m,!0),Ht(ot,"resize",R),ke.removeEventListener("refresh",R),b.kill()},i.lockAxis=i.lockAxis!==!1,e=new Rt(i),e.iOS=er,er&&!f()&&f(1),er&&we.ticker.add(ci),l=e._dc,s=we.to(e,{ease:"power4",paused:!0,inherit:!1,scrollX:c?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:eg(f,f(),()=>s.pause())},onUpdate:Hi,onComplete:l.vars.onComplete}),e};ke.sort=i=>it.sort(i||((e,t)=>-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0)))),ke.observe=i=>new Rt(i),ke.normalizeScroll=i=>{if(i===void 0)return dn;if(i===!0&&dn)return dn.enable();if(i===!1)return dn&&dn.kill(),void(dn=i);let e=i instanceof Rt?i:sE(i);return dn&&dn.target===e.target&&dn.kill(),Zr(e.target)&&(dn=e),e},ke.core={_getVelocityProp:tu,_inputObserver:tg,_scrollers:rt,_proxies:gi,bridge:{ss:()=>{Kn||Jr("scrollStart"),Kn=tn()},ref:()=>en}},qm()&&we.registerPlugin(ke);St.registerPlugin(QS);St.registerPlugin(VS);St.registerPlugin(Dm);St.registerPlugin(ke);St.to(".rectangle",{duration:1,top:"0%",onComplete:aE});function aE(){St.to(".rectangle",{duration:1,width:"100vw",left:"0",onComplete:oE})}function oE(){St.to(".rectangle",{duration:1,opacity:0}),St.to(".loading",{duration:1,opacity:0,onComplete:function(){document.querySelectorAll(".rectangle, .loading").forEach(function(i){i.style.display="none"}),ng.forEach(i=>{i.play()}),Dl.forEach(i=>{i.play()}),Yu.forEach(i=>{i.play()})}})}const lE=document.querySelectorAll(".hcServiceItem"),ng=[];let Ef=2;lE.forEach(i=>{const e=i.querySelectorAll(".HCServiceIcon path"),t=St.fromTo(e,{drawSVG:"0%",stroke:""},{duration:2,drawSVG:"100%",stroke:"",delay:Ef,onReverseComplete:function(){this.play()}});ng.push(t),i.addEventListener("mouseover",function(){t.reverse()}),i.addEventListener("mouseout",function(){t.play()}),Ef+=.4});let Xu=document.querySelectorAll(".revealA"),Dl=[];Xu.forEach(i=>{let e=Number(i.getAttribute("data-delay")),t=St.from(i,{duration:3,yPercent:200,ease:"power4",delay:e,paused:!1});Dl.push(t)});let cE=document.querySelectorAll(".revealA2"),Yu=[];cE.forEach(i=>{Number(i.getAttribute("data-delay"));let e=St.from(i,{duration:4,yPercent:200,ease:"power4"});Yu.push(e)});let uE=document.querySelector(".WWA-container"),hE=uE.querySelectorAll(".revealA");hE.forEach(i=>{let e=Dl[Array.from(Xu).indexOf(i)];e&&ke.create({trigger:i,start:"top bottom",onEnter:()=>e.play(),onLeaveBack:()=>e.reverse().duration(2)})});var ig=St.timeline({scrollTrigger:{trigger:".WWA-container",start:"top center",end:"bottom center",delay:1,toggleActions:"play none none none",onLeaveBack:()=>ig.reverse().duration(3)}});ig.fromTo(".inner-div",{display:"none"},{display:"flex"}).set(".WWA-container",{pointerEvents:"none"}).fromTo(".WWA-container",{width:0},{duration:1.5,width:"100%"}).fromTo(".inner-div",{height:"1%"},{duration:1.5,height:"100%",onComplete:function(){St.set(".WWA-container",{pointerEvents:"auto"})}}).add(Yu);var rg=St.timeline({scrollTrigger:{trigger:".benefitsContent",start:"top center",end:"bottom center",toggleActions:"play none none none",onLeaveBack:()=>rg.reverse().duration(3)}});rg.fromTo(".benefitBox",{width:"1vw"},{duration:1.5,width:"60vw"}).fromTo(".benefitBox",{height:"1vh"},{duration:1.5,height:"30vh"});let dE=document.querySelectorAll(".inner-div");dE.forEach(i=>{i.addEventListener("mouseover",function(){this.querySelector(".WMA-logo").querySelectorAll(".revealA").forEach(t=>{let n=Array.from(Xu).indexOf(t);Dl[n].restart()})})});const fE=[...document.querySelectorAll(".hcServiceItem")];fE.forEach(i=>{const t=new Dm(i,{type:"words,chars"}).chars;i.addEventListener("mouseover",()=>{St.timeline().fromTo(t,{opacity:1,filter:"blur(5px)"},{duration:.25,ease:"power1.inOut",opacity:1,filter:"blur(0px)",stagger:{each:.09,from:"random"}})})});const Tf=document.querySelectorAll(".scrollElement");let Cr=0;window.addEventListener("wheel",function(i){i.deltaY<0&&Cr>0?Cr--:i.deltaY>0&&Cr<Tf.length-1&&Cr++,St.to(window,{duration:5,scrollTo:Tf[Cr],ease:"back.out(1.7)"}),console.log(Cr),Cr===2?document.querySelectorAll(".inner-div")[1].classList.add("default-hover"):document.querySelectorAll(".inner-div")[1].classList.remove("default-hover")});document.querySelectorAll(".benefitIcon").forEach(function(i){var e=i.querySelector("svg"),t=e.cloneNode(!0);t.style.position="absolute",t.style.left="8px",t.style.top="8px",t.style.opacity="15%",i.appendChild(t)});
