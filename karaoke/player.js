//script principal
//colaborador: Pedro Henrique Rodrigues Maciel Machado

const { sleep } = require('./utils');
const { Musica } = require('./musica');
const { Parte } = require('./parte');

const musica = new Musica('My Hero', 'Foo Fighters');
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
//baseado no: https://www.youtube.com/watch?v=EqWRaAF6_WY
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
//segue adicionando as partes

const chalk = require('chalk')

async function play() {
    try {
        // para cada parte da música, deve imprimir qual parte é, letra e pausar o tempo necessário
        //ex.:
       
        for (const parte of musica.partes) {
            //imprime parte e letra
            console.log( " -- " + parte.tag + " --" );
            //for(i=0;i<parte[letra].split;i++){}
            console.log( "> " + chalk[parte.cor](parte.letra) );
            //agurda o tempo para a letra
            await sleep( parte.tempoEspera );
            
        }
    } catch (error) {
        console.log("Erro ao tocar música: " + error.message);
    }
}


play();

module.exports = {play};