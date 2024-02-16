$(document).ready(function () {
	grupos.eventos.init();
})

var grupos = {};

grupos.eventos = {

	init: () => {
		grupo.metodos.obterItensGrupos();
	}

}

grupos.metodos = {

	obterItensGrupos: (categoria = 'criancas', vermais = false) => {

		var filtro = MENU[categoria];

		if (!vermais) {
			$("#itensGrupos").html('');
			$("#btnVerMais").removeClass('hidden');
		}

		$.each(filtro, (i, e) => {

			let temp = grupos.templates.item.replace(/\${id}/g, e.id)
			.replace(/\${nome}/g, e.name)
			.replace(/\${cantor}/g, e.cantor)
			.replace(/\${tom}/g, e.tom)

			if (vermais && i >= 8 && i < 100) {
				$("#itensGrupos").append(temp)
			}

			if (!vermais && i < 8) {
				$("#itensGrupos").append(temp)
			}

		})

		//remove active
		$(".container-menu a").removeClass('active');

		//seta o active
		$("#menu-" + categoria).addClass('active')

	},

	verMais: () => {

		var ativo = $(".container-menu a.active").attr('id').split('menu-')[1];
		grupos.metodos.obterItensGrupos(ativo, true);

		$("#btnVerMais").addClass('hidden');
	},

}

grupos.templates = {
	item: `
		<tr>
            <th scope="row" class="linha-id-bd">\${id}</th>
            <td class="linha-bd-nome"><b>\${nome}</b></td>
            <td class="linha-bd-cantor"><b>\${cantor}</b></td>
           	<td class="linha-bd-tom"><b>\${tom}</b></td>
        </tr>
	`
}