(function(t){function e(e){for(var n,i,c=e[0],s=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/smart_motor/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"05e5":function(t,e,r){},"1a33":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.form}},[r("el-form-item",{attrs:{label:"使用者"}},[r("el-input",{model:{value:t.form.user,callback:function(e){t.$set(t.form,"user",e)},expression:"form.user"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查詢")])],1)],1)},o=[],a=(r("cadf"),r("551c"),r("097d"),{data:function(){return{form:{user:"0921824910"}}},methods:{onSubmit:function(){this.$router.push({name:"controllers",params:{user:this.form.user}})}}}),i=a,c=(r("f200"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"51dd5652",null);s.options.__file="home.vue";e["a"]=s.exports},"1e97":function(t,e,r){},"1f47":function(t,e,r){},"34ee":function(t,e,r){},"3dfd":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("el-header",[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#004b7c","text-color":"#fff","active-text-color":"#ffd04b"}},[r("el-menu-item",{attrs:{index:"home",id:"home"},on:{click:function(e){t.to_home()}}},[r("img",{staticStyle:{height:"55px"},attrs:{src:"cover.png"}})]),r("el-menu-item",{attrs:{index:"controllers"},on:{click:function(e){t.to_user()}}},[t._v("控制器資訊")]),r("el-menu-item",{attrs:{index:"map"},on:{click:function(e){t.to_map()}}},[t._v("空間資訊")]),r("el-submenu",{attrs:{index:"5"}},[r("template",{slot:"title"},[t._v("統計分析")]),r("el-menu-item",{attrs:{index:"2-1"}},[t._v("抽水量轉換")])],2)],1)],1),r("el-main",[r("router-view")],1),r("el-footer",[t._v("Copyright © 2019 業興環境科技股份有限公司. All rights reserved.")])],1)},o=[],a=(r("7f7f"),r("cadf"),r("551c"),r("097d"),{data:function(){return{activeIndex:this.$route.name}},methods:{to_user:function(){"undefined"!==typeof this.$route.params.user?this.$router.push({name:"controllers",params:{user:this.$route.params.user}}):this.$router.push({name:"home"})},to_home:function(){this.$router.push({name:"home"})},to_map:function(){this.$router.push({name:"map"})}},watch:{$route:function(t){this.activeIndex=t.name}}}),i=a,c=(r("9b76"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"7264a77a",null);s.options.__file="App.vue";e["a"]=s.exports},"41e9":function(t,e,r){"use strict";var n=r("05e5"),o=r.n(n);o.a},5268:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("chart",{attrs:{id:"chart",title:"趨勢圖",chart_title:"馬達與水表紀錄",series:t.series_time,xAxis:{type:"time",max:(new Date).toISOString().slice(0,10)},yAxis:[{name:"每日開關秒數",type:"value"},{name:"水表數值",type:"value"},{name:"水表數值差",type:"value",position:"right",offset:50}],legend:{x:"left",data:["每日開關秒數","水表數值","水表數值差"],selected:{"水表數值差":!1}},dataZoom:!0}})],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,xs:24,sm:24,md:24,lg:12,xl:12}},[r("chart",{attrs:{id:"chart-2",title:"相關圖",chart_title:"馬達時間與水表紀錄",series:t.series_time_value,xAxis:{name:"馬達啟動時間(小時)",type:"value",nameLocation:"middle",nameGap:25},yAxis:[{name:"每日抽水量(m³/day)",type:"value",nameLocation:"middle",nameGap:35}]}})],1),r("el-col",{attrs:{span:12,xs:24,sm:24,md:24,lg:12,xl:12}},[r("chart",{attrs:{id:"chart-3",title:"相關圖",chart_title:"馬達時間與水表紀錄",series:t.series_time_prediction,xAxis:{name:"每日抽水量_觀測(m³/day)",type:"value",nameLocation:"middle",nameGap:25},yAxis:[{name:"每日抽水量_推估(m³/day)",type:"value",nameLocation:"middle",nameGap:35}],legend:{x:"left",data:["斜率","斜率推估回歸","平均","平均推估回歸"]}}})],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("record-table",{attrs:{id:t.id,data:t.record_merge}})],1)],1)],1)},o=[],a=(r("55dd"),r("c5f6"),r("2d1f")),i=r.n(a),c=r("75fc"),s=r("795b"),l=r.n(s),u=(r("ac6a"),r("5df3"),r("cadf"),r("551c"),r("097d"),r("86d5")),d=r("677a"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[t._v("紀錄("+t._s(t.id)+")")])]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data.slice(10*(t.page-1),10*t.page),"row-class-name":t.onoff_status}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("p",[t._v("馬達起閉紀錄")]),e.row.onoff.length>0?r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.row.onoff}},[r("el-table-column",{attrs:{align:"center",prop:"on_time",label:"開啟時間"}}),r("el-table-column",{attrs:{align:"center",prop:"off_time",label:"關閉時間"}}),r("el-table-column",{attrs:{align:"center",label:"開啟時間"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.total>=3600?r("div",[t._v(t._s(parseInt(e.row.total/3600))+"小時 "+t._s(parseInt((e.row.total-3600*parseInt(e.row.total/3600))/60))+"分鐘("+t._s(e.row.total)+"秒)")]):r("div",[t._v(t._s(parseInt(e.row.total/60))+"分鐘 "+t._s(e.row.total-60*parseInt(e.row.total/60))+"秒("+t._s(e.row.total)+"秒)")])]}}])})],1):r("p",[t._v("無")])]}}])}),r("el-table-column",{attrs:{align:"center",type:"index",index:t.indexMethod,width:"50"}}),r("el-table-column",{attrs:{align:"center",prop:"date",label:"日期"}}),r("el-table-column",{attrs:{align:"center",prop:"value",label:"累積水表數(m³, 00:00時)"}}),r("el-table-column",{attrs:{align:"center",prop:"value_diff",label:"水表紀錄(m³/day)"}}),r("el-table-column",{attrs:{align:"center",label:"馬達啟用時間(1/day)"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.onoff_total>=3600?r("div",[t._v(t._s(parseInt(e.row.onoff_total/3600))+"小時 "+t._s(parseInt((e.row.onoff_total-3600*parseInt(e.row.onoff_total/3600))/60))+"分鐘("+t._s(e.row.onoff.length)+"回, "+t._s(e.row.onoff_total)+"秒)")]):e.row.onoff_total>0?r("div",[t._v(t._s(parseInt(e.row.onoff_total/60))+"分鐘 "+t._s(e.row.onoff_total-60*parseInt(e.row.onoff_total/60))+"秒("+t._s(e.row.onoff.length)+"回)")]):t._e()]}}])}),r("el-table-column",{attrs:{align:"center",label:"單位時間出水量(L/s)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(0!==e.row.onoff_total&&"undefined"!==typeof e.row.value_diff?(1e3*e.row.value_diff/e.row.onoff_total).toFixed(2):"")+"\n      ")]}}])})],1),r("el-pagination",{attrs:{"page-size":10,"pager-count":5,layout:"prev, pager, next","current-page":t.page,total:t.data.length},on:{"current-change":t.handleCurrentChange}})],1)},m=[],p={props:{data:Array,id:String},data:function(){return{page:1}},created:function(){},updated:function(){},components:{},methods:{handleCurrentChange:function(t){this.page=t},indexMethod:function(t){return 10*(this.page-1)+t+1},onoff_status:function(t){var e=t.row;return e.onoff.length>0?"warning-row":""}}},_=p,h=(r("b16e"),r("2877")),v=Object(h["a"])(_,f,m,!1,null,null,null);v.options.__file="record_table.vue";var b=v.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.title))])]),r("div",[r("div",{staticStyle:{height:"500px"},attrs:{id:t.id}})])])},w=[],y=r("313e"),x={props:{id:String,title:String,chart_title:String,series:Array,xAxis:Object,yAxis:Array,legend:Object,dataZoom:Boolean},data:function(){return{myChart:{},chart_option:{}}},created:function(){this.chart_option={title:{text:this.$props.chart_title,x:"center"},grid:{top:80,bottom:80,left:90,right:90},toolbox:{showTitle:!1,feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:this.$props.legend,dataZoom:[{show:this.$props.dataZoom||!1,realtime:!0}],xAxis:this.$props.xAxis,yAxis:this.$props.yAxis,series:this.$props.series}},mounted:function(){this.myChart=y["init"](document.getElementById(this.$props.id)),this.myChart.setOption(this.chart_option)},updated:function(){},watch:{series:function(){this.myChart.setOption({series:this.$props.series})}},computed:{},methods:{}},O=x,S=(r("a526"),Object(h["a"])(O,g,w,!1,null,"1e3994a2",null));S.options.__file="chart.vue";var j=S.exports,k={props:{name:String},data:function(){return{user:this.$route.params.user,id:this.$route.params.id,motor_record:[],water_meter_record:[],record_merge:[],unit_time_output:0,unit_time_output_2:0,min_time:"2000-01-01"}},created:function(){this.refresh()},updated:function(){},components:{"record-table":b,chart:j},methods:{refresh:function(){var t=this,e=this;l.a.all([Object(d["a"])("motor_record",{id:e.id}),Object(d["a"])("water_meter_record",{id:e.id})]).then(function(r){if("OK"===r[0].status&&(e.motor_record=r[0].records.reverse()),"OK"===r[1].status&&(e.water_meter_record=r[1].records.reverse().filter(function(t){return"0"!=t.value})),"OK"===r[0].status&&"OK"===r[1].status){e.record_merge=e.merge_record(e.motor_record,e.water_meter_record);var n=0,o=0,a=t.record_merge.filter(function(t){return"undefined"!==typeof t.onoff_total&&"undefined"!==typeof t.value_diff}).map(function(t){return n+=t.onoff_total,o+=t.value_diff,[t.onoff_total,t.value_diff]}),i=u["regression"]("linear",a);e.unit_time_output=i.parameter.gradient,e.unit_time_output_2=o/n}})},transform_motor_record:function(t){return Object(c["a"])(t).reverse().reduce(function(t,e){return[].concat(Object(c["a"])(t),[[e.on_time,0],[e.on_time,1],[e.off_time,1],[e.off_time,0]])},[])},transform_motor_record_daily:function(t){return i()(Object(c["a"])(t).reverse().reduce(function(t,e){return t[e.on_time.slice(0,10)]=(t[e.on_time.slice(0,10)]||0)+e.total,t},{}))},transform_water_meter_record:function(t){return Object(c["a"])(t).reverse().reduce(function(t,e){return[].concat(Object(c["a"])(t),[[e.date,e.value]])},[])},merge_record:function(t,e){e=Object(c["a"])(e).reverse();var r=t.reduce(function(t,e){if("NA"!==e.off_time){var r=e.on_time.slice(0,10),n=t[r]?t[r].motor_data:[];t[r]={motor_data:[].concat(Object(c["a"])(n),[e])}}return t},{}),n=e.reduce(function(t,r,n){return t[r.date]=t[r.date]||{},r.value_diff=Number(((e[n+1]?e[n+1].value:r.value)-r.value).toFixed(2)),t[r.date].water_meter_data=r,t},r),o=i()(n);return o=o.map(function(t){var e=t[1].motor_data||[],r={date:t[0],onoff:e,onoff_total:e.reduce(function(t,e){return t+e.total},0),value:t[1].water_meter_data?t[1].water_meter_data.value:void 0,value_diff:t[1].water_meter_data?t[1].water_meter_data.value_diff:void 0};return r}),o.sort(function(t,e){return t.date>e.date?-1:t.date<e.date?1:0})}},computed:{series_time:function(){return[{name:"每日開關秒數",type:"bar",animation:!1,yAxisIndex:0,data:this.record_merge.map(function(t){return[t.date,t.onoff_total]})},{name:"水表數值",type:"line",animation:!1,showSymbol:!1,yAxisIndex:1,lineStyle:{width:1},data:this.record_merge.map(function(t){return[t.date,t.value]})},{name:"水表數值差",show:!1,type:"bar",animation:!1,yAxisIndex:2,data:this.record_merge.map(function(t){return[t.date,t.value_diff]})}]},series_time_value:function(){var t=this.record_merge.filter(function(t){return"undefined"!==typeof t.onoff_total&&"undefined"!==typeof t.value_diff}).map(function(t){return[t.onoff_total/3600,t.value_diff]}),e=u["regression"]("linear",t);return e.points.sort(function(t,e){return t[0]-e[0]}),[{symbolSize:10,data:t,type:"scatter"},{name:"line",type:"line",showSymbol:!1,data:e.points,markPoint:{itemStyle:{normal:{color:"transparent"}},label:{normal:{show:!0,position:"left",formatter:e.expression,textStyle:{color:"#333",fontSize:14}}},data:[{coord:e.points[e.points.length-2]}]}}]},series_time_prediction:function(){var t=this,e=this.record_merge.filter(function(t){return"undefined"!==typeof t.onoff_total&&"undefined"!==typeof t.value_diff}),r=e.map(function(e){return[e.value_diff,e.onoff_total*t.unit_time_output]}),n=e.map(function(e){return[e.value_diff,e.onoff_total*t.unit_time_output_2]}),o=u["regression"]("linear",r);o.points.sort(function(t,e){return t[0]-e[0]});var a=u["regression"]("linear",n);return a.points.sort(function(t,e){return t[0]-e[0]}),[{name:"斜率",symbolSize:5,data:r,type:"scatter"},{name:"平均",symbolSize:5,data:n,type:"scatter"},{name:"斜率推估回歸",type:"line",showSymbol:!1,data:o.points,lineStyle:{width:1,color:"#c23531"},itemStyle:{color:"#c23531"},markPoint:{itemStyle:{normal:{color:"transparent"}},label:{normal:{show:!0,position:"left",formatter:o.expression,textStyle:{color:"#c23531",fontSize:14}}},data:[{coord:o.points[o.points.length-2]}]}},{name:"平均推估回歸",type:"line",showSymbol:!1,data:a.points,lineStyle:{width:1,color:"#2f4554"},itemStyle:{color:"#2f4554"},markPoint:{itemStyle:{normal:{color:"transparent"}},label:{normal:{show:!0,position:"left",formatter:a.expression,textStyle:{color:"#2f4554",fontSize:14}}},data:[{coord:a.points[a.points.length-1]}]}}]}}},$=k,A=(r("5f4a"),Object(h["a"])($,n,o,!1,null,"0a506a8d",null));A.options.__file="record.vue";e["a"]=A.exports},"56d7":function(t,e,r){"use strict";r.r(e),function(t){r("cadf"),r("551c"),r("097d");var e=r("2b0e"),n=r("8c4f"),o=r("3dfd"),a=r("5c96"),i=r.n(a),c=r("c87b"),s=r.n(c),l=(r("0fae"),r("1a33")),u=r("ffc5"),d=r("e395"),f=r("b6d7"),m=r("5268");e["default"].config.productionTip=!1,e["default"].use(i.a,{locale:s.a}),e["default"].use(n["a"]);var p=new n["a"]({base:t,routes:[{path:"/user/:user",component:u["a"],children:[{path:"",component:f["a"],name:"controllers"},{path:"map",component:d["a"],name:"map"},{path:":id",component:m["a"],name:"record"}]},{path:"",component:l["a"],name:"home"}]});new e["default"]({router:p,render:function(t){return t(o["a"])}}).$mount("#app")}.call(this,"/")},"5f4a":function(t,e,r){"use strict";var n=r("8c56"),o=r.n(n);o.a},"677a":function(t,e,r){"use strict";var n=r("a4bb"),o=r.n(n),a=(r("cadf"),r("551c"),r("097d"),"https://script.google.com/macros/s/AKfycbxXEy2KKlm-bf6oW83Zxk7CayhZUmMIeZ4StaT88WrpD5gAjcM/exec"),i=function(t,e){var r=o()(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&");return fetch("".concat(a,"?data_type=").concat(t,"&").concat(r)).then(function(t){return t.json()})};e["a"]=i},6884:function(t,e,r){},8620:function(t,e,r){"use strict";var n=r("1e97"),o=r.n(n);o.a},"8c56":function(t,e,r){},"9b76":function(t,e,r){"use strict";var n=r("1f47"),o=r.n(n);o.a},"9eb8":function(t,e,r){},a526:function(t,e,r){"use strict";var n=r("34ee"),o=r.n(n);o.a},b16e:function(t,e,r){"use strict";var n=r("6884"),o=r.n(n);o.a},b6d7:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[t._v("使用者："+t._s(t.user)+"(設備數量："+t._s(t.controllers.length)+")")])]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.controllers,xs:6,sm:6,md:6,lg:12,xl:12}},[r("el-table-column",{attrs:{align:"center",type:"index",width:"30"}}),r("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"250"}}),r("el-table-column",{attrs:{align:"center",prop:"name",label:"名稱"}}),r("el-table-column",{attrs:{align:"center",prop:"month_max_h",label:"月預期抽水時數"}}),r("el-table-column",{attrs:{align:"center",prop:"water_meter_offset",label:"水表偏移值"}}),r("el-table-column",{attrs:{align:"center",label:"馬達最後啟動時間",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.last_motor_record.on_time.slice(0,16))+"\n        "),new Date-new Date(e.row.last_motor_record.on_time)<864e5?r("div",[t._v(t._s("("+parseInt((new Date-new Date(e.row.last_motor_record.on_time))/1e3/60/60)+"小時前)"))]):r("div",[t._v(t._s("("+parseInt((new Date-new Date(e.row.last_motor_record.on_time))/1e3/60/60/24)+"天前)"))])]}}])}),r("el-table-column",{attrs:{align:"center",label:"狀態",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["NA"!==e.row.last_motor_record.off_time?r("el-tag",{attrs:{size:"medium",type:"success"}},[t._v("關閉")]):r("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v("啟動")])]}}])}),r("el-table-column",{attrs:{align:"center",label:"水表讀數",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.last_water_meter_record.value)+"\n        "),r("div",[t._v("("+t._s((e.row.last_water_meter_record.value-e.row.water_meter_offset).toFixed(1))+")")])]}}])}),r("el-table-column",{attrs:{align:"center",label:"數據記錄",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){t.to_record(e.row.id)}}},[t._v("記錄")])]}}])}),r("el-table-column",{attrs:{align:"center",label:"地圖",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){t.open_map(e.row.latitude,e.row.longitude)}}},[t._v("前往")])]}}])})],1)],1)},o=[],a=(r("ac6a"),r("5df3"),r("75fc")),i=r("795b"),c=r.n(i),s=(r("cadf"),r("551c"),r("097d"),r("677a")),l={created:function(){var t=this;c.a.resolve(Object(s["a"])("controller",{user:t.user})).then(function(e){if("OK"===e.status){var r=e.controllers.map(function(t){return Object(s["a"])("motor_record",{id:t.id})});r=[].concat(Object(a["a"])(r),Object(a["a"])(e.controllers.map(function(t){return Object(s["a"])("water_meter_record",{id:t.id})}))),c.a.all(r).then(function(r){var n=e.controllers.length;r.forEach(function(t,r){var o=e.controllers[r<n?r:r-n];r<n?(o.last_motor_record=t.records[t.records.length-1],o.motor_record=t.records):(o.last_water_meter_record=t.records[t.records.length-1],o.water_meter_record=t.records)}),t.controllers=e.controllers})}})},data:function(){return{user:this.$route.params.user,controllers:[]}},components:{},computed:{},methods:{to_record:function(t){this.$router.push({name:"record",params:{id:t}})},open_map:function(t,e){window.open("https://www.google.com.tw/maps/place/".concat(t,",").concat(e),"_blank")}}},u=l,d=(r("8620"),r("2877")),f=Object(d["a"])(u,n,o,!1,null,"51347c39",null);f.options.__file="controllers.vue";e["a"]=f.exports},d447:function(t,e,r){},d6c0:function(t,e,r){"use strict";var n=r("d447"),o=r.n(n);o.a},e395:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"map"}})},o=[],a=r("768b"),i=(r("ac6a"),r("5d73")),c=r.n(i),s=r("75fc"),l=(r("7f7f"),r("96cf"),r("3b8d")),u=(r("cadf"),r("551c"),r("097d"),r("e11e")),d=r.n(u),f=(r("6cc54"),r("a4bb")),m=r.n(f),p="https://script.google.com/macros/s/AKfycbxXEy2KKlm-bf6oW83Zxk7CayhZUmMIeZ4StaT88WrpD5gAjcM/exec",_=function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=m()(r).map(function(t){return"".concat(t,"=").concat(r[t])}).join("&"),t.next=3,fetch("".concat(p,"?data_type=").concat(e,"&").concat(n));case 3:return o=t.sent,t.abrupt("return",o.json());case 5:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),h=_;delete d.a.Icon.Default.prototype._getIconUrl,d.a.Icon.Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")});var v={data:function(){return{user:this.$route.params.user,map:{},controllers:[]}},methods:{getControllers:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h("controller",{user:e});case 2:return r=t.sent,t.abrupt("return","OK"===r.status?r.controllers:[]);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setControllersLayer:function(t){var e=this,r=t.map(function(t){var r=d.a.Marker.prototype.options.icon,n=t.motor_record.length;"NA"==t.motor_record[n-1].off&&(r.options.__proto__.className="on");var o=d.a.marker([t.latitude,t.longitude],{id:t.id,icon:r});return o.bindPopup("\n            <div>\n                <h3>".concat(t.name,"</h3>\n                <p>ID：").concat(t.id,"</p>\n                <p>座標：").concat(t.latitude,",").concat(t.longitude,"</p>\n                <p>狀態：").concat("NA"==t.motor_record[n-1].off?"開啟":"關閉",'</p>\n                <p>資料：<a href="#/user/').concat(e.user,"/").concat(t.id,'" target="_blank">查看</a></p>\n            </div>\n        ')),o});return d.a.featureGroup(r)},to_record:function(t){this.$router.push({name:"record",params:{id:t}})}},created:function(){},mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,r,n,o,i,u,f,m,p,_,v,b,g,w;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,r=d.a.tileLayer("https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW",{subdomains:"012",maxZoom:20,attribution:"Map data: &copy; Google",fixed:!0}),n=d.a.map("map",{attributionControl:!1}),t.next=5,this.getControllers(e.user);case 5:e.controllers=t.sent,o=[].concat(Object(s["a"])(e.controllers.map(function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",h("motor_record",{id:e.id}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())),Object(s["a"])(e.controllers.map(function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",h("water_meter_record",{id:e.id}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()))),i=!0,u=!1,f=void 0,t.prev=10,m=c()(o.entries());case 12:if(i=(p=m.next()).done){t.next=21;break}return _=Object(a["a"])(p.value,2),v=_[0],b=_[1],t.next=16,b;case 16:g=t.sent,v<e.controllers.length?e.controllers[v].motor_record=g.records:e.controllers[v-e.controllers.length].water_meter_record=g.records;case 18:i=!0,t.next=12;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](10),u=!0,f=t.t0;case 27:t.prev=27,t.prev=28,i||null==m.return||m.return();case 30:if(t.prev=30,!u){t.next=33;break}throw f;case 33:return t.finish(30);case 34:return t.finish(27);case 35:w=this.setControllersLayer(e.controllers),n.addLayer(r).addLayer(w).fitBounds(w.getBounds()),e.map=n;case 38:case"end":return t.stop()}},t,this,[[10,23,27,35],[28,,30,34]])}));function e(){return t.apply(this,arguments)}return e}()},b=v,g=(r("d6c0"),r("2877")),w=Object(g["a"])(b,n,o,!1,null,null,null);w.options.__file="map.vue";e["a"]=w.exports},f200:function(t,e,r){"use strict";var n=r("9eb8"),o=r.n(n);o.a},ffc5:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"slide-fade"}},[r("router-view")],1)],1)},o=[],a=(r("cadf"),r("551c"),r("097d"),{data:function(){return{}},components:{},computed:{},methods:{}}),i=a,c=(r("41e9"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"752b0713",null);s.options.__file="user.vue";e["a"]=s.exports}});
//# sourceMappingURL=app.92b09d61.js.map