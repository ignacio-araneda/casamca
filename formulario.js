var $button = $('#boton'),
	$form = $('#box_nav_mob');
	
function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

// Eventos
$button.click( mostrarFormulario );
