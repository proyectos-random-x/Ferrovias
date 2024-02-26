// Aquí iría las noticias del estado del servicio
const noticias = {
	rojo: 'Servicio cancelado entre las estaciones de <strong>Grand Bourg</strong> y <strong>Villa Rosa</strong>',
	amarillo: 'Servicio con demora de 10 minutos entre las estaciones de <strong>Villa Rosa</strong> y <strong>Retiro</strong>',
	verde: 'Servicio normal y a horario en la totalidad de la línea'
}
// Con este seleccionamos la noticia a mostrar!
const estadoActual = 'verde';
// Todas las estaciones existentes
const estaciones = ['Retiro', 'Saldias', 'Ciudad Universitaria', 'Aristóbulo Del Valle', 'Miguel M. Padilla', 'Florida', 'Munro', 'Carapachay', 'Villa Adelina', 'Boulogne Sur Mer', 'Vice Alte. Montes', 'Don Torcuato', 'Adolfo Sordeaux', 'Villa de Mayo', 'Los Polvorines', 'Ing. P. Nogués', 'Grand Bourg', 'Tierras Altas', 'Tortuguitas', 'M. Alberti', 'Del Viso', 'Cecilia Grierson', 'Villa Rosa']


$(window).on('load', () => {
	if(sessionStorage.getItem("autosave") !== 'false') {
		// Mostramos una pequeña ventana
		$('.toast').show();
	}
	// Si el usuario decide cerrarlo
	$('button.btn-close').on('click', e => {
		$('.toast').hide()
		sessionStorage.setItem("autosave", false);
	});
	// Mostramos la noticia despues de 2s
	setTimeout(() => {
		$('.estadoServicio').addClass(estadoActual)
		$('.estadoServicio .card-text').html(noticias[estadoActual])
	}, 2000)
	//
	$('#origen, #destino').html('')
	estaciones.map( (estacion, i) => {
		let orisel = (i == 0) ? ' selected' : '';
		let dessel = (i < estaciones.length) ? ' selected' : '';
		$('#origen').append(`<option value="${i++}"${orisel}>${estacion}</option>`)
		$('#destino').append(`<option value="${i++}"${dessel}>${estacion}</option>`)
	})
});

// Popup de los próximos trenes
$('.proximosTrenes').on('click', () => open(
	"http://proximostrenes.ferrovias.com.ar/", 
	"Proximos Trenes", 
	"scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=812,height=540,left=100,top=100"
	)
)
