

$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        const novoNome = $("#novoNomeTaf").val();
        const conteudoTarefa = $("#novoTaf").val();
        const novaTarefa =$(`<li></li>`);
        $(`<h2>${novoNome}</h2><p>${conteudoTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo("ul");
        $("#novoNomeTaf").val("");
        $("#novoTaf").val("");

    });
})
$("header button").click(function(){
    $("header").css({"border-bottom": "none"});
    $("form").slideDown();

});
$("#cancelar").click(function(){
    $("form").slideUp();
    $("header").css({"border-bottom": "solid 16px #383a37"});
})
$("ul").on("click", "li", function(){
    $(this).toggleClass("colocalinha");

})

