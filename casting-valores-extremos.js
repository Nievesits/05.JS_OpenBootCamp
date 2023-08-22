// Operador .valueOff() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n); //esto que hemos pasado no es un número
console.log(isNaN(n));

let numerador = 19;
let divisor = 0; //algo dividido entre 0 es un valor infinito
console.log(numerador / divisor);
let divisor_2 = null; //también convierte en valores infinitos
console.log(numerador / divisor_2);
// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num_2 = 17.2;

console.log(typeof numero);
console.log(numero + num_2);//concatena las dos cadenas

console.log(Number(numero) + num_2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num_3 = 4;
console.log(parseInt(num_3));
console.log(parseFloat(num_3));

// Números hexadecimales (en base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));//se le puede indicar la base que tiene

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);