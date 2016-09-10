$(document).ready(function(){
        var HeaderTop = $('#sticky-header').offset().top;
		
        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) {
                        $('#sticky-header').css({position: 'fixed', top: '0px'});
                } else {
                        $('#sticky-header').css({position: 'static'});
                }
        });
	});