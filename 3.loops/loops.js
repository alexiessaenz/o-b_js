var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let element of arr) {
  console.log(element);
}

arr.forEach(element => {
    console.log(element);
});

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    direccion: {
        calle: "Calle falsa",
        numero: 123
    }
}
var prop = "nombre";
console.log(persona[prop]);

for (let key in persona) {
    console.log(persona[key]);
}