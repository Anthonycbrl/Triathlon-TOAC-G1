/**
 * Salient Shortcodes Basic.
 *
 * @author ThemeNectar
 */
 /* global jQuery */
 
 
/* Easing */
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})


jQuery(document).ready(function($){
  
  "use strict";
  
  /* Tabs */
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
      if($(this).find('.swiper-container').length === 0 && $(this).find('.testimonial_slider').length === 0 && $(this).find('.portfolio-items:not(".carousel")').length === 0 && $(this).find('.wpb_gallery .portfolio-items').length === 0 && $(this).find('iframe').length == 0){
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
  
  
  
  /* Toggles */
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
  
  //accordion
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
  
  //accordion start open
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
  
  
  
  /* Testimonial Slider */
  
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
  
  
  
});