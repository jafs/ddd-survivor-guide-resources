// Con clave sintética: el sistema controla su propio identificador
const elsa = Superviviente.registrar(
  crypto.randomUUID(),  // el sistema genera el identificador
  "Elsa"
);
