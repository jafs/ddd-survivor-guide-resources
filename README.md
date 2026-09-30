# Domain-Driven Design in a Zombie Apocalypse — Resources

*[Versión en español más abajo.](#domain-driven-design-en-un-apocalipsis-zombi--recursos)*

Companion repository for [**Domain-Driven Design in a Zombie Apocalypse**](https://jafs.github.io/books/ddd-zombi.html), the DDD handbook set in a zombie apocalypse. Here you'll find extra material to go with the book.

The repository holds both editions of the book:

- The **Spanish edition** (the original) lives at the root: `images/` and `source/`.
- The **English edition** lives in `en/`, with the same structure: `en/images/` and `en/source/`.

## English edition (`en/`)

```text
en/
├── images/       Illustrations of the English edition
└── source/       Code examples of the English edition
    └── blockXX/
        └── chapterYY/
            └── code.B.CC.N.ts
```

The code files follow the same naming pattern as the Spanish ones (see below): `code.B.CC.N.ts`, where `B` is the block (1–4), `CC` the chapter (01–14), and `N` the number of the example within the chapter, in the same order in which it appears in the book. Each file is exactly the snippet printed in the English edition, with identifiers, comments, and messages in English.

They are fragments, just as they appear in the book: they don't form a runnable project and don't include any compiler configuration. Some are deliberately bad examples (especially in the antipatterns chapter), so don't copy them without reading the context.

The English illustrations are added to `en/images/` as they are produced. Until then, the book uses the Spanish ones.

## Images (Spanish edition)

This directory contains every illustration in the book at its original size, organized like this:

```text
images/
├── covers/       Evolution of the cover
├── v1/           Initial illustrations (pixel art)
├── v2/           Final illustrations (the ones in the published book)
├── extras/       Discarded tests
└── bookmark.png  Bookmark
```

### Chapter and block illustrations (`images/v1` and `images/v2`)

The illustrations went through two versions:

- **`images/v1` — Initial illustrations.** The first illustrations used while the book was being written. At the time I wanted a pixel-art look that would evolve over the chapters. I kept them because they were the first attempt.
- **`images/v2` — Final illustrations.** I preferred to give the images a more comic touch. The ones in this directory are those that appear in the published version of the book.

Both versions follow the same structure, organized by block and chapter:

```text
images/vX/
├── blockY/          Block Y
│   └── chapterZ/    Chapter Z within block Y
└── epilogue/        Epilogue
```

Within each block, the loose image is the block cover, and the `chapterZ` subfolders contain the illustrations for each chapter: scenes from the story, diagrams, and schematics of the technical concepts.

### Evolution of the cover (`images/covers`)

The book cover didn't come out right the first time. This folder holds every version it went through, from the first sketch to the final cover. You can browse them in order (`cover_v1`, `cover_v2`…) and see how the concept changed until it reached the final result.

### Extras (`images/extras`)

Test images that fell by the wayside but that I was fond of keeping.

### Bookmark (`images/bookmark.png`)

The book's bookmark, in case you want to print it and keep it with you while you read.

## Source code (Spanish edition)

Every TypeScript code example in the book, organized by block and chapter:

```text
source/
└── blockXX/
    └── chapterYY/
        └── code.B.CC.N.ts
```

Each file follows the pattern `code.B.CC.N.ts`, where `B` is the block (1–4), `CC` the chapter (01–14), and `N` the number of the example within the chapter, in the same order in which it appears in the book. For example, `code.3.09.5.ts` is the fifth example in chapter 9 (block 3).

They are fragments, just as they appear in the book: they don't form a runnable project and don't include any compiler configuration. Some are deliberately bad examples (especially in the antipatterns chapter), so don't copy them without reading the context.

---

If you got here from the book: thank you so much for reading it.

---

# Domain-Driven Design en un Apocalipsis Zombi — Recursos

Repositorio de recursos complementarios de [**Domain-Driven Design en un Apocalipsis Zombi**](https://jafs.github.io/books/ddd-zombi.html), el manual de DDD ambientado en un apocalipsis zombi. Aquí encontrarás material extra para acompañar la lectura del libro.

El repositorio contiene las dos ediciones del libro:

- La **edición en español** (la original) está en la raíz: `images/` y `source/`.
- La **edición en inglés** está en `en/`, con la misma estructura: `en/images/` y `en/source/`.

## Edición en inglés (`en/`)

```text
en/
├── images/       Ilustraciones de la edición en inglés
└── source/       Ejemplos de código de la edición en inglés
    └── blockXX/
        └── chapterYY/
            └── code.B.CC.N.ts
```

Los ficheros de código siguen el mismo patrón que los españoles (ver más abajo): `code.B.CC.N.ts`, donde `B` es el bloque (1–4), `CC` el capítulo (01–14) y `N` el número de ejemplo dentro del capítulo, en el mismo orden en que aparece en el libro. Cada fichero es exactamente el fragmento impreso en la edición inglesa, con los identificadores, los comentarios y los mensajes en inglés.

Son fragmentos tal cual aparecen en el libro: no forman un proyecto ejecutable ni incluyen configuración de compilación. Algunos son ejemplos deliberadamente malos (sobre todo en el capítulo de antipatrones), así que no copies sin leer el contexto.

Las ilustraciones en inglés se irán añadiendo a `en/images/` conforme se produzcan. Mientras tanto, el libro usa las españolas.

## Imágenes (edición en español)

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

## Código fuente (edición en español)

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
