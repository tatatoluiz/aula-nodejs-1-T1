// 1. Importar o Express
const express = require('express');

// 2. Criar a aplicação (a "loja")
const app = express();

// 3. Configurar middlewares (pré-processamento)
app.use(express.json());

// 4. Definir rotas (os "balcões de atendimento")
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// 5. Abrir a loja (escutar a porta)
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

/**ROTA HTTP
 *  /recurso + método HTTP
 *  /musica/1 --> GET : retorna dados da musica JSON
 *  
 */
