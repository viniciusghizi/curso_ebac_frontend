$(document).ready(function() { 
    $('header button').click(function(){
        $('form').slideDown();
    });
    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    });
    
    $('form').on('submit', function(e){
        const enderecoNovaImagem = $('#endereco-image').val();
        e.preventDefault();

        const novoItem = $('<li style="display: none"> </li>');

        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(
        `<div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em Tamanho real" >
                Ver Imagem em Tamanho Real
            </a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-image').val('');
    });
})