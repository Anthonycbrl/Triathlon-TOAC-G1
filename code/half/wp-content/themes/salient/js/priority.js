/**
 * Salient priority script.
 *
 * @package Salient
 * @author ThemeNectar
 */
 /* global jQuery */

 
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


// Mobile Secondary Header Nav Always Visible.
var headerEl      = document.getElementById('header-outer');
var headerSpaceEl = document.getElementById('header-space');

if( typeof(headerEl) != 'undefined' && headerEl != null &&
    typeof(headerSpaceEl) != 'undefined' && headerSpaceEl != null &&
		headerSpaceEl.hasAttribute('data-secondary-header-display')) {
			
	headerSpaceEl.style.height = headerEl.clientHeight + 'px';
	
}


// DOM Ready.
jQuery(function($) {
	
	"use strict";
	
	var using_mobile_browser = false;
	if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) { 
		using_mobile_browser = true; 
	}
	
	var nectarPageHeader;
	
  /**
  * Set the height of fullscreen page headers
  *
  * @since 9.0
  */
	function fullscreenHeightCalc() {
		var pageHeaderOffset = nectarPageHeader.offset().top;
		nectarPageHeader.css('height', ( parseInt(window.innerHeight) - parseInt(pageHeaderOffset)) +'px');
	}
	
	if( using_mobile_browser && $('#page-header-bg.fullscreen-header').length > 0 ) {
		
		nectarPageHeader = $('#page-header-bg');
		
		fullscreenHeightCalc();
		
		var $windowDOMWidth = window.innerWidth, $windowDOMHeight = window.innerHeight;
		
		$(window).resize(function(){
			if( ($(window).width() != $windowDOMWidth && $(window).height != $windowDOMHeight)){
				fullscreenHeightCalc();
				// Store the current window dimensions.
				$windowDOMWidth = window.innerWidth;
				$windowDOMHeight = window.innerHeight;
			}
		});
		
	}
	
  /**
  * Set the height of the fullscreen recent project slider
  *
  * @since 9.0
  */
	function portfolioFullScreenSliderCalcs() {
		
		var $bodyBorderSize = ($('.body-border-top').length > 0 && $(window).width() > 1000) ? $('.body-border-top').height(): 0;
		
		$('.nectar_fullscreen_zoom_recent_projects').each(function(){
			if($(this).parents('.first-section').length > 0) {
				$(this).css('height',$(window).height() - $(this).offset().top - $bodyBorderSize);
			} else {
				$(this).css('height',$(window).height());
			}
		});
		
	}
	
	if(using_mobile_browser && $('.nectar_fullscreen_zoom_recent_projects').length > 0) { 
    portfolioFullScreenSliderCalcs(); 
  }
	
	
  /**
  * Move the needed HTML for the centered header bottom bar format.
  *
  * @since 9.0
  */
	function centeredNavBottomBarReposition() {
		
		var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
		var $headerSpan3 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3');
		var $secondaryHeader = $('#header-secondary-outer');
		
		var $logoLinkClone = $headerSpan3.find('#logo').clone();
		if($logoLinkClone.is('[data-supplied-ml="true"]')) {
			$logoLinkClone.find('img:not(.mobile-only-logo)').remove();
		}
		//trans
		$logoLinkClone.find('img.starting-logo').remove();
		

		if($secondaryHeader.length > 0) {
			$secondaryHeader.addClass('centered-menu-bottom-bar');
		} 
		
		
		if($('#header-outer[data-condense="true"]').length > 0) {
			$headerSpan9.prepend($logoLinkClone);
		} 
	}
  
	
	if($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
		centeredNavBottomBarReposition();
	}
	
	
	// Add loaded class for "zoom out" page header effect.
	$('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass('loaded');
	
  
  /**
  * Nectar Slider mobile font sizing override options.
  *
  * @since 9.0
  */
	function sliderFontOverrides() { 
		
		var $overrideCSS = '';
		
		$('.nectar-slider-wrap').each(function(){
			
			if($(this).find('.swiper-container[data-tho]').length > 0) {
				
				var $tho = $(this).find('.swiper-container').attr('data-tho');
				var $tco = $(this).find('.swiper-container').attr('data-tco');
				var $pho = $(this).find('.swiper-container').attr('data-pho');
				var $pco = $(this).find('.swiper-container').attr('data-pco');
				
				// Tablets Viewport.
				if( $tho != 'auto' || $tco != 'auto' ) {
          
					$overrideCSS += '@media only screen and (max-width: 1000px) and (min-width: 690px) {';
					if($tho != 'auto')
					$overrideCSS += '#'+$(this).attr('id')+ '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content h2 { font-size:' + $tho + 'px!important; line-height:' + (parseInt($tho) + 10) + 'px!important;  }';
					if($pho != 'auto')
					$overrideCSS += '#'+$(this).attr('id')+ '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content p, body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content p { font-size:' + $tco + 'px!important; line-height:' + (parseInt($tco) + 10) + 'px!important;  }';
					$overrideCSS += '}';
          
				}
				
				
				// Phone Viewport.
				if( $pho != 'auto' || $pco != 'auto' ) {
					
					$overrideCSS += '@media only screen and (max-width: 690px) {';
					if($pho != 'auto')
					$overrideCSS += '#'+$(this).attr('id')+ '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content h2 { font-size:' + $pho + 'px!important; line-height:' + (parseInt($pho) + 10) + 'px!important;  }';
					if($pho != 'auto')
					$overrideCSS += '#'+$(this).attr('id')+ '.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content p,  body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#'+$(this).attr('id')+ '[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+ ' .swiper-slide .content p { font-size:' + $pco + 'px!important; line-height:' + (parseInt($pco) + 10) + 'px!important;  }';
					$overrideCSS += '}';
				}
				
			}
      
		});
		
    
		if( $overrideCSS.length > 1 ) {
      
			var head = document.head || document.getElementsByTagName('head')[0];
			var style = document.createElement('style');
			
			style.type = 'text/css';
			if (style.styleSheet){
				style.styleSheet.cssText = $overrideCSS;
			} else {
				style.appendChild(document.createTextNode($overrideCSS));
			}
			
			head.appendChild(style);
			
			$('.nectar-slider-wrap .content').css('visibility','visible');
		}

	}
  
	sliderFontOverrides();
	

});