const form = document.getElementById('form-contato');
const tabelaContatos = document.querySelector('.contacts-table tbody');
const categoriaSelect = document.getElementById('categoria');
const novaCategoriaButton = document.getElementById('nova-categoria');
const corSelect = document.getElementById('cor');
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const categoria = categoriaSelect.value;
    const cor = corSelect.value;

    let linha = `<tr>
        <td>${nome}</td>
        <td>${telefone}</td>
        <td><span class="color-label" style="background-color: ${cor};">${categoria}</span></td>
    </tr>`;
    linhas += linha;

    form.reset();
}

function atualizaTabela() {
    tabelaContatos.innerHTML = linhas;
}

novaCategoriaButton.addEventListener('click', function () {
    const novaCategoria = prompt("Digite o nome da nova categoria:");

    if (novaCategoria) {
        const novaOption = document.createElement('option');
        novaOption.value = novaCategoria;
        novaOption.text = novaCategoria;
        categoriaSelect.appendChild(novaOption);
    }
});

toggleDarkModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
