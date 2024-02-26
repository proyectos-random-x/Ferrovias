function tarifas() {
	Swal.fire({
		title: "Tarifas",
		text: "Ingresando al link, encontrará el tarifario, por estación, de los boletos vigentes desde el 15/01/2024 en Ferrovías.",
		confirmButtonText: 'TARIFARIO SUBE'
	}).then((result) => {
		if (result.isConfirmed) {
			window.open("https://www.ferrovias.com.ar/servicios/Tarifas_Enero_15_2024.pdf", '_blank');
		}
	});
}