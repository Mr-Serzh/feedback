(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,n){e.exports={list:"Statistics_list__1Uc17",item:"Statistics_item__zhDIO"}},,,function(e,t,n){e.exports={button:"FeedbackOptions_button__1ySQR",glowing:"FeedbackOptions_glowing__EEIuL"}},function(e,t,n){e.exports={title:"Section_title__1BhmG"}},,,,,function(e,t,n){e.exports={container:"Container_container__1QinQ"}},function(e,t,n){e.exports={container:"FeedbackCard_container__2gRHm",moveGradient:"FeedbackCard_moveGradient__2deyn"}},,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),i=n.n(c),s=n(6),o=n.n(s),r=(n(19),n(20),n(7)),l=n(8),d=n(9),u=n(13),b=n(12),j=n(10),h=n.n(j);function O(e){var t=e.children;return Object(a.jsx)("div",{className:h.a.container,children:t})}var v=n(11),m=n.n(v);function x(e){var t=e.children;return Object(a.jsx)("div",{className:m.a.container,children:t})}var f=n(23),p=n(4),k=n.n(p);function _(e){var t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);return Object(a.jsx)("div",{className:k.a.buttonBox,children:c.map((function(e){return Object(a.jsx)("button",{className:k.a.button,type:"button",onClick:function(){n(e)},children:"".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1).toLowerCase())},Object(f.a)())}))})}function g(e){var t=e.message;return Object(a.jsx)("p",{children:t})}var N=n(5),F=n.n(N);function y(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{className:F.a.sectionBlock,children:[Object(a.jsx)("h1",{className:F.a.title,children:t}),n]})}var C=n(1),w=n.n(C);function P(e){var t=e.good,n=e.neutral,c=e.bad,i=e.total,s=e.positivePercentage;return Object(a.jsxs)("ul",{className:w.a.list,children:[Object(a.jsxs)("li",{className:w.a.item,children:["Good: ",t]}),Object(a.jsxs)("li",{className:w.a.item,children:["Neutral: ",n]}),Object(a.jsxs)("li",{className:w.a.item,children:["Bad: ",c]}),Object(a.jsxs)("li",{className:w.a.item,children:["Total: ",i]}),Object(a.jsxs)("li",{className:w.a.item,children:["Pozitive feedback: ",s,"%"]})]})}var S=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(O,{children:Object(a.jsxs)(x,{children:[Object(a.jsx)(y,{title:"Please leave feedback",children:Object(a.jsx)(_,{options:this.state,onLeaveFeedback:this.handleClick})}),Object(a.jsx)(y,{title:"Statistics",children:0===this.countTotalFeedback()?Object(a.jsx)(g,{message:"No one reported yet"}):Object(a.jsx)(P,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})})}}]),n}(c.Component);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.792dd719.chunk.js.map