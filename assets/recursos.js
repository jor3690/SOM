/*
  Datos de la web de SOM.
  Para añadir un simulador, unos apuntes o cualquier otro recurso,
  basta con añadir un objeto en "recursos" de la unidad que toque.
  La portada se construye sola a partir de esta lista.

  Tipos de recurso: "simulador", "apuntes", "practica", "enlace".
  Los textos van en castellano (es) y en valenciano (va).
*/
window.SOM = {
  unidades: [
    { ud: 1, eval: 1,
      titulo: { es: "Introducción a los sistemas informáticos", va: "Introducció als sistemes informàtics" },
      recursos: [] },

    { ud: 2, eval: 1,
      titulo: { es: "Conceptos de sistemas operativos", va: "Conceptes de sistemes operatius" },
      recursos: [
        { tipo: "simulador",
          url: "simuladores/planificacion/index.html",
          titulo: { es: "Planificación de procesos", va: "Planificació de processos" },
          desc: {
            es: "Avanza instante a instante y mira quién ocupa la CPU, cómo se mueve la cola y cómo se construye el cronograma.",
            va: "Avança instant a instant i mira qui ocupa la CPU, com es mou la cua i com es construeix el cronograma."
          },
          temas: { es: ["FCFS", "SJF", "SRTF", "Round Robin"], va: ["FCFS", "SJF", "SRTF", "Round Robin"] } },

        { tipo: "simulador",
          url: "simuladores/memoria/index.html",
          titulo: { es: "Gestión de memoria", va: "Gestió de memòria" },
          desc: {
            es: "Los mismos procesos colocados en memoria de cinco formas distintas, para ver dónde se desperdicia espacio en cada una.",
            va: "Els mateixos processos col·locats en memòria de cinc maneres diferents, per a veure on es desaprofita espai en cada una."
          },
          temas: {
            es: ["Particiones fijas", "Particiones variables", "Paginación", "Segmentación", "Intercambio"],
            va: ["Particions fixes", "Particions variables", "Paginació", "Segmentació", "Intercanvi"]
          } }
      ] },

    { ud: 3, eval: 1,
      titulo: { es: "Virtualización e instalación de sistemas operativos", va: "Virtualització i instal·lació de sistemes operatius" },
      recursos: [] },

    { ud: 4, eval: 1,
      titulo: { es: "Linux. Operaciones con sistemas de archivos y directorios", va: "Linux. Operacions amb sistemes d’arxius i directoris" },
      recursos: [] },

    { ud: 5, eval: 2,
      titulo: { es: "Linux. Administración: usuarios y grupos", va: "Linux. Administració: usuaris i grups" },
      recursos: [] },

    { ud: 6, eval: 2,
      titulo: { es: "Linux. Administración: gestión de procesos", va: "Linux. Administració: gestió de processos" },
      recursos: [] },

    { ud: 7, eval: 2,
      titulo: { es: "Linux. Scripts", va: "Linux. Scripts" },
      recursos: [] },

    { ud: 8, eval: 3,
      titulo: { es: "Windows. Administración: archivos y directorios", va: "Windows. Administració: arxius i directoris" },
      recursos: [] },

    { ud: 9, eval: 3,
      titulo: { es: "Windows. Administración: usuarios y grupos", va: "Windows. Administració: usuaris i grups" },
      recursos: [] }
  ]
};
