(this["webpackJsonphello-hooks"]=this["webpackJsonphello-hooks"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(15),i=n.n(s),r=(n(22),n(4)),o=n(6),l=n.n(o),u=n(16),j=n(3),b=(n(24),n(17)),m=n.n(b),d=(n(43),n(0)),O=function(e){var t=e.posts;return e.loading?Object(d.jsx)("h2",{children:"Loading..."}):Object(d.jsx)("ul",{className:"listGroup",children:t.map((function(e){return Object(d.jsx)("li",{className:"listItem",children:e.title},"post.id")}))})},h=(n(45),function(e){for(var t=e.postPerPage,n=e.totalPosts,c=e.paginate,a=e.currentPage,s=e.maxPageNumberLimit,i=e.minPageNumberLimit,r=e.setCurrentPage,o=e.setMaxPageNumberLimit,l=e.pageNumberLimit,u=e.setMinPageNumberLimit,j=e.setPostPerPage,b=[],m=1;m<=Math.ceil(n/t);m++)b.push(m);var O=function(){r(a+1),a+1>s&&(o(s+l),u(i+l))},h=function(){r(a-1),(a-1)%l==0&&(o(s-l),u(i-l))};return Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:"btn",children:Object(d.jsx)("button",{onClick:h,children:"Prev"})}),i>=1?Object(d.jsx)("li",{className:"dots",onClick:function(){console.log("It working DECREASING!"),h()},children:"..."}):null,b.map((function(e){if(e<s+1&&e>i)return Object(d.jsx)("li",{className:a==e?"active":null,children:Object(d.jsx)("a",{onClick:function(t){t.preventDefault(),c(e)},href:"",children:e})},e)})),b.length>s?Object(d.jsx)("li",{className:"dots",onClick:function(){console.log("It working INCREASING!"),O()},children:"..."}):null,Object(d.jsx)("li",{className:"btn",children:Object(d.jsx)("button",{onClick:O,children:"Next"})})]}),Object(d.jsxs)("div",{className:"loadBtns",children:[Object(d.jsx)("button",{className:"loadmore",onClick:function(e){e.preventDefault(),j(t+5)},children:"Load more"}),Object(d.jsx)("button",{disabled:t<=5,className:"loadless",onClick:function(e){e.preventDefault(),j(t-5)},children:"Load less"})]})]})}),g=function(){var e,t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),b=o[0],g=o[1],f=Object(c.useState)(1),p=Object(j.a)(f,2),x=p[0],N=p[1],P=Object(c.useState)(5),v=Object(j.a)(P,2),k=v[0],L=v[1],C=Object(c.useState)(5),S=Object(j.a)(C,2),I=S[0],M=(S[1],Object(c.useState)(5)),w=Object(j.a)(M,2),y=w[0],E=w[1],D=Object(c.useState)(0),G=Object(j.a)(D,2),A=G[0],B=G[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,m.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,s(t.data),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var J=x*k,R=J-k,H=a.slice(R,J);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"blogHeader",children:"My Story Titles"}),Object(d.jsx)(O,{posts:H,loading:b}),Object(d.jsx)(h,(e={currentPage:x,postPerPage:k,totalPosts:a.length,paginate:function(e){return N(e)},maxPageNumberLimit:y,minPageNumberLimit:A,setCurrentPage:N,setMaxPageNumberLimit:E,pageNumberLimit:I},Object(r.a)(e,"minPageNumberLimit",A),Object(r.a)(e,"setMinPageNumberLimit",B),Object(r.a)(e,"setPostPerPage",L),e))]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f91d32f5.chunk.js.map