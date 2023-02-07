"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[80],{4080:function(e,n,i){i.r(n),i.d(n,{default:function(){return v}});var s,t=i(2982),r=i(885),c=i(2791),l=i(8194),a=i(2925),d=i(9840),o=i(168),h=i(6444).ZP.div(s||(s=(0,o.Z)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-content: space-between;\n    padding: 20px 5px;\n    width: 80vw;\n\n    span {\n        padding-left: 2px;\n        color: ",";\n    }\n\n    h3 {\n        color: ",";\n    }\n\n    @media only screen and (max-width: 1500px) {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    @media only screen and (max-width: 765px) {\n        grid-template-columns: 1fr;\n        align-items: center;\n        padding: 3px;\n        width: 100%;\n    }\n"])),(function(e){return e.theme.blackColor}),(function(e){return e.theme.colorGold})),u=i(3504),x=i(6054),m=i(184),f=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),i=n[0],s=n[1],o=(0,x.Z)(s),h=o.searchedTerm,f=o.selectedItem,p=o.cardId,j=o.handleSelectedItem,g=o.handleChange,v=o.handleResetSearch,b=o.handleNavigate,N=(0,c.useCallback)((function(e){var n=e.data;s((function(){return(0,t.Z)(n)}))}),[h]),C=(0,a.Z)(N),w=(C.isLoading,C.error,C.sendRequest);return(0,c.useEffect)((function(){h.length>3&&w({url:"".concat(l.v2,"/api/cienneffe/ricorsi/search=").concat(h)})}),[w]),(0,m.jsx)(d.ol,{title:"Ente",handleChange:g,handleResetSearch:v,children:null===i||void 0===i?void 0:i.map((function(e,n){return(0,m.jsxs)("ul",{className:"bg-white p-2 shadow-md ".concat(f&&p===parseInt(e.id)?"active-class":""),onMouseOver:function(){return j(parseInt(null===e||void 0===e?void 0:e.id))},onClick:function(){return b("ricorsi_detail",parseInt(e.id))},children:[(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-semibold pr-2",children:"Numero Ricorso:"}),e.numero_ricorso]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-semibold pr-2",children:"Ente:"}),e.ente]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-semibold pr-2",children:"Anno imposta:"}),e.anno_imposta]}),(0,m.jsx)(u.rU,{to:"/ricorsi_detail/".concat(e.id),children:"Dettaglio Ricorso"})]},n)}))})},p=function(e){var n=e.ente,i=e.id;return(0,m.jsxs)("section",{children:[(0,m.jsxs)("h3",{className:"card-title mb-3",children:["Descrizione Comune: ",(0,m.jsx)("span",{children:n.descrizione_comune})]}),(0,m.jsxs)("ul",{className:"border-custom ul-style-custom",children:[(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-bold",children:"Regione:"}),(0,m.jsx)("span",{children:n.regione})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-bold",children:"Provicia:"}),(0,m.jsx)("span",{children:n.provincia})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-bold",children:"Email:"}),(0,m.jsx)("span",{children:n.email})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-bold",children:"Indirizzo:"}),(0,m.jsx)("span",{children:n.indirizzo})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{children:"Numero di telefono:"}),(0,m.jsx)("span",{children:n.numero_telefono})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{className:"font-bold",children:"Codice catastale:"}),(0,m.jsx)("span",{children:n.codice_catastale})]})]}),(0,m.jsxs)("div",{className:"flex justify-between py-1",children:[(0,m.jsx)(u.rU,{to:"/form_ente/".concat(n.id),children:"Aggiorna l'ente"}),(0,m.jsx)(u.rU,{to:"/detail_ente/".concat(n.id),children:"Dettaglio dell'ente"})]})]},i)},j=i(4518),g=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),i=n[0],s=n[1],o=(0,c.useCallback)((function(e){var n=e.enti;s((function(){return(0,t.Z)(n)}))}),[]),u=(0,c.useState)(0),x=(0,r.Z)(u,2),g=x[0],v=x[1],b=(0,l.ji)(g,9,i),N=b.pageCount,C=b.currentItems,w=(0,a.Z)(o),Z=w.isLoading,_=w.sendRequest;return(0,c.useEffect)((function(){_({url:"".concat(l.v2,"/api/cienneffe/ente")})}),[_]),(0,m.jsxs)("div",{className:"height-custom flex flex-col items-center",children:[(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{}),(0,m.jsx)("h1",{children:"Enti"}),(0,m.jsx)("div",{children:(0,m.jsx)(d._p,{currentItems:C,pageCount:N,handlePageClick:function(e){var n=9*e.selected%i.length;v(n)}})}),(0,m.jsx)("div",{className:"flex justify-center",children:0===C.length&&!Z&&(0,m.jsx)("img",{src:j,alt:"done image",width:"200px",height:"200px"})})]}),(0,m.jsx)(h,{children:(0,m.jsx)(m.Fragment,{children:C&&!Z?null===C||void 0===C?void 0:C.map((function(e,n){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d.Zb,{taxunit:e,id:n,path:"delete/ente",current:i,setCurrent:s,children:(0,m.jsx)(p,{id:n,ente:e})})})})):(0,m.jsx)(d.GX,{})})})]})},v=(0,c.memo)(g)}}]);
//# sourceMappingURL=80.03503068.chunk.js.map