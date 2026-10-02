// With a synthetic key: the system controls its own identifier.
const elsa = Survivor.register(
  crypto.randomUUID(),  // the system generates the identifier
  "Elsa"
);
