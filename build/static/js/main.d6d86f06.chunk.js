(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,r){"use strict";r.r(t);var s=r(10),a=r(0),n=r(11),c=r(5),i=r(6),u=r(8),l=r(7),d=r(1),j=r.n(d),o=r(9),h=r.n(o);r(18);function b(e){return Object(a.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var O=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(e){var s;return Object(c.a)(this,r),(s=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},s}return Object(i.a)(r,[{key:"handleClick",value:function(e){var t=Object(n.a)(this.state.squares);x(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(a.jsx)(b,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=x(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"status",children:e}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(j.a.Component),v=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"game-board",children:Object(a.jsx)(O,{})}),Object(a.jsxs)("div",{className:"game-info",children:[Object(a.jsx)("div",{}),Object(a.jsx)("ol",{})]})]})}}]),r}(j.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),n=a[0],c=a[1],i=a[2];if(e[n]&&e[n]===e[c]&&e[n]===e[i])return e[n]}return null}h.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))},18:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.d6d86f06.chunk.js.map