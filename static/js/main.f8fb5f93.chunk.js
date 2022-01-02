(this["webpackJsonptruth-or-dare"]=this["webpackJsonptruth-or-dare"]||[]).push([[0],{147:function(e,t,n){},148:function(e,t,n){},190:function(e,t){},201:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loadAdminCards",(function(){return S})),n.d(r,"loginAdmin",(function(){return E})),n.d(r,"saveCardSuggestion",(function(){return y})),n.d(r,"suggestCardDeletion",(function(){return k})),n.d(r,"getCardEdits",(function(){return B})),n.d(r,"createUser",(function(){return N})),n.d(r,"acceptEdit",(function(){return L})),n.d(r,"rejectEdit",(function(){return D}));var a={};n.r(a),n.d(a,"getCards",(function(){return H})),n.d(a,"shuffleDeck",(function(){return K})),n.d(a,"setStartLevel",(function(){return Y})),n.d(a,"setEndLevel",(function(){return z})),n.d(a,"setTimeBetweenLevels",(function(){return G})),n.d(a,"setStartTime",(function(){return J})),n.d(a,"nextCard",(function(){return W})),n.d(a,"discardSelected",(function(){return Z}));var c={};n.r(c),n.d(c,"admin",(function(){return r})),n.d(c,"game",(function(){return a}));var A={};n.r(A),n.d(A,"api",(function(){return q}));var i,s=n(1),o=n.n(s),l=n(41),d=n.n(l),u=(n(147),n(62)),j=n(18),b=n(263),h=(n(148),n(0)),f=function(e){return Object(h.jsx)(b.a,{container:!0,className:"background",justifyContent:"center",alignContent:"center",children:Object(h.jsx)(b.a,{item:!0,children:e.children})})},O=n(264),g=function(){var e=Object(j.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Main Menu"}),Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return e.push("/game")},children:"Play web version"}),Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return e.push("/download")},children:"Download App"}),Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return e.push("/admin")},children:"Admin"})]})},p=(n(158),n(54)),v=n(20),x=n.n(v),m=n(40),C=n(33),w=n.n(C),S=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.effects.api.getAdminCards();case 2:n=e.sent.data,console.log("cards",n),t.state.adminCards=n;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(x.a.mark((function e(t,n){var r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.effects.api.adminLogin(n);case 3:if(r=e.sent.data,a=r.token,c=r.role,w.a.defaults.headers){e.next=8;break}return e.abrupt("return");case 8:w.a.defaults.headers.common.auth=a,t.state.login={token:a,role:c},e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error",e.t0),t.state.login={error:"Could not log in"};case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.effects.api.saveCardSuggestion(n);case 3:e.sent.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.effects.api.suggestCardDeletion(n);case 3:e.sent.data,console.log("deleting:",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.effects.api.getAdminEdits();case 3:n=e.sent.data,t.state.cardEdits=n,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.effects.api.createUser(n);case 3:return e.abrupt("return",e.sent.data);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.effects.api.acceptEdit(n);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.effects.api.rejectEdit(n);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=n(16),F=n(37),I=n(10),M=n(24),P=n(177),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(t-e+1)+e)},T=function(e){for(var t=[];e.length>0;){var n=Math.floor(Math.random()*e.length);t.push.apply(t,Object(Q.a)(e.splice(n,1)))}return t},R=function(e){var t=e,n=/\[\d{1,2}..\d{1,2}\]/g.exec(t);if(n){var r,a=Object(M.a)(n);try{for(a.s();!(r=a.n()).done;){var c=r.value,A=c.replace("[",""),i=(A=A.replace("]","")).split(".."),s=Object(I.a)(i,2),o=s[0],l=s[1];t=t.replace(c,Math.round(U(Number(o),Number(l))).toString())}}catch(h){a.e(h)}finally{a.f()}}P.shim(),t=(t=(t=(t=(t=(t=(t=t.replaceAll("*12pieces*",1===U(1,2)?"1 piece":"2 pieces")).replaceAll("*direction*",0===U(0,1)?"left":"right")).replaceAll("*wordEnding*",function(){switch(U(0,4)){case 0:return"'Fuck'";case 1:return"'blimey'";case 2:return"'like, you know?'";case 3:return"'vagina'";case 4:return"'penis'"}return"Fuck"}())).replaceAll("*title*",function(){switch(U(0,4)){case 0:return"King/Queen";case 1:case 2:return"Master/Mistress";case 3:return"Your higness";case 4:return"Overlord"}return"Master/Mistress"}())).replaceAll("*youngOld*",0===U(0,1)?"oldest":"newest")).replaceAll("*leastMost*",1===U(1,2)?"least":"most")).replaceAll("*drinkStrip*",U(0,10)>8?"remove 1 piece of clothing":"drink 3 times");var d=function(){switch(U(0,13)){case 0:return["brand","Car brands"];case 1:return["brand","makeup brands"];case 2:return["breed","dog breeds"];case 3:return["brand","softdrink types"];case 4:return["pornstar","pornstars"];case 5:return["company","IT companies"];case 6:return["brand","liquor brands"];case 7:return["colour","colours"];case 8:return["play","shakespearean plays"];case 9:return["reindeer","santas rainders"];case 10:return["movie","disney movies"];case 11:return["characters","Star Wars"];case 12:return["brand","Clothing brands"];default:return["branch","sports"]}}(),u=Object(I.a)(d,2),j=u[0],b=u[1];return t=(t=t.replaceAll("*brandName*",j)).replaceAll("*category*",b)},H=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.effects.api.getCards();case 2:n=e.sent.data,t.state.loadedCards=n,t.actions.game.shuffleDeck(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t){e.state.cardDeck=function(e){var t=[];return e.forEach((function(e){for(var n=0;n<e.cardCount;n++)t.push(e)})),T(t)}(t)},Y=function(e,t){isNaN(t)||(e.state.startLevel=t)},z=function(e,t){isNaN(t)||(e.state.endLevel=t)},G=function(e,t){if(""!==t){var n=Number(t);isNaN(n)||(n>15&&(n=15),n<3&&(n=3),e.state.timeBetweenLevels=n)}else e.state.timeBetweenLevels=""},J=function(e){e.state.startTime=(new Date).getTime()},W=function(e,t){for(var n,r,a=e.state.cardDeck.map((function(e){return Object(F.a)({},e)})),c=e.state.discardPile.map((function(e){return Object(F.a)({},e)})),A=e.state.cardsSinceLastSpecial,i=function(e,t,n,r){var a=(new Date).getTime()-e,c=60*r*1e3,A=Math.floor(a/c)+t;return A>n&&(A=n),console.log("currentLevel",A),A}(e.state.startTime,e.state.startLevel,e.state.endLevel,e.state.timeBetweenLevels||3),s=-1,o=0;s<0&&o<5;){var l;if((s=a.findIndex((function(e){return(e.category===t||"special"===e.category&&A>4)&&e.level<=i})))<0)(l=c).push.apply(l,Object(Q.a)(a)),a=T(c),c=[],console.log("shuffling");o++}if(s<0)throw new Error("card index is less than 0");var d=a.splice(0,s);r=a.splice(0,1)[0],(n=c).push.apply(n,Object(Q.a)(d)),"special"===r.category?e.state.cardsSinceLastSpecial=0:e.state.cardsSinceLastSpecial+=1,e.state.cardDeck=a,e.state.currentCard=r,e.state.discardPile=c},Z=function(e){if(e.state.currentCard){var t=e.state.discardPile.map((function(e){return Object(F.a)({},e)}));t.push(e.state.currentCard),e.state.discardPile=t,e.state.currentCard=null}},X=function(){return"Local"===Object({NODE_ENV:"production",PUBLIC_URL:"/truth-or-dare",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DB_ENV?"http://localhost:8080":"https://logans-truth-or-dare-server.herokuapp.com"},q={getCards:function(){return w.a.get("".concat(X(),"/game/cards"))},getAdminCards:function(){return w.a.get("".concat(X(),"/admin/cards"))},getAdminEdits:function(){return w.a.get("".concat(X(),"/admin/cardEdits"))},adminLogin:function(e){return w.a.post("".concat(X(),"/auth/login"),e)},saveCardSuggestion:function(e){return w.a.post("".concat(X(),"/admin/suggestCardEdit"),e)},suggestCardDeletion:function(e){return console.log("id",e),w.a.post("".concat(X(),"/admin/suggestCardDeletion"),{id:e})},createUser:function(e){return w.a.post("".concat(X(),"/user"),e)},acceptEdit:function(e){return w.a.post("".concat(X(),"/admin/acceptEdit"),e)},rejectEdit:function(e){return w.a.post("".concat(X(),"/admin/rejectEdit"),e)}},V={state:{loadedCards:[],adminCards:[],cardDeck:[],discardPile:[],timeBetweenLevels:"",startTime:0,startLevel:0,endLevel:0,currentCard:null,login:{},cardEdits:[],cardsSinceLastSpecial:0},actions:c,effects:A},_=Object(p.e)(),$=Object(p.b)(),ee=(Object(p.c)(),Object(p.d)(),n(131)),te=["children"],ne=function(e){var t=e.children,n=Object(ee.a)(e,te),r=_().login;return Object(h.jsx)(j.b,Object(F.a)(Object(F.a)({},n),{},{render:function(e){var n=e.location;return r.token?t:Object(h.jsx)(j.a,{to:{pathname:"/admin/login",state:{from:n}}})}}))},re=n(257),ae=(n(201),function(e){return Object(h.jsx)("div",{className:"darkBackground ".concat(e.variant),children:e.children})}),ce=function(){var e=_().login,t=$().admin.loginAdmin,n=Object(s.useState)(""),r=Object(I.a)(n,2),a=r[0],c=r[1],A=Object(s.useState)(""),i=Object(I.a)(A,2),o=i[0],l=i[1],d=Object(j.g)();return Object(s.useEffect)((function(){""!==e.token&&null!=e.token&&d.push("/admin")}),[e]),Object(h.jsx)(ae,{variant:"light",children:Object(h.jsxs)(b.a,{container:!0,direction:"column",children:[Object(h.jsx)("h3",{children:"Login"}),Object(h.jsx)("i",{children:e.error}),Object(h.jsx)(re.a,{label:"Username",value:a,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(re.a,{label:"Password",value:o,type:"password",onChange:function(e){return l(e.target.value)}}),Object(h.jsx)(O.a,{onClick:function(){a&&o&&t({username:a,password:o})},variant:"contained",children:"Login"})]})})},Ae=n(268),ie=n(265),se=n(269),oe=n(270),le=n(271),de=n(272),ue=n(273),je=n(253),be=n(254),he=n(261),fe=n(259),Oe=n(266),ge=n(252),pe=n(267),ve=n(260),xe=(n(203),function(e){var t,n,r,a,c,A=Object(s.useState)(null===(t=e.selectedCard)||void 0===t?void 0:t.description),i=Object(I.a)(A,2),o=i[0],l=i[1],d=Object(s.useState)(null===(n=e.selectedCard)||void 0===n?void 0:n.isBottle),u=Object(I.a)(d,2),j=u[0],f=u[1],g=Object(s.useState)(null===(r=e.selectedCard)||void 0===r?void 0:r.level),p=Object(I.a)(g,2),v=p[0],x=p[1],m=Object(s.useState)(null===(a=e.selectedCard)||void 0===a?void 0:a.category),C=Object(I.a)(m,2),w=C[0],S=C[1],E=Object(s.useState)(null===(c=e.selectedCard)||void 0===c?void 0:c.cardCount),y=Object(I.a)(E,2),k=y[0],B=y[1];function N(e){var t=Number(e.target.value);0!==t&&1!==t&&2!==t&&3!==t||x(t)}function L(e){var t=e.target.value;"truth"!==t&&"dare"!==t&&"special"!==t||S(t)}return Object(h.jsx)(fe.a,{open:null!=e.selectedCard,onClose:e.onClose,children:Object(h.jsxs)("div",{className:"modalCard",children:[Object(h.jsx)(Oe.a,{variant:"h5",children:"Edit card"}),Object(h.jsx)(ge.a,{style:{marginBottom:"12px"}}),Object(h.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-evenly",children:[Object(h.jsx)(re.a,{label:"Level",value:v,select:!0,onChange:N,children:[0,1,2,3].map((function(e){return Object(h.jsx)(he.a,{value:e,children:e},"level"+e)}))}),Object(h.jsx)(re.a,{label:"Category",value:w,select:!0,onChange:L,children:["truth","dare","special"].map((function(e){return Object(h.jsx)(he.a,{value:e,children:e},"category"+e)}))})]}),Object(h.jsxs)("div",{className:"gameCard "+w,children:[Object(h.jsx)(re.a,{className:"content "+w,multiline:!0,maxRows:9,value:o,onChange:function(e){return l(e.target.value)},variant:"standard"}),Object(h.jsx)(pe.a,{control:Object(h.jsx)(ve.a,{checked:j,onChange:function(e){return f(e.target.checked)}}),label:"Spin Bottle?",labelPlacement:"end"})]}),Object(h.jsx)(re.a,{value:k,label:"Amount in game",style:{margin:"16px 0px"},onChange:function(e){var t=Number(e.target.value);if(""===e.target.value)return B(0);isNaN(t)||t<1||t>7||B(t)}}),Object(h.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(h.jsx)(O.a,{variant:"contained",onClick:e.onDelete,children:"Delete"}),Object(h.jsx)(O.a,{variant:"contained",onClick:e.onClose,children:"Cancel"}),Object(h.jsx)(O.a,{variant:"contained",onClick:function(){if(e.selectedCard&&k&&w&&o&&null!=j&&null!=v){var t={id:e.selectedCard.id,cardCount:k,category:w,description:o,isBottle:j,level:v,verified:!0};e.onSave(t)}},children:"Save"})]})]})})}),me=(n(204),function(e){var t=_(),n=t.adminCards,r=t.login,a=$().admin,c=a.loadAdminCards,A=a.saveCardSuggestion,i=a.suggestCardDeletion,o=Object(s.useState)(null),l=Object(I.a)(o,2),d=l[0],u=l[1],j=Object(s.useState)(!1),b=Object(I.a)(j,2),f=b[0],g=b[1];Object(s.useEffect)((function(){c()}),[]);var p=n.filter((function(e){return"truth"===e.category})),v=n.filter((function(e){return"dare"===e.category})),x=n.filter((function(e){return"special"===e.category})),m=function(e,t){return Object(h.jsx)(Ae.a,{component:ie.a,children:Object(h.jsxs)(se.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(h.jsx)(oe.a,{children:Object(h.jsxs)(le.a,{className:"tableHead ".concat(t),children:[Object(h.jsx)(de.a,{children:"Id"}),Object(h.jsx)(de.a,{align:"right",children:"Description"}),Object(h.jsx)(de.a,{align:"right",children:"Level"}),Object(h.jsx)(de.a,{align:"right",children:"spin bottle"}),"ADMIN"===r.role&&Object(h.jsx)(de.a,{align:"right",children:"verified"}),Object(h.jsx)(de.a,{align:"right",children:"amount in game"})]})}),Object(h.jsx)(ue.a,{children:e.map((function(e){return Object(h.jsxs)(le.a,{onClick:function(){return u(e)},sx:{"&:last-child td, &:last-child th":{border:0}},className:"tableRow ".concat(t),children:[Object(h.jsx)(de.a,{component:"th",scope:"row",children:e.id}),Object(h.jsx)(de.a,{align:"right",children:f?R(e.description):e.description}),Object(h.jsx)(de.a,{align:"right",children:e.level}),Object(h.jsx)(de.a,{align:"right",children:e.isBottle?Object(h.jsx)(je.a,{}):Object(h.jsx)(be.a,{})}),"ADMIN"===r.role&&Object(h.jsx)(de.a,{align:"right",children:e.verified}),Object(h.jsx)(de.a,{align:"right",children:e.cardCount})]},e.id)}))})]})})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"formatBtnWrapper",children:Object(h.jsx)(O.a,{className:"formatBtn",variant:"contained",onClick:function(){return g(!f)},children:f?"Unformat descriptions":"Format descriptions"})}),Object(h.jsx)("h1",{children:"Truth cards"}),m(p,"truth"),Object(h.jsx)("h1",{children:"Dare cards"}),m(v,"dare"),Object(h.jsx)("h1",{children:"Special cards"}),m(x,"special"),d&&Object(h.jsx)(xe,{selectedCard:d,onClose:function(){return u(null)},onSave:function(e){A(e),u(null)},onDelete:function(){if(d){var e=d.id;i(e),u(null)}}})]})}),Ce=function(){var e=$().admin.createUser,t=Object(s.useState)(""),n=Object(I.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)(""),A=Object(I.a)(c,2),i=A[0],o=A[1];return Object(h.jsx)(ae,{variant:"light",children:Object(h.jsxs)(b.a,{container:!0,direction:"column",children:[Object(h.jsx)("h3",{children:"Create New User"}),Object(h.jsx)(re.a,{label:"Username",value:r,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)(re.a,{label:"Password",value:i,type:"password",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)(O.a,{onClick:function(){e({username:r,password:i})},variant:"contained",children:"Create user"})]})})},we=function(e){if(!e.selectedEdit)return Object(h.jsx)(h.Fragment,{});var t=e.selectedEdit,n=t.category,r=t.description,a=t.isBottle,c=t.cardCount;return Object(h.jsx)(fe.a,{open:null!=e.selectedEdit,onClose:e.onClose,children:Object(h.jsxs)("div",{className:"modalCard",children:[Object(h.jsx)(Oe.a,{variant:"h5",children:"Card edit"}),Object(h.jsx)(ge.a,{style:{marginBottom:"12px"}}),Object(h.jsxs)("div",{className:"gameCard "+n,children:[Object(h.jsx)(re.a,{className:"content "+n,multiline:!0,maxRows:9,value:r,variant:"standard"}),Object(h.jsx)(pe.a,{control:Object(h.jsx)(ve.a,{checked:a}),label:"Spin Bottle?",labelPlacement:"end"})]}),Object(h.jsx)(re.a,{value:c,label:"Amount in game",style:{margin:"16px 0px"}}),Object(h.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(h.jsx)(O.a,{variant:"contained",onClick:e.onReject,children:"Reject"}),Object(h.jsx)(O.a,{variant:"contained",onClick:e.onAccept,children:"Accept"})]})]})})},Se=function(){var e=$().admin,t=e.getCardEdits,n=e.acceptEdit,r=e.rejectEdit,a=_().cardEdits,c=o.a.useState(void 0),A=Object(I.a)(c,2),i=A[0],l=A[1];Object(s.useEffect)((function(){t()}),[]);Object(s.useEffect)((function(){}),[a]);var d=a.filter((function(e){return"truth"===e.category})),u=a.filter((function(e){return"dare"===e.category})),j=a.filter((function(e){return"special"===e.category}));return Object(h.jsxs)(h.Fragment,{children:[Ee(d,"truth",l),Ee(u,"dare",l),Ee(j,"special",l),i&&Object(h.jsx)(we,{selectedEdit:i,onClose:function(){return l(void 0)},onReject:function(){i&&r(i)},onAccept:function(){i&&n(i)}})]})},Ee=function(e,t,n){return Object(h.jsx)(Ae.a,{component:ie.a,children:Object(h.jsxs)(se.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(h.jsx)(oe.a,{children:Object(h.jsxs)(le.a,{className:"tableHead ".concat(t),children:[Object(h.jsx)(de.a,{children:"Id"}),Object(h.jsx)(de.a,{align:"right",children:"Description"}),Object(h.jsx)(de.a,{align:"right",children:"Level"}),Object(h.jsx)(de.a,{align:"right",children:"spin bottle"}),Object(h.jsx)(de.a,{align:"right",children:"verified"}),Object(h.jsx)(de.a,{align:"right",children:"amount in game"})]})}),Object(h.jsx)(ue.a,{children:e.map((function(e){return Object(h.jsxs)(le.a,{onClick:function(){return n(e)},sx:{"&:last-child td, &:last-child th":{border:0}},className:"tableRow ".concat(t),children:[Object(h.jsx)(de.a,{component:"th",scope:"row",children:e.id}),Object(h.jsx)(de.a,{align:"right",children:e.description}),Object(h.jsx)(de.a,{align:"right",children:e.level}),Object(h.jsx)(de.a,{align:"right",children:e.isBottle?Object(h.jsx)(je.a,{}):Object(h.jsx)(be.a,{})}),Object(h.jsx)(de.a,{align:"right",children:e.verified}),Object(h.jsx)(de.a,{align:"right",children:e.cardCount})]},e.id)}))})]})})},ye=(n(205),function(e){var t=Object(j.h)().url,n=_().login,r=Object(j.g)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f,{children:Object(h.jsxs)(j.d,{children:[Object(h.jsxs)(j.b,{exact:!0,path:t,children:[Object(h.jsx)("h3",{children:"Admin Menu"}),n.token?Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return r.push("/admin/browse")},children:"Browse cards"}),"ADMIN"===n.role&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return r.push("/admin/reviewEdits")},children:"Review card edits"}),Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return r.push("/admin/createUser")},children:"Create User"})]})]}):Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return r.push("/admin/login")},children:"Log in"})]}),Object(h.jsx)(j.b,{path:"".concat(t,"/login"),children:Object(h.jsx)(ce,{})}),Object(h.jsx)(ne,{path:"".concat(t,"/browse"),children:Object(h.jsx)(me,{})}),Object(h.jsx)(ne,{path:"".concat(t,"/createUser"),children:Object(h.jsx)(Ce,{})}),Object(h.jsx)(ne,{path:"".concat(t,"/reviewEdits"),children:Object(h.jsx)(Se,{})})]})})})}),ke=n(255),Be=(n(206),function(){var e=Object(j.g)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.a,{container:!0,direction:"column",className:"gameMenu",justifyContent:"space-evenly",alignContent:"flex-end",children:[Object(h.jsxs)(b.a,{item:!0,children:[Object(h.jsx)("h1",{children:"Logans"}),Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("span",{className:"blue",children:"Truth"}),Object(h.jsx)("span",{className:"gold",children:"or"}),Object(h.jsx)("span",{className:"pink",children:"Dare"})]})]}),Object(h.jsx)(O.a,{variant:"contained",onClick:function(){return e.push("/game/setup")},id:"playBtn",children:Object(h.jsx)(ke.a,{className:"arrow"})}),Object(h.jsx)(O.a,{variant:"contained",id:"creditsBtn",children:"Credits"})]})})}),Ne=(n(207),function(){var e=_(),t=e.startLevel,n=e.endLevel,r=e.timeBetweenLevels,a=$().game,c=a.setStartLevel,A=a.setEndLevel,i=a.setStartTime,s=a.setTimeBetweenLevels,l=Object(j.g)(),d=o.a.useState({stLvlErr:!1,endLvlErr:!1,timeErr:!1}),u=Object(I.a)(d,2),f=u[0],g=u[1];function p(e,t,n,r,a,c){return Object(h.jsxs)(re.a,{select:!0,error:n,variant:"filled",value:null!==t&&void 0!==t?t:"",label:e,className:"selecter",onChange:function(e){return a(Number(e.target.value))},onFocus:c,children:[Object(h.jsx)(he.a,{value:"0",disabled:-1===r.findIndex((function(e){return 0===e})),children:"Innocent"}),Object(h.jsx)(he.a,{value:"1",disabled:-1===r.findIndex((function(e){return 1===e})),children:"Suggestive"}),Object(h.jsx)(he.a,{value:"2",disabled:-1===r.findIndex((function(e){return 2===e})),children:"Salacious"}),Object(h.jsx)(he.a,{value:"3",disabled:-1===r.findIndex((function(e){return 3===e})),children:"Explicit"})]})}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Settings"}),Object(h.jsx)(ae,{variant:"dark",children:Object(h.jsx)("div",{className:"setup-container",children:Object(h.jsxs)(b.a,{container:!0,direction:"column",justifyContent:"space-between",style:{height:"230px"},children:[Object(h.jsx)(b.a,{item:!0,children:Object(h.jsxs)("div",{className:"level-wrapper",children:[Object(h.jsx)("h3",{children:"Salaciousness Level"}),Object(h.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-evenly",alignContent:"end",children:[function(){var e=[0,1,2,3].filter((function(e){return!n||e<=n}));return p("start",t,f.stLvlErr,e,c,(function(){return g(Object(F.a)(Object(F.a)({},f),{},{stLvlErr:!1}))}))}(),function(){var e=[0,1,2,3].filter((function(e){return!t||e>=t}));return p("end",n,f.endLvlErr,e,A,(function(){return g(Object(F.a)(Object(F.a)({},f),{},{endLvlErr:!1}))}))}()]})]})}),Object(h.jsx)(b.a,{item:!0,children:Object(h.jsx)(re.a,{variant:"filled",label:"Time between levels",value:r,onChange:function(e){return s(e.target.value)},error:f.timeErr,onBlur:function(){""===r&&s(3)}})})]})})}),Object(h.jsx)(b.a,{container:!0,justifyContent:"center",children:Object(h.jsx)(O.a,{variant:"contained",onClick:function(){var e=null===t,a=null===n,c=null===r||""===r||r<3||r>15;g({stLvlErr:e,endLvlErr:a,timeErr:c}),e||a||c||(i(),l.push("/game/play"))},children:"Start Game"})})]})});!function(e){e[e.unTouched=0]="unTouched",e[e.bottleNotSpun=1]="bottleNotSpun",e[e.bottleSpinning=2]="bottleSpinning",e[e.done=3]="done"}(i||(i={}));n(208);var Le=function(e){Object(s.useEffect)((function(){e.cardState===i.bottleSpinning&&(console.log("Starting the rotation"),console.log("rotPoint",e.rotationPoint),setTimeout((function(){e.onDone(),console.log("The rotation has stopped")}),e.rotationPoint.ms))}),[e.cardState]);var t={display:"inline-block",backfaceVisibility:"hidden",transform:e.cardState<2?"rotate(0deg)":"rotate(".concat(e.rotationPoint.deg,"deg)"),transition:"transform ".concat(e.rotationPoint.ms,"ms"),width:"100%"};return Object(h.jsx)("span",{style:t,children:e.children})},De=n(128),Qe=n.n(De),Fe=n(21),Ie=function e(t){Object(Fe.a)(this,e),this.x=void 0,this.y=void 0,Object.assign(this,t)},Me=function(e){var t=Object(s.useState)(null),n=Object(I.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)(!1),A=Object(I.a)(c,2),i=A[0],o=A[1],l={transition:!1===i?"transform 0.3s":void 0};return Object(h.jsx)(Qe.a,{position:r||void 0,onStart:function(){return o(!0)},onStop:function(){if(o(!1),r&&(Math.abs(r.x)>120||Math.abs(r.y)>280))return a({x:3*r.x,y:3*r.y}),void e.cardExit();a({x:0,y:0})},onDrag:function(e,t){return function(e){return a(new Ie({x:e.x,y:e.y}))}(t)},children:Object(h.jsx)("div",{style:l,children:e.children})})},Pe=o.a.forwardRef((function(e,t){var n=Object(s.useState)(""),r=Object(I.a)(n,2),a=r[0],c=r[1],A=Object(s.useState)(U(0,360)+360*U(3,6)),o=Object(I.a)(A,1)[0],l=Object(s.useState)(1e3*U(2,3)),d=Object(I.a)(l,1)[0];Object(s.useEffect)((function(){var t;null===(t=e.onCardStateChange)||void 0===t||t.call(e,e.card.isBottle?i.bottleNotSpun:i.done),c(R(e.card.description))}),[]),Object(s.useEffect)((function(){e.card.isBottle&&console.log("Card state",e.cardState)}),[e]);var u=function(){return e.cardExit&&e.cardExit()};return Object(h.jsx)("div",{ref:t,children:function(){var t=Object(h.jsxs)("div",{className:"gameCard "+e.card.category,onClick:function(){return e.onClick&&e.onClick(e.card)},children:[Object(h.jsx)("div",{className:"content "+e.card.category,children:Object(h.jsx)("p",{children:a})}),!1!==e.card.isBottle&&e.cardState&&e.onCardStateChange?Object(h.jsx)("div",{id:"bottleWrapper",children:Object(h.jsx)(Le,{cardState:e.cardState,rotationPoint:{deg:o,ms:d},onDone:function(){return e.onCardStateChange&&e.onCardStateChange(i.done)},children:Object(h.jsx)("img",{id:"bottle",src:"data:image/png;base64,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",alt:"bottle",draggable:!1,onClick:function(){var t;return null===(t=e.onCardStateChange)||void 0===t?void 0:t.call(e,i.bottleSpinning)}})})}):Object(h.jsx)(h.Fragment,{})]});return!e.draggable||!1!==e.card.isBottle&&e.cardState!==i.done?t:Object(h.jsx)(Me,{cardExit:u,children:t})}()})})),Ue=(n(212),function(){var e=_().currentCard,t=$().game,n=t.discardSelected,r=t.nextCard,a=o.a.useState(i.unTouched),c=Object(I.a)(a,2),A=c[0],s=c[1],l=function(){n()};function d(t){return Object(h.jsx)(O.a,{variant:"contained",id:t,className:"btn",onClick:function(){return r(t)},disabled:null!=e,children:(n=t,n.charAt(0).toUpperCase()+n.slice(1))});var n}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"helperText",children:null===e?"Truth or Dare":A===i.bottleNotSpun?"Click bottle":A===i.done?"Swipe card":"..."}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(b.a,{container:!0,direction:"column",justifyContent:"space-between",alignContent:"space-evenly",children:[d("truth"),Object(h.jsx)("h3",{id:"or",children:"Or"}),d("dare")]}),e&&Object(h.jsx)("div",{style:{position:"absolute",left:"calc(50vw - 118px)",top:"calc(50vh - 207px)"},children:Object(h.jsx)(Pe,{card:e,draggable:!0,cardExit:l,cardState:A,onCardStateChange:s})})]})]})}),Te=function(){var e=Object(j.h)().url;return Object(h.jsx)(f,{children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"".concat(e),children:Object(h.jsx)(Be,{})}),Object(h.jsx)(j.b,{path:"".concat(e,"/setup"),children:Object(h.jsx)(Ne,{})}),Object(h.jsx)(j.b,{path:"".concat(e,"/play"),children:Object(h.jsx)(Ue,{})}),Object(h.jsx)(j.b,{path:"".concat(e,"/credits")})]})})},Re=n(256);n(213);var He=function(){var e=$();return o.a.useEffect((function(){e.game.getCards()}),[]),Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"/admin/",children:Object(h.jsx)(ye,{})}),Object(h.jsx)(j.b,{path:"/game",children:Object(h.jsx)(Te,{})}),Object(h.jsx)(j.b,{path:"/download",children:Object(h.jsxs)(f,{children:[Object(h.jsx)("h3",{children:"Downloads"}),Object(h.jsxs)(O.a,{variant:"contained",onClick:function(){return document.location.href="https://drive.google.com/u/0/uc?export=download&confirm=KeQY&id=1Gpk5VfrgzZznF49S9rke4syIX3N_CGFB"},children:[Object(h.jsx)(Re.a,{style:{paddingRight:"10px"}}),"Android"]})]})}),Object(h.jsx)(j.b,{path:"/",children:Object(h.jsx)(f,{children:Object(h.jsx)(g,{})})})]})})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,275)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,A=t.getTTFB;n(e),r(e),a(e),c(e),A(e)}))},Ye=n(45),ze=Object(Ye.d)(V,{devtools:"127.0.0.1:3031"});d.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(p.a,{value:ze,children:Object(h.jsx)(He,{})})}),document.getElementById("root")),Ke()}},[[214,1,2]]]);
//# sourceMappingURL=main.f8fb5f93.chunk.js.map