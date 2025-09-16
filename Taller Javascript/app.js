//ejercicio 1
//* LEER UN NUMERO
//let numero = prompt("Ingrese un número:");


//numero = Number(numero);


// Imprimir el número
//console.log("El número ingresado es:", numero);


   // Verificar si es positivo o negativo
//if (numero > 0) {
// console.log("El número es positivo.");
//} else if (numero < 0) {
// console.log("El número es negativo.");
//} else {
// console.log("El número es cero.");
//}


// ejercicio 2
// Leer dos números
// let num1 = Number(prompt("Ingrese el primer número:"));
// let num2 = Number(prompt("Ingrese el segundo número:"));


// Verificar e imprimir los positivos
// if (num1 > 0) {
//  console.log("Primer número positivo:", num1);
// }
// (num2 > 0) {


// console.log("Segundo número positivo:", num2);
// }


//ejercicio 3


// Leer dos números desde el prompt
//let num1 = parseFloat(prompt("Ingresa el primer número:"));
//let num2 = parseFloat(prompt("Ingresa el segundo número:"));


//let resultado;


//if (num1 === num2) {
 //  resultado = num1 * num2;
//} else if (num1 > num2) {
  // resultado = num1 - num2;
//} else {
  // resultado = num1 + num2;
//}


// ejercicio 4
//let costo = parseFloat(prompt("Ingrese el costo del artículo:"));


// Solicitar el dinero entregado por el cliente
//let entregado = parseFloat(prompt("Ingrese la cantidad de dinero entregada por el //cliente:"));


// Verificar si el dinero entregado es suficiente
//if (entregado < costo) {
   // let faltante = costo - entregado;
   // alert("Dinero insuficiente. Faltan $" + faltante.toFixed(2));
//} else {
    //let cambio = entregado - costo;
    //alert("El cambio a entregar es: $" + cambio.toFixed(2));
//}




//ejercicio 5
// Mostrar el resultado
//alert("El resultado es: " + resultado);


// Leer el número de vacunas aplicadas
//let numVacunas = parseInt(prompt("Ingrese el número de vacunas aplicadas:"));


// Leer el costo de cada vacuna
//let costoVacuna = parseFloat(prompt("Ingrese el costo de cada vacuna:"));


// Leer el costo de aplicación por vacuna
//let costoAplicacion = parseFloat(prompt("Ingrese el costo de aplicación por //vacuna:"));


// Calcular el total gastado
//let totalGastado = numVacunas * (costoVacuna + costoAplicacion);


// Mostrar el resultado
//alert("El total gastado en vacunas hoy es: $" + totalGastado.toFixed(2));


//ejercicio 6
// Leer la cantidad de camisas
//let cantidad = parseInt(prompt("Ingrese la cantidad de camisas compradas:"));


// Leer el precio unitario de una camisa
//let precioCamisa = parseFloat(prompt("Ingrese el precio de una camisa:"));


// Calcular el total sin descuento
//let totalSinDescuento = (cantidad * precioCamisa);


// Determinar el descuento según la cantidad
//let descuento;


//if (cantidad >= 3) {
//    descuento = 0.20; // 20%
//} else {
 //   descuento = 0.10; // 10%
//}


// Calcular el total con descuento
//let totalConDescuento = (totalSinDescuento - (totalSinDescuento * descuento);


// Mostrar el total a pagar
//alert("El total a pagar con descuento es: $" + totalConDescuento.toFixed(2));




//ejercicio 7


// Leer el dinero con el que empezó el tendero
//let dineroInicial = parseFloat(prompt("Ingrese el dinero con el que empezó el día:"));


// Calcular el total de ventas (4 ventas de $800,000)
//let totalVentas = (4 * 800000);


// Calcular el total en caja antes de pagar a acreedores
//let totalEnCaja = (dineroInicial + totalVentas);


// Calcular el pago a acreedores (10% del total en caja)
//let pagoAcreedores = (totalEnCaja * 0.10);


