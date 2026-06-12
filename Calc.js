/*
* Todo o arquivo .js pode virar um modulo.
* Um módulo pode ser exportado para ser importado por qualquer
* outro script.
*/

class Calc{

    constructor(){

    }

    add(a,b){
        return a+b;
    }

    sub(a,b){
        return a-b;
    }
    
    mul(a,b){
        return a*b;
    }

    div(a,b){
        if(b === 0) return null;

        return a/b;
    }

}

function umaFuncao(){
    console.log('executando uma funcao dentro de Calc');
}

function umaFuncParaExportar(a){
    return "Oi, sou " + a;
}

let senha = "21334";

umaFuncao();

module.exports ={ Calc, umaFuncParaExportar };
