(this.webpackJsonpproject2redo=this.webpackJsonpproject2redo||[]).push([[0],{183:function(e,t,c){},327:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(69),i=c.n(s),r=c(9),o=(c(183),c(31)),l=c(155),j=c(2),b=function(e){var t=Object(a.useState)("false"),c=Object(r.a)(t,2),n=c[0],s=c[1],i=function(t){s(!n),e.setNavbarClickable(!e.navbarClickable)},b="navbarClosed ".concat(n?null:"navbarOpen"),u="navbarIcon ".concat(n?null:"navbarIconRotate"),d="navbarTitle ".concat(e.routePageClass);return Object(j.jsx)("nav",{className:"navbarMain",children:Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)(o.b,{to:"/",className:d,children:"What if?"}),Object(j.jsx)(l.a,{className:u,onClick:i}),Object(j.jsxs)("div",{className:b,children:[Object(j.jsx)(o.b,{to:"/Crypto-Details",onClick:i,className:"navbarLinks",children:"Crypto Calculator"}),Object(j.jsx)(o.b,{to:"/Inflation",onClick:i,className:"navbarLinks",children:"Inflation Calculator"})]})]})})},u=c(15),d=c(21),h=c(63),O=c(45),m=c.p+"static/media/cionpiggie_VP9.6dd0ebb0.webm";var x=function(e){var t,c=e.mainData.inputPrice&&Number(e.mainData.inputPrice).toLocaleString(),n=Object(a.useRef)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"prices",children:[Object(j.jsx)("div",{className:"coinFlip",children:Object(j.jsx)("video",(t={controls:!0,autostart:!0,autoPlay:!0,loop:!0},Object(h.a)(t,"controls",!1),Object(h.a)(t,"src",m),Object(h.a)(t,"type","video/webm"),t))}),Object(j.jsxs)("div",{className:"pricesLower",children:[Object(j.jsxs)("h1",{className:"pricesHomeText",children:["your ",Object(j.jsxs)("span",{className:"boldText",children:["$",c]})," is now worth"]}),Object(j.jsxs)("h1",{className:"boldText",children:["$",e.results.priceNow]}),Object(j.jsx)("h1",{className:"pricesHomeText",children:"that's a change of"}),Object(j.jsxs)("h1",{className:"boldText",children:[e.results.percentChange,"%"]}),Object(j.jsx)(o.b,{to:"/Crypto-Details",children:Object(j.jsx)("button",{className:"pricesButton",children:"Try out a different cryptocurrency here"})})]}),Object(j.jsx)(O.a,{className:"pricesArrow",onClick:function(){n.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}})]}),Object(j.jsxs)("div",{className:"bitcoinDetailsUpper",children:[Object(j.jsxs)("div",{className:"bitcoinDetails",ref:n,children:[Object(j.jsx)("h1",{children:"What is Bitcoin?"}),Object(j.jsx)("p",{children:"Bitcoin is the first and most valuable cryptocurrency in the world."}),Object(j.jsx)("p",{children:"It is often referred to as"}),Object(j.jsx)("h1",{children:"Digital Gold"}),Object(j.jsx)("p",{children:"and serves a similar purpose in hedging against inflation. The US Government has printed trillions of dollars over the past year and almost"}),Object(j.jsx)("a",{href:"https://www.cityam.com/almost-a-fifth-of-all-us-dollars-were-created-this-year/",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("h1",{children:"1/5th of all US Dollars were created in 2020."})}),Object(j.jsx)("p",{children:"Inflation is a large issue in the US and Bitcoin offers a solution in being a decentralization, deflationary asset that cannot be manipulated by central governments.    "}),Object(j.jsx)("a",{className:"bitcoinLink",href:"https://www.nerdwallet.com/article/investing/what-is-bitcoin",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("button",{children:"Read more about Bitcoin"})})]}),Object(j.jsx)(O.a,{className:"bitcoinArrow",onClick:e.handleInflationClick})]})]})};var p=function(e){return e.inflation.priceNow,e.mainData.inputPrice,Object(j.jsxs)("div",{className:"home3lower",children:[Object(j.jsx)("img",{src:"https://findicons.com/files/icons/2219/dot_pictograms/256/usd_dollar_money_cash.png",alt:"btc"}),Object(j.jsxs)("div",{className:"inflationHome",children:[Object(j.jsx)("h1",{className:"inflationHomeText",children:"By holding the US Dollar"}),Object(j.jsxs)("h1",{className:"inflationHomeText",children:["your ",Object(j.jsxs)("span",{className:"boldText",children:["$",e.mainData.inputPrice]})," has lost"]}),Object(j.jsxs)("h1",{className:"boldText",children:[e.inflation.percentage,"%"]}),Object(j.jsx)("h1",{className:"inflationHomeText",children:"of its value since 2017."}),Object(j.jsx)(o.b,{to:"/Inflation",children:Object(j.jsx)("button",{children:"Try out some different values for inflation"})})]})]})};var f=function(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(j.jsxs)("div",{className:"home1Lower",children:[Object(j.jsx)("h1",{children:"you invested"}),Object(j.jsx)("form",{className:"landingForm",onSubmit:function(t){t.preventDefault(),e.setMainData(Object(u.a)(Object(u.a)({},e.mainData),{},{inputPrice:n})),s(""),e.setHomepageVisible(!0)},children:Object(j.jsx)("input",{value:n,type:"text",onChange:function(t){s(t.target.value),e.setHomepageVisible(!1)},placeholder:"$1000"})}),Object(j.jsx)("h1",{children:"into Bitcoin in 2017."})]})};var v=function(e){var t=Object(a.useState)(!1),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useRef)(),o=Object(a.useRef)();return Object(a.useEffect)((function(){n&&i.current.scrollIntoView({behavior:"smooth"})}),[n]),Object(j.jsxs)("div",{className:"homepage",children:[Object(j.jsx)("section",{className:"home1",children:Object(j.jsx)(f,{priceRef:i,mainData:e.mainData,setMainData:e.setMainData,setHomepageVisible:s})}),n&&Object(j.jsx)("section",{ref:i,className:"home2",children:Object(j.jsx)(x,{results:e.results,mainData:e.mainData,inflationRef:e.inflationRef,handleInflationClick:function(){o.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}})}),n&&Object(j.jsx)("section",{ref:o,className:"home3",children:Object(j.jsx)(p,{inflation:e.inflation,mainData:e.mainData})})]})},N=c(328),g=c(329),y=c(173),k=c(170),C=c(171),w=c(78),D=c(333);var S=function(e){var t=Object(a.useState)([{date:"x",price:"y"}]),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],b=o[1];return Object(a.useEffect)((function(){!function(){var t=e.cryptoData&&e.cryptoData.reverse();console.log(t);var c=new Date,a=t&&t.map((function(e,t){for(var a=c.getFullYear(),n=c.getMonth(),s=0;s<Math.floor(t/30);s++)0===(n-=1)&&(a-=1,n=12);return{date:"".concat(a,"-").concat(n),price:e[1]}})),n=e.results.date,i=Number(n.slice(3,5))-1,r=n.slice(6,10);b("".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," of ").concat(r)),s(a.reverse())}()}),[e.results]),console.log(n),Object(j.jsxs)("div",{className:"inflationChart",ref:e.chartRef,children:[Object(j.jsxs)("h1",{children:["Price of ",e.results.coin," since ",l]}),Object(j.jsx)(N.a,{width:"100%",height:"70%",children:Object(j.jsxs)(g.a,{data:n,children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"0%",stopColor:"#4D4E52",stopOpacity:1}),Object(j.jsx)("stop",{offset:"75%",stopColor:"#4D4E52",stopOpacity:.15})]})}),Object(j.jsx)(y.a,{dataKey:"price",fill:"url(#color)",stroke:"black"}),Object(j.jsx)(k.a,{dataKey:"date",axisLine:!1,tickLine:!1,tickFormatter:function(e){var t=Number(e.slice(5,7))-1,c=e.slice(0,4);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t]," - ").concat(c)}}),Object(j.jsx)(C.a,{dataKey:"price",axisLine:!1,tickLine:!1,tickCount:10}),Object(j.jsx)(w.a,{}),Object(j.jsx)(D.a,{vertical:!1})]})})]})};var I=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)({date:"",price:"",coin:""}),o=Object(r.a)(i,2),l=o[0],b=o[1],d=Object(a.useState)({date:"",price:"",coin:"",coinId:""}),h=Object(r.a)(d,2),m=h[0],x=h[1],p=Object(a.useState)({current:"",past:""}),f=Object(r.a)(p,2),v=f[0],N=f[1],g=Object(a.useState)({priceNow:"",percentChange:""}),y=Object(r.a)(g,2),k=y[0],C=y[1],w=Object(a.useState)(!1),D=Object(r.a)(w,2),I=D[0],T=D[1],P=Object(a.useState)(!1),_=Object(r.a)(P,2),E=_[0],F=_[1],M=Object(a.useRef)(),R=Object(a.useState)([]),A=Object(r.a)(R,2),J=A[0],L=A[1],Y=Object(a.useRef)(),V=function(e){e.preventDefault(),x(Object(u.a)({},l)),F(!0)},U=l.coin&&n.filter((function(e){return e.name.match("^"+l.coin)})),$=l.coin&&n.filter((function(e){return e.name.match("(?<!^)"+l.coin)})),B=l.coin&&U.concat($),H=l.coin&&I&&B.map((function(e){var t="https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/32/".concat(e.id,".png");return Object(j.jsxs)("div",{className:"cryptoJSXDiv",children:[Object(j.jsx)("img",{className:"cryptoCoinImage",alt:"coinImage",onError:function(e){e.target.src="https://assets.coingecko.com/coins/images/19978/thumb/logo.f3a6bd24.png?1636355493"},src:t}),Object(j.jsx)("span",{className:"cryptoElement regularFont",onClick:function(t){return c=e.id,a=e.name,b(Object(u.a)(Object(u.a)({},l),{},{coin:a,coinId:c})),void T(!1);var c,a},children:e.name})]})})),K="https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/".concat(m.coinId,".png"),G=E&&Object(j.jsxs)("div",{className:"resultsJSXBorder",children:[Object(j.jsx)("img",{className:"cryptoCoinImage",src:K,alt:"coinImage",onError:function(e){e.target.src="https://www.pngall.com/wp-content/uploads/2/Question-Mark-PNG-Image.png"}}),Object(j.jsxs)("div",{className:"resultsJSXText",children:[Object(j.jsxs)("h1",{className:"cryptoText",children:["Your ",Object(j.jsxs)("span",{children:["$",m.price]})," is now worth:"]}),Object(j.jsxs)("h1",{className:"boldText",children:["$",k.priceNow]}),Object(j.jsx)("h1",{className:"cryptoText",children:"a change of:"}),Object(j.jsxs)("h1",{className:"boldText",children:[k.percentChange,"%"]})]})]}),z=Object(j.jsxs)("div",{className:"skeletonCrypto",children:[Object(j.jsx)("div",{className:"skeleton-icon"}),Object(j.jsxs)("div",{className:"skeletonTextArea",children:[Object(j.jsx)("div",{className:"skeleton-text"}),Object(j.jsx)("div",{className:"skeleton-text-big"}),Object(j.jsx)("div",{className:"skeleton-text"}),Object(j.jsx)("div",{className:"skeleton-text-big"}),Object(j.jsx)("div",{className:"skeleton-text"}),Object(j.jsx)("div",{className:"skeleton-text-big"})]})]});Object(a.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/list").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(a.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/simple/price?ids=".concat(m.coinId,"&vs_currencies=usd")).then((function(e){return e.json()})).then((function(e){return e[m.coinId]&&N(Object(u.a)(Object(u.a)({},v),{},{current:e[m.coinId].usd}))})),function(){var e=new Date,t=365*(2021-Number(m.date.slice(6,10)))+30*(Number(e.getMonth())+1-Number(m.date.slice(3,5)));fetch("https://api.coingecko.com/api/v3/coins/".concat(m.coinId,"/market_chart?vs_currency=usd&days=").concat(t,"&interval=monthly")).then((function(e){return e.json()})).then((function(e){return L(e.prices)}))}()}),[m]),Object(a.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/".concat(m.coinId,"/history?date=").concat(m.date,"&localization=false")).then((function(e){return e.json()})).then((function(e){return e.market_data&&N(Object(u.a)(Object(u.a)({},v),{},{past:e.market_data.current_price.usd}))})),G&&M.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),[v.current]),Object(a.useEffect)((function(){v.current&&v.past&&function(){var e=(m.price*v.current/v.past).toFixed(2),t=(e/m.price*100).toFixed(0),c=Number(e).toLocaleString(),a=Number(t).toLocaleString();C({priceNow:c,percentChange:a})}(),b({date:"",price:"",coin:""})}),[v]);var W=I?"cryptoDropDownActive":null,q=l.coin.length>0?W:null,X="cryptoDropDown ".concat(q);return Object(j.jsx)("div",{className:"cryptoUpper",children:Object(j.jsxs)("div",{className:"cryptoMain",children:[Object(j.jsxs)("form",{className:"cryptoForm",onSubmit:V,children:[Object(j.jsx)("h1",{className:"regularFont priceDetailTitle",children:"On "}),Object(j.jsx)("input",{type:"text",placeholder:"DD-MM-YYYY",onChange:function(e){b(Object(u.a)(Object(u.a)({},l),{},{date:e.target.value})),F(!1)},value:l.date}),Object(j.jsx)("h1",{children:"You invested"}),Object(j.jsx)("input",{type:"text",onChange:function(e){b(Object(u.a)(Object(u.a)({},l),{},{price:e.target.value})),F(!1)},value:l.price,placeholder:"$"}),Object(j.jsx)("h1",{children:"into"}),Object(j.jsx)("input",{type:"text",onChange:function(e){T(!0),b(Object(u.a)(Object(u.a)({},l),{},{coin:e.target.value})),F(!1)},value:l.coin,placeholder:"Enter Coin"}),Object(j.jsx)("div",{className:X,children:H}),Object(j.jsx)("button",{onClick:V,children:"Calculate"})]}),Object(j.jsx)("div",{className:"inflationDivide"}),Object(j.jsx)("div",{className:"resultsJSX",ref:M,children:E?G:z}),E&&Object(j.jsx)(O.a,{className:"homepageArrow",onClick:function(){Y.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}),E&&J&&Object(j.jsx)(S,{chartRef:Y,cryptoData:J,results:m})]})})};var T=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],b=o[1];return Object(a.useEffect)((function(){!function(){var t=e.result&&e.result.date&&12*(2021-Number(e.result.date.slice(6,10)))+(11-Number(e.result.date.slice(3,5))),c=e.inflation.data&&e.inflation.data.slice(0,t),a=c&&c.map((function(e){return{date:e[0].toString(),CPI_index_value:e[1]}})),n=e.result.date,i=Number(n.slice(3,5))-1,r=n.slice(6,10);b("".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," of ").concat(r)),a&&a.reverse(),s(a)}()}),[e.result]),console.log(n),Object(j.jsxs)("div",{className:"inflationChart",ref:e.chartRef,children:[Object(j.jsxs)("h1",{children:["CPI Index Value since ",l]}),Object(j.jsx)(N.a,{width:"100%",height:"70%",children:Object(j.jsxs)(g.a,{data:n,children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"0%",stopColor:"#4D4E52",stopOpacity:1}),Object(j.jsx)("stop",{offset:"75%",stopColor:"#4D4E52",stopOpacity:.15})]})}),Object(j.jsx)(y.a,{dataKey:"CPI_index_value",fill:"url(#color)",stroke:"black"}),Object(j.jsx)(k.a,{dataKey:"date",axisLine:!1,tickLine:!1,tickFormatter:function(e){var t=Number(e.slice(5,7))-1,c=e.slice(0,4);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t]," - ").concat(c)}}),Object(j.jsx)(C.a,{dataKey:"CPI_index_value",axisLine:!1,tickLine:!1,tickCount:10}),Object(j.jsx)(w.a,{}),Object(j.jsx)(D.a,{vertical:!1})]})})]})};var P=function(e){var t=Object(a.useState)({data:null,percentage:null,priceNow:null,amountLost:null}),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)({date:null,price:null}),o=Object(r.a)(i,2),l=o[0],b=o[1],d=Object(a.useState)({date:null,price:null}),h=Object(r.a)(d,2),m=h[0],x=h[1],p=Object(a.useState)(!1),f=Object(r.a)(p,2),v=f[0],N=f[1],g=Object(a.useRef)(),y=Object(a.useRef)(),k=function(e){e.preventDefault(),x(Object(u.a)({},l)),N(!0)},C=v&&Object(j.jsxs)("div",{className:v?"inflationJsx":"invisible",ref:g,children:[Object(j.jsx)("h1",{className:"inflationText",children:" Cumulative Inflation Rate: "}),Object(j.jsxs)("h1",{className:"boldText",children:[n.percentage,"%"]}),Object(j.jsx)("h1",{className:"inflationText",children:"Inflated Price:"}),Object(j.jsxs)("h1",{className:"boldText",children:["$",n.priceNow]}),Object(j.jsx)("h1",{className:"inflationText",children:"You have lost"}),Object(j.jsxs)("h1",{className:"boldText",children:["$",n.amountLost]}),Object(j.jsx)("h1",{className:"inflationText",children:"of value by holding "}),Object(j.jsx)("h1",{className:"boldText",children:"the US Dollar"})]}),w=Object(j.jsxs)("div",{className:"skeletonInflation",children:[Object(j.jsx)("div",{className:"skeleton-text"}),Object(j.jsx)("div",{className:"skeleton-text-big"}),Object(j.jsx)("div",{className:"skeleton-text"}),Object(j.jsx)("div",{className:"skeleton-text-big"}),Object(j.jsx)("div",{className:"skeleton-text"}),Object(j.jsx)("div",{className:"skeleton-text-big"}),Object(j.jsx)("div",{className:"skeleton-text"}),Object(j.jsx)("div",{className:"skeleton-text-big"})]});return Object(a.useEffect)((function(){fetch("https://data.nasdaq.com/api/v3/datasets/RATEINF/CPI_USA.json?api_key=dDi1qzdRACZxKWbNGJRx").then((function(e){return e.json()})).then((function(e){return s(Object(u.a)(Object(u.a)({},n),{},{data:e.dataset.data}))}))}),[]),Object(a.useEffect)((function(){!function(){var e=l.date&&12*(2021-Number(l.date.slice(6,10)))+(11-Number(l.date.slice(3,5))),t=e&&((274.31-Number(n.data[e][1]))/Number(n.data[e][1])*100).toFixed(2),c=((t/100+1)*m.price).toFixed(2),a=Number(c-m.price).toFixed(2);s(Object(u.a)(Object(u.a)({},n),{},{percentage:t,priceNow:c,amountLost:a}))}(),C&&g.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),b({date:"",price:""})}),[m]),Object(j.jsxs)("div",{className:"inflationMain",children:[Object(j.jsxs)("form",{className:"inflationForm",handleSubmit:k,children:[Object(j.jsx)("h1",{children:"You held your"}),Object(j.jsx)("input",{value:l.price,onChange:function(e){b(Object(u.a)(Object(u.a)({},l),{},{price:e.target.value})),N(!1)},type:"text",placeholder:"$"}),Object(j.jsx)("h1",{className:"regularFont",children:"in cash since"}),Object(j.jsx)("input",{value:l.date,onChange:function(e){b(Object(u.a)(Object(u.a)({},l),{},{date:e.target.value})),N(!1)},type:"text",placeholder:"DD-MM-YYYY"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:k,children:"Enter"})]}),Object(j.jsx)("div",{className:"inflationDivide"}),Object(j.jsx)("div",{className:"inflationResults",children:v?C:w}),v&&Object(j.jsx)(O.a,{className:"homepageArrow",onClick:function(){y.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}),v&&Object(j.jsx)(T,{chartRef:y,inflation:n,jsx:v,result:m})]})};var _=function(e){var t=Object(a.useState)({inputPrice:"",date:"30-03-2017",coin:"bitcoin"}),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],b=o[1],h=Object(a.useState)(""),O=Object(r.a)(h,2),m=O[0],x=O[1],p=Object(a.useState)({priceNow:"",percentChange:""}),f=Object(r.a)(p,2),N=f[0],g=f[1],y=Object(a.useState)({data:"",percentage:"",amountNow:""}),k=Object(r.a)(y,2),C=k[0],w=k[1];return Object(a.useEffect)((function(){fetch("https://data.nasdaq.com/api/v3/datasets/RATEINF/CPI_USA.json?api_key=dDi1qzdRACZxKWbNGJRx").then((function(e){return e.json()})).then((function(e){return w(Object(u.a)(Object(u.a)({},C),{},{data:e.dataset.data}))})),fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd").then((function(e){return e.json()})).then((function(e){return b(e.bitcoin.usd)})),fetch("https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-03-2017&localization=false").then((function(e){return e.json()})).then((function(e){return x(e.market_data.current_price.usd)})),document.title="What if?"}),[]),Object(a.useEffect)((function(){!function(){var e=(n.inputPrice*l/m).toFixed(2),t=(e/n.inputPrice*100).toFixed(0),c=Number(e).toLocaleString(),a=Number(t).toLocaleString();g({priceNow:c,percentChange:a})}(),function(){var e=12*(2021-Number(n.date.slice(6,10)))+(9-Number(n.date.slice(3,5))),t=C.data&&((274.31-Number(C.data[e][1]))/Number(C.data[e][1])*100).toFixed(2),c=t/100+1;w(Object(u.a)(Object(u.a)({},C),{},{percentage:t,amountNow:c}))}()}),[n.inputPrice]),Object(j.jsxs)("div",{className:e.routePageClass,children:[Object(j.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(v,{results:N,mainData:n,setMainData:s,inflation:C})}}),Object(j.jsx)(d.a,{exact:!0,path:"/Crypto-Details",render:function(){return Object(j.jsx)(I,{})}}),Object(j.jsx)(d.a,{exact:!0,path:"/Inflation",render:function(){return Object(j.jsx)(P,{})}})]})};var E=function(){var e=Object(a.useState)("false"),t=Object(r.a)(e,2),c=t[0],n=t[1],s="routePage ".concat(c?"":"routePageUnclickable");return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{routePageClass:s,navbarClickable:c,setNavbarClickable:n}),Object(j.jsx)(_,{routePageClass:s,navbarClickable:c})]})};i.a.render(Object(j.jsx)(o.a,{basename:"/what-if",children:Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(E,{})})}),document.getElementById("root"))}},[[327,1,2]]]);
//# sourceMappingURL=main.26c1538e.chunk.js.map