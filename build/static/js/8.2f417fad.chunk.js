(this.webpackJsonpsoftapps=this.webpackJsonpsoftapps||[]).push([[8],{222:function(e,t,a){e.exports={Career:"Career_Career__2pIgP",DropDown:"Career_DropDown__NW2nH",DropDown_Main:"Career_DropDown_Main__2uhQp",menu:"Career_menu__31qD5",menuItem:"Career_menuItem__ekFvV",subMenu:"Career_subMenu__1jGP3",Form:"Career_Form__2cwnh",FormContainer:"Career_FormContainer__2t_An",Left:"Career_Left__1JGpm",Right:"Career_Right__3X3GI",FormElement:"Career_FormElement__KgdB3",CVFormElement:"Career_CVFormElement__21yWh"}},230:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(11),s=a(4),l=a(0),i=a(1),j=a(222),o=a.n(j),p=a(29);t.default=function(e){var t,a=Object(p.a)(),n=(a.isLoading,a.error),j=a.sendRequest,u=(a.clearError,Object(i.useState)(!1)),d=Object(s.a)(u,2),b=d[0],m=d[1],O=Object(i.useState)(void 0),A=Object(s.a)(O,2),h=A[0],x=A[1],v=Object(i.useState)(!1),g=Object(s.a)(v,2),C=g[0],f=g[1],S=Object(i.useState)(void 0),N=Object(s.a)(S,2),I=N[0],E=N[1],F=Object(i.useState)(void 0),w=Object(s.a)(F,2),k=w[0],D=w[1],G=Object(i.useState)(void 0),P=Object(s.a)(G,2),Q=P[0],R=P[1],U=Object(i.useState)(void 0),V=Object(s.a)(U,2),_=V[0],K=V[1],M=Object(i.useState)(void 0),T=Object(s.a)(M,2),y=T[0],W=T[1],X=Object(i.useState)(void 0),B=Object(s.a)(X,2),J=B[0],L=B[1],H=Object(i.useState)(void 0),Y=Object(s.a)(H,2),q=Y[0],Z=Y[1],z=Object(i.useState)(void 0),$=Object(s.a)(z,2),ee=$[0],te=$[1],ae=Object(i.useState)(!1),ne=Object(s.a)(ae,2),re=ne[0],ce=ne[1],se=Object(i.useState)(!1),le=Object(s.a)(se,2),ie=le[0],je=le[1],oe=Object(i.useState)(!1),pe=Object(s.a)(oe,2),ue=pe[0],de=pe[1],be=Object(i.useState)(!1),me=Object(s.a)(be,2),Oe=me[0],Ae=me[1],he=Object(i.useState)(!1),xe=Object(s.a)(he,2),ve=xe[0],ge=xe[1],Ce=Object(i.useState)(!1),fe=Object(s.a)(Ce,2),Se=fe[0],Ne=fe[1],Ie=Object(i.useState)(!1),Ee=Object(s.a)(Ie,2),Fe=Ee[0],we=Ee[1],ke=Object(i.useState)(!1),De=Object(s.a)(ke,2),Ge=De[0],Pe=De[1],Qe=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,h?f(!1):(t=!0,f(!0)),!I||I&&I.length<1?(t=!0,ce(!0)):ce(!1),!k||k&&k.length<1?(t=!0,je(!0)):je(!1),Q&&/^\S+@\S+\.\S+$/.test(Q)?de(!1):(t=!0,de(!0)),!_||_&&_.length<11?(t=!0,Ae(!0)):Ae(!1),!y||y&&y.length<1?(t=!0,ge(!0)):ge(!1),!J||J&&J.length<1?(t=!0,Ne(!0)):Ne(!1),!q||q&&q.length<49?(t=!0,we(!0)):we(!1),ee?Pe(!1):(t=!0,Pe(!0)),!t){e.next=12;break}return e.abrupt("return");case 12:return(a=new FormData).append("title",h),a.append("fname",I),a.append("lname",k),a.append("email",Q),a.append("phone",_),a.append("employment",y),a.append("experience",J),a.append("letter",q),a.append("cv",ee),e.prev=22,e.next=25,j("".concat("https://softapps.softapp.ga/user","/job"),"POST",{},a);case 25:n=e.sent,console.log("responseData",n),n&&m(!0),e.next=32;break;case 30:e.prev=30,e.t0=e.catch(22);case 32:case"end":return e.stop()}}),e,null,[[22,30]])})));return function(){return e.apply(this,arguments)}}();return t=Object(l.jsxs)("div",{className:o.a.Form,children:[Object(l.jsxs)("div",{className:o.a.FormContainer,children:[Object(l.jsxs)("div",{className:o.a.Left,children:[Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsx)("input",{placeholder:"First Name",value:I,onChange:function(e){return E(e.target.value)}}),re&&Object(l.jsx)("p",{children:"Please, enter a valid first name"})]}),Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsx)("input",{placeholder:"Last Name",value:k,onChange:function(e){return D(e.target.value)}}),ie&&Object(l.jsx)("p",{children:"Please, enter a valid last name"})]}),Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsx)("input",{type:"email",placeholder:"Email",value:Q,onChange:function(e){return R(e.target.value)}}),ue&&Object(l.jsx)("p",{children:"Please, enter a valid email"})]}),Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsx)("input",{placeholder:"Phone",value:_,onChange:function(e){return K(e.target.value.replace(/\D[^\.]/g,""))}}),Oe&&Object(l.jsx)("p",{children:"Please, enter a valid phone number"})]}),Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsx)("input",{placeholder:"Current Employment",value:y,onChange:function(e){return W(e.target.value)}}),ve&&Object(l.jsx)("p",{children:"Please, enter a employment status"})]}),Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsx)("input",{placeholder:"Experience",value:J,onChange:function(e){return L(e.target.value)}}),Se&&Object(l.jsx)("p",{children:"Please, enter a valid experience"})]})]}),Object(l.jsxs)("div",{className:o.a.Right,children:[Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsx)("textarea",{rows:6,placeholder:"Cover Letter",value:q,onChange:function(e){return Z(e.target.value)}}),Fe&&Object(l.jsx)("p",{children:"Min. Character:50"})]}),Object(l.jsx)("input",{type:"file",onChange:function(e){return te(e.target.files[0])},style:{display:"none"},id:"file",placeholder:"Experience"}),Object(l.jsxs)("div",{className:o.a.FormElement,children:[Object(l.jsxs)("label",{className:o.a.CVFormElement,for:"file",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAA0CAYAAAAew7HJAAAABHNCSVQICAgIfAhkiAAAArNJREFUaEPtmoFx1DAQRX8qIFQAHQQqgFQAVABUEKggoYJABUAFQAWECoAKCBUQKkjm3WhvNoplyYpONox3JpOZs716+lrL+rL3lI99SceSHkt6EE7/IemzpHeSLvIp2p6xl0n3QtKpJMCHAuBDSXSiW4xBo+zXApLu4GPQvyTdd9A/Q0nwEx165I5ZucR9pEOUUNNIQVMW711LHyXxm48Pkp4X0Pg2EOG84JrRU1LQHuhvUJwGqW/Uex3+/ykA8G2cSSI3f9WRgia5Df8XSU9DaTwJLTHkryT581IQMTR5X94GPAXt6/mNpJMI8Fuo61poOlgNnoK+dLLtCroafG7oKvAlQE8GXwr0JHCguclYW/CA4JHMlNarpuMZp+jmBNoD2kVzQRcpHkPbTDEndBZ8qdCj4EuGToIvHXoQ/F+AvgHeG9qm15oV3nY67AH9MLJjrMu9uZjSATqtHtAY4GdTyHLn9oCGgUU/w9skUtB+nYxSPHQ+uWGdYgIM1FwLdov1eHUAPeRS3ko6GslqNwV2K7W9UA2VufAQ6BjwbrgIRe4MJMCVs2lTusXQGn4DHTduQw8YtXjgWmVY8YusBL+7HafWYGP5NtBE7PX8EpHpyay/2X+2F+IthV7gW2hURTkfdITSwY0T1C5unLmydp5t0bEtNMniDZoWDewixzVoA0fdoRtwFwA1OW9AWxkAzg23RPhBaN97ZhbKpmTPrka1mmuy0CS9zcqsBip3zQqdU6jV8VXpVkrm8qxK5xRqdXxVupWSuTyr0jmFWh3/f5VmtYcTX0oUKY1L4RXdEoIXsfu5rxAMlL0Pe/E5J/zGdJdCozbvZOY0BWxdsL6/KIVGXcwvZncOcIAxI5vvSqZAmxXjnTgJ7nWok99h7wX7t/2CZyq052RLwT4P2gU/qg5+anQFeNbwtdkCq3IAAAAASUVORK5CYII="})}),ee?Object(l.jsx)("span",{children:ee.name}):Object(l.jsx)("span",{children:"Upload Your CV"})]}),Ge&&Object(l.jsx)("p",{children:"Please, attach a valid file"})]})]})]}),Object(l.jsx)("a",{onClick:function(){return Qe()},children:"Submit"})]}),b&&(t=Object(l.jsx)("p",{children:"Thank you for applying, we will get back to you shortly."})),Object(l.jsxs)("div",{className:o.a.Career,children:[Object(l.jsx)("h2",{children:"APPLY ONLINE"}),n&&Object(l.jsx)("p",{children:n}),!b&&Object(l.jsxs)("nav",{className:o.a.menu,children:[Object(l.jsx)("ol",{children:Object(l.jsxs)("li",{className:o.a.menuItem,children:[Object(l.jsxs)("div",{className:o.a.DropDown_Main,children:[Object(l.jsx)("p",{children:h||"Select Position"}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABHNCSVQICAgIfAhkiAAAAp5JREFUWEfNmN1x2kAQx/8rUQAeKIDh9B53EKgguILgCpxUEKcDuwKTCowrAFcQeOc8FAADBSBtZnUIy0JCpxNkrCcG3Z5+tx+3H4SKz6bTaYa+/w3AAKAmMZogXMfbMGZM2AK8BTD2w/DlarmU39YP2a5cKSUAdwT0bGUMI6YAP7a1HtvIlQJtOkEv9PGrKkj24wLmh/h9tVxMT4GdBFp31ROIhjYns17DeGi9LX4Wrc8FMn7SeK6rlaKPGm3tbvL86whIYCKvMTk4qvXRKy5kzLxo189CHQGtVDC5lGby/KqtF/30/x+ALuIzZYpjfmy96R/JsgOQRFPkY1Imf4n3Xoh+En0HoP9pqlOmi4Hk0iPQs+vpGXwjsnX3kMtzDxRMCfjqCtTSi3ifdTeYgfDFZR8Gv7S1HlAc5n5j47JJIpMArVS9g3nh7opWSg0J9PQZgBh8K0BjAkn2dn7OpSExG9VVs5zifEB4pXU3+Fs3TZwLSOopWquAbWwl9m1rPVorNQLoe1qmGIj/tLQeVvHTykBxeGeg8oEMzP6esw4cMZnd3cG89aJQsvMsC3UM9A6z6XSuI8+fgKhZagnGvJpTF0B9BOJloplKMKbcfa0e9jlQadOIn4kmqsKIzD7sHS7GDFTWFC4we6Bb99RRAOUKI0Bx6jBR4JiDMlB1YA7JtXb5EUOZziTyeGQVTTnhJiXMofyopaXSWC5fINHV1ou4Af28JawpsNQDiO7Kz3TGFUVFfvIJZwd3YEybKhEvahSnrqWoNRdj7kW7XmmjuL9lpZWWgtu5zj4FJprxw93AqpVOb3QRn8r4TBbcdhxzX1dbRiu4rzWOSdObgRWkrqlUf8sNDGB0toFVTuKUkZ7ApUd6phdjzDMjvXHVkd4/2fya6y8rWs0AAAAASUVORK5CYII="})})]}),Object(l.jsxs)("ol",{className:o.a.subMenu,children:[Object(l.jsx)("li",{onClick:function(){return x("React Dev")},className:o.a.menuItem,children:Object(l.jsx)("span",{children:"React Dev"})}),Object(l.jsx)("li",{onClick:function(){return x("React Native Dev")},className:o.a.menuItem,children:Object(l.jsx)("span",{children:"React Native Dev"})}),Object(l.jsx)("li",{onClick:function(){return x("WordPress Dev")},className:o.a.menuItem,children:Object(l.jsx)("span",{children:"WordPress Dev"})})]})]})}),C&&Object(l.jsx)("label",{children:"Please select job title you are applying for"})]}),t]})}}}]);
//# sourceMappingURL=8.2f417fad.chunk.js.map