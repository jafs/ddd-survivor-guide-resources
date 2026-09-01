// Sin métodos de dominio: la regla tiene que aplicarse en cada punto
// del código que modifica la salud. Si se olvida sólo en uno de esos
// puntos, la entidad queda con un estado inválido.
const elsa = { id: "elsa-ruiz", nombre: "Elsa", salud: 100 };
elsa.salud -= 9999; // salud: -9899, nadie lo impidió
