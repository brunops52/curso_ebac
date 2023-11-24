$(document).ready(function(){
    const imageElement = $("#imagem");
    const nomeElement = $("#nome");
    const userElement = $("#user");
    const repositorioElement = $("#repositorio");
    const seguidoresElement = $("#seguidores");
    const seguindoElement = $("#seguindo");

    fetch("https://api.github.com/users/brunops52").then(function(res){
        return res.json();
    })
    .then(function(json) {
        imageElement.attr("src", json.avatar_url);
        nomeElement.html(json.name);
        userElement.html(json.login);
        repositorioElement.html(json.public_repos);
        seguidoresElement.html(json.followers);
        seguindoElement.html(json.following);
    })
})