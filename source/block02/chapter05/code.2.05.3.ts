// Se crea el nuevo refugio con capacidad para 3 supervivientes.
const refugioCentroComercial = Refugio.fundar(
  "Centro Comercial",
  Coordenadas.crear(40.4708, -3.7038),
  3
);

// Se admite a los tres primeros miembros del equipo.
refugioCentroComercial.admitir(
  Superviviente.registrar("s-001", "Santi", 80)
);
refugioCentroComercial.admitir(
  Superviviente.registrar("s-002", "Octavia", 90)
);
refugioCentroComercial.admitir(
  Superviviente.registrar("s-003", "Clara", 85)
);

// Si se intenta admitirte como cuarto superviviente...
// refugioCentroComercial.admitir(
//   Superviviente.registrar("s-004", "tú", 70)
// );
// Error: "Refugio lleno: no podemos admitir más supervivientes"
// La invariante protege de romper la regla.

// Se Añaden suministros.
refugioCentroComercial.recibirSuministro(
  SuministroRefugio.registrar("vendas", 10)
);
console.log(refugioCentroComercial.obtenerSuministros());
// [SuministroRefugio { nombre: "vendas", cantidad: 10 }]

// Si se añaden más vendas, se suman automáticamente.
refugioCentroComercial.recibirSuministro(
  SuministroRefugio.registrar("vendas", 7)
);
console.log(refugioCentroComercial.obtenerSuministros());
// [SuministroRefugio { nombre: "vendas", cantidad: 17 }]
// Observa que no hay dos entradas de "vendas", se han consolidado.
