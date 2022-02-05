/**** plugins ******* /



/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-mq-teststyles-load
 */
;window.Modernizr=function(a,b,c){function v(a){i.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l={},m={},n={},o=[],p=o.slice,q,r=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},s=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return r("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=p.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(p.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(p.call(arguments)))};return e});for(var A in l)u(l,A)&&(q=A.toLowerCase(),e[q]=l[A](),o.push((e[q]?"":"no-")+q));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),h=j=null,e._version=d,e.mq=s,e.testStyles=r,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};




/**
 *   Unslider by @idiot
 */

   
  (function($, f) {
    //  If there's no jQuery, Unslider can't work, so kill the operation.
    if(!$) return f;
    
    var Unslider = function() {
      //  Set up our elements
      this.el = f;
      this.items = f;
      
      //  Dimensions
      this.sizes = [];
      this.max = [0,0];
      
      //  Current inded
      this.current = 0;
      
      //  Start/stop timer
      this.interval = f;
          
      //  Set some options
      this.opts = {
        speed: 500,
        delay: 3000, // f for no autoplay
        complete: f, // when a slide's finished
        keys: !f, // keyboard shortcuts - disable if it breaks things
        dots: true, // display â€¢â€¢â€¢â€¢oâ€¢ pagination
        fluid: true // is it a percentage width?,
      };
      
      //  Create a deep clone for methods where context changes
      var _ = this;

      this.init = function(el, opts) {
        this.el = el;
        this.ul = el.children('ul');
        this.max = [el.outerWidth(), el.outerHeight()];     
        this.items = this.ul.children('li').each(this.calculate);
        
        //  Check whether we're passing any options in to Unslider
        this.opts = $.extend(this.opts, opts);
        
        //  Set up the Unslider
        this.setup();
        
        return this;
      };
      
      //  Get the width for an element
      //  Pass a jQuery element as the context with .call(), and the index as a parameter: Unslider.calculate.call($('li:first'), 0)
      this.calculate = function(index) {
        var me = $(this),
          width = me.outerWidth(), height = me.outerHeight();
        
        //  Add it to the sizes list
        _.sizes[index] = [width, height];
        
        //  Set the max values
        if(width > _.max[0]) _.max[0] = width;
        if(height > _.max[1]) _.max[1] = height;
      };
      
      //  Work out what methods need calling
      this.setup = function() {
        //  Set the main element
        this.el.css({
          overflow: 'hidden',
          width: _.max[0],
          height: this.items.first().outerHeight()
        });
        
        //  Set the relative widths
        this.ul.css({width: (this.items.length * 100) + '%', position: 'relative'});
        this.items.css('width', (100 / this.items.length) + '%');
        
        if(this.opts.delay !== f) {
          this.start();
          this.el.hover(this.stop, this.start);
        }
        
        //  Custom keyboard support
        this.opts.keys && $(document).keydown(this.keys);
        
        //  Dot pagination
        this.opts.dots && this.dots();
        
        //  Little patch for fluid-width sliders. Screw those guys.
        if(this.opts.fluid) {
          var resize = function() {
            _.el.css('width', Math.min(Math.round((_.el.outerWidth() / _.el.parent().outerWidth()) * 100), 100) + '%');
          };
          
          resize();
          $(window).resize(resize);
        }
        
        if(this.opts.arrows) {
          this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>')
            .find('.arrows span').click(function() {
              $.isFunction(_[this.className]) && _[this.className]();
            });
        };
        
        //  Swipe support
        if($.event.swipe) {
          this.el.on('swipeleft', _.prev).on('swiperight', _.next);
        }
      };
      
      //  Move Unslider to a slide index
      this.move = function(index, cb) {
        //  If it's out of bounds, go to the first slide
        if(!this.items.eq(index).length) index = 0;
        if(index < 0) index = (this.items.length - 1);
        
        var target = this.items.eq(index);
        var obj = {height: target.outerHeight()};
        var speed = cb ? 5 : this.opts.speed;
        
        if(!this.ul.is(':animated')) {      
          //  Handle those pesky dots
          _.el.find('.dot:eq(' + index + ')').addClass('active').siblings().removeClass('active');

          this.el.animate(obj, speed) && this.ul.animate($.extend({left: '-' + index + '00%'}, obj), speed, function(data) {
            _.current = index;
            $.isFunction(_.opts.complete) && !cb && _.opts.complete(_.el);
          });
        }
      };
      
      //  Autoplay functionality
      this.start = function() {
        _.interval = setInterval(function() {
          _.move(_.current + 1);
        }, _.opts.delay);
      };
      
      //  Stop autoplay
      this.stop = function() {
        _.interval = clearInterval(_.interval);
        return _;
      };
      
      //  Keypresses
      this.keys = function(e) {
        var key = e.which;
        var map = {
          //  Prev/next
          37: _.prev,
          39: _.next,
          
          //  Esc
          27: _.stop
        };
        
        if($.isFunction(map[key])) {
          map[key]();
        }
      };
      
      //  Arrow navigation
      this.next = function() { return _.stop().move(_.current + 1) };
      this.prev = function() { return _.stop().move(_.current - 1) };
      
      this.dots = function() {
        //  Create the HTML
        var html = '<ol class="dots">';
          $.each(this.items, function(index) { html += '<li class="dot' + (index < 1 ? ' active' : '') + '">' + (index + 1) + '</li>'; });
          html += '</ol>';
        
        //  Add it to the Unslider
        this.el.addClass('has-dots').append(html).find('.dot').click(function() {
          _.move($(this).index());
        });
      };
    };
    
    //  Create a jQuery plugin
    $.fn.unslider = function(o) {
      var len = this.length;
      
      //  Enable multiple-slider support
      return this.each(function(index) {
        //  Cache a copy of $(this), so it 
        var me = $(this);
        var instance = (new Unslider).init(me, o);
        
        //  Invoke an Unslider instance
        me.data('unslider' + (len > 1 ? '-' + (index + 1) : ''), instance);
      });
    };
  })(window.jQuery, false);
