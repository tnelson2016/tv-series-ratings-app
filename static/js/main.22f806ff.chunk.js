(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),o=n.n(i),c=(n(28),n(6)),s=n(7),l=n(9),u=n(8),h=n(10),m=n(5),p=(n(29),n(12)),d=function(e){var t=e.series;return r.a.createElement("li",null,r.a.createElement(p.b,{to:"/series/".concat(t.show.id)},t.show.name))},f=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"series-list"},e.list.map(function(e){return r.a.createElement(d,{series:e,key:e.show.id})})))},v=function(e){return r.a.createElement("p",null,e.message)},g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={series:[],seriesName:"",isFetching:!1},n.onSeriesInputChange=function(e){n.setState({seriesName:e.target.value,isFetching:!0}),fetch("http://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then(function(e){return e.json()}).then(function(e){return n.setState({series:e,isFetching:!1})})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.series,n=e.seriesName,a=e.isFetching;return r.a.createElement("div",null,r.a.createElement(v,{message:"Here you can find all of your most loved series"}),r.a.createElement("div",null,r.a.createElement("input",{value:n,type:"text",onChange:this.onSeriesInputChange})),0===t.length&&""===n.trim()&&r.a.createElement("p",null,"Please enter series name into the input"),a&&0===t.length&&""!==n.trim()&&r.a.createElement("p",null,"No Tv series have been found with this name"),a&&r.a.createElement("p",null,"Loading..."),!a&&r.a.createElement(f,{list:this.state.series}))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://api.tvmaze.com/shows/".concat(t,"?embed-episodes")).then(function(e){return e.json()}).then(function(t){return e.setState({show:t})})}},{key:"render",value:function(){var e=this.state.show;return r.a.createElement("div",null,null===e&&r.a.createElement("p",null,"Loading..."),null!==e&&r.a.createElement("div",null,r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Premiered - ",e.premiered),r.a.createElement("p",null,"Rating - ",e.rating.average),r.a.createElement("p",null,r.a.createElement("img",{alt:"Show",src:e.image.medium}))))}}]),t}(a.Component),E=function(e){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:g}),r.a.createElement(m.a,{path:"/series/:id",component:w}))},b=(n(34),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"TV Series List")),r.a.createElement(E,null))}}]),t}(a.Component)),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(p.a,null,r.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tv-series-ratings-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/tv-series-ratings-app","/service-worker.js");y?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.22f806ff.chunk.js.map