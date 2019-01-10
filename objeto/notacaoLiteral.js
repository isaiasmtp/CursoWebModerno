let nome = 'nota';
const value = 7;

const obj1 = {};
const obj2 = {};

obj1[nome] = value;

nome = 'eee';

obj2[nome] = value;

console.log(obj1)
console.log(obj2)