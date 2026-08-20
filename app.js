// 1. Importar o Express
const express = require('express');

// importacao do player
const player = require('./karaoke/player');
const { Parte } = require('./karaoke/parte');

// importacao do DAO de musicas
const musicaDAO = require('./DAO/MusicaDAO');
const { Musica } = require('./karaoke/musica');



//uso do DAO
const musica3x4 = musicaDAO.inserir('3x4', 'Engenheiros do Haway');
musicaDAO.atualizar(musica3x4.id, musica3x4.nome, 'Engenheiros do Hawaii');
console.log(JSON.stringify(musicaDAO.listarTodas()));
musicaDAO.remover(0);
console.log(JSON.stringify(musicaDAO.listarTodas()));





// 2. Criar a aplicação (a "loja")
const app = express();

// 3. Configurar middlewares (pré-processamento)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3.1 rotas public
app.use(express.static('public'));


// 4. Definir rotas (os "balcões de atendimento")
app.get('/', (req, res) => {
    res.send('Olá, cliente!');
});

/**ROTA HTTP
 *  /recurso + método HTTP
 *  /musica/1 --> GET : retorna dados da musica JSON
 *  
 */
// Exemplo de GET /api/musicas — lista todas (usando loops simples, sem map)
app.get('/api/musicas', (req, res) => {
    const musicas = musicaDAO.listarTodas();

    // Retorna sem as partes para não sobrecarregar a listagem
    const resumo = [];
    for (let i = 0; i < musicas.length; i++) {
        const m = musicas[i];

        resumo.push({
            id: m.id,
            nome: m.nome,
            artista: m.artista,
            totalPartes: m.partes.length

        });
    }

    res.json(resumo);
});

app.get('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);
    const musica = musicaDAO.buscarPorId(id);

    if (!musica) {
        return res.status(404).json({ erro: `Música com id ${id} não encontrada` });

    }

    res.json(musica);
});
//expor partes da musica


app.post('/api/musicas', (req, res) => {
    const { nome, artista } = req.body;
    if (!nome || !artista) {
        return res.status(400).json({ erro: 'Campos obrigatórios: nome, artista' });

    }

    const novaMusica = musicaDAO.inserir(nome, artista);
    res.status(201).json(novaMusica);
});

app.put('/api/musicas/:id', (req,res) =>{
        const id = Number(req.params.id);
    const musica = musicaDAO.buscarPorId(id);
    const {nome,artista}=req.body

    if (!musica) {
        return res.status(404).json({ erro: `Música com id ${id} não encontrada` });

    }
    if (!nome || !artista) {
        return res.status(400).json({ erro: 'Campos obrigatórios: nome, artista' });

    }
    try{
        const musicaatualizada=musica.atualizar(id,nome,artista)
        return res.status(200).json(musicaatualizada)
    }catch(error){
        return res.status(500).json({msg:"explosão interna do servidor"})
    }
})

app.delete('/api/musicas/:id'),(req,res)=>{
    const id = Number(req.params.id);
    const musica = musicaDAO.buscarPorId(id);
     if (!musica) {
        return res.status(404).json({ erro: `Música com id ${id} não encontrada` });

    }
    try{
        remover(id)
        return res.status(200)
    }catch(error){
        return res.status(500).json({msg:"explosão interna do servidor"})
    }
}
app.post('/api/musicas/:id/partes',(req,res)=>{
    const id = Number(req.params.id);
    const musica = musicaDAO.buscarPorId(id);
     if (!musica) {
        return res.status(404).json({ erro: `Música com id ${id} não encontrada` });

    }
    const{letra,tempoEspera,tag}=req.body
    if(!letra||!tempoEspera||!tag){
        return res.status(400).json({ erro: 'Campos obrigatórios: letra, tempoEspera, tag' });
    }
    const parte= new Parte(letra, tempoEspera, tag)
    try{
        musica.adicionarPartes(id, parte)
        return res.status(201).json({musica})
    }catch(error){
        return res.status(500).json({msg:"explosão interna do servidor"})
    }
})

//calvo
app.get('/musicas/:id/partes/:parte', (req, res) => {
    const parteIndex = Number(req.params.parte);
    if (Number.isNaN(parteIndex) || parteIndex < 0 || parteIndex >= player.musica.partes.length) {
        return res.status(404).json({ msg: "Parte nao existe!" });
    }

    const dadosParte = player.musica.partes[parteIndex];
    res.status(200).json(dadosParte);
});
let cont = 0;
app.get('/musicas/:id/play', async (req, res) => {
    try {
        player.play().then(() => {
            console.log(`Execucao ${cont++} terminou.`);
        });

        res.status(200).send({ msg: `Musica ${player.musica.nome} está tocando...` })

    } catch (error) {
        console.log("ERROR no play: " + error.message);
        //res.statusCode= 404; //se musica n existir
        res.statusCode = 500; //o erro é responsabilidade do servidor
        res.send({ error: "Player indisponível" });
    }
});

app.post('/musicas/:id/partes', (req, res) => {
    const { letra, tempoEspera, tag } = req.body;
    console.log(`meu-header: ${req.headers["meu-header"]}`);

    if (!letra || !tempoEspera || !tag) {
        return res.status(400).json({ erro: 'Campos obrigatórios: letra, tempoEspera, tag' });
    }

    const tempo = Number(tempoEspera);
    if (Number.isNaN(tempo) || tempo <= 0) {
        return res.status(400).json({ erro: 'tempoEspera deve ser um número maior que zero' });
    }

    const parteAdd = new Parte(letra, tempo, tag);

    try {
        player.musica.addParte(parteAdd);
        res.status(201).json({ parteAdd });

    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }

});


app.listen(3000, () => { console.log(`Servidor inciado.`) });