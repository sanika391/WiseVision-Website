/*-----------------------------------------------------------------------------------

    Theme Name: Optect - Optometrist & Eye Care HTML Template
    Description: Optometrist & Eye Care HTML Template
    Author: Website Design Templates
    Version: 1.0
        
    ---------------------------------- */    

!function(t){"use strict";var i=t(window);function a(){var e,a;e=t(".full-screen"),a=i.height(),e.css("min-height",a),e=t("header").height(),a=t(".screen-height"),e=i.height()-e,a.css("height",e)}t("#preloader").fadeOut("normall",function(){t(this).remove()}),i.on("scroll",function(){var e=i.scrollTop(),a=t(".navbar-brand img"),o=t(".navbar-brand.logodefault img");e<=175?(t("header").removeClass("scrollHeader").addClass("fixedHeader"),a.attr("src","img/logos/logo-inner.png")):(t("header").removeClass("fixedHeader").addClass("scrollHeader"),a.attr("src","img/logos/logo.png")),o.attr("src","img/logos/logo.png")}),i.on("scroll",function(){500<t(this).scrollTop()?t(".scroll-to-top").fadeIn(400):t(".scroll-to-top").fadeOut(400)}),t(".scroll-to-top").on("click",function(e){e.preventDefault(),t("html, body").animate({scrollTop:0},600)}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),t(".parallax,.bg-img").each(function(e){t(this).attr("data-background")&&t(this).css("background-image","url("+t(this).data("background")+")")}),t(".story-video").magnificPopup({delegate:".video",type:"iframe"}),t(".popup-social-video").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),t(".form_date").datetimepicker({language:"en",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0}),t(".form_time").datetimepicker({language:"en",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:1,minView:0,maxView:1,forceParse:0}),i.resize(function(e){setTimeout(function(){a()},500),e.preventDefault()}),a(),0!==t(".copy-clipboard").length&&(new ClipboardJS(".copy-clipboard"),t(".copy-clipboard").on("click",function(){var e=t(this);e.text();e.text("Copied"),setTimeout(function(){e.text("Copy")},2e3)})),t(".source-modal").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:160}),t(document).ready(function(){t(".testimonial-style01").owlCarousel({center:!1,items:2,loop:!0,dots:!1,nav:!0,navText:["<i class='ti-arrow-left text-primary'></i>","<i class='ti-arrow-right text-primary'></i>"],margin:30,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,responsive:{0:{items:1},768:{items:2},992:{items:2},1200:{items:2},1400:{items:3}}}),t(".testimonial-carousel1").owlCarousel({loop:!0,responsiveClass:!0,nav:!1,dots:!0,margin:50,center:!1,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,items:1,responsive:{0:{dots:!1},576:{dots:!1},768:{dots:!0}}}),t(".client-style02").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,smartSpeed:900,thumbs:!1,nav:!1,dots:!1,center:!1,margin:30,responsive:{0:{items:1},576:{items:3},768:{items:4},1200:{items:5}}}),t(".portfolio-carousel-two").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,smartSpeed:900,thumbs:!1,nav:!1,dots:!1,center:!1,margin:0,responsive:{0:{items:1},768:{items:2,margin:30},992:{items:2,margin:30},1200:{items:3,margin:30}}}),t(".service-carousel1").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,smartSpeed:1500,nav:!0,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],dots:!1,center:!1,margin:40,responsive:{0:{items:1,nav:!1},768:{items:2,nav:!1},992:{items:2},1200:{items:3}}}),t(".slider-fade1").owlCarousel({items:1,loop:!0,dots:!0,margin:0,nav:!1,navText:["<span class='ti-arrow-left'></span>","<span class='ti-arrow-right'></span>"],autoplay:!0,smartSpeed:1500,mouseDrag:!1,animateIn:"fadeIn",animateOut:"fadeOut",responsive:{992:{nav:!0,dots:!1}}}),t(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!0,margin:0,autoplay:!0,smartSpeed:500}),t(".slider-fade1").on("changed.owl.carousel",function(e){e=e.item.index-2;t("span").removeClass("animated fadeInUp"),t("h1").removeClass("animated fadeInUp"),t("p").removeClass("animated fadeInUp"),t("a").removeClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(e).find("span").addClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp")}),t(".countup").counterUp({delay:25,time:2e3}),t(".countdown").countdown({date:"29 Nov 2026 00:01:00",format:"on"}),t(".current-year").text((new Date).getFullYear())}),i.on("load",function(){t(".portfolio-gallery").lightGallery(),t(".portfolio-link").on("click",e=>{e.stopPropagation()})})}(jQuery);