(function(){"use strict";var e={1103:function(e,t,s){s.d(t,{Z:function(){return n}});var r=s(2482),o=s(1084);class n{constructor(){(0,r.Z)(this,"_oAuthNGoogleUrl",void 0),(0,r.Z)(this,"_oAuthNFacebookUrl",void 0),(0,r.Z)(this,"_oAuthNGithubUrl",void 0),(0,r.Z)(this,"_oAuthNTwitterUrl",void 0),(0,r.Z)(this,"_oAuthNSinaUrl",void 0),(0,r.Z)(this,"_oAuthNQQUrl",void 0),this._oAuthNGoogleUrl=o.Z.oAuthNGoogleUrl,this._oAuthNFacebookUrl=o.Z.oAuthNFacebookUrl,this._oAuthNGithubUrl=o.Z.oAuthNGithubUrl,this._oAuthNTwitterUrl=o.Z.oAuthNTwitterUrl,this._oAuthNSinaUrl=o.Z.oAuthNSinaUrl,this._oAuthNQQUrl=o.Z.oAuthNQQUrl}get oAuthNGoogleUrl(){return this._oAuthNGoogleUrl}get oAuthNFacebookUrl(){return this._oAuthNFacebookUrl}get oAuthNGithubUrl(){return this._oAuthNGithubUrl}get oAuthNTwitterUrl(){return this._oAuthNTwitterUrl}get oAuthNSinaUrl(){return this._oAuthNSinaUrl}get oAuthNQQUrl(){return this._oAuthNQQUrl}}},3952:function(e,t,s){var r=s(9242),o=s(7139),n=s(6265),i=s.n(n);const a={namespaced:!0,state(){return{count:0}},mutations:{increment(e){e.count++},add(e,t){console.log("add.... in mutations"),e.count++}},actions:{add(e,t){console.log("add.... in actions"),e.commit("add",t)},serverApi(e){i().get("https://api.uixsj.cn/hitokoto/get?type=social").then((e=>{console.log("server response:",e.data)}),(e=>{alert(e.message)}))}},getters:{getComplexValue(e){return e.count+8}}};var l=a,c=(0,o.MT)({modules:{testOptions:l}}),d=s(678),u=s(3396);const m={class:"container"};function h(e,t,s,r,o,n){return(0,u.wg)(),(0,u.iD)("div",m)}var p=s(6050);function f(e){return!e&&(void 0===e||("null"===e||("NULL"===e||(null===e||(""===e||(0===e.length||"undefined"===typeof e))))))}const w=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/,g=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,}$/;function v(e){return w.test(e)}function y(e){if(f(e))return!1;const t=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/,s=new RegExp(t);return 1==s.test(e+"")}function _(e){if(f(e))return!1;const t=new RegExp(g);return 1==t.test(e)}var b=s(1084);function A(e){if(f(e))return!1;if(!y(e))return!1;for(let t=0;t<b.Z.allowReturnUrls.length;t++)if((e+"").startsWith(b.Z.allowReturnUrls[t]))return!0;return!1}function k(e,t){const s=sessionStorage.getItem("return_url");if(!f(s)&&y(s))return A(s)?void((s+"").indexOf("?")>0?window.location.replace(s+"&access_token="+e+"&signature="+t):window.location.replace(s+"?access_token="+e+"&signature="+t)):void alert("invalid return url:"+s);p.Z.log("goto the default return url:"+b.Z.default_returnUrl),window.location.replace(b.Z.default_returnUrl+"?access_token="+e+"&signature="+t)}var P=(0,u.aZ)({props:{access_token:{type:String,required:!1},signature:{type:String,required:!1},code:{type:String,required:!1},msg:{type:String,required:!1}},components:{},data(){return{}},mounted(){p.Z.log("....auth done"),f(this.access_token)||f(this.signature)?f(this.msg)?this.$router.replace({name:"Login",params:{}}):Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:""+this.msg}).then((e=>{e.isConfirmed&&this.$router.replace({name:"Login",params:{}})})):k(this.access_token+"",this.signature+"")},methods:{}}),E=s(89);const x=(0,E.Z)(P,[["render",h]]);var Z=x;const S={id:"layoutAuthentication"},U={id:"layoutAuthentication_content"},O={class:"container-xl px-4"},L={class:"row justify-content-center"},R={class:"col-xl-5 col-lg-6 col-md-8 col-sm-11"},C={class:"card my-5"},N={class:"card-body p-5 text-center"},j=(0,u._)("div",{class:"h3 fw-light mb-3"},"Sign In",-1),B=(0,u._)("hr",{class:"my-0"},null,-1),T={class:"card-body p-5"},K={class:"mb-3"},W=(0,u._)("label",{class:"text-gray-600 small",for:"email"},"Email address",-1),M={class:"mb-3"},F=(0,u._)("label",{class:"text-gray-600 small",for:"password"},"Password",-1),I={class:"mb-3"},D=(0,u.Uk)("Forgot your password?"),q={class:"row"},V={class:"col-md-6"},G=(0,u.Uk)("PasswordLess Login"),H={class:"col-md-6"},Q=(0,u.Uk)("Activate Account"),$={class:"d-flex align-items-center justify-content-between mb-0",style:{"margin-top":"15px"}},z={class:"form-check"},Y=(0,u._)("label",{class:"form-check-label",for:"checkRememberPassword"},"Remember password",-1),J=(0,u._)("hr",{class:"my-0"},null,-1),X={class:"card-body px-5 py-4"},ee={class:"small text-center"},te=(0,u.Uk)(" New user? "),se=(0,u.Uk)("Create an account!");function re(e,t,s,o,n,i){const a=(0,u.up)("SnsLogin"),l=(0,u.up)("router-link"),c=(0,u.up)("MyFooter");return(0,u.wg)(),(0,u.iD)("div",S,[(0,u._)("div",U,[(0,u._)("main",null,[(0,u._)("div",O,[(0,u._)("div",L,[(0,u._)("div",R,[(0,u._)("div",C,[(0,u._)("div",N,[j,(0,u.Wm)(a)]),B,(0,u._)("div",T,[(0,u._)("form",null,[(0,u._)("div",K,[W,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>this.usr.email=e),class:"form-control form-control-solid",id:"email",type:"text",placeholder:"","aria-label":"Email Address","aria-describedby":"emailExample"},null,512),[[r.nr,this.usr.email]])]),(0,u._)("div",M,[F,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>this.usr.password=e),class:"form-control form-control-solid",id:"password",type:"password",placeholder:"","aria-label":"Password","aria-describedby":"passwordExample"},null,512),[[r.nr,this.usr.password]])]),(0,u._)("div",I,[(0,u.Wm)(l,{class:"small",to:"/ForgotPassword"},{default:(0,u.w5)((()=>[D])),_:1})]),(0,u._)("div",q,[(0,u._)("div",V,[(0,u.Wm)(l,{class:"small",to:"/PasswordLess"},{default:(0,u.w5)((()=>[G])),_:1})]),(0,u._)("div",H,[(0,u.Wm)(l,{class:"small text-right",to:"/ReActivateAccount"},{default:(0,u.w5)((()=>[Q])),_:1})])]),(0,u._)("div",$,[(0,u._)("div",z,[(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>this.usr.kmsi=e),class:"form-check-input",id:"checkRememberPassword",type:"checkbox",value:""},null,512),[[r.e8,this.usr.kmsi]]),Y]),(0,u._)("a",{class:"btn btn-primary",href:"#",onClick:t[3]||(t[3]=(0,r.iM)((e=>this.usr.login()),["prevent"]))},"Login")])])]),J,(0,u._)("div",X,[(0,u._)("div",ee,[te,(0,u.Wm)(l,{class:"small","active-class":"active",to:"/Register"},{default:(0,u.w5)((()=>[se])),_:1})])])])])])])])]),(0,u.Wm)(c)])}var oe=s(2482),ne=s(1059),ie=s(8436);const ae=ie.Z.getUserAPIServer(),le=ae+"/register",ce=ae+"/login",de=ae+"/isPasswordResetKeyExist",ue=ae+"/applyResetPassword",me=ae+"/resendActivationLink",he=ae+"/resetPasswordSendLink",pe=ae+"/passwordLessSendEmailLink";function fe(e,t){console.log("...sendPasswordLessLink"),f(e)?t.onError("Empty Email address!",""):v(e)?i().post(pe,{},{params:{email:e}}).then((e=>{console.log("server response in sendPasswordLessLink:",e.data);const{status:s,code:r,msg:o}=e.data;"success"===s?t.onSend():t.onError(o,r)}),(e=>{console.log("server response in sendPasswordLessLink error:",e),t.onError(e,"")})):t.onError("Invalid Email address!","")}function we(e,t){console.log("...sendResetPasswordLink"),f(e)?t.onError("Empty Email address!",""):v(e)?i().post(he,{},{params:{email:e}}).then((e=>{console.log("server response in sendResetPasswordLink:",e.data);const{status:s,code:r,msg:o}=e.data;"success"===s?t.onSend():t.onError(o,r)}),(e=>{console.log("server response in sendResetPasswordLink error:",e),t.onError(e,"")})):t.onError("Invalid Email address!","")}function ge(e,t){console.log("...sendActivateLinkEmail"),f(e)?t.onError("Empty Email address!",""):v(e)?i().post(me,{},{params:{email:e}}).then((e=>{console.log("server response in sendActivateLinkEmail:",e.data);const{status:s,code:r,msg:o}=e.data;"success"===s?t.onSend():t.onError(o,r)}),(e=>{console.log("server response in sendActivateLinkEmail error:",e),t.onError(e,"")})):t.onError("Invalid Email address!","")}function ve(e,t){console.log("...checkIfPasswdSecretKeyExist"),f(e)?t.onError("secretKey is empty!",""):i().post(de,{},{params:{secretKey:e}}).then((e=>{console.log("server response in checkIfPasswdSecretKeyExist:",e.data);const{status:s,code:r,msg:o}=e.data;"success"===s?t.onExist(!0):t.onError(o,r)}),(e=>{console.log("server response in checkIfPasswdSecretKeyExist error:",e),t.onError(e,"")}))}function ye(e,t,s,r){console.log("...applyPasswdReset..."),f(e)?r.onError("secretKey is empty!",""):f(t)||f(s)?r.onError("Password or ConfirmPassword is Empty!",""):t===s?i().post(ue,{},{params:{secretKey:e,password:t}}).then((e=>{console.log("server response in applyPasswdReset:",e.data);const{status:t,code:s,msg:o}=e.data;"success"===t?r.onReset():r.onError(o,s)}),(e=>{console.log("server response in applyPasswdReset error:",e),r.onError(e,"")})):r.onError("Password and ConfirmPassword does not match!","")}function _e(e,t,s){f(e)?s.onError("email is empty!",""):v(e)?f(t)?s.onError("password is empty!",""):i().post(ce,JSON.stringify({email:e,password:ne.V.init(t)}),{headers:{"Content-Type":"application/json"}}).then((e=>{p.Z.log("server response:",e.data),e.data.access_token?s.onSuccess(e.data.access_token,e.data.signature):s.onError(e.data.msg,e.data.code)}),(e=>{s.onError(e.message,"")})):s.onError("please enter correct email address!","")}function be(e,t,s,r){f(e)?r.onError("email is empty!",""):v(e)?t===s?_(t)?i().post(le,JSON.stringify({name:"zhangsan",email:e,password:ne.V.init(t).toLowerCase()}),{headers:{"Content-Type":"application/json"}}).then((e=>{console.log("server response:",e.data),"ok"===e.data.status?r.onSuccess(e.data.id):r.onError(e.data.msg,e.data.code)}),(e=>{r.onError(e,"")})):r.onError("Password security does not match our requirement !",""):r.onError("Password does not match !",""):r.onError("Please enter correct email!","")}var Ae=s(6520),ke=s(1096),Pe=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};class Ee{constructor(){(0,oe.Z)(this,"email",void 0),(0,oe.Z)(this,"password",void 0),(0,oe.Z)(this,"kmsi",void 0),(0,oe.Z)(this,"router",void 0),this.email="",this.password="",this.kmsi=!1,this.router=(0,d.tv)()}login(){Swal.showLoading(),_e(this.email,this.password,{onError:(e,t)=>{Swal.close(),Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:""+e,allowOutsideClick:!1,footer:""+t}).then((e=>{e.isConfirmed&&"1023"===t&&this.router.push({path:"/ReActivateAccount",params:{email:this.email}})}))},onSuccess(e,t){Swal.close(),k(e,t)}})}}let xe=class extends Ae.w3{constructor(...e){super(...e),(0,oe.Z)(this,"usr",new Ee),(0,oe.Z)(this,"return_url",void 0)}mounted(){p.Z.log("return_url :"+this.return_url),A(this.return_url)?(p.Z.log("return_url is good"),sessionStorage.setItem("return_url",this.$route.query.return_url+"")):(p.Z.log("return_url null or invalid"),sessionStorage.removeItem("return_url"))}};Pe([(0,ke.fI)()],xe.prototype,"return_url",void 0),xe=Pe([(0,Ae.Ei)({components:{MyFooter:(0,u.RC)((()=>s.e(659).then(s.bind(s,1659)))),SnsLogin:(0,u.RC)((()=>s.e(693).then(s.bind(s,5693))))}})],xe);var Ze=xe;const Se=(0,E.Z)(Ze,[["render",re]]);var Ue=Se,Oe=s(2268);const Le={id:"layoutAuthentication"},Re={id:"layoutAuthentication_content"},Ce={class:"container-xl px-4"},Ne={class:"row justify-content-center"},je={class:"col-xl-8 col-lg-9"},Be={class:"card my-5"},Te={class:"card-body p-5 text-center"},Ke=(0,u._)("div",{class:"h3 fw-light mb-3"},"Create an Account",-1),We=(0,u._)("div",{class:"small text-muted mb-2"},"Sign in using...",-1),Me=(0,u._)("hr",{class:"my-0"},null,-1),Fe={class:"card-body p-5"},Ie=(0,u._)("div",{class:"text-center small text-muted mb-4"},"OR enter your information below.",-1),De={class:"mb-3"},qe=(0,u._)("label",{class:"text-gray-600 small",for:"emailExample"},"Email address",-1),Ve={class:"row gx-3"},Ge={class:"col-md-6"},He={class:"mb-3"},Qe=(0,u._)("label",{class:"text-gray-600 small",for:"passwordExample"},"Password",-1),$e=(0,u._)("div",{id:"regPasswd",class:"invalid-feedback"},[(0,u._)("p",null,"At least 8 Characters"),(0,u._)("p",null,"Letters(Lowercase&uppercase),Numbers"),(0,u._)("p",null,"At least one Special Characters(@$!%*?&.)")],-1),ze={class:"col-md-6"},Ye={class:"mb-3"},Je=(0,u._)("label",{class:"text-gray-600 small",for:"confirmPasswordExample"},"Confirm Password",-1),Xe={class:"d-flex align-items-center justify-content-between"},et={class:"form-check"},tt=(0,u._)("label",{class:"form-check-label",for:"checkTerms"},[(0,u.Uk)(" I accept the "),(0,u._)("a",{href:"#!"},"terms & conditions"),(0,u.Uk)(" . ")],-1),st=(0,u._)("hr",{class:"my-0"},null,-1),rt={class:"card-body px-5 py-4"},ot={class:"small text-center"},nt=(0,u.Uk)(" Have an account? "),it=(0,u.Uk)("Sign in!");function at(e,t,s,o,n,i){const a=(0,u.up)("SnsLogin"),l=(0,u.up)("router-link"),c=(0,u.up)("MyFooter");return(0,u.wg)(),(0,u.iD)("div",Le,[(0,u._)("div",Re,[(0,u._)("main",null,[(0,u._)("div",Ce,[(0,u._)("div",Ne,[(0,u._)("div",je,[(0,u._)("div",Be,[(0,u._)("div",Te,[Ke,We,(0,u.Wm)(a)]),Me,(0,u._)("div",Fe,[Ie,(0,u._)("form",null,[(0,u.kq)("",!0),(0,u._)("div",De,[qe,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>this.registerBean.email=e),class:"form-control form-control-solid",id:"emailExample",type:"text",placeholder:"","aria-label":"Email Address","aria-describedby":"emailExample"},null,512),[[r.nr,this.registerBean.email]])]),(0,u._)("div",Ve,[(0,u._)("div",Ge,[(0,u._)("div",He,[Qe,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>this.registerBean.password=e),class:(0,Oe.C_)([this.registerBean.isPasswordValid()?"":"is-invalid","form-control form-control-solid"]),id:"passwordExample",type:"password",placeholder:"","aria-label":"Password","aria-describedby":"regPasswd"},null,2),[[r.nr,this.registerBean.password]]),$e])]),(0,u._)("div",ze,[(0,u._)("div",Ye,[Je,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>this.registerBean.confirmPassword=e),class:"form-control form-control-solid",id:"confirmPasswordExample",type:"password",placeholder:"","aria-label":"Confirm Password","aria-describedby":"confirmPasswordExample"},null,512),[[r.nr,this.registerBean.confirmPassword]])])])]),(0,u._)("div",Xe,[(0,u._)("div",et,[(0,u.wy)((0,u._)("input",{class:"form-check-input",id:"checkTerms","onUpdate:modelValue":t[5]||(t[5]=e=>this.registerBean.termOfUse=e),type:"checkbox",value:""},null,512),[[r.e8,this.registerBean.termOfUse]]),tt]),(0,u._)("a",{class:"btn btn-primary",onClick:t[6]||(t[6]=(0,r.iM)((e=>this.registerBean.register()),["prevent"])),href:"#"},"Create Account")])])]),st,(0,u._)("div",rt,[(0,u._)("div",ot,[nt,(0,u.Wm)(l,{class:"small","active-class":"active",to:"/Login"},{default:(0,u.w5)((()=>[it])),_:1})])])])])])])])]),(0,u.Wm)(c)])}s(4147);var lt=s(1103),ct=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};class dt{constructor(){(0,oe.Z)(this,"firstName",void 0),(0,oe.Z)(this,"lastName",void 0),(0,oe.Z)(this,"email",void 0),(0,oe.Z)(this,"password",void 0),(0,oe.Z)(this,"confirmPassword",void 0),(0,oe.Z)(this,"termOfUse",void 0),(0,oe.Z)(this,"oAuthNHolder",void 0),(0,oe.Z)(this,"router",void 0),this.firstName="",this.lastName="",this.email="",this.password="",this.confirmPassword="",this.termOfUse=!1,this.oAuthNHolder=new lt.Z,this.router=(0,d.tv)()}isPasswordValid(){return!f(this.password)&&_(this.password)}register(){Swal.showLoading(),be(this.email,this.password,this.confirmPassword,{onError:(e,t)=>{Swal.close(),Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:""+e,allowOutsideClick:!1,footer:""+t})},onSuccess:e=>{Swal.close(),p.Z.log("the new user id is:"+e),Swal.fire({position:"center",icon:"success",title:"Register Successfully,please check your email to activate your account !",showConfirmButton:!0,allowOutsideClick:!1}).then((e=>{e.isConfirmed&&this.router.push({path:"/Login",params:{}})}))}})}}let ut=class extends Ae.w3{constructor(...e){super(...e),(0,oe.Z)(this,"registerBean",new dt)}};ut=ct([(0,Ae.Ei)({components:{MyFooter:(0,u.RC)((()=>s.e(659).then(s.bind(s,1659)))),SnsLogin:(0,u.RC)((()=>s.e(693).then(s.bind(s,5693))))}})],ut);var mt=ut;const ht=(0,E.Z)(mt,[["render",at]]);var pt=ht;const ft={id:"layoutAuthentication"},wt={id:"layoutAuthentication_content"},gt={class:"container-xl px-4"},vt={class:"row justify-content-center"},yt={class:"col-lg-5"},_t={class:"card shadow-lg border-0 rounded-lg mt-5"},bt=(0,u._)("div",{class:"card-header justify-content-center"},[(0,u._)("h3",{class:"fw-light my-4"},"Password Recovery")],-1),At={class:"card-body"},kt=(0,u._)("div",{class:"small mb-3 text-muted"},"Enter your email address and we will send you a link to reset your password. ",-1),Pt={class:"mb-3"},Et=(0,u._)("label",{class:"small mb-1",for:"inputEmailAddress"},"Email",-1),xt={class:"d-flex align-items-center justify-content-between mt-4 mb-0"},Zt=(0,u.Uk)("Return to login"),St={class:"card-footer text-center"},Ut={class:"small"},Ot=(0,u.Uk)("Need an account? Sign up!");function Lt(e,t,s,o,n,i){const a=(0,u.up)("router-link"),l=(0,u.up)("MyFooter");return(0,u.wg)(),(0,u.iD)("div",ft,[(0,u._)("div",wt,[(0,u._)("main",null,[(0,u._)("div",gt,[(0,u._)("div",vt,[(0,u._)("div",yt,[(0,u._)("div",_t,[bt,(0,u._)("div",At,[kt,(0,u._)("form",null,[(0,u._)("div",Pt,[Et,(0,u.wy)((0,u._)("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>this.forgotPasswordBean.email=e),id:"inputEmailAddress",type:"email","aria-describedby":"emailHelp",placeholder:"Enter email address"},null,512),[[r.nr,this.forgotPasswordBean.email]])]),(0,u._)("div",xt,[(0,u.Wm)(a,{class:"small",to:"/Login"},{default:(0,u.w5)((()=>[Zt])),_:1}),(0,u._)("a",{class:"btn btn-primary",onClick:t[1]||(t[1]=(0,r.iM)((e=>this.forgotPasswordBean.resetPassword()),["prevent"])),href:"#"},"Reset Password")])])]),(0,u._)("div",St,[(0,u._)("div",Ut,[(0,u.Wm)(a,{to:"/Register"},{default:(0,u.w5)((()=>[Ot])),_:1})])])])])])])])]),(0,u.Wm)(l)])}var Rt=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};class Ct{constructor(){(0,oe.Z)(this,"email",void 0),(0,oe.Z)(this,"router",void 0),this.email="",this.router=(0,d.tv)()}resetPassword(){const e=this.email;Swal.showLoading(),we(this.email,{onError:(e,t)=>{Swal.close(),Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:e,footer:""+t})},onSend:()=>{Swal.close(),Swal.fire({position:"center",icon:"success",title:"We have send an reset password link to "+e+",please check you mailbox!",showConfirmButton:!0,allowOutsideClick:!1}).then((e=>{e.isConfirmed&&this.router.push({path:"/Login",params:{}})}))}})}}let Nt=class extends Ae.w3{constructor(...e){super(...e),(0,oe.Z)(this,"forgotPasswordBean",new Ct)}mounted(){}};Nt=Rt([(0,Ae.Ei)({components:{MyFooter:(0,u.RC)((()=>s.e(659).then(s.bind(s,1659))))}})],Nt);var jt=Nt;const Bt=(0,E.Z)(jt,[["render",Lt]]);var Tt=Bt;const Kt={id:"layoutAuthentication"},Wt={id:"layoutAuthentication_content"},Mt={class:"container-xl px-4"},Ft={class:"row justify-content-center"},It={class:"col-lg-5"},Dt={class:"card shadow-lg border-0 rounded-lg mt-5"},qt=(0,u._)("div",{class:"card-header justify-content-center"},[(0,u._)("h3",{class:"fw-light my-4"},"Activate Account")],-1),Vt={class:"card-body"},Gt=(0,u._)("div",{class:"small mb-3 text-muted"},"Enter your email address and we will send you a link to Activate your account. ",-1),Ht={class:"mb-3"},Qt=(0,u._)("label",{class:"small mb-1",for:"inputEmailAddress"},"Email",-1),$t={class:"d-flex align-items-center justify-content-between mt-4 mb-0"},zt=(0,u.Uk)("Return to login"),Yt={class:"card-footer text-center"},Jt={class:"small"},Xt=(0,u.Uk)("Need an account? Sign up!");function es(e,t,s,o,n,i){const a=(0,u.up)("router-link"),l=(0,u.up)("MyFooter");return(0,u.wg)(),(0,u.iD)("div",Kt,[(0,u._)("div",Wt,[(0,u._)("main",null,[(0,u._)("div",Mt,[(0,u._)("div",Ft,[(0,u._)("div",It,[(0,u._)("div",Dt,[qt,(0,u._)("div",Vt,[Gt,(0,u._)("form",null,[(0,u._)("div",Ht,[Qt,(0,u.wy)((0,u._)("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>this.reActivateBean.email=e),id:"inputEmailAddress",type:"email","aria-describedby":"emailHelp",placeholder:"Enter email address"},null,512),[[r.nr,this.reActivateBean.email]])]),(0,u._)("div",$t,[(0,u.Wm)(a,{class:"small",to:"/Login"},{default:(0,u.w5)((()=>[zt])),_:1}),(0,u._)("a",{class:"btn btn-primary",onClick:t[1]||(t[1]=(0,r.iM)((e=>this.reActivateBean.activateAccount()),["prevent"])),href:"#"},"Activate")])])]),(0,u._)("div",Yt,[(0,u._)("div",Jt,[(0,u.Wm)(a,{to:"/Register"},{default:(0,u.w5)((()=>[Xt])),_:1})])])])])])])])]),(0,u.Wm)(l)])}var ts=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};class ss{constructor(){(0,oe.Z)(this,"email",void 0),this.email=""}activateAccount(){const e=this.email;Swal.showLoading(),ge(this.email,{onError(e,t){Swal.close(),Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:e,footer:""+t})},onSend(){Swal.close(),Swal.fire({position:"center",icon:"success",title:"We have send an activation link to "+e+",please check you mailbox!",showConfirmButton:!0,allowOutsideClick:!1})}})}}let rs=class extends Ae.w3{constructor(...e){super(...e),(0,oe.Z)(this,"reActivateBean",new ss)}mounted(){}};rs=ts([(0,Ae.Ei)({components:{MyFooter:(0,u.RC)((()=>s.e(659).then(s.bind(s,1659))))}})],rs);var os=rs;const ns=(0,E.Z)(os,[["render",es]]);var is=ns;const as={id:"layoutAuthentication"},ls={id:"layoutAuthentication_content"},cs={class:"container-xl px-4"},ds={class:"row justify-content-center"},us={class:"col-lg-5"},ms={class:"card shadow-lg border-0 rounded-lg mt-5"},hs=(0,u._)("div",{class:"card-header justify-content-center"},[(0,u._)("h3",{class:"fw-light my-4"},"PasswordLess Login")],-1),ps={class:"card-body"},fs=(0,u._)("div",{class:"small mb-3 text-muted"},"Enter your email address and we will send you a link to Login your account. ",-1),ws={class:"mb-3"},gs=(0,u._)("label",{class:"small mb-1",for:"passwdLessEmailAddress"},"Email",-1),vs={class:"d-flex align-items-center justify-content-between mt-4 mb-0"},ys=(0,u.Uk)("Return to login"),_s={class:"card-footer text-center"},bs={class:"small"},As=(0,u.Uk)("Need an account? Sign up!");function ks(e,t,s,o,n,i){const a=(0,u.up)("router-link"),l=(0,u.up)("MyFooter");return(0,u.wg)(),(0,u.iD)("div",as,[(0,u._)("div",ls,[(0,u._)("main",null,[(0,u._)("div",cs,[(0,u._)("div",ds,[(0,u._)("div",us,[(0,u._)("div",ms,[hs,(0,u._)("div",ps,[fs,(0,u._)("form",null,[(0,u._)("div",ws,[gs,(0,u.wy)((0,u._)("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>this.passwordLessBean.email=e),id:"passwdLessEmailAddress",type:"email","aria-describedby":"emailHelp",placeholder:"Enter email address"},null,512),[[r.nr,this.passwordLessBean.email]])]),(0,u._)("div",vs,[(0,u.Wm)(a,{class:"small",to:"/Login"},{default:(0,u.w5)((()=>[ys])),_:1}),(0,u._)("a",{class:"btn btn-primary",onClick:t[1]||(t[1]=(0,r.iM)((e=>this.passwordLessBean.sendEmailLink()),["prevent"])),href:"#"},"Send")])])]),(0,u._)("div",_s,[(0,u._)("div",bs,[(0,u.Wm)(a,{to:"/Register"},{default:(0,u.w5)((()=>[As])),_:1})])])])])])])])]),(0,u.Wm)(l)])}var Ps=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};class Es{constructor(){(0,oe.Z)(this,"email",void 0),this.email=""}sendEmailLink(){const e=this.email;Swal.showLoading(),fe(this.email,{onError(e,t){Swal.close(),Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:e,footer:""+t})},onSend(){Swal.close(),Swal.fire({position:"center",icon:"success",title:"We have send a Login link to "+e+",please check you mailbox!",showConfirmButton:!0,allowOutsideClick:!1})}})}}let xs=class extends Ae.w3{constructor(...e){super(...e),(0,oe.Z)(this,"passwordLessBean",new Es)}mounted(){}};xs=Ps([(0,Ae.Ei)({components:{MyFooter:(0,u.RC)((()=>s.e(659).then(s.bind(s,1659))))}})],xs);var Zs=xs;const Ss=(0,E.Z)(Zs,[["render",ks]]);var Us=Ss;const Os={id:"layoutAuthentication"},Ls={id:"layoutAuthentication_content"},Rs={class:"container-xl px-4"},Cs={class:"row justify-content-center"},Ns={class:"col-lg-5"},js={class:"card shadow-lg border-0 rounded-lg mt-5"},Bs=(0,u._)("div",{class:"card-header justify-content-center"},[(0,u._)("h3",{class:"fw-light my-4"},"Reset Password")],-1),Ts={class:"card-body"},Ks={class:"mb-3"},Ws=(0,u._)("label",{class:"small mb-1",for:"newPassword"},"New Password",-1),Ms={class:"mb-3"},Fs=(0,u._)("label",{class:"small mb-1",for:"inputConfirmPassword"},"Confirm Password",-1),Is={class:"d-flex align-items-center justify-content-between mt-4 mb-0"},Ds=(0,u.Uk)("Sign In"),qs={class:"card-footer text-center"},Vs={class:"small"},Gs=(0,u.Uk)("Need an account? Sign up!");function Hs(e,t,s,o,n,i){const a=(0,u.up)("router-link"),l=(0,u.up)("MyFooter");return(0,u.wg)(),(0,u.iD)("div",Os,[(0,u._)("div",Ls,[(0,u._)("main",null,[(0,u._)("div",Rs,[(0,u._)("div",Cs,[(0,u._)("div",Ns,[(0,u._)("div",js,[Bs,(0,u._)("div",Ts,[(0,u._)("form",null,[(0,u._)("div",Ks,[Ws,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>this.resetPwd.password=e),class:"form-control",id:"newPassword",type:"password",placeholder:"Enter new address"},null,512),[[r.nr,this.resetPwd.password]])]),(0,u._)("div",Ms,[Fs,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>this.resetPwd.confirmPassword=e),class:"form-control",id:"inputConfirmPassword",type:"password",placeholder:"Confirm password"},null,512),[[r.nr,this.resetPwd.confirmPassword]])]),(0,u.kq)("",!0),(0,u._)("div",Is,[(0,u.Wm)(a,{to:"/Login"},{default:(0,u.w5)((()=>[Ds])),_:1}),(0,u._)("a",{class:"btn btn-primary",onClick:t[2]||(t[2]=(0,r.iM)((e=>this.resetPassword()),["prevent"])),href:"#"},"Reset")])])]),(0,u._)("div",qs,[(0,u._)("div",Vs,[(0,u.Wm)(a,{to:"/Register"},{default:(0,u.w5)((()=>[Gs])),_:1})])])])])])])])]),(0,u.Wm)(l)])}var Qs=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};class $s{constructor(){(0,oe.Z)(this,"password",void 0),(0,oe.Z)(this,"confirmPassword",void 0),(0,oe.Z)(this,"router",void 0),this.password="",this.confirmPassword="",this.router=(0,d.tv)()}gotoLogin(){this.router.push({path:"/Login",params:{}})}}let zs=class extends Ae.w3{constructor(...e){super(...e),(0,oe.Z)(this,"resetPwd",new $s),(0,oe.Z)(this,"secretKey",void 0),(0,oe.Z)(this,"isSecretKeyValid",!1)}resetPassword(){p.Z.log("secretKey:"+this.secretKey),this.isSecretKeyValid?(Swal.showLoading(),ye(this.secretKey+"",this.resetPwd.password,this.resetPwd.confirmPassword,{onReset:()=>{Swal.close(),Swal.fire({position:"center",icon:"success",title:"Your have already Reset your password successfully!Please Login ",showConfirmButton:!0,allowOutsideClick:!1}).then((e=>{e.isConfirmed&&this.resetPwd.gotoLogin()}))},onError:(e,t)=>{Swal.close(),Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:e,footer:""+t})}})):Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:"Secret Code Verify failed,One Moment please !"})}mounted(){p.Z.log("secretKey :"+this.secretKey),f(this.secretKey)?Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:"Your Reset Password Secret code is empty!"}).then((e=>{e.isConfirmed&&this.resetPwd.gotoLogin()})):ve(this.secretKey+"",{onExist:e=>{e?this.isSecretKeyValid=!0:Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:"Your Reset Password Secret is invalid!"}).then((e=>{e.isConfirmed&&this.resetPwd.gotoLogin()}))},onError:(e,t)=>{Swal.fire({icon:"error",title:"Oops...",confirmButtonText:"OK",text:e,footer:""+t}).then((e=>{e.isConfirmed&&this.resetPwd.gotoLogin()}))}})}};Qs([(0,ke.fI)()],zs.prototype,"secretKey",void 0),zs=Qs([(0,Ae.Ei)({components:{MyFooter:(0,u.RC)((()=>s.e(659).then(s.bind(s,1659))))}})],zs);var Ys=zs;const Js=(0,E.Z)(Ys,[["render",Hs]]);var Xs=Js;const er={id:"layoutAuthentication"},tr={id:"layoutAuthentication_content"},sr={class:"container-xl px-4"},rr={class:"row justify-content-center"},or={class:"col-lg-5"},nr={class:"card shadow-lg border-0 rounded-lg mt-5"},ir={class:"card-body text-center p-5"},ar=(0,u._)("div",{class:"spinner-border mb-3",role:"status"},[(0,u._)("span",{class:"visually-hidden"},"Loading...")],-1),lr={key:0,class:"mb-0"},cr={key:1,class:"mb-0"},dr={class:"mb-0"},ur=(0,u.Uk)("Redirecting"),mr=(0,u.Uk)(" you back to the app...");function hr(e,t,s,r,o,n){const i=(0,u.up)("router-link"),a=(0,u.up)("MyFooter");return(0,u.wg)(),(0,u.iD)("div",er,[(0,u._)("div",tr,[(0,u._)("main",null,[(0,u._)("div",sr,[(0,u._)("div",rr,[(0,u._)("div",or,[(0,u._)("div",nr,[(0,u._)("div",ir,[ar,this.hasError()?((0,u.wg)(),(0,u.iD)("p",lr,"Error:"+(0,Oe.zw)(this.msg),1)):(0,u.kq)("",!0),this.hasError()?(0,u.kq)("",!0):((0,u.wg)(),(0,u.iD)("p",cr,"Account Activation successfully!")),(0,u._)("p",dr,[(0,u.Wm)(i,{to:"/Login"},{default:(0,u.w5)((()=>[ur])),_:1}),mr])])])])])])])]),(0,u.Wm)(a)])}var pr=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};class fr{constructor(){(0,oe.Z)(this,"router",void 0),this.router=(0,d.tv)()}redirectToLogin(){this.router.push({path:"/Login",params:{}})}}let wr=class extends Ae.w3{constructor(...e){super(...e),(0,oe.Z)(this,"activateBean",new fr),(0,oe.Z)(this,"code",void 0),(0,oe.Z)(this,"msg",void 0)}hasError(){return!f(this.msg)}mounted(){p.Z.log("code :"+this.code),p.Z.log("msg :"+this.msg),setTimeout((()=>{this.activateBean.redirectToLogin()}),2e3)}};pr([(0,ke.fI)()],wr.prototype,"code",void 0),pr([(0,ke.fI)()],wr.prototype,"msg",void 0),wr=pr([(0,Ae.Ei)({components:{MyFooter:(0,u.RC)((()=>s.e(659).then(s.bind(s,1659))))}})],wr);var gr=wr;const vr=(0,E.Z)(gr,[["render",hr]]);var yr=vr;const _r=(0,d.p7)({history:(0,d.r5)(),routes:[{path:"/Login",name:"Login",component:Ue,meta:{title:"User Login",isAuth:!1},props(e){return{return_url:e.query.return_url}}},{path:"/ActivateAccount",name:"ActivateAccount",component:yr,meta:{title:"Activate Account",isAuth:!1},props(e){return{code:e.query.code,msg:e.query.msg}}},{path:"/ResetPassword",name:"ResetPassword",component:Xs,meta:{title:"Reset Password",isAuth:!1},props(e){return{secretKey:e.query.secretKey}}},{path:"/Register",name:"Register",component:pt,meta:{title:"User Register",isAuth:!1}},{path:"/ReActivateAccount",name:"ReActivateAccount",component:is,meta:{title:"Activate My Account",isAuth:!1}},{path:"/PasswordLess",name:"PasswordLess",component:Us,meta:{title:"Password Less Login",isAuth:!1}},{path:"/ForgotPassword",name:"ForgotPassword",component:Tt,meta:{title:"Reset My Password",isAuth:!1}},{path:"/oauthDone",name:"oauthDone",component:Z,meta:{title:"Login Success",isAuth:!1},props(e){return{access_token:e.query.access_token,signature:e.query.signature,code:e.query.code,msg:e.query.msg}}},{path:"/",redirect:"/Login"}]});_r.beforeEach(((e,t,s)=>{console.log("beforeEach....",e.path),e.meta.isAuth?(console.log("applying router protection.......",e.path),sessionStorage.getItem(b.Z.tokenName)&&s()):s()})),_r.afterEach(((e,t)=>{document.title=e.meta.title||"myTitle",console.log("afterEach....")}));var br=_r;function Ar(e,t,s,r,o,n){const i=(0,u.up)("router-view");return(0,u.wg)(),(0,u.j4)(i)}var kr=(0,u.aZ)({data(){return{}},computed:{},mounted(){},methods:{}});const Pr=(0,E.Z)(kr,[["render",Ar]]);var Er=Pr,xr={version(){return"1.0.0"},install(e){p.Z.log("installing this plugin..."),e.directive("bigdog",{mounted(e,t){p.Z.log("Customized Directives...mounted")},updated(e,t){p.Z.log("Customized Directives...updated",t.value)}})}};const Zr=(0,r.ri)(Er).use(br).use(c).use(xr);Zr.mount("#app")},8436:function(e,t,s){var r;s.d(t,{Z:function(){return n}}),function(e){e["CloudUserHost"]="https://userapi.cloud-ip.net:88"}(r||(r={}));var o=r;class n{static getUserAPIServer(){return o.CloudUserHost.endsWith("/")?o.CloudUserHost.substring(0,o.CloudUserHost.length-1):o.CloudUserHost}}},1084:function(e,t,s){s.d(t,{Z:function(){return n}});var r=s(2482),o=s(8436);class n{}(0,r.Z)(n,"tokenName","jcloudToken"),(0,r.Z)(n,"reflectKey","rule"),(0,r.Z)(n,"seprator_symb","&&"),(0,r.Z)(n,"allowReturnUrls",["https://www.cloud-ip.net","http://www.cloud-ip.net","http://192.168.0.100","http://192.168.0.6"]),(0,r.Z)(n,"default_returnUrl","https://www.cloud-ip.net/#/OauthDone"),(0,r.Z)(n,"oAuthNGoogleUrl",o.Z.getUserAPIServer()+"/googleOAuthTrigger"),(0,r.Z)(n,"oAuthNFacebookUrl",o.Z.getUserAPIServer()+"/facebookOAuthTrigger"),(0,r.Z)(n,"oAuthNGithubUrl",o.Z.getUserAPIServer()+"/gitHubOAuthTrigger"),(0,r.Z)(n,"oAuthNTwitterUrl",o.Z.getUserAPIServer()+"/twitterOAuthTrigger"),(0,r.Z)(n,"oAuthNSinaUrl",o.Z.getUserAPIServer()+"/sinaOAuthTrigger"),(0,r.Z)(n,"oAuthNQQUrl",o.Z.getUserAPIServer()+"/qqOAuthTrigger")},6050:function(e,t,s){s.d(t,{Z:function(){return r}});class r{static log(...e){console.log(e)}}}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,r,o,n){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],n=e[d][2];for(var a=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(a=!1,n<i&&(i=n));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{659:"eba0f871",693:"7164a5f2"}[e]+".js"}}(),function(){s.miniCssF=function(e){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="CloudUsersPortal:";s.l=function(r,o,n,i){if(e[r])e[r].push(o);else{var a,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+n){a=u;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",t+n),a.src=r),e[r]=[o];var m=function(t,s){a.onerror=a.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(s)})),t)return t(s)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={143:0};s.f.j=function(t,r){var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise((function(s,r){o=e[t]=[s,r]}));r.push(o[2]=n);var i=s.p+s.u(t),a=new Error,l=function(r){if(s.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}};s.l(i,l,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(l)var d=l(s)}for(t&&t(r);c<i.length;c++)n=i[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=self["webpackChunkCloudUsersPortal"]=self["webpackChunkCloudUsersPortal"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(3952)}));r=s.O(r)})();