// Calcular el dinero final después de pagar a acreedores
//let dineroFinal = (totalEnCaja - pagoAcreedores);


// Mostrar resultados
//alert("Dinero con el que empezó: $" + dineroInicial.toFixed(2) +
 //     "\nPago a acreedores (10%): $" + pagoAcreedores.toFixed(2) +
//      "\nDinero con el que terminó: $" + dineroFinal.toFixed(2));




//ejercicio 8


// Inicializar una variable para la suma total de ventas
//let sumaVentas = 0;


// Repetir 5 veces para leer las ventas de cada día
//for (let i = 1; i <= 5; i++) {
//    let venta = parseFloat(prompt("Ingrese las ventas del día " + i + ":"));
//    sumaVentas += venta);
//}


//// Calcular el promedio
//let promedio = (sumaVentas / 5);


// Mostrar el resultado
//alert("El promedio de ventas en los últimos 5 días es: $" + promedio.toFixed(2));


//ejercicio 9


// Solicitar al usuario los dos números
//let num1 = parseFloat(prompt("Ingrese el primer número:"));
//let num2 = parseFloat(prompt("Ingrese el segundo número:"));


// Solicitar la operación a realizar
//let operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");


// Variable para almacenar el resultado
//let resultado;


// Realizar la operación según lo que el usuario escribió
//switch (operacion) {
 //   case "+":
//        resultado = (num1 + num2;
 //       break);
 //   case "-":
 //       resultado = (num1 - num2;
 //       break);
  //  case "*":
 //    resultado = (num1 * num2;
  //      break);
  //  case "/":
  //    if (num2 !== 0) {
 //           resultado = num1 / num2;
 //       } else {
  //          alert("Error: No se puede dividir por cero.");
  // resultado = null;
  //    }
   //     break;
  //  default:
 //    alert("Operación no válida.");
 //    resultado = null;
//}


// Mostrar el resultado redondeado si se obtuvo un resultado válido
//if (resultado !== null) {
//    alert("El resultado entero es: " + Math.round(resultado));
//}


//ejercicio 10


// Leer tres números
//let a = parseFloat(prompt("Ingrese el primer número:"));
//let b = parseFloat(prompt("Ingrese el segundo número:"));
//let c = parseFloat(prompt("Ingrese el tercer número:"));


// Función para ordenar los números y encontrar mayor, medio y menor
//let numeros = [a, b, c];
//numeros.sort(function(x, y) { return x - y; }); // Orden ascendente


//let menor = numeros[0];
//let medio = numeros[1];
//let mayor = numeros[2];


// Detectar números iguales
//let iguales = [];


//if (a === b && b === c) {
//    iguales.push("Los tres números son iguales: " + a);
//} else if (a === b) iguales.push("Número 1 y 2 son iguales: " + a); if (a === c) //iguales.push("Número 1 y 3 son iguales: " + a);
//    if (b === c) iguales.push("Número 2 y 3 son iguales: " + b);
//}


// Mostrar resultados
//alert(
//   "Número mayor: " + mayor +
//    "\nNúmero medio: " + medio +
//    "\nNúmero menor: " + menor +
//    (iguales.length > 0 ? "\n" + iguales.join("\n") : "\nNo hay números 
//iguales.")
//);


//ejercicio 11
// Leer datos del deportista
//let edad = parseInt(prompt("Ingrese la edad del deportista:"));
//let estatura = parseFloat(prompt("Ingrese la estatura del deportista en metros //(ejemplo: 1.75):"));
//let peso = parseFloat(prompt("Ingrese el peso del deportista en kilogramos:"));


// Verificar si cumple los requisitos
//if (edad > 18 && estatura > 1.7 && peso >= 50 && peso <= 90) {
//    alert("El deportista queda seleccionado para el equipo de baloncesto.");
//} else {
//    alert("El deportista NO cumple con los requisitos para ser seleccionado.");
//}


