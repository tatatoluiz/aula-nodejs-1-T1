// dao/musicaDAO.js
const { Musica } = require('../karaoke/musica');

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
        this.musicas.push(novaMusica); //persistir objeto
        return novaMusica;
    }

    // Atualiza nome e artista de uma música existente
    atualizar(id, nome, artista) {
        const musica = this.buscarPorId(id);
        if (!musica) return null;

        musica.nome = nome;
        musica.artista = artista;
        return musica;
    }
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
    myHero.addParte(
    new Parte(tooAlarmin, 13500, 'verso1',"blue")
);
myHero.addParte(
    new Parte(truthOrCon, 13500, 'verso2',"blue")
);
myHero.addParte(
    new Parte(thereGoes, 3600, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 9600, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 2600, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 14100, 'refrao4',"red")
)
myHero.addParte(
    new Parte(dontTheBest, 7100, 'verso3',"blue")
)
myHero.addParte(
    new Parte(whileTheRest, 4650, 'verso4',"blue")
)
myHero.addParte(
    new Parte(truthOrCon, 14600, 'verso5',"blue")
);
myHero.addParte(
    new Parte(thereGoes, 3800, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 3800, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 2500, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 31600, 'refrao4',"red")
)
myHero.addParte(
    new Parte(kudos,2600, 'verso6',"blue")
)
myHero.addParte(
    new Parte(youKnow,4100,'verso7',"blue")
)
myHero.addParte(
    new Parte(thereGoes, 4300, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 9050, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 3400, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 9150, 'refrao4',"red")
)
myHero.addParte(
    new Parte(thereGoes, 3700, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 9600, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 2200, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 10100, 'refrao4',"red")
)
    }
}

// Exporta uma INSTÂNCIA única (Singleton)
module.exports = new MusicaDAO();