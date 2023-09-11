// Clase contructora
class Supp {
  constructor(id, marca, modelo, tipo, sabor, tamaño, precio, imagen) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.sabor = sabor;
    this.tamaño = tamaño;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = 1;
  }
  //Método para sumar y restar la cantidad de productos

  sumarUnidad() {
    this.cantidad = this.cantidad + 1;
    return this.cantidad;
  }
  restarUnidad() {
    this.cantidad = this.cantidad - 1;
    return this.cantidad;
  }
}

// instanciación de objetos

const supp1 = new Supp(
  1,
  "WHEY PROTEIN",
  "PROTEINA",
  "PROTE",
  "fresa",
  "M",
  1200,
  "hydro-whey-hmb-.jpeg"
);
const supp2 = new Supp(
  2,
  "TOP1",
  "EAA + BCAA",
  "INTRA",
  "jamaica",
  "R",
  850,
  "top1bcaas.jpeg"
);
const supp3 = new Supp(
  3,
  "PRE WORKOUT",
  "PRE WORKOUT",
  "PRE",
  "mango",
  "R",
  650,
  "pre-workout-.jpeg"
);
const supp4 = new Supp(
  4,
  "CREATINA",
  "POST",
  "POST",
  "unflavored",
  "R",
  600,
  "creatina-.jpeg"
);
const supp5 = new Supp(
  5,
  "WHEY PROTEIN 12 LBS",
  "PROTEINA",
  "PROTE",
  "chocolate",
  "G",
  1650,
  "hydro-zero-12lbs.jpeg"
);
const supp6 = new Supp(
  6,
  "Glutamina",
  "POST",
  "POST",
  "unflavored",
  "R",
  850,
  "glutamina-.jpeg"
);

// Crear un array de objetos
const catalogo = [];
catalogo.push(supp1, supp2, supp3, supp4, supp5, supp6);

// DOM con array de objetos
let productosEnCarrito = [];

if (localStorage.getItem("carrito")) {
  // productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
  for (let supp of JSON.parse(localStorage.getItem("carrito"))) {
    let suppStorage = new Supp(
      supp.id,
      supp.marca,
      supp.modelo,
      supp.tipo,
      supp.sabor,
      supp.tamaño,
      supp.precio,
      supp.imagen
    );
    productosEnCarrito.push(suppStorage);
  }
  console.log(productosEnCarrito);
} else {
  productosEnCarrito = [];
  localStorage.setItem("carrito", productosEnCarrito);
}

fetch("supp.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(`La info capturada del json`);
    console.log(data);
  });
