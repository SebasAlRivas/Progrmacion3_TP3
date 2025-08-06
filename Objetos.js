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


//Comienza Objetos

// Ejercicio 6 - Clase Ficha
function ejercicio6() {
  const nombre = prompt("Ingrese el nombre de la Ficha:");
  const km1 = parseFloat(prompt("1ra Sesion: km recorridos"));
  const km2 = parseFloat(prompt("2da Sesion: km recorridos"));
  const km3 = parseFloat(prompt("3ra Sesion: km recorridos"));

  const total = km1 + km2 + km3;
  const media = total / 3;

  console.log("Ejercicio 6:");
  console.log("Nombre:", nombre);
  console.log("Kilómetros recorridos:", km1, km2, km3);
  console.log("Promedio de kilómetros:", media);
}

ejercicio6();

// Ejercicio 7: Facturas y clientes

function ejercicio7() {
  const clientes = [
    { nombre: "iann", email: "iann@gmail.com", telefono: "3876453876" },
    { nombre: "Luis", email: "luis@gmail.com", telefono: "3874786437" },
    { nombre: "pepa", email: "pepa@gmail.com", telefono: "3874555786" }
  ];

  const factura1 = {
    cliente: clientes[0],
    total: 1200,
    estado: "pagada"
  };

  const factura2 = {
    cliente: clientes[1],
    total: 850,
    estado: "pendiente"
  };

  const factura3 = {
    cliente: clientes[2],
    total: 2100,
    estado: "pagada"
  };

  console.log("Ejercicio 7:");
  console.log("Factura 1:", factura1.cliente.nombre, "$" + factura1.total, "-", factura1.estado);
  console.log("Factura 2:", factura2.cliente.nombre, "$" + factura2.total, "-", factura2.estado);
  console.log("Factura 3:", factura3.cliente.nombre, "$" + factura3.total, "-", factura3.estado);
}

ejercicio7();

// Ejercicio 8 - Clases Proveedor y Articulo
function ejercicio8() {
  class Proveedor {
    constructor(nombre, email, telefono) {
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
    }
  }

  class Articulo {
    constructor(nombre, precio, proveedor) {
      this.nombre = nombre;
      this.precio = precio;
      this.proveedor = proveedor;
    }

    telefono() {
      return {
        proveedor: this.proveedor.nombre,
        telefono: this.proveedor.telefono
      };
    }
  }

  const proveedor1 = new Proveedor("Compuencasa", "compucasa@hotmail.com", "387-156211455");
  const articulo1 = new Articulo("Teclado", 30000, proveedor1);
  console.log("Ejercicio 8: Info del proveedor:", articulo1.telefono());
}
ejercicio8();
