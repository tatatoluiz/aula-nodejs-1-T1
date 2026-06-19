//script principal

const { sleep } = require('./utils');
const { Musica } = require('./musica');
const { Parte } = require('./parte');

const myHero = new Musica('My Hero', 'Foo Fighters');
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
myHero.addParte(
    new Parte(tooAlarmin, 13000, 'verso1',"blue")
);
myHero.addParte(
    new Parte(truthOrCon, 12500, 'verso2',"blue")
);
myHero.addParte(
    new Parte(thereGoes, 3500, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 5000, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 7000, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 5000, 'refrao4',"red")
)
myHero.addParte(
    new Parte(dontTheBest, 13000, 'verso3',"blue")
)
myHero.addParte(
    new Parte(whileTheRest, 3600, 'verso4',"blue")
)
myHero.addParte(
    new Parte(truthOrCon, 13400, 'verso5',"blue")
);
myHero.addParte(
    new Parte(thereGoes, 3700, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 37000, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 2500, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 3150, 'refrao4',"red")
)
myHero.addParte(
    new Parte(kudos,2500, 'verso6',"blue")
)
myHero.addParte(
    new Parte(youKnow,4000,'verso7',"blue")
)
myHero.addParte(
    new Parte(thereGoes, 4000, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 8800, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 3200, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 9000, 'refrao4',"red")
)
myHero.addParte(
    new Parte(thereGoes, 3600, 'refrao1',"red")
)
myHero.addParte(
    new Parte(watchHim, 9500, 'refrao2',"red")
)
myHero.addParte(
    new Parte(thereGoes, 2100, 'refrao3',"red")
)
myHero.addParte(
    new Parte(hesOrdinary, 10000, 'refrao4',"red")
)
//segue adicionando as partes

const chalk = require('chalk')

async function play() {
    try {
        // para cada parte da música, deve imprimir qual parte é, letra e pausar o tempo necessário
        //ex.:
       
        for (const parte of myHero.partes) {
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