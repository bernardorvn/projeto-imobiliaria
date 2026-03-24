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
// 1. Nossa lista de bairros de Pinda
const bairrosPinda = [
    "Água Preta", "Alto do Cardoso", "Alto do Tabaú", "Alvarenga", "Anhanguera", 
    "Araretama", "Arco-Íris", "Aroeira", "Bela Vista", "Bem Viver", "Boa Vista", 
    "Bonsucesso", "Borba", "Bosque", "Campinas", "Campo Alegre", "Campos Maia", 
    "Castolira", "Centro", "Cidade Jardim", "Cidade Nova", "Cícero Prado", 
    "Coruputuba", "Crispim", "Delta", "Dom Bosco", "Estância Alzira", "Feital", 
    "Galega", "Goiabal", "Ipiranga", "Ipê", "Jardim Azeredo", "Jardim Eloyna", 
    "Jardim Imperial", "Jardim Mariana", "Jardim Princesa", "Lessa", "Liberdade", 
    "Mantiqueira", "Maricá", "Mombaça", "Moreira César", "Morumbi", "Ouro Verde", 
    "Parque das Nações", "Parque das Palmeiras", "Pasin", "Portal dos Eucaliptos", 
    "Real Ville", "Residencial Andrade", "Santana", "Santa Cecília", "Santa Luzia", 
    "Santa Rita", "São Benedito", "Socorro", "Tabaú", "Terra dos Ipês", "Triângulo", 
    "Vale das Acácias", "Vila Suíça", "Vila Verde", "Village Sol", "Vista Alegre"
];
// Função para preencher o datalist automaticamente
function carregarBairros() {
    const datalist = document.getElementedById('lista-bairros');

    bairrosPinda.forEach(bairro => {
        let option = document.createElement('option');
        option.value = bairro;
        dataList.appendChild(option);
     });
}
// Executa assim que o script carregar
carregarBairros();
// Configuração telefone
const inputTelefone = document.getElementById('telefone');

if (inputTelefone) {
    inputTelefone.addEventListener('keyup', (e) => {
        let valor = e.target.value;

        //Remove qualquer caractere que não seja numero
        valor = valor.replace(/\D/g, "");

        //Formata na forma (XX) XXXXX-XXXX
        valor = valorreplace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        // Atualiza o valor do campo
        e.target.value = valor;
    })
    
}