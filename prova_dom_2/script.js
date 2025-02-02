function adicionarNota() {
    let input = document.getElementById("notaInput");
    let texto = input.value.trim();
    if (texto === "") return;
    
    let nota = document.createElement("div");
    nota.classList.add("nota");
    
    let span = document.createElement("span");
    span.textContent = texto;
    
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function () {
        nota.remove();
    };
    
    nota.appendChild(span);
    nota.appendChild(botaoExcluir);
    document.getElementById("listaNotas").appendChild(nota);
    
    input.value = "";
}