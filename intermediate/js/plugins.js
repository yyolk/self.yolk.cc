window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var f=[].slice.call(arguments);typeof console.log==="object"?log.apply.call(console.log,console,f):console.log.apply(console,f)}};
(function(f){function b(){}for(var l="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),g;g=l.pop();)f[g]=f[g]||b})(function(){try{return console.log(),window.console}catch(f){return window.console={}}}());
(function(f,b,l){var g=b.event,m;g.special.smartresize={setup:function(){b(this).bind("resize",g.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",g.special.smartresize.handler)},handler:function(a,e){var c=this,d=arguments;a.type="smartresize";m&&clearTimeout(m);m=setTimeout(function(){jQuery.event.handle.apply(c,d)},e==="execAsap"?0:100)}};b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])};b.Mason=function(a,e){this.element=
b(e);this._create(a);this._init()};var h=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1};b.Mason.prototype={_filterFindBricks:function(a){var e=this.options.itemSelector;return e?a.filter(e).add(a.find(e)):a},_getBricks:function(a){return this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick")},_create:function(a){this.options=b.extend(!0,{},b.Mason.settings,a);this.styleQueue=
[];this.reloadItems();a=this.element[0].style;this.originalStyle={};for(var e=0,c=h.length;e<c;e++){var d=h[e];this.originalStyle[d]=a[d]||""}this.element.css({position:"relative"});this.horizontalDirection=this.options.isRTL?"right":"left";this.offset={};a=b(document.createElement("div"));this.element.prepend(a);this.offset.y=Math.round(a.position().top);this.options.isRTL?(a.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-a.position().left)):this.offset.x=
Math.round(a.position().left);a.remove();var k=this;setTimeout(function(){k.element.addClass("masonry")},0);this.options.isResizable&&b(f).bind("smartresize.masonry",function(){k.resize()})},_init:function(a){this._getColumns("masonry");this._reLayout(a)},option:function(a){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,e){for(var c,d,k,n,f,j,i=0,g=a.length;i<g;i++)if(c=b(a[i]),d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols),d===1)this._placeBrick(c,
this.colYs);else{k=this.cols+1-d;n=[];for(j=0;j<k;j++)f=this.colYs.slice(j,j+d),n[j]=Math.max.apply(Math,f);this._placeBrick(c,n)}i={};i.height=Math.max.apply(Math,this.colYs)-this.offset.y;this.options.isFitWidth&&(i.width=this.cols*this.columnWidth-this.options.gutterWidth);this.styleQueue.push({$el:this.element,style:i});c=this.isLaidOut?this.options.isAnimated?"animate":"css":"css";d=this.options.animationOptions;var h;for(i=0,g=this.styleQueue.length;i<g;i++)h=this.styleQueue[i],h.$el[c](h.style,
d);this.styleQueue=[];e&&e.call(a);this.isLaidOut=!0},_getColumns:function(){var a=(this.options.isFitWidth?this.element.parent():this.element).width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||a;this.columnWidth+=this.options.gutterWidth;this.cols=Math.floor((a+this.options.gutterWidth)/this.columnWidth);this.cols=Math.max(this.cols,1)},_placeBrick:function(a,e){for(var c=Math.min.apply(Math,e),d=0,b=0,f=e.length;b<f;b++)if(e[b]===c){d=b;break}b={top:c};b[this.horizontalDirection]=
this.columnWidth*d+this.offset.x;this.styleQueue.push({$el:a,style:b});c+=a.outerHeight(!0);f=this.cols+1-f;for(b=0;b<f;b++)this.colYs[d+b]=c},resize:function(){var a=this.cols;this._getColumns("masonry");this.cols!==a&&this._reLayout()},_reLayout:function(a){var b=this.cols;for(this.colYs=[];b--;)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems();this._init(a)},appended:function(a,
b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c);this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a);a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="";this.style.top="";this.style.left=""});for(var a=this.element[0].style,e=0,c=h.length;e<
c;e++){var d=h[e];a[d]=this.originalStyle[d]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry");b(f).unbind(".masonry")}};b.fn.imagesLoaded=function(a){function b(){--g<=0&&this.src!==h&&(setTimeout(c),f.unbind("load error",b))}function c(){a.call(d,f)}var d=this,f=d.find("img").add(d.filter("img")),g=f.length,h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";g||c();f.bind("load error",b).each(function(){if(this.complete||this.complete===l){var a=
this.src;this.src=h;this.src=a}});return d};var o=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var e=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"masonry");c?!b.isFunction(c[a])||a.charAt(0)==="_"?o("no such method '"+a+"' for masonry instance"):c[a].apply(c,e):o("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'")})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||
{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
