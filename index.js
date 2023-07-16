const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// Ejerciocio A)
const pizzasImpares = pizzas.filter(function(pizza) {
  return pizza.id % 2 !== 0;
});

pizzasImpares.forEach(function(pizza) {
  console.log(`La pizza "${pizza.nombre}" tiene un ID impar.`);
});

// Ejercicio B)
const pizzasBaratas = pizzas.some(function(pizza){
  return pizza.precio < 600;
})
let respuesta
if (pizzasBaratas) {
  respuesta = "Sí, hay"; 
} else {
  respuesta = "No, no hay";
};

console.log(respuesta);

//ejercicio C)
const pizzasPrecio = pizzas.filter(function(pizza) {
  return pizza.nombre;
});
pizzasPrecio.forEach(function(pizza) {
  console.log(`La ${pizza.nombre} tiene un valor de ${pizza.precio}.`);
});

//ejercicio D)
pizzas.forEach((pizza) => {
  console.log(`la pizza de ${pizza.nombre} tiene : `)
  pizza.ingredientes.forEach((ingrediente)=>{
    console.log(ingrediente);
  })
})