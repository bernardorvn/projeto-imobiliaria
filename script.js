console.log("O arquivo script.js foi carregado com sucesso!");

const btnAbrir = document.getElementById('abrirCadastro');
const drawer = document.getElementById('drawerCadastro');
const overlay = document.getElementById('overlay');

if (btnAbrir) {
    btnAbrir.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Botão clicado!");
        
        if (drawer && overlay) {
            drawer.classList.add('aberto');
            overlay.style.display = 'block';
            console.log("Classes adicionadas!");
        } else {
            console.error("Erro: Não encontrei o ID 'drawerCadastro' ou 'overlay' no HTML.");
        }
    });
} else {
    console.error("Erro: Não encontrei o ID 'abrirCadastro' no seu menu HTML.");
}