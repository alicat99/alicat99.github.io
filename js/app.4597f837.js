(function(){"use strict";var e={5756:function(e,t,n){var a=n(5130),o=n(6768),r=(n(4114),n.p+"img/icon.0d975c91.png"),u=n(144),i=n(3801),s=(n(2242),n(1387));const l=e=>((0,o.Qi)("data-v-09e983f8"),e=e(),(0,o.jt)(),e),c={class:"header"},v={href:"/",class:"name font-title title-box"},d=l((()=>(0,o.Lk)("img",{src:r,width:"40px"},null,-1))),f=l((()=>(0,o.Lk)("div",{class:"placeholder"},null,-1)));var p={__name:"HeaderView",setup(e){const t=(0,s.rd)();function n(){t.push({name:"Auth",params:{type:"login"}})}const a=i.A.auth(),r=(0,u.KR)(null),l=(0,u.KR)(!1);return a.onAuthStateChanged((e=>{l.value=!0,r.value=e})),(e,t)=>{const a=(0,o.g2)("spen");return(0,o.uX)(),(0,o.CE)("header",null,[(0,o.Lk)("div",c,[(0,o.Lk)("a",v,[d,(0,o.eW)(" SOONGSIL"),(0,o.bF)(a,{class:"highlight"},{default:(0,o.k6)((()=>[(0,o.eW)(".US")])),_:1})]),l.value&&null==r.value?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:n,class:"font-title"}," 로그인 ")):(0,o.Q3)("",!0)]),f])}}},m=n(1241);const h=(0,m.A)(p,[["__scopeId","data-v-09e983f8"]]);var g=h;const y={id:"app",class:"font-main"};var k={__name:"App",setup(e){return(e,t)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",y,[(0,o.bF)(g),((0,o.uX)(),(0,o.Wv)(n,{key:e.$route.fullPath}))])}}};const b=k;var w=b,C=n(4232),E=n(4373);async function _(){try{const e=await E.A.get("https://firebasestorage.googleapis.com/v0/b/soongsil-af5dc.appspot.com/o/configs%2FtestInfo.json?alt=media"),t=e.data;return sessionStorage.setItem("fetchedData",JSON.stringify(t)),t}catch(e){console.error("Error fetching data:",e)}}async function A(){const e=sessionStorage.getItem("fetchedData");return e?JSON.parse(e):await _()}function X(e,t){const n=t.split(" "),a=[];for(const o in e){const t=n.every((e=>o.includes(e)));if(t){const t=e[o];let n=!1,r=!1;for(const e in t)e.includes("문제")?n=!0:e.includes("정답")&&(r=!0);a.push({name:o,data:e[o],problem:n,answer:r})}}return a}async function L(e){const t=await A(),n=X(t,e);return n}async function I(e){const t=await A();if(!(e in t))return{name:"존재하지 않는 파일입니다",files:[]};const n=t[e],a=[];for(const o in n)a.push({name:o,url:`https://firebasestorage.googleapis.com/v0/b/soongsil-af5dc.appspot.com/o/files%2F${n[o]}?alt=media`});return{name:e,files:a}}const O=e=>((0,o.Qi)("data-v-26cf2734"),e=e(),(0,o.jt)(),e),Q={class:"container"},S={class:"input-container"},K={class:"input-item"},j={key:0},R={key:0,class:"result-tag result-tag1"},V={key:1,class:"result-tag result-tag2"},q={key:1},W={key:2},F=O((()=>(0,o.Lk)("br",null,null,-1)));var U={__name:"HomeView",setup(e){const t=(0,u.KR)(""),n=(0,u.KR)([]),r=(0,u.KR)(!1),i=(0,s.lq)(),l=(0,s.rd)();async function c(){if(0==t.value.length)return;l.push({name:"Home",query:{query:t.value}});const e=t.value;t.value=e;const a=await L(e);n.value=a,r.value=!0}return(0,o.sV)((async()=>{if(await A(),!i.query||!i.query.query)return;const e=i.query.query;t.value=e;const a=await L(e);n.value=a,r.value=!0})),(e,u)=>{const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",Q,[(0,o.Lk)("div",S,[(0,o.Lk)("div",K,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":u[0]||(u[0]=e=>t.value=e),autocomplete:"off",onKeydown:(0,a.jR)(c,["enter"])},null,544),[[a.Jo,t.value]]),(0,o.Lk)("button",{onClick:c,class:"submit"},"검색")])]),n.value.length?((0,o.uX)(),(0,o.CE)("ul",j,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:"result-container"},[(0,o.bF)(i,{to:{name:"Info",params:{id:e.name}},class:"result-url"},{default:(0,o.k6)((()=>[(0,o.eW)((0,C.v_)(e.name),1)])),_:2},1032,["to"]),e.problem?((0,o.uX)(),(0,o.CE)("span",R,"문제")):(0,o.Q3)("",!0),e.answer?((0,o.uX)(),(0,o.CE)("span",V,"정답")):(0,o.Q3)("",!0)])))),128))])):(0,o.Q3)("",!0),!n.value.length&&r.value?((0,o.uX)(),(0,o.CE)("div",q," 검색 결과가 없습니다... ")):(0,o.Q3)("",!0),r.value?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",W,[(0,o.eW)(" 검색어를 입력해주세요."),F,(0,o.eW)(" 예) 1학기 기말 한국사, 2학년 물리학1 ")]))])}}};const H=(0,m.A)(U,[["__scopeId","data-v-26cf2734"]]);var P=H;n(4603),n(7566),n(8721);const x={class:"container"},T={class:"title font-title"},G={key:0},J=["onClick"];var z={__name:"TestInfoView",setup(e){const t=(0,s.lq)(),n=(0,u.KR)(""),a=(0,u.KR)([]);async function r(e,t){try{const n=await(0,E.A)({url:e,method:"GET",responseType:"blob"}),a=window.URL.createObjectURL(new Blob([n.data])),o=document.createElement("a");o.href=a,o.setAttribute("download",t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(n){console.error("An error occurred while downloading the file:",n)}}return(0,o.sV)((async()=>{if(t.params&&t.params.id){const e=t.params.id,o=await I(e);n.value=o.name,a.value=o.files}})),(e,t)=>((0,o.uX)(),(0,o.CE)("div",x,[(0,o.Lk)("div",T,(0,C.v_)(n.value),1),a.value.length?((0,o.uX)(),(0,o.CE)("ul",G,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t},[(0,o.Lk)("button",{class:"file",onClick:t=>r(e.url,e.name)},(0,C.v_)(e.name),9,J)])))),128))])):(0,o.Q3)("",!0)]))}};const D=(0,m.A)(z,[["__scopeId","data-v-da179442"]]);var M=D;const N={class:"viewport"},B={key:0,class:"container"},Y={class:"title font-title"},$={key:0},Z={key:1},ee={key:0},te={key:1},ne={key:0},ae={key:1},oe={key:1,class:"container"};var re={__name:"AuthView",setup(e){const t=(0,u.KR)(""),n=(0,u.KR)(""),r=(0,u.KR)(""),l=(0,s.lq)(),c=(0,s.rd)();let v=!1;const d=/^[a-zA-Z0-9._%+-]+@soongsil\.net$/;function f(e){return!1!==d.test(e)}async function p(){if(0!=t.value.length)if(f(t.value))if(0!=n.value.length){if("login"==r.value)try{const e=await b(t.value,n.value);e.emailVerified?(alert("성공적으로 로그인되었습니다"),c.push({name:"Home"})):(alert("성공적으로 로그인되었습니다. 이메일 인증을 완료해주세요."),c.push({name:"Auth",params:{type:"verification"}}))}catch(o){alert("로그인에 실패하였습니다. 이메일과 비밀번호를 확인해주세요.")}else if("register"==r.value)try{await k(t.value,n.value),alert("성공적으로 회원가입되었습니다. 이메일 인증을 완료해주세요."),c.push({name:"Auth",params:{type:"verification"}})}catch(o){var e=o.code,a=m(e);alert(a)}}else alert("비밀번호를 입력해주세요");else alert("이메일이 유효하지 않거나 soongsil.net의 이메일이 아닙니다");else alert("이메일을 입력해주세요")}function m(e){switch(e){case"auth/email-already-in-use":return"이미 사용 중인 이메일 주소입니다.";case"auth/invalid-email":return"유효하지 않은 이메일 주소입니다.";case"auth/operation-not-allowed":return"이 작업은 현재 허용되지 않습니다.";case"auth/weak-password":return"비밀번호는 6글자 이상이어야 합니다.";default:return"회원가입 중 오류가 발생했습니다. 다시 시도해주세요."}}function h(){"login"==r.value?c.push({name:"Auth",params:{type:"register"}}):"register"==r.value&&c.push({name:"Auth",params:{type:"login"}})}async function g(){const e=y.currentUser;try{e.sendEmailVerification(),alert("인증 메일이 전송되었습니다. 이메일을 확인해 주세요.")}catch{alert("인증 과정에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")}}const y=i.A.auth();async function k(e,t){const n=await y.createUserWithEmailAndPassword(e,t),a=n.user;return a}async function b(e,t){const n=await y.signInWithEmailAndPassword(e,t),a=n.user;return a}async function w(){await y.signOut()}return y.onAuthStateChanged((async e=>{if("verification"==r.value){if(null==e)return void c.push({name:"Auth",params:{type:"login"}});if(e.emailVerified)return alert("이메일 인증이 완료되었습니다"),void c.push({name:"Home"});t.value=e.email}else if("logout"==r.value){if(v)return;if(null==e)alert("이미 로그아웃 되었습니다");else try{v=!0,await w(),alert("로그아웃되었습니다")}catch{alert("문제가 발생했습니다. 잠시 후 다시 시도해주세요.")}c.push({name:"Home"})}})),(0,o.sV)((async()=>{if(l.params&&l.params.type){const e=l.params.type;if("login"==e)return void(r.value=e);if("register"==e)return void(r.value=e);if("verification"==e)return void(r.value=e);if("logout"==e)return void(r.value=e)}c.push({name:"Home"})})),(e,u)=>((0,o.uX)(),(0,o.CE)("div",N,["login"==r.value||"register"==r.value?((0,o.uX)(),(0,o.CE)("div",B,[(0,o.Lk)("div",Y,["login"==r.value?((0,o.uX)(),(0,o.CE)("div",$,"로그인")):(0,o.Q3)("",!0),"register"==r.value?((0,o.uX)(),(0,o.CE)("div",Z,"회원가입")):(0,o.Q3)("",!0)]),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{placeholder:"이메일을 입력하세요",id:"username","onUpdate:modelValue":u[0]||(u[0]=e=>t.value=e)},null,512),[[a.Jo,t.value]])]),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{placeholder:"비밀번호를 입력하세요",id:"password",type:"password","onUpdate:modelValue":u[1]||(u[1]=e=>n.value=e)},null,512),[[a.Jo,n.value]])]),(0,o.Lk)("button",{class:"submit",onClick:p},["login"==r.value?((0,o.uX)(),(0,o.CE)("div",ee,"로그인")):(0,o.Q3)("",!0),"register"==r.value?((0,o.uX)(),(0,o.CE)("div",te,"회원가입")):(0,o.Q3)("",!0)]),(0,o.Lk)("button",{class:"link",onClick:h},["login"==r.value?((0,o.uX)(),(0,o.CE)("div",ne,"회원가입을 하지 않았나요?")):(0,o.Q3)("",!0),"register"==r.value?((0,o.uX)(),(0,o.CE)("div",ae,"이미 가입했나요?")):(0,o.Q3)("",!0)])])):(0,o.Q3)("",!0),"verification"==r.value?((0,o.uX)(),(0,o.CE)("div",oe,[(0,o.eW)((0,C.v_)(t.value)+" 계정의 이메일 인증을 완료해주세요! ",1),(0,o.Lk)("button",{class:"submit",onClick:g}," 인증 메일 전송하기 ")])):(0,o.Q3)("",!0)]))}};const ue=(0,m.A)(re,[["__scopeId","data-v-35660062"]]);var ie=ue;const se=[{path:"/",name:"Home",component:P},{path:"/info/:id",name:"Info",component:M},{path:"/auth/:type",name:"Auth",component:ie}],le=(0,s.aE)({history:(0,s.LA)(),routes:se});var ce=le;n(1345);const ve={apiKey:"AIzaSyCfZdlz9mGnYtB8NGwgdKFP1n6yYwIr1DU",authDomain:"soongsil-af5dc.firebaseapp.com",projectId:"soongsil-af5dc",storageBucket:"soongsil-af5dc.appspot.com",messagingSenderId:"462824179207",appId:"1:462824179207:web:aeaa6e3c19deae124c0ca2",measurementId:"G-XRL5W54Y7M"};i.A.initializeApp(ve);const de=(0,a.Ef)(w);de.use(ce),de.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var u=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&r||u>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(i=!1,r<u&&(u=r));if(i){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,u=a[0],i=a[1],s=a[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var c=s(n)}for(t&&t(a);l<u.length;l++)r=u[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunksoongsil_us"]=self["webpackChunksoongsil_us"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(5756)}));a=n.O(a)})();
//# sourceMappingURL=app.4597f837.js.map