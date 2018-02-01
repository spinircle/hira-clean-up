
document.write('<script src="//trkr.scdn1.secure.raxcdn.com/t/5657f9703bb2f89d12000215.js"></script>');

 var _selldo = [{_async:true}]; 
  var _selldo = [];

_selldo.push({project_id : "56659cb03bb2f8f46900001b"});

  window.sell_do_form_successfully_submitted = function(data, event){

   
    try{
     dataLayer.push({
         'event' : 'selldo_form_submitted'
      });
    }catch(err){}
    
  };







$(document).ready(function(){

$(function(){
 
    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').fadeIn();
		} else {
			$('.scroll-top-wrapper').fadeOut();
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

	// debugger
	$(".header-section").load("header.html"); 
  	$(".footer-content").load("footer.html");




});
