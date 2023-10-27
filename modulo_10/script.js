$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
    })
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('form').validate({
        rules: {
            cpf:{
                required: true
            },
            telefone:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages: {
            cpf: 'por favor digite um cpf válido',
            telefone: 'por favor digite um telefone válido',
            cep: 'por favor digite um cep válido'
        }
    })
})
