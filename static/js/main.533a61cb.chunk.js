(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(8),i=t.n(a),o=(t(23),t(7)),s=t(34),j=t(32),d=t(33),u=t(35),l=(t(24),t(1)),b=function(){var e=Object(c.useState)(1500),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(t),i=Object(o.a)(a,2),b=i[0],O=i[1],f=Object(c.useState)(!1),h=Object(o.a)(f,2),v=h[0],x=h[1];Object(c.useEffect)((function(){var e=b>0&&v&&setInterval((function(){return O(b-1)}),1e3);return function(){return clearInterval(e)}}),[b,v]),Object(c.useEffect)((function(){k()}),[t]);var k=function(){x(!1),O(t)},m=function(e){r(e)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(s.a,{bg:"dark",variant:"dark",children:Object(l.jsx)(j.a,{children:Object(l.jsx)(s.a.Brand,{children:"Pomodoro v2.0"})})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"center-element",children:[Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u.a,{variant:"secondary",onClick:function(){return m(1500)},children:"Pomodorro"}),Object(l.jsx)(u.a,{variant:"secondary",onClick:function(){return m(300)},children:"Short Break"}),Object(l.jsx)(u.a,{variant:"secondary",onClick:function(){return m(900)},children:"Long Break"})]}),Object(l.jsx)("div",{className:"clock",children:Math.floor(b/60)+":"+(b%60?b%60:"00")}),Object(l.jsxs)("div",{className:"timer-buttons",children:[Object(l.jsx)(u.a,{variant:"dark",onClick:function(){x(!0)},children:"Start"}),Object(l.jsx)(u.a,{variant:"dark",onClick:function(){x(!1)},children:"Pause"}),Object(l.jsx)(u.a,{variant:"dark",onClick:k,children:"Reset"})]})]})})]})},O=function(){return Object(l.jsx)(b,{})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};t(28);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.533a61cb.chunk.js.map