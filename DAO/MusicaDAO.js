// dao/musicaDAO.js
const { Musica } = require('../karaoke/musica');

class MusicaDAO {
    constructor() {
        // "banco de dados" em memória — array de objetos Musica
        this.musicas = [];
        this.proximoId = 0;
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

    // Remove uma música pelo ID
    remover(id) {
        const indice = this.musicas.findIndex(m => m.id === id);
        if (indice === -1) return null;

        return this.musicas.splice(indice, 1)[0];
    }
}

// Exporta uma INSTÂNCIA única (Singleton)
module.exports = new MusicaDAO();