(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[3],{293:function(e,t,s){e.exports={ava:"ProfileInfo_ava__tZYWH",description:"ProfileInfo_description__1qwuq",contact:"ProfileInfo_contact__2pRbW"}},294:function(e,t,s){e.exports={posts:"MyPosts_posts__3CIJV",postsBlock:"MyPosts_postsBlock__3FvNT"}},295:function(e,t,s){e.exports={item:"Post_item__2krKm"}},298:function(e,t,s){"use strict";s.r(t);var c=s(3),i=s(38),n=s(39),o=s(41),r=s(40),a=s(1),j=s.n(a),l=s(97),u=s(293),b=s.n(u),d=s(51),p=s(0),h=(j.a.Component,function(e){var t=Object(a.useState)(!1),s=Object(l.a)(t,2),c=s[0],i=s[1],n=Object(a.useState)(e.status),o=Object(l.a)(n,2),r=o[0],j=o[1];Object(a.useEffect)((function(){j(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[!c&&Object(p.jsx)("div",{children:Object(p.jsx)("span",{onDoubleClick:function(){i(!0)},children:e.status||"No status"})}),c&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(r)},onChange:function(e){j(e.currentTarget.value)},value:r})})]})}),O=s(118),f=s(130),x=s(131),m=s(34),v=s(53),P=s.n(v),g=Object(x.a)({form:"edit-profile"})((function(e){return console.log(e),Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[e.error?Object(p.jsx)("div",{className:P.a.summaryErrorForm,children:e.error}):"",Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:e.activateEditMode,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})}),"\u0418\u0417\u041c\u0415\u041d\u0415\u041d\u0418\u0415",Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041b\u043e\u0433\u0438\u043d:"})," ",Object(p.jsx)(f.a,{name:"fullName",component:m.a})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u0418\u0449\u0443 \u043b\u0438 \u044f \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",Object(p.jsx)(f.a,{name:"lookingForAJob",component:m.a,type:"checkbox"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:"})," ",Object(p.jsx)(f.a,{name:"lookingForAJobDescription",component:m.b,type:"checkbox"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",Object(p.jsx)(f.a,{name:"aboutMe",component:m.b})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(e.profile.contacts).map((function(e){return Object(p.jsxs)("div",{children:[e,": ",Object(p.jsx)(f.a,{name:"contacts."+e,component:m.a})]},e)}))]})]})})),k=function(e){return Object(p.jsxs)("div",{children:[e.isOwner?Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:e.activateEditMode,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}):"",Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041b\u043e\u0433\u0438\u043d:"})," ",e.profile.fullName]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u0418\u0449\u0443 \u043b\u0438 \u044f \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",e.profile.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",e.profile.aboutMe]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(e.profile.contacts).map((function(t){return Object(p.jsx)(S,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},S=function(e){return Object(p.jsxs)("div",{className:b.a.contact,children:[Object(p.jsxs)("b",{children:[e.contactTitle,":"]}),e.contactValue]})},_=function(e){var t=Object(a.useState)(!1),s=Object(l.a)(t,2),c=s[0],i=s[1];if(console.log(e.profile),!e.profile)return Object(p.jsx)(d.a,{});return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"https://via.placeholder.com/900x200"})}),Object(p.jsxs)("div",{className:b.a.description,children:[Object(p.jsx)("img",{className:b.a.ava,src:e.profile.photos.large||O.a}),Object(p.jsx)("div",{children:e.isOwner?Object(p.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}):""}),c?Object(p.jsx)(g,{initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){i(!1)}))},profile:e.profile}):Object(p.jsx)(k,{isOwner:e.isOwner,profile:e.profile,activateEditMode:function(){i(!0)}})]}),Object(p.jsx)(h,{status:e.status,updateStatus:e.updateStatus})]})},y=s(75),w=s(294),I=s.n(w),N=s(295),D=s.n(N),T=function(e){return Object(p.jsxs)("div",{className:D.a.item,children:[Object(p.jsx)("img",{src:"https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic"}),e.message,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Like"})," ",e.likes]})]})},M=s(44),C=Object(M.a)(10),A=Object(x.a)({form:"AddPost"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(f.a,{name:"postText",component:m.b,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[M.b,C]})}),Object(p.jsx)("div",{children:Object(p.jsx)(f.a,{component:"button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})})]})})),E=function(e){var t=e.posts.map((function(e){return Object(p.jsx)(T,{likes:e.likes,message:e.message},e.id)}));return Object(p.jsxs)("div",{className:I.a.postsBlock,children:[Object(p.jsx)("h2",{children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),Object(p.jsx)(A,{onSubmit:function(t){e.addPost(t.postText)}}),Object(p.jsx)("div",{className:I.a.posts,children:t})]})},F=s(12),J=Object(F.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(y.a)(t))}}}))(E),B=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(_,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(p.jsx)(J,{})]})},R=s(9),U=s(10),V=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"updateProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authUserID)||this.props.history.push("/login"),this.props.getUsersProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userID!==e.match.params.userID&&this.updateProfile()}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(B,Object(c.a)(Object(c.a)({isOwner:!this.props.match.params.userID},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))})}}]),s}(j.a.Component);t.default=Object(U.d)(Object(F.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserID:e.auth.userId,isAuth:e.auth.isAuth}}),{getUsersProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),R.f)(V)}}]);
//# sourceMappingURL=3.57ffd1e4.chunk.js.map