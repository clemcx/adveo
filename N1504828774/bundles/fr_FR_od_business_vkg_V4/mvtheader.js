var optimost={liveUrl:"es/639/c/23/u/viking_direct_live.js",qaUrl:"es/639/c/23/u/viking_direct_staging.js",cDomain:"vikingdirect.fr",isLive:true,nonDocWrite:false,es:[],cs:[],ms:[],A:{},C:{},D:document,L:document.location,M:[],Q:{},T:new Date(),U:"",V:"3.00",Enabled:true,ST:"script",SA:{type:"text/javascript"},I:function(){var o=this.L.search;var h=this.D.cookie;if(o.length>3){for(var k=o.substring(1).split("&"),f=0,e=k.length;f<e;f++){var d=k[f].indexOf("=");if(d>0){this.Q[k[f].substring(0,d)]=unescape(k[f].substring(d+1))}}}if(h.length>3){for(var k=h.split(";"),f=0,j=k.length;f<j;f++){var m=k[f].split("=");while(m[0].substring(0,1)==" "){m[0]=m[0].substring(1,m[0].length)}if(m.length==2){this.C[m[0]]=unescape(m[1])}}}var g=this.D.getElementById("optimost_global_head");if(g&&g.src){this.isLive=!(g.src.match(/live\=false/i));this.nonDocWrite=(g.src.match(/nondocwrite\=true/i))}},B:function(){var b;this.A={};var a=this;this.A.D_ts=Math.round(a.T.getTime()/1000);this.A.D_tzo=a.T.getTimezoneOffset();this.A.D_loc=a.L.protocol+"//"+a.L.hostname+a.L.pathname;this.A.D_ckl=a.D.cookie.length;this.A.D_ref=a.D.referrer;if(typeof optrial=="object"){for(b in optrial){this.A[b]=optrial[b]}}for(b in this.Q){this.A[b]=this.Q[b]}for(b in this.C){if(b.substring(0,2)=="op"){this.A[b]=this.C[b]}}},S:function(){var a="";for(var b in this.A){if(this.A[b]!=null&&this.A[b]!=""){a+=(a.length>0?"&":(this.U.indexOf("?")>0?"&":"?"))+b+"="+escape(this.A[b])}}return this.U+a},SC:function(g,a,b,c){var f=new Date();f.setTime(f.getTime()+b*1000);this.D.cookie=g+"="+escape(a)+((b==null)?"":("; expires="+f.toGMTString()))+"; path=/"+((c==null)?"":(";domain="+c))},SLD:function(){var b=this.D.domain;var c=b.split(".");var a=c.length;if(a<2){b=null}else{if(!isNaN(c[a-1])&&!isNaN(c[a-2])){b=null}else{b="."+c[a-2]+"."+c[a-1]}}return b},R:function(g,k,j,h,f){if(this.Enabled){var a=true;if(g<1000){a=(Math.floor(Math.random()*1000)<g);if(k!=null){if(this.C[k]!=null){a=(this.C[k]!="mvt-no")}else{this.SC(k,a?"mvt-yes":"mvt-no",h,j)}}}if(a){this.W(this.S(),f)}}},W:function(c,a){if(a){var d=this.D.createElement(this.ST);d.src=c;head=this.D.getElementsByTagName("head");if(head.length>0){head[0].appendChild(d)}}else{var b="<"+this.ST+' src="'+c+'"';for(n in this.SA){b+=(" "+n+'="'+this.SA[n]+'"')}b+="></"+this.ST+">";this.D.write(b)}},addModule:function(a,b){this.M[a]=b},displayModule:function(a){if(typeof this.M[a]=="function"){this.M[a]()}},hasModules:function(){var a=0;for(i in this.M){a++}return a>0},runModules:function(){for(var a=0;a<this.ms.length;a++){this.ms[a].run()}for(var a=0;a<this.es.length;a++){this.es[a].dMs()}for(var a=0;a<this.es.length;a++){if(this.es[a].trialCodeLow||this.es[a].showCSS!=""){this.rStyle("optimost_hide"+this.es[a].stn)}}},cStyle:function(b,a){if(this.D.getElementById(a)==null){head=this.D.getElementsByTagName("head");style=this.D.createElement("style");if(a){style.setAttribute("id",a)}rules=this.D.createTextNode(b);style.type="text/css";if(style.styleSheet){style.styleSheet.cssText=rules.nodeValue}else{style.appendChild(rules)}if(head.length>0){head[0].appendChild(style)}}},rStyle:function(b){var a=this.D.getElementById(b);if(a){a.parentNode.removeChild(a)}},f:function(a){var b=this.L.protocol;return b+((b=="http:")?"//by.optimost.com/":"//by.essl.optimost.com/by/")+a},getC:function(a){for(n in this.C){if(n==a){return this.C[n]}}return null},setC:function(c,a,b){this.D.cookie=c+"="+escape(a)+";path=/"+((b==null)?"":(";domain="+b))},getDm:function(){var a=this.cDomain;if(typeof a=="string"&&this.D.domain.indexOf(a)!=-1){return a}else{return null}},wGlobal:function(){var c=this.L.toString();var g=((c.split("//")[0]!="http:")?"https://by.essl":"http://es")+".optimost.com/";var f=g+this.liveUrl.substring(this.liveUrl.indexOf("es/"));var a=g+this.qaUrl.substring(this.qaUrl.indexOf("es/"));var e=(this.isLive)?f:a;if(c.indexOf("opglobalqa=true")!=-1){this.setC("opglobalqa","true",this.getDm());var d=true}else{if(c.indexOf("opglobalqa=false")!=-1){this.setC("opglobalqa","false",this.getDm());var d=false}else{d=(this.getC("opglobalqa")=="true")}}if(d){e=a}var b=Math.round(this.T.getTime()/(3600000*24));this.W(e+"?D_ds="+b,this.nonDocWrite)},stn:0,exps:{},ctrs:{},sams:{}};optimost.I();var optrial=(typeof optrial=="object")?optrial:{};var opcounter=(typeof opcounter=="object")?opcounter:{};optimost.Experiment=function(b,a){if(typeof b!="string"){this.url=""}else{if(b.match(/trial\//)){b=b.substring(b.indexOf("trial/"));this.url=optimost.f(b)}}if(typeof a=="string"){this.modules=[];this.modules.push(a)}else{if(typeof a=="object"){this.modules=a}}this.enabled=true;this.ratio=1000;this.cookieName=null;this.domain=null;this.expiry=null;this.hideCSS="";this.showCSS="";this.trialCodeLow=false;this.nonDocWrite=optimost.nonDocWrite;this.stn=optimost.stn;optimost.stn++;this.run=function(d){if(this.url!=""&&optimost.Enabled){if((!this.trialCodeLow&&(typeof d!="string"||d!="low"))||(this.trialCodeLow&&d=="low")){this.attribute();var c=optimost;c.U=this.url;c.B();if(this.enabled){c.R(this.ratio,this.cookieName,this.domain,this.expiry,this.nonDocWrite)}}else{if(this.hideCSS!=""&&(typeof d!="string"||d!="low")){optimost.cStyle(this.hideCSS,"optimost_hide"+this.stn);if(this.showCSS==""){this.showCSS=this.hideCSS.replace(/display(\s+)?\:(\s+)?none/g,"display:block !important").replace(/visibility(\s+)?\:(\s+)?hidden/g,"visibility:visible !important")}}}if(d!="low"){optimost.es.push(this)}}};this.attribute=function(){};this.dMs=function(){for(var c=0;c<this.modules.length;c++){optimost.displayModule(this.modules[c])}}};optimost.Counter=function(a){if(typeof a!="string"){this.url=""}else{if(a.match(/counter\//)){a=a.substring(a.indexOf("counter/"));this.url=optimost.f(a)}else{this.url=""}}this.enabled=true;this.attribute=function(){};this.nonDocWrite=optimost.nonDocWrite;this.add=function(){optimost.cs.push(this)};this.run=function(){if(this.url!=""&&optimost.Enabled){this.attribute();var c=optimost;c.U=this.url;var b=optrial;optrial=opcounter;c.B();optrial=b;if(this.enabled){optimost.W(c.S(),this.nonDocWrite)}}};this.add()};optimost.SAModule=function(b,a){if(typeof a=="function"){this.name="_standalone_"+b;optimost.addModule(b,a);this.add=function(){optimost.ms.push(this)};this.run=function(){optimost.displayModule(this.name)}}this.add()};optimost.wGlobal();