/**
 * Aula de Node.js - 1ª Sexta-feira
 * 
 * Este projeto vai implementar uma simples calculadora
 * para aprendermos a criar e importar modulos no node.js 
 * e gerir projetos npm.
 *   
 **/
//importando código que está local
const {Calc, umaFuncParaExportar} = require('./Calc');

//importando codigo que está como dependencia npm
const chalk = require("chalk");



console.log(chalk.blue("----- CALCULADORA DO NODE.JS ------") );

const calc = new Calc();

console.log(calc.add(2,2));
console.log(calc.sub(3, 2));

console.log(umaFuncParaExportar('PROG III'));
