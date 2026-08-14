// DAO/MusicaDAO.js
const { Musica } = require('../musica');
const { Parte } = require('../parte');

class MusicaDAO {
constructor() {
// "banco de dados" em memória — array de objetos Musica
this.musicas = [];
this.proximoId = 0;
this._carregarDadosIniciais();
}

// Retorna todas as músicas
listarTodas() {
return this.musicas;

}

// Busca uma música pelo ID
buscarPorId(id) {
return this.musicas.find(m => m.id === id) || null;

}

// Insere uma nova música e retorna o objeto criado (com ID)
inserir(nome, artista) {
const novaMusica = new Musica(nome, artista);

novaMusica.id = this.proximoId++;
this.musicas.push(novaMusica);
return novaMusica;

}

// Adiciona uma Parte a uma música existente
adicionarPartes(idMusica, parte) {
if (parte instanceof Parte) {
const musica = this.buscarPorId(idMusica);
if (musica != null) {
musica.addParte(parte);
return true;

} else {

return false;

}
} else return false;
}

// Atualiza nome e artista de uma música existente
atualizar(id, nome, artista) {
const musica = this.buscarPorId(id);
if (!musica) return null;

musica.nome = nome;
musica.artista = artista;

return musica;

}

// Remove uma música pelo ID
remover(id) {
const indice = this.musicas.findIndex(m => m.id === id);
if (indice === -1) return null;

return this.musicas.splice(indice, 1)[0];

}
    _carregarDadosIniciais() {
    const myHero = this.inserir('My Hero', 'Foo Fighters');
    // Adicione as partes da My Hero usando myHero.addParte(...)
    // (mesmo código que estava no player.js)
    const tooAlarmin = 'Too alarmin now to talk about \n Take your pictures down and shake it out';
const truthOrCon = 'Truth or consequence, say it aloud \n Use that evidence, race it around';
const thereGoes = 'There goes my hero';
const watchHim = 'Watch him as he goes';
const hesOrdinary = 'He\'s ordinary';
const dontTheBest = 'Don\'t the best of them bleed it out';
const whileTheRest = 'While the rest of them peter out?';
const kudos = 'Kudos, my hero \nLeavin all the best';
const youKnow = 'You know my hero \nThe one thats on';
//verificar partes faltantes e criar.

//começa a adicionar as partes da música, com letra, tempo e tag1
musica.addParte(
    new Parte(tooAlarmin, 13500, 'verso1',"blue")
);
musica.addParte(
    new Parte(truthOrCon, 13500, 'verso2',"blue")
);
musica.addParte(
    new Parte(thereGoes, 3600, 'refrao1',"red")
)
musica.addParte(
    new Parte(watchHim, 9600, 'refrao2',"red")
)
musica.addParte(
    new Parte(thereGoes, 2600, 'refrao3',"red")
)
musica.addParte(
    new Parte(hesOrdinary, 14100, 'refrao4',"red")
)
musica.addParte(
    new Parte(dontTheBest, 7100, 'verso3',"blue")
)
musica.addParte(
    new Parte(whileTheRest, 4650, 'verso4',"blue")
)
musica.addParte(
    new Parte(truthOrCon, 14600, 'verso5',"blue")
);
musica.addParte(
    new Parte(thereGoes, 3800, 'refrao1',"red")
)
musica.addParte(
    new Parte(watchHim, 3800, 'refrao2',"red")
)
musica.addParte(
    new Parte(thereGoes, 2500, 'refrao3',"red")
)
musica.addParte(
    new Parte(hesOrdinary, 31600, 'refrao4',"red")
)
musica.addParte(
    new Parte(kudos,2600, 'verso6',"blue")
)
musica.addParte(
    new Parte(youKnow,4100,'verso7',"blue")
)
musica.addParte(
    new Parte(thereGoes, 4300, 'refrao1',"red")
)
musica.addParte(
    new Parte(watchHim, 9050, 'refrao2',"red")
)
musica.addParte(
    new Parte(thereGoes, 3400, 'refrao3',"red")
)
musica.addParte(
    new Parte(hesOrdinary, 9150, 'refrao4',"red")
)
musica.addParte(
    new Parte(thereGoes, 3700, 'refrao1',"red")
)
musica.addParte(
    new Parte(watchHim, 9600, 'refrao2',"red")
)
musica.addParte(
    new Parte(thereGoes, 2200, 'refrao3',"red")
)
musica.addParte(
    new Parte(hesOrdinary, 10100, 'refrao4',"red")
)
}
}

// Exporta uma INSTÂNCIA única (Singleton)
module.exports = new MusicaDAO();