//ejercicio 12


// Leer el sueldo actual del trabajador
//let sueldo = parseFloat(prompt("Ingrese el sueldo actual del trabajador:"));


// Definir el sueldo mínimo (puedes ajustar este valor según el país)
//const sueldoMinimo = 1000; // Ejemplo: 1000 unidades monetarias


//let sueldoFinal;


// Verificar si el sueldo es igual al sueldo mínimo para aplicar el aumento
//if (sueldo === sueldoMinimo) {
//    sueldoFinal = sueldo * 1.10; // aumento del 10%
//} else {
//    sueldoFinal = sueldo; // no hay aumento
//}


// Mostrar el sueldo a devengar después del decreto
//alert("El sueldo a devengar después del decreto es: $" + sueldoFinal.toFixed(2));


//ejercicio 13


// Solicitar la palabra al usuario
//let palabra = prompt("Ingrese una palabra (casa, mesa, perro, gato):").toLowerCase();


//let traduccion;


//switch(palabra) {
//   case "casa":
//        traduccion = "house";
//        break;
//    case "mesa":
//        traduccion = "table";
//        break;
//    case "perro":
//       traduccion = "dog";
//        break;
//   case "gato":
//        traduccion = "cat";
//        break;
//    default:
//        traduccion = "Palabra no reconocida";
//}


// Mostrar la traducción en la página (en este caso usando alert)
//alert(traduccion);


//ejercicio 14


// Declarar un array vacío llamado datos
//let datos = [];


// Pedir al usuario tres datos y almacenarlos en el array
//for (let i = 0; i < 3; i++) {
//    datos[i] = prompt(`Ingrese el dato número ${i + 1}:`);
//}


// Imprimir el contenido del array
//alert("Contenido del array datos:\n" + datos.join(", "));


//ejercicio 15


// const listaDiv = document.getElementById("listaNombres");
//  let nombre;


//  while (true) {
//    nombre = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");


//    if (nombre === null || nombre.toLowerCase() === "salir") {
//     break;
//    }


    // Crear un nuevo párrafo para mostrar el nombre
//    let p = document.createElement("p");
//    p.textContent = nombre;
//    listaDiv.appendChild(p);
//  }




//ejercicio 16


//function numeroAleatorio(digitos) {
//  // Genera un número aleatorio con la cantidad de dígitos especificada
//  const min = digitos === 1 ? 0 : Math.pow(10, digitos - 1);
//  const max = Math.pow(10, digitos) - 1;
//  return Math.floor(Math.random() * (max - min + 1)) + min;
//}


//while (true) {
// let num1 = numeroAleatorio(1);       // Número de un dígito (0 a 9)
//  let num2 = numeroAleatorio(3);       // Número de hasta 3 dígitos (100 a 999)


  // Mostrar al usuario la pregunta
  //let respuesta = prompt(`¿Cuánto es ${num1} x ${num2}?`);


  // Validar si el usuario canceló
  //if (respuesta === null) {
  //  alert("Juego terminado.");
  //  break;
  //}


  // Convertir respuesta a número
  //let respuestaNum = parseInt(respuesta);


  // Validar la respuesta
  //if (respuestaNum === num1 * num2) {
   // alert("¡Ganaste!");
   // break;
  //} else {
   // alert("Respuesta incorrecta. Intenta de nuevo.");
  //}
//}


//let frutas = [];


// Lista de frutas para agregar al array
//let listaFrutas = ["Manzana", "Banana", "Naranja", "Mango", "Pera", "Uva", //"Kiwi", "Cereza"];


// Llenamos el array frutas usando un ciclo for
//for (let i = 0; i < listaFrutas.length; i++) {
//    frutas.push(listaFrutas[i]);
//}


// Imprimir lista enumerada en consola
//for (let i = 0; i < frutas.length; i++) {
//    console.log((i + 1) + ". " + frutas[i]);
//}
