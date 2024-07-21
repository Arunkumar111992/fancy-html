$(document).ready(function(){
	$(".dotns_se").click(function(){
		$('.shareItemTop').hide();
		$(this).closest('.swe_qe_po').next('.shareItemTop').fadeToggle();
	});	
	$(".dotns_sesws").click(function(){
		$('.shareItemTopinfo').hide();
		$(this).closest('.ered_ioq').next('.shareItemTopinfo').fadeToggle();
	});	
	$(".dotns_se").click(function(){
		$('.shareItemTopnxt').hide();
		$(this).closest('.swe_qe_pose').next('.shareItemTopnxt').fadeToggle();
	});	
	$("#loginc").click(function(){
		$(".outertopModal").hide();
		$(".outertopModalLogin").show();
	});
	$("#signuk").click(function(){
		$(".outertopModalLogin").hide();
		$(".outertopModal").show();
	});
	$(".reTopwFiler a").click(function(){
		$(".categoriesRefine").slideToggle();
	});
	$('#homeSlideRight').owlCarousel({
	    loop:true,
	    items:1,
	    autoplay:true,
	    nav: true,
  		navText: [$('.owl-custom-next'),$('.owl-custom-prev')]
	});
	$('.owl-carousel-cart').owlCarousel({
	    loop:true,
	    items:4,
	    autoplay:true,
	    nav: true,
	    dots:false,
  		navText: [$('.owl-custom-next'),$('.owl-custom-prev')]
	});
	$('.lightzoom').lightzoom({speed: 400,
        viewTitle: true,
        isOverlayClickClosing: false,
        isWindowClickClosing: true,
        isEscClosing: true
    });
    $(".thumImg").click(function(){ 
        var imgsrc = $(this).attr('data-src');
        $('#thumImgBig').attr('src', 'images/'+imgsrc);
		}); 









		var startValue = '0';
		$(".hoverNextRightBtn .nextBtns").click(function(){ 
				startValue++;
				var imgId = $("#thumImgBig").attr('data-link');
				var imgsrc = $("#thumImgBig").attr('src');
				var imageCount = imgsrc.split('-').pop().split('.')[0];
				if(startValue<$(".ulpathContains li").length){
					$(this).removeClass("disabled");
					imageCount++;
					$('#thumImgBig').attr('src', 'images/product-image-thumb-'+imageCount+'.jpg');
				}			
				if(startValue==$(".ulpathContains li").length-1){	
					$(this).addClass("disabled");
				}
		});













});
$(document).click(function(event){ 
	if($(event.target).closest(".shareItemTop,.dotns_se").length == 0) {
	 	$(".shareItemTop").fadeOut(200);
	} 
});
$(window).load(function(){
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 40,
    itemMargin: 5,
    asNavFor: '#slider'
  });
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});
