var main=function(){
	$('.play').click(function(){
		$('#imgFirst').fadeOut(4000);
		$(this).addClass('glyphicon-pause');
		$('.content h2').remove();
		$('#video1,.remove').show(3000).ccs('display','block');
	});
	$('.dropdown').click(function() {
		$('.dropdown-menu').toggle();
	});
	$('#video1').click(function(){
		this[this.paused ? 'play' : 'pause']();
		$('.play').toggleClass('glyphicon-pause');
	});
	$('.remove,.home').click(function(){
		$('#section0').fadeOut('slow');
		$('#sectionJoin').fadeOut('slow');
		$('#sectionSign').fadeOut('slow');
		$('#sectionGallery').fadeOut('slow');
		$('#sectionInformation').fadeOut('slow');
		$('#section1').show();
	    $('#section1 .container-fluid,#section1 .footer').show();	
	});
	$('.arrowRight').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
		if(nextSlide.length === 0) {
		  nextSlide = $('.slide').first();
		}
		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');
	 });
	$('.arrowRight').click(function() {
		var currentSlide = $('.active-slide1');
		var nextSlide = currentSlide.next();
		if(nextSlide.length === 0) {
		  nextSlide = $('.slide1').first();
		}
		currentSlide.fadeOut(600).removeClass('active-slide1');
		nextSlide.fadeIn(600).addClass('active-slide1');
	 });
	$('.arrowRight').click(function() {
		var currentSlide = $('.active-slide2');
		var nextSlide = currentSlide.next();
		if(nextSlide.length === 0) {
		  nextSlide = $('.slide2').first();
		}
		currentSlide.fadeOut(600).removeClass('active-slide2');
		nextSlide.fadeIn(600).addClass('active-slide2');
	});
	$('.arrowRight').click(function() {
		var currentCircle = $('.active-circle');
		var nextCircle = currentCircle.next();
		if(nextCircle.length === 0) {
		  nextCircle = $('.circle').first();
		}
		currentCircle.removeClass('active-circle');
		nextCircle.addClass('active-circle');
	}); 
	$('.arrowLeft').click(function() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();
		if(prevSlide.length === 0) {
		  prevSlide = $('.slide').last();
		}
		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');
	});
	$('.arrowLeft').click(function() {
		var currentSlide = $('.active-slide1');
		var prevSlide = currentSlide.prev();

		if(prevSlide.length === 0) {
		  prevSlide = $('.slide1').last();
		}
		currentSlide.fadeOut(600).removeClass('active-slide1');
		prevSlide.fadeIn(600).addClass('active-slide1');
	});
	$('.arrowLeft').click(function() {
		var currentSlide = $('.active-slide2');
		var prevSlide = currentSlide.prev();

		if(prevSlide.length === 0) {
		  prevSlide = $('.slide2').last();
		}
		currentSlide.fadeOut(600).removeClass('active-slide2');
		prevSlide.fadeIn(600).addClass('active-slide2');
	});
   $('.arrowLeft').click(function() {
		var currentCircle = $('.active-circle');
		var prevCircle = currentCircle.prev();
		if(prevCircle.length === 0) {
			prevCircle = $('.circle').last();
		}
		currentCircle.removeClass('active-circle');
		prevCircle.addClass('active-circle');
	}); 
	$('#col1').mouseenter(function(){
		$('#col1 h2').show();
	});
	$('#col1').mouseout(function(){
		$('#col1 h2').hide(); 
	});
	$('#col2').mouseenter(function(){
		$('#col2 h2').show();
	});
	$('#col2').mouseout(function(){
		$('#col2 h2').hide(); 
	});
	$('#col3').mouseenter(function(){
		$('#col3 h2').show();
	});
	$('#col3').mouseout(function(){
		$('#col3 h2').hide(); 
	});
	$('.arrowDown').click(function(){
		$('#section1').hide();
		$('#section0').show();
	});

	$('.logIn').click(function(){
		$('#section1 .container-fluid,#section1 .footer').fadeOut('slow');
		$('#sectionSign').show();
	});
	$('.signUp').click(function(){
		$('#section1 .container-fluid,#section1 .footer').fadeOut('slow');
		$('#sectionJoin').show();
	});
	$('.gallery').click(function(){
		$('#section1').slideDown('slow').hide();
		$('#sectionGallery').show();
	});
	$('.information').click(function(){
		$('#section1').slideDown('slow').hide();
		$('#sectionInformation').show();
	});
	$('.stage1').click(function(){
		$('#sectionGallery').hide();
		$('#sectionBuild').show();
	});
	$('.stage2').click(function(){
		$('#sectionGallery').hide();
		$('#sectionCreate').show();
	});
	$('.stage3').click(function(){
		$('#sectionGallery').hide();
		$('#sectionDesign').show();
	});
	$('.arrowR').click(function(){
		$('.sectionG').hide();
		$('#sectionGallery').show();
	});
	$('#sectionGallery img').click(function(){
		$('#sectionGallery').hide();
		$('.imagini').html($(this).css({'max-width':'800px','width':'100%','border-radius':'10px','border':'2px solid #40E0D0'}).parent().html());
		$('#sectionDisplay').show();
	});		
}
$(document).ready(main);


