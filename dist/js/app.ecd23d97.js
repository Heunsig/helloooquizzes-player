(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],n[r]&&d.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2ca8":function(t,e,a){"use strict";var s=a("bb40"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=a("bb71");a("da64");s["a"].use(n["a"],{iconfont:"md"});var i=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"blue darken-1",attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"text-xs-center white--text"},[t._v(t._s(t.APP_NAME))])]),t._l(t.games,function(e){return a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"centered card",attrs:{"max-width":"600"}},[a("v-card-title",{staticClass:"pt-3 pb-2",attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))]),a("div",[t._v(t._s(e.description))])])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green lighten-1",dark:""},on:{click:function(a){t.play(e.id)}}},[t._v("Play")])],1)],1)],1)})],2)],1)],1)},o=[],l={data(){return{games:[]}},created(){this.get_game_list()},methods:{play(t){this.$router.push({name:"main",params:{game_id:t}})},get_game_list(){this.$http.get(`${this.PATH_API}/game/list`).then(t=>{this.games=t.data.result}).catch(t=>{console.log("Sever has some problems")})}}},c=l,u=(a("2ca8"),a("2877")),p=a("6544"),d=a.n(p),_=a("7496"),h=a("8336"),v=a("b0af"),m=a("99d9"),f=a("12b2"),g=a("a523"),x=a("0e8f"),b=a("a722"),y=a("9910"),w=Object(u["a"])(c,r,o,!1,null,"7ec8e500",null);w.options.__file="GameList.vue";var C=w.exports;d()(w,{VApp:_["a"],VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardTitle:f["a"],VContainer:g["a"],VFlex:x["a"],VLayout:b["a"],VSpacer:y["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:"",dense:"",dark:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"headline"},[a("v-btn",{staticClass:"title text-capitalize",attrs:{flat:""},on:{click:function(e){t.game_list()}}},[t._v(t._s(t.APP_NAME))])],1),a("v-spacer"),a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.game_list()}}},[a("v-icon",[t._v("view_list")])],1)],1),a("v-container",{staticClass:"blue darken-1",attrs:{fluid:""}},[a("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h2",{staticClass:"mt-3 text-xs-center text-capitalize white--text",staticStyle:{"font-size":"30px"}},[t._v("\n          "+t._s(t.game.name)+"\n        ")]),a("div",{staticClass:"text-xs-center font-weight-light white--text",staticStyle:{"font-size":"25px"}},[t._v("by "+t._s(t.game.creator))])]),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center ma-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"text-field",staticStyle:{width:"100%","max-width":"300px"},attrs:{placeholder:"Your name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{color:"green lighten-1",dark:"",disabled:t.disabled},on:{click:function(e){t.get_started()}}},[t._v("Get Started")])],1)])],1)],1)],1)},V=[],k={data(){return{name:"",game:{},questions:[{}],disabled:!0}},created(){this.$http.get(`${this.PATH_API}/game/${this.$route.params.game_id}`).then(t=>{this.game=t.data.result.game,this.questions=t.data.result.questions,this.disabled=!1}),"undefined"!==typeof Storage&&(sessionStorage.player_name?this.name=sessionStorage.player_name:this.name="")},methods:{get_started(){"undefined"!==typeof Storage&&sessionStorage.setItem("player_name",this.name),this.$router.push({name:"game",params:{game_id:this.$route.params.game_id,questions:this.questions,game:this.game}})},game_list(){this.$router.push({name:"game_list"})}}},S=k,P=(a("78af"),a("132d")),A=a("71d9"),$=a("2a7f"),T=Object(u["a"])(S,q,V,!1,null,"d6255524",null);T.options.__file="Main.vue";var j=T.exports;d()(T,{VApp:_["a"],VBtn:h["a"],VContainer:g["a"],VFlex:x["a"],VIcon:P["a"],VLayout:b["a"],VSpacer:y["a"],VToolbar:A["a"],VToolbarTitle:$["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:"",dense:"",dark:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"headline"},[a("v-btn",{staticClass:"title text-capitalize",attrs:{flat:""},on:{click:function(e){t.game_list()}}},[t._v(t._s(t.APP_NAME))])],1),a("v-spacer"),a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.game_list()}}},[a("v-icon",[t._v("view_list")])],1),a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.ask_retry()}}},[a("v-icon",[t._v("replay")])],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Use Google's location service?")]),a("v-card-text",[t._v("\n          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.\n        ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.cancel()}}},[t._v("\n            Cancel\n          ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.retry()}}},[t._v("\n            Retry\n          ")])],1)],1)],1)],1),a("v-content",{staticClass:"blue darken-1"},[a("game",{ref:"game",attrs:{questions:t.questions,game:t.game}})],1)],1)},O=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"text-xs-center":"",fluid:""}},[t.is_result_active?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("result-page",{attrs:{corrections:t.corrections,questions:t.questions}})],1)],1):a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"white--text",staticStyle:{"font-size":"20px"}},[t._v("\n        Hi "+t._s(t.player_name)+". You are playing "+t._s(t.game.name)+"\n      ")])]),a("v-flex",{staticClass:"mt-3 mb-3",attrs:{xs12:""}},[a("div",[a("v-card",{staticClass:"pa-2",attrs:{color:"white"}},[a("v-card-text",{staticClass:"px-0"},[a("div",{staticClass:"ma-0 pa-0 font-weight-medium",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.current_question.question))]),t._v("\n            ("+t._s(this.q_index+1)+"/"+t._s(this.questions.length)+")\n          ")])],1),a("v-progress-linear",{staticClass:"ma-0",attrs:{color:"orange lighten-1",height:"6",value:t.count}})],1)]),a("v-flex",{attrs:{xs12:""}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-layout",{attrs:{wrap:""}},t._l(t.current_question.choices,function(e,s){return a("v-flex",{staticClass:"mb-3",attrs:{xs12:""}},[a("div",{class:["btn-"+s,"btn"],staticStyle:{cursor:"pointer"},attrs:{flat:"",block:""},on:{click:function(a){t.choose(e.order)}}},[a("div",{staticClass:"ma-0 pa-2 text-capitalize",staticStyle:{"word-break":"break-all","font-size":"14px"}},[t._v(t._s(e.content))])])])}))],1)],1)],1)],1)},E=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fulid:""}},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"white--text",staticStyle:{"font-size":"30px"}},[t._v("Congraturation!!!")]),a("div",{staticClass:"ma-0 pa-0 white--text",staticStyle:{"font-size":"40px"}},[t._v("Your score is "+t._s((t.corrections/t.questions.length*100).toFixed(0)))]),a("div",{staticClass:"white--text",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.corrections)+" / "+t._s(t.questions.length))])])],1)],1)},G=[],L={props:["corrections","questions"]},F=L,H=Object(u["a"])(F,M,G,!1,null,null,null);H.options.__file="ResultPage.vue";var N=H.exports;d()(H,{VContainer:g["a"],VFlex:x["a"],VLayout:b["a"]});var R={props:["game","questions"],components:{ResultPage:N},data(){return{counter:null,count:0,q_index:0,corrections:0,is_result_active:!1}},created(){this.start_counter(parseInt(this.questions[this.q_index].time_limit))},destroyed(){this.stop_counter()},computed:{current_question(){let t=this.questions[this.q_index],e=this.jumble_array(t.choices,t.choices.length);return t.choices=e,t},player_name(){return sessionStorage.player_name?sessionStorage.player_name:"Alex"}},methods:{reset(){this.stop_counter(),this.counter=null,this.count=0,this.q_index=0,this.corrections=0,this.is_result_active=!1,this.start_counter(parseInt(this.questions[this.q_index].time_limit))},pause(){this.stop_counter()},play(){this.is_result_active||this.start_counter(parseInt(this.questions[this.q_index].time_limit),this.count)},jumble_array(t,e){let a=new Array(e),s=t.length,n=new Array(s);if(e>s)throw new RangeError("getRandom: more elements taken than available");while(e--){let i=Math.floor(Math.random()*s);a[e]=t[i in n?n[i]:i],n[i]=--s in n?n[s]:s}return a},stop_counter(){clearInterval(this.counter)},start_counter(t=20,e=0){this.count=e,clearInterval(this.counter),this.counter=setInterval(()=>{this.count+=1,this.count>100&&(this.stop_counter(),this.next_question()),console.log("hi")},10*t)},get_answer_sheet(t){let e=t,a=e.split(",");return a},check_answer(t,e){return e.indexOf(t.toString())>-1},next_question(){this.is_last_question()?this.show_result_page():(this.q_index+=1,this.start_counter(parseInt(this.questions[this.q_index].time_limit)))},add_correction(){this.corrections+=1},is_last_question(){return!(this.q_index<this.questions.length-1)},show_result_page(){this.stop_counter(),this.is_result_active=!0},choose(t){let e=this.check_answer(t,this.get_answer_sheet(this.questions[this.q_index].correct_answer));e&&this.add_correction(),this.next_question()}}},B=R,Y=(a("c8b2"),a("8e36")),J=Object(u["a"])(B,I,E,!1,null,"256c82f2",null);J.options.__file="Game.vue";var D=J.exports;d()(J,{VCard:v["a"],VCardText:m["b"],VContainer:g["a"],VFlex:x["a"],VLayout:b["a"],VProgressLinear:Y["a"]});var Q={props:["questions","game"],components:{Game:D},data(){return{dialog:!1}},methods:{game_list(){this.$router.push({name:"game_list"})},ask_retry(){this.dialog=!0,this.$refs.game.pause()},cancel(){this.dialog=!1,this.$refs.game.play("a")},retry(){this.dialog=!1,this.$refs.game.reset()}}},U=Q,K=a("549c"),W=a("169a"),X=Object(u["a"])(U,z,O,!1,null,null,null);X.options.__file="GameContainer.vue";var Z=X.exports;d()(X,{VApp:_["a"],VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:f["a"],VContent:K["a"],VDialog:W["a"],VIcon:P["a"],VSpacer:y["a"],VToolbar:A["a"],VToolbarTitle:$["a"]}),s["a"].use(i["a"]);const tt=new i["a"]({mode:"history",routes:[{path:"/",component:C,name:"game_list",alias:"/game_list"},{path:"/game/:game_id",component:j,name:"main"},{path:"/game/:game_id/play",component:Z,name:"game",props:!0,beforeEnter(t,e,a){t.params.questions?a():a({name:"main",params:{game_id:t.params.game_id}})}}]});var et=tt,at=a("bc3a"),st=a.n(at),nt=a("2ef0"),it=a.n(nt),rt=a("a7fe"),ot=a.n(rt),lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view",{key:t.$route.fullPath})],1)},ct=[],ut={name:"App"},pt=ut,dt=Object(u["a"])(pt,lt,ct,!1,null,null,null);dt.options.__file="App.vue";var _t=dt.exports;s["a"].use(ot.a,st.a),s["a"].prototype._=it.a,s["a"].config.productionTip=!1,s["a"].prototype.APP_NAME="Hellooo Quizzes",s["a"].prototype.PATH_API="https://helloooquizzes-admin.herokuapp.com/api",new s["a"]({render:t=>t(_t),router:et}).$mount("#app")},"78af":function(t,e,a){"use strict";var s=a("dfd8"),n=a.n(s);n.a},bb40:function(t,e,a){},c8b2:function(t,e,a){"use strict";var s=a("f3b0"),n=a.n(s);n.a},dfd8:function(t,e,a){},f3b0:function(t,e,a){}});
//# sourceMappingURL=app.ecd23d97.js.map