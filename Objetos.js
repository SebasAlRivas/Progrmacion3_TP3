// Ejercicio 1: precio + iva
let precio = 300;
let iva = 21;
let total = precio + (precio * iva / 100);
console.log("Precio total (precio + iva):", total);

// Ejercicio 2: Área y perímetro del cuadrado
let lado = 5;
let area = lado * lado;
let perimetro = lado * 4;
console.log("Área del cuadrado:", area);
console.log("Perímetro del cuadrado:", perimetro);

// Ejercicio 3: Saludo 
let nombre = prompt("Ej3 : Escribe tu nombre");
console.log("Hola " + nombre);

// Ejercicio 4: Promedio de 3 numeros
let num1 = parseInt(prompt("Promedio : Teclea el primer valor"));
let num2 = parseInt(prompt("Promedio :Teclea el segundo valor"));
let num3 = parseInt(prompt("Promedio :Teclea el tercer valor"));
let promedio = (num1 + num2 + num3) / 3;
console.log("Promedio:", promedio);

// Ejercicio 5: liros x km recorridos
let litros = parseFloat(prompt("EJ5: Litros de nafta consumidos"));
let km = parseFloat(prompt("Km recorridos"));
let consumo = litros / km;
console.log("Consumo por km:", consumo);