// 1. Seleciona os elementos
const btnAbrir = document.getElementById('abrirCadastro');
const drawer = document.getElementById('drawerCadastro');
const overlay = document.getElementById('overlay');
const btnFechar = document.getElementById('fecharDrawer');

// 2. Função Unificada para Fechar
function fecharGaveta() {
    console.log("Tentando fechar...");
    if (drawer) drawer.classList.remove('aberto');
    if (overlay) {
        overlay.style.display = 'none';
        overlay.classList.remove('ativo');
    }
}

// 3. Evento para Abrir
if (btnAbrir) {
    btnAbrir.addEventListener('click', function(e) {
        e.preventDefault();
        drawer.classList.add('aberto');
        overlay.style.display = 'block';
        overlay.classList.add('ativo');
    });
}

// 4. Eventos para Fechar (X e Clique no Fundo)
if (btnFechar) {
    btnFechar.onclick = fecharGaveta;
}

if (overlay) {
    overlay.onclick = fecharGaveta;
}