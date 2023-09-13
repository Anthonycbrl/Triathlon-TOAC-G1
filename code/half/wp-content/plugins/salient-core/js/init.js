/**
 * Simplified JS for basic element functionality.
 *
 * @package Salient WPBakery Addons
 * @author ThemeNectar
 */
 
 /* global jQuery */
 /* global Waypoint */
 /* global imagesLoaded */

// Easing.
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})


/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


jQuery(document).ready(function($){
  
  "use strict";
  
  var $body = $('body'),
  $window   = $(window);
  
  /**
  * Tabbed Section.
  *
  * @since 1.0
  */
  $('body').on('click','.tabbed > ul li:not(.cta-button) a',function(e){
    
    e.preventDefault();
    
    var $id = $(this).parents('li').index()+1;
    
    var $frontEndEditorTabDiv =  ($('body.vc_editor').length > 0) ? '> .wpb_tab ': '';
    
    if(!$(this).hasClass('active-tab') && !$(this).hasClass('loading')){
      $(this).parents('ul').find('a').removeClass('active-tab');
      $(this).addClass('active-tab');
      
      $(this).parents('.tabbed').find('> div:not(.clear)' + $frontEndEditorTabDiv).css({'visibility':'hidden','position':'absolute','opacity':'0','left':'-9999px', 'display': 'none'}).removeClass('visible-tab');
      
      if($('body.vc_editor').length > 0) {
        //front end editor locate tab by modal id
        var $data_m_id = ($(this).parent().is('[data-m-id]')) ? $(this).parent().attr('data-m-id') : '';
        $(this).parents('.tabbed').find('> div[data-model-id="'+$data_m_id+'"]' + $frontEndEditorTabDiv).css({'visibility':'visible', 'position' : 'relative','left':'0','display':'block'}).stop().animate({'opacity':1},400).addClass('visible-tab');
        //update padding
        
      } else {
        $(this).parents('.tabbed').find('> div:nth-of-type('+$id+')' + $frontEndEditorTabDiv).css({'visibility':'visible', 'position' : 'relative','left':'0','display':'block'}).stop().animate({'opacity':1},400).addClass('visible-tab');
      }
      
      if($(this).parents('.tabbed').find('> div:nth-of-type('+$id+') .iframe-embed').length > 0 || $(this).parents('.tabbed').find('> div:nth-of-type('+$id+') .portfolio-items').length > 0) setTimeout(function(){ $(window).resize(); },10); 
    }
    

    return false;
    
  });
  
  
  
  function tabbedInit(){ 
    
    $('.tabbed').each(function(){

      //make sure the tabs don't have a nectar slider - we'll init this after the sliders load in that case
      if($(this).find('.swiper-container').length === 0 && $(this).find('.testimonial_slider').length === 0 && $(this).find('.portfolio-items:not(".carousel")').length === 0 && $(this).find('.wpb_gallery .portfolio-items').length == 0 && $(this).find('iframe').length == 0){
        $(this).find('> ul li:first-child a').trigger('click');
      }	
      if($(this).find('.testimonial_slider').length > 0 || $(this).find('.portfolio-items:not(".carousel")').length > 0 || $(this).find('.wpb_gallery .portfolio-items').length > 0 || $(this).find('iframe').length > 0 ){
        var $that = $(this);
        
        $(this).find('.wpb_tab').show().css({'opacity':0,'height':'1px'});
        $(this).find('> ul li a').addClass('loading');
        
        setTimeout(function(){ 
          $that.find('.wpb_tab').hide().css({'opacity':1,'height':'auto'}); 
          $that.find('> ul li a').removeClass('loading');
          $that.find('> ul li:first-child a').trigger('click'); 
        },900);
      }
      
    });
  }
  setTimeout(tabbedInit,60);
  
  
  
  /**
  * Toggles.
  *
  * @since 1.0
  */
  $('body').on('click','.toggle h3 a', function(){
    
    if(!$(this).parents('.toggles').hasClass('accordion')) { 
      $(this).parents('.toggle').find('> div').slideToggle(300);
      $(this).parents('.toggle').toggleClass('open');
      
      //switch icon
      if( $(this).parents('.toggle').hasClass('open') ){
        $(this).find('i').attr('class','icon-minus-sign');
      } else {
        $(this).find('i').attr('class','icon-plus-sign');
      }
      
      return false;
    }
  });
  
  // Accordion.
  $('body').on('click','.accordion .toggle h3 a', function(){
    
    if($(this).parents('.toggle').hasClass('open')) return false;
    
    $(this).parents('.toggles').find('.toggle > div').slideUp(300);
    $(this).parents('.toggles').find('.toggle h3 a i').attr('class','icon-plus-sign');
    $(this).parents('.toggles').find('.toggle').removeClass('open');
    
    $(this).parents('.toggle').find('> div').slideDown(300);
    $(this).parents('.toggle').addClass('open');
    
    //switch icon
    if( $(this).parents('.toggle').hasClass('open') ){
      $(this).find('i').attr('class','icon-minus-sign');
    } else {
      $(this).find('i').attr('class','icon-plus-sign');
    }
    
    if($('#nectar_fullscreen_rows').length > 0) {
      clearTimeout($t);
      var $t = setTimeout(function(){ $(window).trigger('smartresize'); },400);
    }
    
    return false;
  });
  
  // accordion start open
  function accordionInit(){ 
    $('.accordion').each(function(){
      $(this).find('> .toggle').first().addClass('open').find('> div').show();
      $(this).find('> .toggle').first().find('a i').attr('class','icon-minus-sign');
    });
    
    
    $('.toggles').each(function() {
      
      var $isAccordion = ($(this).hasClass('accordion')) ? true : false;
      
      $(this).find('.toggle').each(function(){
        if($(this).find('> div .testimonial_slider').length > 0 || $(this).find('> div iframe').length > 0) {
          var $that = $(this);
          $(this).find('> div').show().css({'opacity':0,'height':'1px', 'padding':'0'});
          
          setTimeout(function(){
            $that.find('> div').hide().css({'opacity':1,'height':'auto', 'padding':'10px 14px'}); 
            if($isAccordion === true && $that.index() === 0) $that.find('> div').slideDown(300);
          },900);
        } 
      });
    });
  }
  accordionInit();
  
  
  
  /**
  * Testimonial Slider.
  *
  * @since 1.0
  */
  function nectarTestimonialSliders() {
    
    var $testimonialSliders = [];
    
    if( typeof NectarTestimonialSlider == 'undefined' ) { 
      return; 
    }
    
    $('.testimonial_slider').each(function(i){
      
      var $that_el = $(this);
      var $type = ( $(this).is('[data-style]') ) ? $(this).attr('data-style') : 'none';
      
      $testimonialSliders[i] = new NectarTestimonialSlider($that_el, $type);
      
      
      if( $(this).is('.disable-height-animation:not([data-style*="multiple_visible"])') ) {
        $testimonialSliders[i].testimonialSliderHeight(); 
        setTimeout($testimonialSliders[i].testimonialSliderHeight.bind($testimonialSliders[i]),500);
      }
      
      if( $(this).is('.testimonial_slider[data-style="multiple_visible_minimal"]') ) {
        $testimonialSliders[i].testimonialSliderHeightMinimalMult();
        setTimeout($testimonialSliders[i].testimonialSliderHeightMinimalMult.bind($testimonialSliders[i]),500);
      }
      
    });
  }
  nectarTestimonialSliders();
  
  
  /**
  * Progress Bars
  *
  * @since 1.0
  */
  function progressBars() {
    
    $('.nectar-progress-bar').parent().each(function () {
      
      var $that = $(this);
      

        $that.find('.nectar-progress-bar .bar-wrap').css('opacity', '1');
      
        $that.find('.nectar-progress-bar').each(function (i) {
          
          var percent = $(this).find('span').attr('data-width'),
          $endNum 		= parseInt($(this).find('span strong i').text()),
          $that 			= $(this);
          
          $that.find('span').css({
            'width': percent + '%'
          });
          
          setTimeout(function () {
            
            $that.find('span strong').css({
              'opacity': 1
            });
            
          }, (i * 90));
          
          ////100% progress bar 
          if (percent === '100') {
            $that.find('span strong').addClass('full');
          }
        });
        
        $that.addClass('completed');
        
      
    });
  }
  progressBars();
  
  
  /**
  * Image Comparison.
  *
  * @since 1.0
  */
  function twentytwentyInit() {
    $('.twentytwenty-container').each(function () {
      var $that = $(this);
      
      if ($that.find('.twentytwenty-handle').length === 0) {
        $(this).imagesLoaded(function () {
          $that.twentytwenty();
        });
      }
      
    });
  }
  twentytwentyInit();
  
  
  
  // Team Member Fullscreen.
  function teamMemberFullscreen() {
    
    if ( $('.team-member').length === 0 ) {
      return;
    }
    
    // Open click event
    $body.on('click', '.team-member[data-style="bio_fullscreen"]', function () {
      
      if ($('.nectar_team_member_overlay').length > 0) {
        return;
      }
      
      var $usingBoxedClass  = ($('body > #boxed').length > 0) ? 'in-boxed' : null,
      $teamMemberMeta       = $(this).find('.nectar_team_bio').html(),
      $teamMemberImg        = ($(this).find('.nectar_team_bio_img[data-img-src]').length > 0) ? $(this).find('.nectar_team_bio_img').attr('data-img-src') : '';
      
      $body.append('<div class="nectar_team_member_overlay ' + $usingBoxedClass + '"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span><h2>' + $(this).find('.team-meta h3').html() + '</h2><div class="title">' + $(this).find('.team-meta p').html() + '</div><div class="team-desc">' + $teamMemberMeta + '</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div><div class="nectar_team_member_close ' + $usingBoxedClass + '"><div class="inner"></div></div>');
      
      if ($teamMemberImg.length > 0) {
        
        // Fade in img on load
        var teamTmpImg = new Image();
        teamTmpImg.src = $teamMemberImg;
        teamTmpImg.onload = function () {
          $('.nectar_team_member_overlay .team_member_image').css('opacity', '1');
        };
        $('.nectar_team_member_overlay .team_member_image').css({
          'background-image': 'url("' + $teamMemberImg + '")'
        });
      }
      
      var $headerNavSpace = 0;
      $('.nectar_team_member_overlay .inner-wrap').css({
        'padding-top': $headerNavSpace
      });
      
      // No-scroll class - ios ready
      if ($('.using-mobile-browser').length > 0) {
        $('body,html').addClass('nectar-no-scrolling');
      }
      
      teamFullscreenResize();
      
      // Transition in
      $('.nectar_team_member_overlay')
        .addClass('open')
        .addClass('animating');
      
      setTimeout(function () {
        $('.nectar_team_member_close').addClass('visible');
        $('.nectar_team_member_overlay').removeClass('animating');
      }, 500);
      
      // Bind close mousemove
      $(document).on('mousemove', teamMousemoveOn);
      
      
      if ($('.team-member[data-style="bio_fullscreen"]').length > 0 && navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) ) {
        $('.nectar_team_member_overlay').addClass('on-mobile');
      }
      
    });
    
    // Close click event
    $body.on('click', '.nectar_team_member_overlay', function () {
      
      if (!$(this).hasClass('animating')) {
        
        $('.nectar_team_member_overlay').removeClass('open');
        $('.nectar_team_member_close').removeClass('visible');
        
        if ($('.using-mobile-browser').length > 0) {
          $('body,html').removeClass('nectar-no-scrolling');
        }
        
        setTimeout(function () {
          
          // Unbind close mousemove
          $(document).off('mousemove', teamMousemoveOn);
          
          $('.nectar_team_member_overlay, .nectar_team_member_close').remove();
          
        }, 820);
      }
    });
    
    if ($('.team-member[data-style="bio_fullscreen"]').length > 0) {
      $window.on('resize', teamFullscreenResize);
    }

  }
  
  
  /**
  * Team member element fullscreen resize event.
  *
  * @since 1.0
  */
  function teamFullscreenResize() {
    var $leftHeaderSize = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 275 : 0;
    $('.nectar_team_member_overlay').css({
      'width': $window.width() - $leftHeaderSize,
      'left': $leftHeaderSize
    });
  }
  
  
  /**
  * Team member element fullscreen close button follow on mousemove.
  *
  * @since 1.0
  */
  function teamMousemoveOn(e) {
    
    if ($('a:hover').length > 0) {
      $('.nectar_team_member_close .inner').removeClass('visible');
    } else {
      $('.nectar_team_member_close .inner').addClass('visible');
    }
    $('.nectar_team_member_close').css({
      left: e.pageX - 26,
      top: e.pageY - $window.scrollTop() - 29
    });
  }
  
  teamMemberFullscreen();
  
  
  /**
  * Page builder full height row option.
  *
  * @since 8.0
  */
  
  function vcFullHeightRow() {
    
    var $element = $(".vc_row-o-full-height:first");
    if ($element.length) {
      
      var windowHeight, offsetTop, fullHeight;
      windowHeight = $window.height();
      
      $(".vc_row-o-full-height").each(function () {
        
        offsetTop = $(this).offset().top;
        
        if (offsetTop < windowHeight && 
          $(this).hasClass('top-level')) {
            
          fullHeight = 100 - offsetTop / (windowHeight / 100);
          $(this).css("min-height", fullHeight + "vh");
          $(this).find('> .col.span_12').css("min-height", fullHeight + "vh");
          
        } else {
          
          $(this).css("min-height", windowHeight);
          $(this).find('> .col.span_12').css("min-height", windowHeight);
          
        }
        
      });
      
    }
    
  }
  
  
  /**
  * Page builder full height row init.
  *
  * @since 10.1
  */
  
  function vcFullHeightRowInit() {
    
    if( $('.vc_row-o-full-height').length > 0 ) {
      vcFullHeightRow();
      $window.on('smartresize', vcFullHeightRow);
    }
    
  }
  
  vcFullHeightRowInit();
  
  
  
});