(this["webpackJsonphoblist-app"]=this["webpackJsonphoblist-app"]||[]).push([[0],{37:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(28),n=c.n(r),l=c(5),i=c(16),o=c.n(i),j=c(29),d=c(10),b=(c(37),c(8)),m=c(0),h=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark px-5 py-8",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(b.b,{className:"navbar-brand",to:"/home",children:"MovieList"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(m.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(m.jsx)(b.b,{className:"nav-link",to:"/home",children:"Home"}),Object(m.jsx)(b.b,{className:"nav-link",to:"/signup",children:"Signup"}),Object(m.jsx)(b.b,{className:"nav-link",to:"/login",children:"Login"}),Object(m.jsx)(b.b,{className:"nav-link",to:"/company-info",children:"Company Info"})]})})]})})})},x=function(e){var t=e.movie;return console.log(t),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"card ",children:Object(m.jsxs)("div",{className:"card-body list-body ",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-1 col-2 text-center",style:{paddingRight:"0px",paddingLeft:"1px"},children:[Object(m.jsx)("input",{type:"hidden"}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12 col-12",children:Object(m.jsx)("span",{style:{cursor:"pointer"},className:"listVoting upvote",children:Object(m.jsx)("i",{className:"icon-arrow-up icon-3x"})})})}),Object(m.jsx)("strong",{children:Object(m.jsx)("span",{className:"likes-count",children:"1"})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12 col-12",children:Object(m.jsx)("span",{style:{cursor:"pointer"},className:"listVoting downvote",children:Object(m.jsx)("i",{className:"icon-arrow-down icon-3x"})})})}),"Votes",Object(m.jsx)("br",{})]}),Object(m.jsx)("div",{className:"col-md-2 col-4 col-lg-2 img_poster_div_5cc2b804aaa88948c547ae14",children:Object(m.jsx)("img",{style:{width:"100%"},alt:t.poster.title,src:t.poster,"data-src":t.poster,title:t.title})}),Object(m.jsxs)("div",{style:{textAlign:"left"},className:"col-md-8 col-6 col-lg-8 cardDiv",children:[Object(m.jsx)("h3",{style:{marginBottom:"0px"},title:t.title,children:t.title}),Object(m.jsxs)("p",{className:"capitalize text-limit",title:t.genre,children:[Object(m.jsx)("strong",{children:"Genre: "}),t.genre]}),Object(m.jsxs)("p",{className:"capitalize text-limit",title:t.director,children:[Object(m.jsx)("strong",{children:"Director: "}),t.director]}),Object(m.jsxs)("p",{className:"capitalize text-limit",title:t.stars,children:[Object(m.jsx)("strong",{children:"Starring: "}),t.stars]}),Object(m.jsxs)("p",{className:"text-limit",title:t.language,children:[Object(m.jsx)("strong",{children:"Language: "}),t.language]}),Object(m.jsx)("div",{className:"text-limit",children:Object(m.jsxs)("p",{style:{color:"#2196f3"},className:"text-limit getVotedUser",children:[t.pageViews," views |"," ",t.releasedDate=(new Date).toLocaleDateString()," | Voted by ",t.totalVoted," people"]})}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary btn-lg ",children:"Watch Trailer"})]})]}),Object(m.jsx)("hr",{style:{marginTop:"5px",marginBottom:"5px"}})]})})})},p=c.p+"static/media/spinner.11d9cde8.gif",u=function(){return Object(m.jsx)("img",{src:p,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},O=function(e){var t=e.movies;return e.isLoading?Object(m.jsx)(u,{}):Object(m.jsx)("section",{className:"cards",children:t.map((function(e){return Object(m.jsx)(x,{movie:e},e._id)}))})},g=c(12),v=function(){var e=Object(a.useState)({name:"",email:"",password:"",confirm_password:"",telNo:"",error:"",success:!1}),t=Object(d.a)(e,2),c=t[0],s=t[1],r=c.name,n=c.email,i=c.password,o=c.confirm_password,j=c.telNo,h=(c.error,c.success),x=function(e){return function(t){s(Object(l.a)(Object(l.a)({},c),{},Object(g.a)({error:!1},e,t.target.value)))}};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"signup-form",children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(Object(l.a)(Object(l.a)({},c),{},{error:!1,success:!0})),localStorage.setItem("name",r),localStorage.setItem("email",n),localStorage.setItem("password",i),localStorage.setItem("confirm_password",o),localStorage.setItem("telNo",j),localStorage.setItem("success",!(!n||!i)),e.target.reset()},children:[Object(m.jsx)("h2",{children:"Sign Up"}),Object(m.jsx)("p",{children:"Please fill in this form to create an account!"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-xs-6",children:Object(m.jsx)("input",{onChange:x("name"),type:"text",className:"form-control",name:"name",placeholder:"Your Name",required:"required",value:r})})})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{onChange:x("email"),type:"email",className:"form-control",name:"email",placeholder:"Email",required:"required"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{onChange:x("password"),type:"password",className:"form-control",name:"password",placeholder:"Password",required:"required"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{onChange:x("confirm_password"),type:"password",className:"form-control",name:"confirm_password",placeholder:"Confirm Password",required:"required"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{onChange:x("telNo"),type:"tel",className:"form-control",name:"telNo",placeholder:"Phone no must be 6 to 10 digit",required:"required"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{htmlFor:"",className:"checkbox-inline",children:[Object(m.jsx)("input",{type:"checkbox"})," I accept the",Object(m.jsx)("a",{href:"#",children:"Terms of Use"})," & ",Object(m.jsx)("a",{href:"#",children:"Privacy Policy"})]})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg",children:"Sign Up"})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(m.jsxs)("div",{className:"alert alert-success",style:{display:h?"":"none"},children:["New account was created successfully. Please",Object(m.jsx)(b.b,{to:"/login",children:"Login Here"})]})})})]}),Object(m.jsxs)("div",{className:"hint-text",children:["Already have an account? ",Object(m.jsx)("a",{href:"/login",children:"Login Here"})]})]})})},f=c(2),N=function(){var e=Object(a.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),t=Object(d.a)(e,2),c=t[0],s=t[1],r=c.email,n=c.password,i=(c.error,c.loading),o=(c.didRedirect,function(e){return function(t){s(Object(l.a)(Object(l.a)({},c),{},Object(g.a)({error:!1},e,t.target.value)))}});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"login-form",children:[Object(m.jsxs)("form",{action:"",children:[Object(m.jsx)("h2",{className:"text-center",children:"Log in"}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{onChange:o("email"),value:r,type:"email",className:"form-control control-login",placeholder:"email",required:"required"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{onChange:o("password"),value:n,type:"password",className:"form-control",placeholder:"Password",required:"required"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),s(Object(l.a)(Object(l.a)({},c),{},{error:!1,loading:!0})),localStorage.getItem("email",r),localStorage.getItem("password",n),localStorage.getItem("loading",!r||!n)},className:"btn btn-primary btn-block",children:"Log In"})}),Object(m.jsxs)("div",{className:"clearfix",children:[Object(m.jsxs)("label",{htmlFor:"",className:"pull-left checkbox-inline",children:[Object(m.jsx)("input",{type:"checkbox"}),"Remember me"]}),Object(m.jsx)("a",{href:"#",className:"pull-right",children:"Forgot Password?"})]}),i&&Object(m.jsx)("div",{className:"alert alert-info",children:Object(m.jsx)("h4",{children:"Login Successfully"})}),!0===i?Object(m.jsx)(f.a,{to:"/home"}):Object(m.jsx)(f.a,{to:"/login"})]}),Object(m.jsx)("p",{className:"text-center",children:Object(m.jsx)("a",{href:"/signup",children:"Create an Account"})})]})})},y=function(){return Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("h1",{className:"head",children:"Company Info"}),Object(m.jsx)("h1",{className:"company",children:"Company: Geeksynergy Technologies Pvt Ltd"}),Object(m.jsx)("h2",{className:"address",children:"Address: Sanjayanagar, Bengaluru-56"}),Object(m.jsx)("h3",{className:"phone",children:"Phone: XXXXXXXXX09"}),Object(m.jsx)("h3",{className:"email",children:"Email: XXXXXX@gmail.com"})]})},w=function(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("span",{className:"text-muted",children:["\xa9 ",(new Date).getFullYear()," Made With \u2764\ufe0f by",Object(m.jsx)("span",{className:"text-white",children:" SURAJ"}),"."]})})},S=c(31),k=c.n(S);var L=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!0),n=Object(d.a)(r,2),i=n[0],b=n[1],x=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("".concat("https://hoblist.com/movieList"),{category:"movies",language:"Kannada",genre:"all",sort:"voting"}).then((function(e){var t=e.data.result;s(t),b(!1)})).catch((function(e){return console.error("error: ".concat(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{}),Object(m.jsxs)(f.d,{children:[Object(m.jsx)(f.b,{exact:!0,path:"/",children:Object(m.jsx)(f.a,{to:"/signup"})}),Object(m.jsx)(f.b,{exact:!0,path:"/home",render:function(e){return Object(m.jsx)(O,Object(l.a)(Object(l.a)({},e),{},{isLoading:i,movies:c}))}}),Object(m.jsx)(f.b,{exact:!0,path:"/signup",component:v}),Object(m.jsx)(f.b,{exact:!0,path:"/login",component:N}),Object(m.jsx)(f.b,{exact:!0,path:"/company-info",component:y})]}),Object(m.jsx)(w,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(L,{})})}),document.getElementById("root")),C()}},[[62,1,2]]]);
//# sourceMappingURL=main.bb6b3490.chunk.js.map