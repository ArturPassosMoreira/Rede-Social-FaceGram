function adicionarComentario() {
    var comentario = document.getElementById("caixa").value;
    if (comentario.trim() !== "") {
        var novoComentario = document.createElement("p");
        novoComentario.textContent = comentario;
        document.getElementById("res").appendChild(novoComentario);  
        document.getElementById("caixa").value = "";
    } else {
        alert("Por favor, digite um comentário!");
    }
}