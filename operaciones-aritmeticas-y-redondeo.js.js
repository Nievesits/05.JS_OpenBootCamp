//Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;
//suma(+)
console.log(a + b);
//resta(-)
console.log(a - b);
//multiplicación (*)
console.log(a * b);
//división (/)
console.log(a / b);

//Representación de los números en cadenas de texto
console.log(typeof a )
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//Redondeo de números decimales
let c = 3.3;
let d = c * 3;
console.log(d);
//.toFixed() números de decimales. Lo convierte a string
console.log(d.toFixed(2));
let e = 18393654.365565;

//.toPrecision(x) número de cifras más significaticas (método científico)(también devuelve un strin)
console.log(e.toPrecision(7));

console.log (typeof e.toPrecision(3));