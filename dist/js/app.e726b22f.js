(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],d=0,_=[];d<o.length;d++)n=o[d],i[n]&&_.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(_.length)_.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"23af":function(t,e,s){"use strict";var a=s("2ee7"),i=s.n(a);i.a},"248e":function(t,e,s){},"2ee7":function(t,e,s){},"47a6":function(t,e,s){"use strict";var a=s("248e"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=s("bb71");s("da64");a["default"].use(i["a"],{iconfont:"md"});var r=s("8c4f"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{staticClass:"blue darken-1 px-0",attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h1",{staticClass:"text-xs-center white--text hq-unselectable"},[t._v(t._s(t.APP_NAME))])]),s("v-flex",{attrs:{xs12:""}},[t.is_list_loaded?s("div",[t._.isEmpty(t.quizzes)?s("v-card",{staticClass:"hq-centered card mb-3",attrs:{"max-width":"600"}},[s("v-card-title",[t._v("Sorry quizzes are not prepared...")])],1):t._e(),s("virtual-list",{style:{height:t.scrollHeight+"px"},attrs:{size:129,remain:t.filteredList.length}},t._l(t.filteredList,function(e){return s("v-card",{staticClass:"hq-centered card mb-3",attrs:{"max-width":"600"}},[s("v-card-title",{staticClass:"pt-3 pb-2",attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))])])]),s("v-card-text",{staticClass:"pt-1"},[s("div",[t._v(t._s(e.description))]),s("div",{staticClass:"card-meta"},[s("span",{staticClass:"card-meta-item"},[s("span",{staticClass:"card-meta-item-title"},[t._v("Creator:")]),s("span",{staticClass:"card-meta-item-content"},[t._v(t._s(e.creator))])]),s("span",{staticClass:"card-meta-item"},[s("span",{staticClass:"card-meta-item-title"},[t._v("Created At:")]),s("span",{staticClass:"card-meta-item-content"},[t._v(t._s(e.created_at))])])])]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"green lighten-1",dark:""},on:{click:function(s){t.play(e.id)}}},[t._v("Play")])],1)],1)}))],1):s("div",{staticClass:"text-xs-center"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1),s("v-btn",{attrs:{dark:"",color:"secondary",fab:"",icon:"",fixed:"",bottom:"",right:""},on:{click:function(e){t.toggle_search()}}},[t.search_box?s("v-icon",[t._v("close")]):s("v-icon",[t._v("search")])],1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"searchBox",attrs:{id:"searchBox",type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})],1)],1)],1)],1)},o=[],l=s("95ff"),c=s.n(l),u={components:{VirtualList:c.a},data(){return{quizzes:[],is_list_loaded:!1,search:"",search_box:!1,fab:!0,scrollHeight:0}},watch:{search(t){window.scrollTo(0,0)}},computed:{filteredList(){return this.quizzes.filter(t=>{return t.name.toLowerCase().includes(this.search.toLowerCase())||t.creator.toLowerCase().includes(this.search.toLowerCase())})}},created(){this.get_quiz_list()},methods:{play(t){this.$router.push({name:"loading_room",params:{quiz_id:t}})},get_quiz_list(){this.$http.get(`${this.PATH_API}/quiz/list`).then(t=>{console.log("res",t),this.quizzes=t.data.result,this.is_list_loaded=!0,this.on_resize()}).catch(t=>{console.log("Sever has some problems")})},toggle_search(t){let e=document.querySelector("#searchBox");e.classList.contains("searchBox-active")?(this.search_box=!1,e.classList.remove("searchBox-active"),setTimeout(()=>{e.style.display="none"},200)):(this.search_box=!0,e.style.display="block",setTimeout(()=>{e.classList.add("searchBox-active")},100))},on_resize(){this.is_list_loaded&&(this.scrollHeight=window.innerHeight-120,window.addEventListener("resize",()=>{this.scrollHeight=window.innerHeight-120}))}}},d=u,_=(s("47a6"),s("6a65"),s("2877")),p=s("6544"),h=s.n(p),v=s("7496"),m=s("8336"),f=s("b0af"),x=s("99d9"),g=s("12b2"),y=s("a523"),b=s("0e8f"),q=s("132d"),C=s("a722"),w=s("490a"),z=s("9910"),V=Object(_["a"])(d,n,o,!1,null,"33c5dc42",null);V.options.__file="Main.vue";var k=V.exports;h()(V,{VApp:v["a"],VBtn:m["a"],VCard:f["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:g["a"],VContainer:y["a"],VFlex:b["a"],VIcon:q["a"],VLayout:C["a"],VProgressCircular:w["a"],VSpacer:z["a"]});var P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("toolbar"),s("v-container",{staticClass:"blue darken-1",attrs:{fluid:""}},[s("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[t.play_disabled?s("div",[s("div",{staticClass:"text-xs-center mt-3"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1)]):s("div",[s("h2",{staticClass:"mt-3 text-xs-center text-capitalize white--text",staticStyle:{"font-size":"30px"}},[t._v("\n            "+t._s(t.quiz.name)+"\n          ")]),s("div",{staticClass:"text-xs-center font-weight-light white--text",staticStyle:{"font-size":"17px"}},[t._v("Created by "+t._s(t.quiz.creator))])])]),s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-center ma-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.player_name,expression:"player_name"}],staticClass:"text-field",staticStyle:{width:"100%","max-width":"300px"},attrs:{placeholder:"Your name"},domProps:{value:t.player_name},on:{input:function(e){e.target.composing||(t.player_name=e.target.value)}}})])]),s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-center"},[s("v-btn",{attrs:{color:"green lighten-1",dark:"",disabled:t.play_disabled},on:{click:function(e){t.get_started()}}},[t._v("Get Started")])],1)])],1)],1)],1)},A=[],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-toolbar",{attrs:{app:"",dense:"",dark:"",color:"blue darken-3"}},[s("v-toolbar-title",{staticClass:"headline"},[s("v-btn",{staticClass:"title text-capitalize",attrs:{flat:""},on:{click:function(e){t.back_to_list()}}},[t._v(t._s(t.APP_NAME))])],1),s("v-spacer"),s("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog_back_to_main,callback:function(e){t.dialog_back_to_main=e},expression:"dialog_back_to_main"}},[s("v-btn",{attrs:{slot:"activator",flat:"",icon:""},slot:"activator"},[s("v-icon",[t._v("view_list")])],1),s("v-card",[s("v-card-text",[s("div",{staticClass:"title"},[t._v("Do you want to go back to the quiz list page?")])]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"grey darken-1",flat:"flat"},on:{click:function(e){t.return_quiz()}}},[t._v("\n          No Thanks\n        ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.back_to_list()}}},[t._v("\n          Yes\n        ")])],1)],1)],1),t.is_quiz_player?s("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog_play_again,callback:function(e){t.dialog_play_again=e},expression:"dialog_play_again"}},[s("v-btn",{attrs:{slot:"activator",flat:"",icon:""},slot:"activator"},[s("v-icon",[t._v("replay")])],1),s("v-card",[s("v-card-text",[s("div",{staticClass:"title"},[t._v("Do you want to play again?")])]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"grey darken-1",flat:"flat"},on:{click:function(e){t.return_quiz()}}},[t._v("\n          No Thanks\n        ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.play_again()}}},[t._v("\n          Yes\n        ")])],1)],1)],1):t._e()],1)},$=[],L={props:["page","reset_game"],data(){return{dialog_back_to_main:!1,dialog_play_again:!1}},computed:{is_quiz_player(){return"quiz_player"===this.page}},methods:{back_to_list(){this.$router.push({name:"main"})},return_quiz(){this.dialog_back_to_main=!1,this.dialog_play_again=!1},play_again(){this.dialog_play_again=!1,this.reset_game()}}},E=L,T=s("169a"),O=s("71d9"),j=s("2a7f"),I=Object(_["a"])(E,S,$,!1,null,null,null);I.options.__file="Toolbar.vue";var M=I.exports;h()(I,{VBtn:m["a"],VCard:f["a"],VCardActions:x["a"],VCardText:x["b"],VDialog:T["a"],VIcon:q["a"],VSpacer:z["a"],VToolbar:O["a"],VToolbarTitle:j["a"]});var H={components:{Toolbar:M},data(){return{player_name:"",play_disabled:!0,quiz:{},questions:[{}]}},created(){this.$http.get(`${this.PATH_API}/quiz/${this.$route.params.quiz_id}`).then(t=>{console.log("res",t),this.quiz=t.data.result.quiz,this.questions=t.data.result.questions,this.play_disabled=!1}),"undefined"!==typeof Storage&&(sessionStorage.player_name?this.player_name=sessionStorage.player_name:this.player_name="")},methods:{get_started(){"undefined"!==typeof Storage&&sessionStorage.setItem("player_name",this.player_name),this._.isEmpty(this.questions)?this.$router.push({name:"no_question"}):this.$router.push({name:"quiz_player",params:{quiz_id:this.$route.params.quiz_id,quiz:this.quiz,questions:this.questions}})}}},N=H,B=(s("6083"),Object(_["a"])(N,P,A,!1,null,"34ac8190",null));B.options.__file="LoadingRoom.vue";var R=B.exports;h()(B,{VApp:v["a"],VBtn:m["a"],VContainer:y["a"],VFlex:b["a"],VLayout:C["a"],VProgressCircular:w["a"]});var Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("toolbar",{attrs:{page:"quiz_player",reset_game:t.reset_game}}),s("v-content",{staticClass:"blue darken-1"},[s("playing-room",{ref:"playing_room",attrs:{questions:t.questions,quiz:t.quiz}})],1)],1)},F=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"text-xs-center":"",fluid:""}},[t.is_result_active?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("result-page",{attrs:{decisions:t.decisions}})],1)],1):s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"white--text",staticStyle:{"font-size":"17px"}},[t._v("\n        Hi "+t._s(t.PLAYER_NAME)+". You are playing "+t._s(t.quiz.name)+"\n      ")])]),s("v-flex",{staticClass:"mt-3 mb-3",attrs:{xs12:""}},[s("div",[s("v-card",{staticClass:"pa-2",attrs:{color:"white"}},[s("v-card-text",{staticClass:"px-0"},[s("div",{staticClass:"ma-0 pa-0 font-weight-medium hq-unselectable",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.current_question.question))]),s("p",{staticClass:"hq-unselectable"},[t._v("("+t._s(this.q_index+1)+"/"+t._s(this.questions.length)+")")])])],1),s("v-progress-linear",{staticClass:"ma-0",attrs:{color:"orange lighten-1",height:"6",value:t.count}})],1)]),s("v-flex",{attrs:{xs12:""}},[s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("v-layout",{attrs:{wrap:""}},t._l(t.current_question.choices,function(e,a){return s("v-flex",{staticClass:"mb-3",attrs:{xs12:""}},[s("div",{class:["btn-"+a,"btn"],staticStyle:{cursor:"pointer"},attrs:{flat:"",block:""},on:{click:function(s){t.choose(e)}}},[s("div",{staticClass:"ma-0 pa-2 text-capitalize hq-unselectable",staticStyle:{"word-break":"break-all","font-size":"14px"}},[t._v("\n                "+t._s(e.content)+"\n              ")])])])}))],1)],1)],1)],1)},Q=[],G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fulid:""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"white--text",staticStyle:{"font-size":"30px"}},[t._v(t._s(t.PLAYER_NAME))]),s("div",{staticClass:"white--text",staticStyle:{"font-size":"30px"}},[t._v("Congraturations!!!")]),s("div",{staticClass:"ma-0 pa-0 white--text",staticStyle:{"font-size":"40px"}},[t._v("Your score is "+t._s(t.total_score))]),s("div",{staticClass:"white--text",staticStyle:{"font-size":"20px"}},[t._v("("+t._s(t.simple_result)+")")])]),s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"mt-5 mb-3 hq-centered",attrs:{"max-width":"400"}},[s("v-card-title",[s("h1",{staticClass:"title hq-unselectable"},[t._v("Details")]),s("v-spacer"),s("v-btn",{attrs:{icon:"",small:""},on:{click:t.toggle_expansion}},[t.is_expanded?s("v-icon",[t._v("expand_less")]):s("v-icon",[t._v("expand_more")])],1)],1)],1),t._l(t.decisions,function(e){return t.is_expanded?s("v-card",{staticClass:"mb-2 hq-centered",class:{red:!e.is_correct,green:e.is_correct},attrs:{"max-width":"400",dark:""}},[s("v-card-text",[s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-right"},[e.is_correct?s("v-icon",[t._v("check")]):s("v-icon",[t._v("close")])],1)]),s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-left hq-detail-title first"},[t._v("Question")]),s("div",{staticClass:"text-xs-left hq-detail-content"},[t._v(t._s(e.question.question))])]),s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-left hq-detail-title"},[t._v("My Answer")]),s("div",{staticClass:"text-xs-left hq-detail-content"},[s("span",[t._v("\n                    "+t._s(e.choice?e.choice.content:"Didn't choose")+"\n                  ")])])]),s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-left hq-detail-title"},[t._v("Correct Answer")]),s("div",{staticClass:"text-xs-left hq-detail-content"},t._l(e.correct_answers,function(a,i){return s("span",[t._v("\n                    "+t._s(a.content)),i<e.correct_answers.length-1?s("span",[t._v(", ")]):t._e()])}))])],1)],1)],1)],1):t._e()})],2)],1)],1)},J=[],K={props:["decisions"],data(){return{result:{},is_expanded:!1}},created(){this.make_result(),this.send_player(),console.log("decisions",this.decisions),console.log("result",this.result)},computed:{correct_decisions(){return this.result.correct_decisions},total_score(){return(this.correct_decisions.length/this.decisions.length*100).toFixed(0)},simple_result(){return`${this.correct_decisions.length} / ${this.decisions.length}`}},methods:{make_result(){let t=this.decisions;for(let e in t){let s=t[e],a=this.get_correct_numbers(s.question.correct_answer);s.correct_answers=this.melon(s.question,a),s.correct_answers.indexOf(s.choice)>-1?s.is_correct=!0:s.is_correct=!1}this.result.decisions=t,this.result.correct_decisions=this.get_correct_decisions(t)},get_correct_decisions(t){let e=[];for(let s in t)t[s].is_correct&&e.push(t[s]);return e},get_correct_numbers(t){let e=t,s=e.split(",");return s},melon(t,e){let s=[],a=t.choices;for(let i in a)e.indexOf(a[i].order.toString())>-1&&s.push(a[i]);return s},toggle_expansion(){this.is_expanded=!this.is_expanded},send_player(){let t={name:this.PLAYER_NAME,score:this.total_score};this.$http.post(`${this.PATH_API}/quiz/${this.$route.params.quiz_id}/player`,t).then(t=>{console.log(t)})}}},U=K,W=(s("23af"),Object(_["a"])(U,G,J,!1,null,"85d328a6",null));W.options.__file="ResultPage.vue";var X=W.exports;h()(W,{VBtn:m["a"],VCard:f["a"],VCardText:x["b"],VCardTitle:g["a"],VContainer:y["a"],VFlex:b["a"],VIcon:q["a"],VLayout:C["a"],VSpacer:z["a"]});let Z=(t,e)=>{let s=new Array(e),a=t.length,i=new Array(a);if(e>a)throw new RangeError("getRandom: more elements taken than available");while(e--){let r=Math.floor(Math.random()*a);s[e]=t[r in i?i[r]:r],i[r]=--a in i?i[a]:a}return s};var tt={props:["quiz","questions"],components:{ResultPage:X},data(){return{counter:null,count:0,q_index:0,decisions:[],is_result_active:!1}},created(){this.start_counter(parseInt(this.current_question.time_limit))},destroyed(){this.stop_counter()},computed:{current_question(){let t=this.questions[this.q_index];return t.choices=Z(t.choices,t.choices.length),t}},methods:{reset(){this.stop_counter(),this.counter=null,this.count=0,this.q_index=0,this.decisions=[],this.is_result_active=!1,this.current_question.choices=Z(this.current_question.choices,this.current_question.choices.length),this.start_counter(parseInt(this.current_question.time_limit))},pause_quiz(){this.stop_counter()},continue_quiz(){this.is_result_active||this.start_counter(parseInt(this.current_question.time_limit),this.count)},stop_counter(){clearInterval(this.counter)},start_counter(t=20,e=0){this.count=e,clearInterval(this.counter),this.counter=setInterval(()=>{this.count+=1,this.count>100&&(this.stop_counter(),this.add_decision(null),this.next_question())},10*t)},next_question(){this.is_last_question()?this.show_result_page():(this.q_index+=1,this.start_counter(parseInt(this.current_question.time_limit)))},is_last_question(){return!(this.q_index<this.questions.length-1)},add_decision(t){let e={question:this.current_question,choice:t,is_correct:!1};this.decisions.push(e)},choose(t){this.add_decision(t),this.next_question()},show_result_page(){this.stop_counter(),this.is_result_active=!0}}},et=tt,st=(s("9f74"),s("8e36")),at=Object(_["a"])(et,D,Q,!1,null,"b7a740d0",null);at.options.__file="PlayingRoom.vue";var it=at.exports;h()(at,{VCard:f["a"],VCardText:x["b"],VContainer:y["a"],VFlex:b["a"],VLayout:C["a"],VProgressLinear:st["a"]});var rt={props:["questions","quiz"],components:{Toolbar:M,PlayingRoom:it},data(){return{dialog:!1}},methods:{reset_game(){this.$refs.playing_room.reset()}}},nt=rt,ot=s("549c"),lt=Object(_["a"])(nt,Y,F,!1,null,null,null);lt.options.__file="QuizPlayer.vue";var ct=lt.exports;h()(lt,{VApp:v["a"],VContent:ot["a"]});var ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("toolbar"),s("v-content",{staticClass:"blue darken-1"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-center mt-4"},[s("div",{staticClass:"white--text",staticStyle:{"font-size":"20px"}},[t._v("Sorry this quiz has no questions.")]),s("div",{staticClass:"white--text",staticStyle:{"font-size":"20px"}},[t._v("Please try other quizzes.")])])]),s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"text-xs-center mt-3"},[s("v-btn",{attrs:{dark:"",color:"green lighten-1"},on:{click:function(e){t.$router.push({name:"main"})}}},[t._v("Go to the quiz list")])],1)])],1)],1)],1)],1)},dt=[],_t={components:{Toolbar:M}},pt=_t,ht=Object(_["a"])(pt,ut,dt,!1,null,null,null);ht.options.__file="ErrorPage.vue";var vt=ht.exports;h()(ht,{VApp:v["a"],VBtn:m["a"],VContainer:y["a"],VContent:ot["a"],VFlex:b["a"],VLayout:C["a"]});var mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",[s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",id:"apple"}},[s("h1",[t._v("Hellooo Quizzes")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticStyle:{border:"1px solid red"},attrs:{type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),s("v-flex",{attrs:{xs12:"",id:"test"}})],1)],1)],1)],1)},ft=[],xt={data(){return{items:[],search:"",list:[{name:"abc"},{name:"def"},{name:"jie"},{name:"opg"}]}},methods:{init(){for(let t=0;t<1e4;t++){let e={name:"Hello",creator:t};this.items.push(e)}}},created(){this.init()},mounted(){},computed:{filteredList(){return this.items.filter(t=>{return t.name.toLowerCase().includes(this.search.toLowerCase())||t.creator.toString().toLowerCase().includes(this.search.toLowerCase())})}}},gt=xt,yt=(s("d9bf"),Object(_["a"])(gt,mt,ft,!1,null,"f4400f46",null));yt.options.__file="TestPage.vue";var bt=yt.exports;h()(yt,{VApp:v["a"],VContainer:y["a"],VContent:ot["a"],VFlex:b["a"],VLayout:C["a"]}),a["default"].use(r["a"]);const qt=new r["a"]({mode:"history",routes:[{path:"/",component:k,name:"main",alias:"quiz_list"},{path:"/quiz/:quiz_id",component:R,name:"loading_room"},{path:"/quiz/:quiz_id/play",component:ct,name:"quiz_player",props:!0,beforeEnter(t,e,s){t.params.questions?s():s({name:"loading_room",params:{quiz_id:t.params.quiz_id}})}},{path:"/error/no_question",component:vt,name:"no_question"},{path:"/test",component:bt}]});var Ct=qt,wt=s("bc3a"),zt=s.n(wt),Vt=s("2ef0"),kt=s.n(Vt),Pt=s("a7fe"),At=s.n(Pt),St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("router-view",{key:t.$route.fullPath})],1)},$t=[],Lt={name:"App"},Et=Lt,Tt=Object(_["a"])(Et,St,$t,!1,null,null,null);Tt.options.__file="App.vue";var Ot=Tt.exports;a["default"].use(At.a,zt.a),a["default"].prototype._=kt.a,a["default"].config.productionTip=!1,a["default"].prototype.APP_NAME="Hellooo Quizzes",a["default"].prototype.PATH_API="https://helloooquizzes-admin.herokuapp.com",a["default"].mixin({computed:{PLAYER_NAME(){return sessionStorage.player_name?sessionStorage.player_name:"Alex"}}}),new a["default"]({render:t=>t(Ot),router:Ct}).$mount("#app")},6083:function(t,e,s){"use strict";var a=s("fe02"),i=s.n(a);i.a},"632b":function(t,e,s){},6335:function(t,e,s){},"6a65":function(t,e,s){"use strict";var a=s("632b"),i=s.n(a);i.a},"7e0d":function(t,e,s){},"9f74":function(t,e,s){"use strict";var a=s("7e0d"),i=s.n(a);i.a},d9bf:function(t,e,s){"use strict";var a=s("6335"),i=s.n(a);i.a},fe02:function(t,e,s){}});
//# sourceMappingURL=app.e726b22f.js.map