function selecionarPrato(pratoClicado){// pegar o prato que foi clicado e trazer para o javascript - usando o this

    // pegar o elemento que foi selecionado anteriormente
    const pratoSelecionadoAnteriormente = document.querySelector('.pratos .selecionado');

    // antes de remover, vou verificar se pratoSelecionadoAnteriormente não é null
    if ( pratoSelecionadoAnteriormente !== null){
        // remover a classe selecionado dele         
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    // adcionar a classe selecionado no elemento que foi clicado, prato!
    pratoClicado.classList.add('selecionado');

}

function selecionarBebida(bebidaSelecionada){// pegar a bebida que foi clicada - this
    
    // pergar a bebida que selecionada anteriormente
    const bebidaSelecionadaAnteriomente  = document.querySelector('.bebidas .selecionado');

    // antes de remover, verificar se existe uma bebida que foi selecionada anteriormente (verificando se é diferente de null)
    if ( bebidaSelecionadaAnteriomente !== null){
        // remover a classe 'selecionado' da bebida selecionada anteriormente
        bebidaSelecionadaAnteriomente.classList.remove('selecionado');
    }
    
    // marcar como selecionada adicionando a classe 'selecionado'
    bebidaSelecionada.classList.add('selecionado');
}

function selecionaSobremesa(sobremesaClicada){

    const sobremesaSelecionadaAnteriormete = document.querySelector('.sobremesas .selecionado');

    if ( sobremesaSelecionadaAnteriormete !== null) {
        sobremesaSelecionadaAnteriormete.classList.remove('selecionado');
    }

    sobremesaClicada.classList.add('selecionado');

}