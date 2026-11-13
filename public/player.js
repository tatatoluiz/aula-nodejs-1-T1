// player.js — o cérebro do player no navegador
// Completem os TODOs seguindo o roteiro da Parte 7 do enunciado.
// (Antes de mexer aqui, o plano_player.md já deve estar commitado!)

// --- Referências aos elementos da página (index.html) ---
const listaEl = document.getElementById('listaMusicas');
const nomeEl = document.getElementById('nomeMusica');
const artistaEl = document.getElementById('artista');
const tagEl = document.getElementById('tag');
const letraEl = document.getElementById('letra');
const contadorEl = document.getElementById('contador');
const btnTocar = document.getElementById('btnTocar');

// --- Estado do player ---
// Guarda a música escolhida (objeto completo, com as partes)
let musicaAtual = null;

// O mesmo sleep do karaokê no terminal, agora no navegador
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Passo 2 (roteiro 7.3) — busca GET /api/musicas e monta a playlist
async function carregarPlaylist() {
    try {
        const resposta = await fetch('/api/musicas');
        const musicas = await resposta.json();
        musicas.forEach((musica) => {
            const item = document.createElement('li');
            item.textContent = `${musica.nome} — ${musica.artista}`;
            item.addEventListener('click', () => escolherMusica(musica.id));
            listaEl.appendChild(item);
        });
    } catch (erro) {
        console.error('Erro ao carregar playlist:', erro);
    }
}

// Passo 3 (roteiro 7.4) — busca GET /api/musicas/:id e prepara o palco
async function escolherMusica(id) {
    try {
        const resposta = await fetch(`/api/musicas/${id}`);
        const musica = await resposta.json();
        musicaAtual = musica;
        nomeEl.textContent = musica.nome;
        artistaEl.textContent = musica.artista;
        btnTocar.disabled = false;
    } catch (erro) {
        console.error('Erro ao escolher música:', erro);
    }
}

// Passo 4 (roteiro 7.5) — percorre as partes com await sleep até o final
async function tocar() {
    
        try {
        
        btnTocar.disabled = true;
        for (const parte of musicaAtual.partes) {
            //imprime parte e letra
            console.log( " -- " + parte.tag + " --" );
            console.log( "> " + parte.letra );
            //agurda o tempo para a letra
            await sleep( parte.tempoEspera );
            
        }
        btnTocar.disabled = false;
    } catch (error) {
        btnTocar.disabled = false;
        console.log("Erro ao tocar música: " + error.message);
    }
    // TODO: implementar seguindo o roteiro 7.5
    //       (desabilitar o botão, percorrer as partes mostrando tag, letra
    //        e contador "parte X de Y", esperar o tempoEspera de cada uma,
    //        mostrar a mensagem de fim e reabilitar o botão)
}

btnTocar.addEventListener('click', tocar);

// Ponto de partida: quando a página carrega, monta a playlist
carregarPlaylist();
