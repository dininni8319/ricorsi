"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[994],{4994:function(e,i,n){n.r(i);var s=n(885),t=n(3504),l=n(2791),a=n(6871),c=n(8194),o=n(1015),r=n(1806),d=n(1834),u=n(2925),x=n(9806),h=n(1632),p=n(184),j=function(){var e=(0,l.useState)(),i=(0,s.Z)(e,2),n=i[0],j=i[1],f=(0,a.UO)().slug,v=(0,a.s0)(),m=(0,l.useContext)(d.E).api_urls.backend,g=(0,l.useCallback)((function(e){var i=e.servizio;j(i)}),[]),b=(0,u.Z)(g).sendRequest;(0,l.useEffect)((function(){b({url:"".concat(m,"/api/cienneffe/detail_servizio/").concat(f)})}),[b]);var k=function(e){e.preventDefault(),C({url:"".concat(c.v2,"/api/cienneffe/servizio/delete/").concat(f),method:"DELETE",headers:{"Content-Type":"application/json"}}),v("/")},C=(0,u.Z)(k).sendRequest;return(0,p.jsxs)(o.c,{children:[(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("h1",{className:"mb-2 text-center",children:["Tipologia servizi: ",(0,p.jsx)("span",{children:null===n||void 0===n?void 0:n.tipologia_servizi})]}),n?(0,p.jsx)(r.Hb,{slug:f,children:(0,p.jsxs)("ul",{className:"ul-detail-style",children:[(0,p.jsxs)("li",{children:["Tipologia di attivit\xe0:"," ",(0,p.jsx)("span",{children:n.tipologia_attivita})]}),(0,p.jsxs)("li",{children:["Contro deduzioni Taxunit:"," ",(0,p.jsx)("span",{children:n.aggio})]}),(0,p.jsxs)("li",{children:["Contro deduzioni uff. Legale:"," ",(0,p.jsx)("span",{children:n.spese_postali})]}),(0,p.jsxs)("li",{children:["Sede: ",(0,p.jsx)("span",{children:n.oneri})]}),(0,p.jsxs)("li",{children:["Esito: ",(0,p.jsx)("span",{children:n.altri_diritti})]}),(0,p.jsxs)("li",{children:["Esito definitivo:"," ",(0,p.jsx)("span",{children:n.cig})]})]})}):(0,p.jsx)(r.GX,{})]}),(0,p.jsx)("section",{className:"links-detail-page mt-5",children:(0,p.jsxs)("div",{className:"md:flex md:justify-between md:items-end py-2",children:[(0,p.jsx)(t.rU,{to:"/detail_ente/".concat(null===n||void 0===n?void 0:n.ente_id),children:"Dettaglio Ente"}),(0,p.jsx)("button",{onClick:function(e){return k(e)},className:"text-red-600 outline-none cursor-pointer w-18 px-3 py-2 font-semibold",children:(0,p.jsx)(x.G,{icon:h.I7k,className:"fa-1x"})})]})})]})};i.default=(0,l.memo)(j)}}]);
//# sourceMappingURL=994.835a6685.chunk.js.map