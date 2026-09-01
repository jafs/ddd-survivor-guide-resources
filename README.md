# Domain-Driven Design en un Apocalipsis Zombi — Recursos

Repositorio de recursos complementarios de **Domain-Driven Design en un Apocalipsis Zombi**, el manual de DDD ambientado en un apocalipsis zombi. Aquí encontrarás material extra para acompañar la lectura del libro.

## Imágenes

Este directorio contiene todas las ilustraciones del libro en su tamaño original, organizadas así:

```text
images/
├── covers/       Evolución de la portada
├── v1/           Ilustraciones iniciales (pixel art)
├── v2/           Ilustraciones finales (las del libro publicado)
├── extras/       Pruebas descartadas
└── bookmark.png  Marcapáginas
```

### Ilustraciones de los capítulos y bloques (`images/v1` y `images/v2`)

Las ilustraciones pasaron por dos versiones:

- **`images/v1` — Ilustraciones iniciales.** Las primeras ilustraciones que se usaron durante la escritura del libro. En su momento quería dar un aspecto pixel art que fuera evolucionando a lo largo de los capítulos. Quería conservarlas porque fueron el primer intento.
- **`images/v2` — Ilustraciones finales.** Preferí darles un toque más cómico a las imágenes. Las que hay en este directorio son las que aparecen en la versión publicada del libro.

Ambas versiones siguen la misma estructura, organizada por bloque y capítulo:

```text
images/vX/
├── blockY/          Bloque Y
│   └── chapterZ/    Capítulo Z dentro del bloque Y
└── epilogue/        Epílogo
```

Dentro de cada bloque, la imagen suelta corresponde a la portada del bloque y las subcarpetas `chapterZ` contienen las ilustraciones de cada capítulo: escenas de la historia, diagramas y esquemas de los conceptos técnicos.

### Evolución de la portada (`images/covers`)

La portada del libro no salió a la primera. En esta carpeta están todas las versiones por las que pasó, desde el primer boceto hasta la portada definitiva. Puedes recorrerlas en orden (`cover_v1`, `cover_v2`…) y ver cómo fue cambiando el concepto hasta llegar al resultado final.

### Extras (`images/extras`)

Imágenes de pruebas que se quedaron por el camino pero que me hacía ilusión conservar.

### Marcapáginas (`images/bookmark.png`)

El marcapáginas del libro, por si quieres imprimirlo y acompañar la lectura con él.

## Código fuente

Todos los ejemplos de código TypeScript del libro, organizados por bloque y capítulo:

```text
source/
└── blockXX/
    └── chapterYY/
        └── code.B.CC.N.ts
```

Cada fichero sigue el patrón `code.B.CC.N.ts`, donde `B` es el bloque (1–4), `CC` el capítulo (01–14) y `N` el número de ejemplo dentro del capítulo, en el mismo orden en que aparece en el libro. Por ejemplo, `code.3.09.5.ts` es el quinto ejemplo del capítulo 9 (bloque 3).

Son fragmentos tal cual aparecen en el libro: no forman un proyecto ejecutable ni incluyen configuración de compilación. Algunos son ejemplos deliberadamente malos (sobre todo en el capítulo de antipatrones), así que no copies sin leer el contexto.

---

Si has llegado aquí desde el libro: muchísimas gracias por leerlo.
