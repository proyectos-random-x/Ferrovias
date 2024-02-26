// Obtener la ruta completa después del dominio
var rutaCompleta = window.location.pathname;
// Dividir la ruta en partes utilizando el separador '/'
var partesRuta = rutaCompleta.split('/');
const ferro = {
	domain: location.hostname+'/'+partesRuta[1],
	img: location.protocol + '//' + location.hostname + '/' + partesRuta[1] + '/resources/images/',
	title: 'Ferrovias',
	url: location.href
}

var LazyLoadClass = ['.image', '.background', '.iframe']
LazyLoadClass.map( lazyload => {
   let NewOptions = {
      elements_selector: lazyload,
      use_native: true,
      class_loading: 'lazy-loading',
      callback_error: callback => {
		   callback.setAttribute("src", ferro.img + "Ferrovias_bg_red.jpg");
		}
   }
   if(lazyload === '.background') {
      // Agregamos
      NewOptions = Object.assign(NewOptions, {class_loaded: 'lazy-loaded'})
      // Quitamos -> use_native: true
      delete NewOptions.use_native
   }
   new LazyLoad(NewOptions)
});

const icon = {
   dark: '<iconify-icon icon="solar:moon-fog-bold-duotone"></iconify-icon>',
   light: '<iconify-icon icon="solar:sun-fog-bold-duotone"></iconify-icon>'
}
const selected = localStorage.getItem('modo');
const userHasDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const getCurrent = () => $('html').attr('data-bs-theme') !== 'dark' ? 'dark' : 'light';
// bsTheme
function bsTheme(changeColor) {
   localStorage.setItem('modo', changeColor)
   $('html').attr('data-bs-theme', changeColor)
   actualizarIcono()
}
//
if (selected != '') $('html').attr({ 'data-bs-theme': selected })
else {
   if (userHasDark) $('html').attr('data-bs-theme', 'dark')
}
$('#mode_change').on('click', () => bsTheme(getCurrent()))
function actualizarIcono() {
   let icono = (getCurrent() === 'light') ? icon.light : icon.dark;
   $('#mode_change').html(icono)
}

$(document).on('keydown', event => {
   if (event.key === 'M' && event.shiftKey) bsTheme(getCurrent());
});
$(document).ready(() => actualizarIcono());