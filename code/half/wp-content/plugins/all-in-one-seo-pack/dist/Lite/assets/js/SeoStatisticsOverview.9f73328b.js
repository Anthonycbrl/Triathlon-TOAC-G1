import{u as M,E as b,z as A}from"./links.96350b09.js";import{V as P,S as $,a as I}from"./Statistic.75645dd0.js";import{C as D}from"./Caret.164d8058.js";import{a as L,C as E}from"./Tooltip.6979830f.js";import{n as p}from"./numbers.c7cb4085.js";import{n as x}from"./isArrayLikeObject.22a096cb.js";import{o as c,c as u,r as h,d as g,n as _,b as y,f,w as v,a as m,F,h as B,g as O,t as k,C as N}from"./vue.runtime.esm-bundler.b39e1078.js";import{_ as S}from"./_plugin-vue_export-helper.b97bdf23.js";import{a as Y}from"./index.0eabb636.js";const z={};function G(e,s){return c(),u("div")}const H=S(z,[["render",G]]),U=""+window.__aioseoDynamicImportPreload__("svg/google.20babf27.svg"),V=""+window.__aioseoDynamicImportPreload__("svg/wordpress.7a824a54.svg"),W=""+window.__aioseoDynamicImportPreload__("svg/aioseo.7d699544.svg");const R={setup(){return{rootStore:M()}},components:{apexchart:P,CoreLoader:D,CorePopper:L,GraphTimelineMarkers:H},props:{series:{type:Array,required:!0},chartOverrides:{type:Object,default:()=>({})},height:{type:Number,default(){return 350}},legendStyle:{type:String,default(){return"custom"}},loading:{type:Boolean,default:!1},timelineMarkers:{type:Object,default:()=>({})},multiAxis:Boolean,preset:String,invertYAxis:Boolean},data(){return{isMounted:!1,reversedYAxis:!1,colors:["#005AE0","#00AA63","#F18200","#DF2A4A","#8B5CF6","#D946EF"],presets:{overview:{chart:{type:"area",sparkline:{enabled:!0}},grid:{show:!1,padding:{top:2,right:2,bottom:0,left:2}},xaxis:{show:!1},yaxis:{show:!1,labels:{show:!1,formatter:e=>e?p.compactNumber(e):0}}},keywordsDistribution:{chart:{type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},fill:{type:"solid"},stroke:{width:0},xaxis:{type:"category"},yaxis:{forceNiceScale:!1,tickAmount:2,max:100,labels:{formatter:e=>e.toFixed(0)+"%"}},tooltip:{}}},timelineMarkersDate:null}},methods:{handleTimelineMarkersTooltip(e){var s,t;(s=e.referenceElm)==null||s.classList.remove("active-point"),e.showPopper&&((t=e.referenceElm)==null||t.classList.add("active-point"))},handleTimelineMarkersTooltipUpdate(e){const s=this.$refs.timelineMarkersPopper;s.updatePopper(),e.modal?s.doClose():s.doShow(),this.handleTimelineMarkersTooltip(s)},showTimelineMarkersTooltip(e){var t;const s=this.$refs.timelineMarkersPopper;(t=s.referenceElm)==null||t.classList.remove("active-point"),e==null||e.classList.add("active-point"),s.destroyPopper(),s.doDestroy(),s.referenceElm=e,s.createPopper(),s.doShow()}},computed:{getSeries(){const e=this.series;if(!this.invertYAxis||!e.length)return e;const s=e[0].data.map(a=>a.y),t=[];let r=s.map((a,n)=>({value:a,index:n})).sort((a,n)=>a.value-n.value);const i=a=>(t[a[0].index]=a[a.length-1].value,t[a[a.length-1].index]=a[0].value,a=a.slice(1,a.length-1),a);for(;r.length;)r=i(r);return e[0].data.forEach((a,n)=>{a.label=a.y,a.y=t[n]}),e},chartDefaults(){const e=this.series;return{colors:this.colors,chart:{type:"area",zoom:{enabled:!1},toolbar:{show:!1},animations:{enabled:!0,easing:"easeout",speed:600,animateGradually:{enabled:!0,delay:50}},parentHeightOffset:0},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.9,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},title:{show:!1},grid:{show:!0,strokeDashArray:0,borderColor:"#D0D1D7",yaxis:{lines:{show:!0}},xaxis:{lines:{show:!1}},padding:{top:20,right:20,bottom:20,left:20}},xaxis:{type:"datetime",labels:{show:!0,minHeight:35,trim:!1,rotateAlways:!1,offsetY:6,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"d MMM",hour:""}},tooltip:{enabled:!1,x:{formatter:(s,t)=>{var r,i;const o=new Date(`${(i=(r=e[t.seriesIndex])==null?void 0:r.data[t.dataPointIndex])==null?void 0:i.x} 00:00:00`);return b(o,this.rootStore.aioseo.data.dateFormat)}}},axisBorder:{show:!0,color:"#D0D1D7",height:1,width:"100%",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"#E8E8EB",height:12,offsetX:0,offsetY:0}},yaxis:[{labels:{show:!0,formatter:(s,t,o)=>{var i;if(!this.invertYAxis||!(o!=null&&o.config))return s?p.compactNumber(s):0;const r=[...(i=o==null?void 0:o.globals)==null?void 0:i.yAxisScale[0].result].reverse();return r[t]&&(s=r[t]),s?p.compactNumber(s):0}}}],tooltip:{enabled:!0,x:{formatter:(s,t)=>{var r,i;const o=new Date(`${(i=(r=e[t.seriesIndex])==null?void 0:r.data[t.dataPointIndex])==null?void 0:i.x} 00:00:00`);return b(o,this.rootStore.aioseo.data.dateFormat)}},y:{formatter:(s,t)=>{var o,r,i;return this.invertYAxis&&((o=e[t.seriesIndex])!=null&&o.data[t.dataPointIndex].label)?(r=e[t.seriesIndex])==null?void 0:r.data[t.dataPointIndex].label:p.compactNumber((i=e[t.seriesIndex])==null?void 0:i.data[t.dataPointIndex].y)}}},legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,position:"bottom",horizontalAlign:"center",floating:!1,fontSize:"14px",fontWeight:400,formatter:(s,t)=>{var i,a,n,d;const o=((a=(i=e[t.seriesIndex])==null?void 0:i.legend)==null?void 0:a.name)||s;if(this.legendStyle==="simple")return[o];let r=((d=(n=e[t.seriesIndex])==null?void 0:n.legend)==null?void 0:d.total)||"";return isNaN(r)||(r=p.compactNumber(r)),[`<strong>${r}</strong>`,o]},inverseOrder:!1,width:void 0,height:void 0,tooltipHoverFormatter:void 0,customLegendItems:[],offsetX:0,offsetY:0,markers:{width:16,height:16,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:16,customHTML:()=>this.legendStyle==="simple"?"":'<span class="marker-checkbox"><svg viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8542 1.37147C11.44 0.785682 12.3897 0.785682 12.9755 1.37147C13.5613 1.95726 13.5613 2.907 12.9755 3.49279L6.04448 10.4238C5.74864 10.7196 5.35996 10.8661 4.97222 10.8631C4.58548 10.8653 4.19805 10.7189 3.90298 10.4238L1.0243 7.5451C0.438514 6.95931 0.438514 6.00956 1.0243 5.42378C1.61009 4.83799 2.55983 4.83799 3.14562 5.42378L4.97374 7.2519L10.8542 1.37147Z" fill="currentColor" /></svg></span>',onClick:void 0,offsetX:0,offsetY:0},itemMargin:{horizontal:0,vertical:0},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},annotations:{points:this.annotationsPoints}}},multiAxisDefaults(){const e=this.series,s={yaxis:[]};return e.forEach((t,o)=>{s.yaxis.push({title:{text:t.name.replace("Search ","")},seriesName:t.name,opposite:o===1,labels:{show:!0,formatter:r=>r?p.compactNumber(r):0}})}),s},annotationsPoints(){const e=[];return this.timelineMarkers&&Object.keys(this.timelineMarkers).forEach(s=>{const t={x:new Date(s).getTime(),y:0,yAxisIndex:0,seriesIndex:0,mouseEnter:(r,i)=>{let a=i.target;i.relatedTarget.tagName.toLowerCase()==="circle"&&(a=i.relatedTarget),this.timelineMarkersDate=s,this.showTimelineMarkersTooltip(a)},label:{text:this.timelineMarkers[s].length,borderWidth:0,offsetY:23,style:{background:"transparent",color:"#141B38",fontSize:"12px",fontWeight:700}},marker:{size:12,strokeWidth:1,strokeColor:"#D0D1D7"},image:{width:17,height:17}},o=this.timelineMarkers[s].map(r=>r.type);if(o.length===1)switch(t.label={},o[0]){case"aioseoRevision":t.image.path=x(W);break;case"googleUpdate":t.image.path=x(U);break;case"wpRevision":t.image.path=x(V);break}e.push(t)}),e},chartPreset(){return this.preset&&this.presets[this.preset]?this.presets[this.preset]:{}},chartOptions(){let e={...this.chartDefaults,...this.chartPreset,...this.chartOverrides};return this.multiAxis&&(e={...e,...this.multiAxisDefaults}),e},chartClasses(){const e=this.series.length;let s=4;return 4<e&&(s=3),[this.loading?"blurred":"",this.preset?this.preset:"",`legend-${this.legendStyle}`,`legend-columns-${s}`].filter(t=>t).map(t=>"aioseo-graph-"+t)}},mounted(){this.isMounted=!0},beforeUnmount(){this.isMounted=!1}},j={key:0,class:"aioseo-graph"},X={class:"popper"};function q(e,s,t,o,r,i){const a=h("apexchart"),n=h("core-loader"),d=h("graph-timeline-markers"),w=h("core-popper");return r.isMounted?(c(),u("div",j,[g(a,{width:"100%",height:t.height,ref:"apexchart",options:i.chartOptions,series:i.getSeries,class:_(i.chartClasses)},null,8,["height","options","series","class"]),t.loading?(c(),y(n,{key:0,dark:""})):f("",!0),g(w,{ref:"timelineMarkersPopper",options:{placement:"top"},onShow:i.handleTimelineMarkersTooltip,onHide:i.handleTimelineMarkersTooltip},{default:v(()=>[m("span",X,[r.timelineMarkersDate?(c(),y(d,{key:0,date:r.timelineMarkersDate,timelineMarkers:t.timelineMarkers,onUpdate:i.handleTimelineMarkersTooltipUpdate},null,8,["date","timelineMarkers","onUpdate"])):f("",!0)])]),_:1},8,["onShow","onHide"])])):f("",!0)}const Z=S(R,[["render",q]]);const K={setup(){return{rootStore:M(),searchStatisticsStore:A()}},components:{CoreLoader:D,CoreTooltip:E,Graph:Z,Statistic:$,SvgCircleQuestionMark:Y},mixins:[I],data(){return{statisticsStrings:[{name:"impressions",label:this.$t.__("Search Impressions",this.$td),tooltip:this.$t.__("This graph shows the <strong>total number of times your website appeared in the search results</strong> within the selected timeframe.",this.$td)},{name:"clicks",label:this.$t.__("Total Clicks",this.$td),tooltip:this.$t.__("This graph shows the <strong>total number of clicks that your website received from the search results</strong> within the selected timeframe.",this.$td)},{name:"ctr",label:this.$t.__("Avg. CTR",this.$td),tooltip:this.$t.__("This graph shows the <strong>average click-through rate of your content in the search results</strong> within the selected timeframe.",this.$td)},{name:"position",label:this.$t.__("Avg. Position",this.$td),tooltip:this.$t.__("This graph shows the <strong>average position of your content in the search results</strong> within the selected timeframe.",this.$td)},{name:"keywords",label:this.$t.__("Total Keywords",this.$td),tooltip:this.$t.__("This graph shows the <strong>total number of keywords that your website ranks for in search results</strong> within the selected timeframe.",this.$td)}]}},props:{statistics:{type:Array,default(){return[]}},statisticsData:{type:Object,default(){return null}},view:{type:String,default:"grid"},showGraph:{type:Boolean,default:!0}},computed:{seoStatistics(){const e=[];return this.statistics.forEach(s=>{const t=this.statisticsStrings.find(o=>o.name===s);t&&e.push({...t,data:this.getData(s)})}),e},style(){const e=[];switch(this.view){case"side-by-side":e.push({"grid-template-columns":`repeat(${this.statistics.length}, 1fr)`});break;case"grid":e.push({"grid-template-columns":`repeat(${Math.ceil(this.statistics.length/2)}, 1fr)`,"grid-template-rows":`repeat(${Math.ceil(this.statistics.length/2)}, 1fr)`});break}return e}},methods:{getData(e){var t,o,r,i,a;const s=this.statisticsData?this.statisticsData:(o=(t=this.searchStatisticsStore.data)==null?void 0:t.seoStatistics)==null?void 0:o.statistics;return s?{total:s[e]||0,difference:s.difference&&Math.abs(s.difference[e])||0,direction:s.difference&&0>s.difference[e]?"down":"up",chart:(a=(i=(r=this.searchStatisticsStore.data)==null?void 0:r.seoStatistics)==null?void 0:i.intervals)==null?void 0:a.map(n=>({x:b(new Date(n.date+" 00:00:00"),this.rootStore.aioseo.data.dateFormat),y:n[e]?n[e]:0}))}:{total:0,difference:0,direction:"up",chart:[]}}}},Q={class:"statistics-title"},J=["innerHTML"],ee={class:"statistics-current"},te={class:"statistics-current-total"},se={key:0,class:"statistics-chart"};function re(e,s,t,o,r,i){const a=h("svg-circle-question-mark"),n=h("core-tooltip"),d=h("statistic"),w=h("graph"),T=h("core-loader");return c(),u("div",{class:_(["aioseo-seo-statistics-overview",{[t.view]:!0,"hide-graph":!t.showGraph}]),style:N(i.style)},[(c(!0),u(F,null,B(i.seoStatistics,(l,C)=>(c(),u("div",{key:C,class:"statistics"},[m("div",{class:_([{blurred:o.searchStatisticsStore.loading.seoStatistics}])},[m("div",Q,[O(k(l.label)+" ",1),l.tooltip?(c(),y(n,{key:0},{tooltip:v(()=>[m("span",{innerHTML:l.tooltip},null,8,J)]),default:v(()=>[g(a)]),_:2},1024)):f("",!0)]),m("div",ee,[m("div",te,k(e.formatStatistic(l.name,l.data.total)),1),g(d,{class:_(["statistics-current-difference","statistics-current-difference--"+l.data.direction]),difference:l.data.difference,type:l.name,showCurrent:!1,"tooltip-offset":"-90px,0"},null,8,["class","difference","type"])]),t.showGraph?(c(),u("div",se,[g(w,{series:[{name:l.label,data:l.data.chart}],height:60,preset:"overview","invert-y-axis":l.name==="position"},null,8,["series","invert-y-axis"])])):f("",!0)],2),o.searchStatisticsStore.loading.seoStatistics?(c(),y(T,{key:0,dark:""})):f("",!0)]))),128))],6)}const me=S(K,[["render",re]]);export{Z as G,me as S};
