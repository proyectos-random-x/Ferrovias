$('.ayuda-lista li').on('click', function() {
	let target = $(this).data('target');
	$('html, body').animate({
   	scrollTop: $(target).offset().top
   }, 'slow');
});

$('.subir').on('click', () => $('html, body').animate({scrollTop: $('.ayuda-lista').offset().top}, 'slow'));