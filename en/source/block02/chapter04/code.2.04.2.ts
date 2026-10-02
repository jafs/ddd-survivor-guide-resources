// Without domain methods, the rule has to be applied at every point in
// the code that modifies health. If it's forgotten at just one of those
// points, the entity ends up in an invalid state.
const elsa = { id: "elsa-ruiz", name: "Elsa", health: 100 };
elsa.health -= 9999; // health: -9899, nobody stopped it
