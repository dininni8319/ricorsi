"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[716],{716:function(e,s,a){a.r(s);var n=a(7743),t=a(2791),i=a(6871),l=a(1834),r=a(5940),o=a(1349),c=a(3504),d=a(9840),m=a(8934),h=a(184);s.default=function(){var e=(0,t.useContext)(l.E).api_urls.backend,s=(0,t.useContext)(r.V).login,a=(0,i.s0)(),p=(0,n.Z)(m.c5),u=p.data,x=p.error,f=p.setError,j=p.handleData;return(0,h.jsxs)(o.JL,{onSubmit:function(n){n.preventDefault(),fetch("".concat(e,"/api/cienneffe/login"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(u)}).then((function(e){return e.json()})).then((function(e){e.success?(s(e.data.first_name,e.data.last_name,e.token,e.data.id),a("/")):f(e.message)}))},children:[(0,h.jsx)(d.Kl,{}),(0,h.jsxs)("section",{className:"row-form mt-12",children:[(0,h.jsxs)(o.qi,{className:"mb-5 flex flex-col",children:[(0,h.jsx)("h1",{className:"text-start",children:"Entra"}),(0,h.jsx)("label",{htmlFor:"userEmailLogin",className:"mb-2",children:"Inserisci un Email"}),(0,h.jsx)("input",{type:"email",id:"userEmailLogin",name:"email",placeholder:"Email",onChange:j})]}),(0,h.jsxs)(o.qi,{className:"mb-5 flex flex-col",children:[(0,h.jsx)("label",{htmlFor:"passwordLogin",className:"mb-2",children:"Inserisci una Password"}),(0,h.jsx)("input",{type:"password",id:"passwordLogin",name:"password",placeholder:"Password",onChange:j}),x&&(0,h.jsx)("span",{className:"text-red-600 py-1 text-sm",children:x}),(0,h.jsxs)(o.ZJ,{type:"submit",disabled:!u.email||!u.password,children:["Entra"," "]}),(0,h.jsx)(c.rU,{to:"/send_email",className:"pt-3 text-sm",children:"Hai dimenticato la password?"})]})]})]})}}}]);
//# sourceMappingURL=716.8c229797.chunk.js.map