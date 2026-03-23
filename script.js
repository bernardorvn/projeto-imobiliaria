// Pegar os elementos
const btnAbrir = document.querySelector('a[href="login.html"]'); //Seleciona o link cadastre-se
const drawer = document.getElemtedById('drawerCadastro');
const overlay = document.getElementedById('ooverlay');
const btnFechar = document.getElemtedById('fecharDrawer');

//Função para abrir
btnAbrir.addEventListener('click', function(e){
    e.preventDefault(); //Garante que a página não recarregue
    drawer.classList.add('aberto'); //Adiciona a classe que move o drawer para tela
    overlay.style.display = 'ativo'; // Mostra o fundo desfocado
});

//Função para fechar (no X ou clicando no fundo)
function fechar() {
    drawer.classList.remove('aberto');
    overlay.style.display = 'ativo';
}

btnFechar.addEventListener('click', fechar);
overlay.addEventListener('click', fechar);