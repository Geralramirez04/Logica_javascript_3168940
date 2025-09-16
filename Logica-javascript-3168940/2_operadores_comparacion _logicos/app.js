//boolean(...)

console.log(' "5" == "5" ', 5 == 5) // true
console.log(' "5" === "5" ', "5" === "5") //true
console.log(' 5 === "5" ', 5 === "5") //false
console.log(' 5 == "5" ', 5 == "5") // true
console.log(' 5 === (3+2) ', "5" === (3+2) ) //false
console.log(' 5 === 5 ', 5 === 5) // true

//concatenar (+)
console.log(5 + "3")// 53
console.log(5 + Number ("3") )// 8
console.log(5 * "3")// 15
console.log(5 + 3)// 8

//pida dos numeros al usuario y sumelos
//let num1= prompt('Dame num1') //"5"
//let num2= prompt('Dame num2')//"3"
//let resultado= num1 + num2
//alert("El resultado de tu suma es" + resultado)

//pedir al usuario valor 1 y 2
let valo1= parseFloat(prompt("dame valor de 1"))
let valo2= parseFloat(prompt("dame valor de 2"))

//imprimir valores ingresados
console.log('el valor de 1 es = ${valor1} y el valor de 2 es = ${valor2}');

//operaciones
console.log('{la suma de "{$valor1}" + "${valor2}" ="${valor1+valor2}');
console.log('{la resta de "{$valor1}" - "${valor2}" ="${valor1-valor2}');
console.log('{la multiplicacion de "{$valor1}" * "${valor2}" = "${valor1*valor2}');
console.log('{la suma de "{$valor1}" / "${valor2}" ="${valor1/valor2}');

console.log(`tu número es $valor1{num1}`)