lazyload(),lazyload($(".contact__map")),AOS.init();var sliderWidth=function(e,t){var i=$(e);if($(window).width()<768)i.owlCarousel(t);else i.addClass("off");$(window).resize((function(){if($(window).width()<768){if($(".owl-carousel").hasClass("off")){i.owlCarousel(t);i.removeClass("off")}}else $(".owl-carousel").hasClass("off")||(i.addClass("off").trigger("destroy.owl.carousel"),i.find(".owl-stage-outer").children(":eq(0)").unwrap())}))};function owl_carousel_page_numbers(e){var t=e.page.size;if(t>1)var i=e.item.index,s=i+1+"-"+(i+t);else s=e.item.index+1;$(".photo__number-dots").text(s-.5*e.item.count+"/"+e.item.count)}$(".photo__block").on("initialized.owl.carousel changed.owl.carousel resized.owl.carousel",(function(e){owl_carousel_page_numbers(e)})),$(document).ready((function(){sliderWidth(".information__block",{margin:100,loop:!0,items:2,nav:!0,dots:!0,dotsEach:!0,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{items:2},0:{items:1}}}),sliderWidth(".advantages__block",{margin:100,loop:!0,items:2,nav:!0,dots:!0,dotsEach:!0,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{items:2},0:{items:1}}}),sliderWidth(".photo__block",{loop:!0,autoWidth:!0,items:1,center:!0,nav:!0,dots:!1,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{margin:10},0:{margin:100}}}),sliderWidth(".work__block",{margin:50,loop:!0,nav:!0,dots:!0,dotsEach:!0,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{items:2},0:{items:1}}})})),$(window).resize((function(){sliderWidth(".information__block",{margin:100,loop:!0,items:2,nav:!0,dots:!0,dotsEach:!0,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{items:2},0:{items:1}}}),sliderWidth(".advantages__block",{margin:100,loop:!0,items:2,nav:!0,dots:!0,dotsEach:!0,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{items:2},0:{items:1}}}),sliderWidth(".photo__block",{loop:!0,autoWidth:!0,items:1,center:!0,nav:!0,dots:!1,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{margin:10},0:{margin:100}}}),sliderWidth(".work__block",{margin:50,loop:!0,nav:!0,dots:!0,dotsEach:!0,navText:['<img src="../img/slider-prev.png" alt="img">','<img src="../img/slider-next.png" alt="img">'],responsive:{568:{items:2},0:{items:1}}})})),$(document).ready((function(){function e(){var e=$(window).scrollTop();$(".header").toggleClass("header__scroll",e>0),$(".gotop__wrap").toggleClass("gotop_toggle",e>0)}$(document).ready((function(){e()})),$(window).on("scroll",(function(){e()})),$(".gotop").on("click",(function(e){e.preventDefault(),$(window).scrollTop(0)}))})),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".header__nav");e.addEventListener("click",()=>{e.classList.contains("burger--active")&&t.classList.contains("header__nav--active")?(e.classList.remove("burger--active"),t.classList.remove("header__nav--active"),setTimeout(()=>{e.style.color="#fff"},200)):(e.classList.add("burger--active"),t.classList.add("header__nav--active"),e.style.color="#000")}),$(".scrolled").click((function(i){i.preventDefault();var s=$(this).attr("href"),o=$(s).offset().top;$("body,html").animate({scrollTop:o},1e3),e.classList.remove("burger--active"),t.classList.remove("header__nav--active"),setTimeout(()=>{e.style.color="#fff"},200)}))}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".questions__name").forEach(e=>{e.addEventListener("click",e=>{const t=e.currentTarget,i=t.querySelector(".questions__control"),s=t.querySelector(".questions__text");t.classList.toggle("show"),t.classList.contains("show")?(i.setAttribute("aria-expanded",!0),s.setAttribute("aria-hidden",!1),s.style.maxHeight=s.scrollHeight+"px"):(i.setAttribute("aria-expanded",!1),s.setAttribute("aria-hidden",!0),s.style.maxHeight=null)})})});