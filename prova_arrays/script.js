function adicionarTarefa() {
    const tarefaTexto = document.getElementById("novaTarefa").value;
    if (tarefaTexto.trim() === "") return;

    const lista = document.getElementById("tarefas");
    const li = document.createElement("li");
    li.className = "tarefa";
    li.innerHTML = `
        <span>${tarefaTexto}</span>
        <button onclick="removerTarefa(this)">Remover</button>
    `;
    lista.appendChild(li);
    document.getElementById("novaTarefa").value = "";
}

function removerTarefa(botao) {
    botao.parentElement.remove();
}