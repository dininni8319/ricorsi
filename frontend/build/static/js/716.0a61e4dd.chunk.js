"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[716],{716:function(e,s,n){n.r(s);var a=n(7743),t=n(2791),i=n(6871),r=n(1834),l=n(6392),o=n(1349),c=n(3504),d=n(1806),m=n(8934),h=n(184);s.default=function(){(0,t.useContext)(r.E).api_urls.backend;var e=(0,t.useContext)(l.V).login,s=(0,i.s0)(),n=(0,a.Z)(m.c5),u=n.data,p=n.error,x=n.setError,f=n.handleData;return(0,h.jsxs)(o.JL,{onSubmit:function(n){n.preventDefault(),fetch("http://127.0.0.1:8000/api/cienneffe/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(u)}).then((function(e){return e.json()})).then((function(n){n.success?(e(n.data.first_name,n.data.last_name,n.token,n.data.id),s("/")):x(n.message)}))},children:[(0,h.jsx)(d.Kl,{}),(0,h.jsxs)("section",{className:"row-form mt-12",children:[(0,h.jsxs)(o.qi,{className:"mb-5 flex flex-col",children:[(0,h.jsx)("h1",{children:"Entra"}),(0,h.jsx)("label",{htmlFor:"userEmailLogin",className:"mb-2",children:"Inserisci un Email"}),(0,h.jsx)("input",{type:"email",id:"userEmailLogin",name:"email",onChange:f})]}),(0,h.jsxs)(o.qi,{className:"mb-5 flex flex-col",children:[(0,h.jsx)("label",{htmlFor:"passwordLogin",className:"mb-2",children:"Inserisci una Password"}),(0,h.jsx)("input",{type:"password",id:"passwordLogin",name:"password",onChange:f}),p&&(0,h.jsx)("span",{className:"text-red-600 py-1 text-sm",children:p}),(0,h.jsx)(o.ZJ,{type:"submit",disabled:!u.email||!u.password,children:"Entra"}),(0,h.jsx)(c.rU,{to:"/send_email",className:"pt-3 text-sm",children:"Hai dimenticato la password?"})]})]})]})}}}]);
//# sourceMappingURL=716.0a61e4dd.chunk.js.map