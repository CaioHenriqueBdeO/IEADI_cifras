 $(document).ready(() => {
	
})

 var cifras = {};
 
        

cifras.metodos = {

	abrirModalKids: () => {
		$("#modalCifras").removeClass('hidden')
		$("#pasta-kids").removeClass('hidden')
	},

	abrirModalTeens: () => {
		$("#modalCifras").removeClass('hidden')
		$("#pasta-teens").removeClass('hidden')
	},

	abrirModalJovens: () => {
		$("#modalCifras").removeClass('hidden')
		$("#pasta-jovens").removeClass('hidden')
	},

	abrirModalIrmas: () => {
		$("#modalCifras").removeClass('hidden')
		$("#pasta-irmas").removeClass('hidden')
	},

	abrirModalCoral: () => {
		$("#modalCifras").removeClass('hidden')
		$("#pasta-coral").removeClass('hidden')
	},

	fecharModal: () => {
		$("#modalCifras").addClass('hidden')
		$("#pasta-kids").addClass('hidden')
		$("#pasta-teens").addClass('hidden')
        $("#pasta-jovens").addClass('hidden')
		$("#pasta-irmas").addClass('hidden')
		$("#pasta-coral").addClass('hidden')
	}
}