// Select
$(document).ready(function() {
	$(".desktop select").selectric();
	
	$(".mobile header select").on('change',function() {
	    var selected = $(".mobile header select option:selected").text();
		$('.mobile header small').text(selected).show();
	});
});


// Datepicker
$(document).ready(function(){
	$(".calendar").datepicker($.extend({},
		$.datepicker.regional["sv"], {
			onSelect: function(date){
			},
			monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
			dayNamesMin: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
			minDate: "0d",
			numberOfMonths: 2,
			dateFormat: "dd/mm/yy",
			onSelect: function () { }
		}
	));
});


// Fixed Quotation
$(window).scroll(function() {
	var a = $('header').height();
	var b = $('#fixed').height();
	var c = a - b;
	
	if( $( this ).scrollTop() > c ) {
		$( '#fixed' ).addClass( 'sticked' );  
	} else if( $( this ).scrollTop() < c ) {
		$( '#fixed' ).removeClass( 'sticked' );  
	}
});


// Partners

$(document).ready(function(){
	var count = $("#partners #slides").children().length;
	
	if (count > 4){
		
		// MORE THAN 4 partners - it moves and loops.
		$(function(){
			// This is for mobile - it displays 1 item
			if ( $(window).width() < 641) {   
				var mySwiper = new Swiper("#partners .swiper-container",{
					mode: "horizontal",
					loop: true,
					autoplay: 0.1,
					speed: 15000,
					slidesPerView: 1,
					slidesPerGroup: 1,
					autoplayDisableOnInteraction: false,
					calculateHeight: true,
					grabCursor: true
				});
			}
			// This is for tablet - it displays 3 items
			else if ( $(window).width() < 768) {
				var mySwiper = new Swiper("#partners .swiper-container",{
					mode: "horizontal",
					loop: true,
					autoplay: 0.1,
					
					// 50000 is the ideal speed for multiples of 3.
					speed: 50000,
					
					slidesPerView: 3,
					slidesPerGroup: 3,
					autoplayDisableOnInteraction: false,
					calculateHeight: true,
					grabCursor: true
				});
			}
			// This is for desktop - it displays 4 items
			else {
				var mySwiper = new Swiper("#partners .swiper-container",{
					mode: "horizontal",
					loop: true,
					autoplay: 0.1,
					
					// 50000 is the ideal speed for multiples of 4.
					speed: 50000,
					
					slidesPerView: 4,
					slidesPerGroup: 4,
					autoplayDisableOnInteraction: false,
					calculateHeight: true,
					grabCursor: true
				});
			}
		});
	}
	
	else {
		
		// UP TO 4 partners - it doesn't move.
		$(function(){
			// This is for mobile - it displays 1 item
			if ( $(window).width() < 641) {   
				var mySwiper = new Swiper("#partners .swiper-container",{
					mode: "horizontal",
					loop: true,
					autoplay: 0.1,
					speed: 15000,
					slidesPerView: 1,
					slidesPerGroup: 1,
					autoplayDisableOnInteraction: false,
					calculateHeight: true,
					grabCursor: true
				});
			}
			//this is the ideal speed for multiples of 3.
			else if ( $(window).width() < 768) {
				var mySwiper = new Swiper("#partners .swiper-container",{
					mode: "horizontal",
					loop: true,
					autoplay: 0.1,
					speed: 50000,
					slidesPerView: 3,
					slidesPerGroup: 3,
					autoplayDisableOnInteraction: false,
					calculateHeight: true,
					grabCursor: true
				});
			}
			// This is for desktop - it displays 4 items
			else {
				var mySwiper = new Swiper("#partners .swiper-container",{
					mode: "horizontal",
					loop: false,
					autoplay: false,
					slidesPerView: 4,
					slidesPerGroup: 4,
					calculateHeight: true
				});
			}
		});
	}
});


// Opinions
$(document).ready(function(){
	if ( $(window).width() < 641) {   
		var mySwiper = new Swiper("#opinions .swiper-container",{
			mode: "horizontal",
			loop: true,
			autoplay: 10000,
			speed: 1000,
			autoplayDisableOnInteraction: false,
			slidesPerView: 1,
			slidesPerGroup: 1,
			calculateHeight: true,
			grabCursor: true
		});
	}
	else {
		var mySwiper = new Swiper("#opinions .swiper-container",{
			mode: "horizontal",
			loop: true,
			autoplay: 7000,
			speed: 1000,
			autoplayDisableOnInteraction: false,
			slidesPerView: 3,
			slidesPerGroup: 3,
			calculateHeight: true,
			grabCursor: true
		});
	}
});

$(document).ready(function(){
	$('#opinions .swiper-slide').css({ height: $(this).find('.outer').height() });
	$('#opinions .ghost').css({ height: $('#opinions .swiper-slide').height() });
	$('#opinions #slides').css({ height: $('#opinions .ghost').height() });
});


// CTA Anchor to top
jQuery.fn.ancoraAnimada = function(settings) {
    settings = jQuery.extend({
        speed: 1000
    }, settings);

    return this.each(function() {
        var caller = this
        jQuery(caller).click(function(event) {
            event.preventDefault()
            var locationHref = window.location.href
            var elementClick = jQuery(caller).attr("href")
            var destination = jQuery(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, settings.speed, function() {
                window.location.hash = elementClick
            });
            return false;
        })
    })
}
$(document).ready(function() {
    $(".ancora").ancoraAnimada();
});


$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

function SaveLeadHead(){


	$.post('/SaveLead', $('#formHead').serializeObject(), function(success){

		if(success){
			alert('Os seus dados foram submetidos com sucesso.Iremos entrar em contacto o mais rapido possivel');
		}

	});
}

function SaveLeadPage(){
	
	
	$.post('/SaveLead', $('#formPage').serializeObject(), function(success){

		if(success){
			alert('Os seus dados foram submetidos com sucesso.Iremos entrar em contacto o mais rapido possivel');
		}

	});
}
