// Todas las estaciones existentes
const estaciones = ['Retiro', 'Saldias', 'Ciudad Universitaria', 'Aristóbulo Del Valle', 'Miguel M. Padilla', 'Florida', 'Munro', 'Carapachay', 'Villa Adelina', 'Boulogne Sur Mer', 'Vice Alte. Montes', 'Don Torcuato', 'Adolfo Sordeaux', 'Villa de Mayo', 'Los Polvorines', 'Ing. P. Nogués', 'Grand Bourg', 'Tierras Altas', 'Tortuguitas', 'M. Alberti', 'Del Viso', 'Cecilia Grierson', 'Villa Rosa']


$(window).on('load', () => {
	//
	$('#origen, #destino').html('')
	estaciones.map( (estacion, i) => {
		let orisel = (i == 0) ? ' selected' : '';
		let dessel = (i < estaciones.length) ? ' selected' : '';
		$('#origen').append(`<option value="${i++}"${orisel}>${estacion}</option>`)
		$('#destino').append(`<option value="${i++}"${dessel}>${estacion}</option>`)
	})
});