import lodash from "lodash"

const entries = [
  {
    titulo: "Introducción a HTML5",
    descripcion:
      "En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.",
    fecha: "2022-01-15",
    autor: "Juan Pérez",
    tags: ["HTML5", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo diseñar una web responsive",
    descripcion:
      "En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-02-02",
    autor: "María García",
    tags: ["Responsive Design", "Web", "Diseño"],
  },
  {
    titulo: "Introducción a CSS3",
    descripcion:
      "En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.",
    fecha: "2022-02-15",
    autor: "Pedro González",
    tags: ["CSS3", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo optimizar el rendimiento de una web",
    descripcion:
      "En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-03-02",
    autor: "Ana Rodríguez",
    tags: ["Optimización", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo crear una página web desde cero",
    descripcion:
      "En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-03-15",
    autor: "Juan Pérez",
    tags: ["Web", "Desarrollo"],
  },
  {
    titulo: "Cómo usar jQuery en una web",
    descripcion:
      "En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.",
    fecha: "2022-04-02",
    autor: "María García",
    tags: ["jQuery", "Web", "Desarrollo"],
  },
  {
    titulo: "Cómo crear un diseño atractivo para una web",
    descripcion:
      "En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.",
    fecha: "2022-04-15",
    autor: "Pedro González",
    tags: ["Diseño", "Web", "Desarrollo"],
  },
];

// groupBy 
const entriesGrouppedByAuthor = lodash.groupBy(entries, "autor");
// console.log(entriesByAuthor["Juan Pérez"]);

// filter
function filterByHtml5Tag(entry) {
  return lodash.includes(entry.tags, "HTML5");
}
const entriesFilteredByHtml5Tag = lodash.filter(entries, filterByHtml5Tag)
// console.log(entriesFilteredByHtml5Tag);

// map
const entriesMappedByTitle = lodash.map(entries, "titulo");
// console.log(entriesMappedByTitle);

// orderBy
const entriesOrderedByDate = lodash.orderBy(entries, "fecha", "desc");
// console.log(entriesOrderedByDate);

// reduce
function countTags(acc, entry) {
  return acc + entry.tags.length;
}
const countEntriesTags = lodash.reduce(entries, countTags, 0)
// console.log(countEntriesTags);

// ----------- //

// merge
const mergedEntries = lodash.merge(entries[0], entries[1])
// console.log(mergedEntries);

// pick 
const pickedTitleTagsEntry = lodash.pick(entries[0], ["titulo", "tags"])
// console.log(pickedTitleTagsEntry);

// omit
const omittedDescriptionEntry = lodash.omit(entries[0], ["descripcion"], ["tags"])
// console.log(omittedDescriptionEntry)

// has
const hasDateEntry = lodash.has(entries[0], "fecha")
// console.log(hasDateEntry)

// invert 



