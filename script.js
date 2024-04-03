$(document).ready(function() {
    // Adiciona um novo campo de endereço ao clicar no botão de adicionar
    $('#formEnderecos').on('click', '.addButton', function() {
        var novoCampo = $('<div class="enderecoItem2"><button type="button" class="removeButton">-</button><input type="text" name="endereco" class="novoCampo" placeholder="Endereço"></div>');
        $(this).parent().after(novoCampo);
        $(this).detach().appendTo(novoCampo);
    });

    // Remove um campo de endereço ao clicar no botão de remover
    $('#formEnderecos').on('click', '.removeButton', function() {
        $(this).parent().remove();
    });
});
