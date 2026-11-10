/*
  Recursos de la web de SOM.
  Para añadir uno, copia un bloque { ... } y cambia sus datos.
  La portada lo coloca sola en su apartado según el tipo.

  tipo:  "simulador", "apuntes", "practica" o "enlace"
  ud:    número de unidad (opcional; sale como etiqueta en la tarjeta)
  url:   ruta dentro de la web o enlace externo (por ejemplo, a Aules)
  temas: lista corta de lo que trata (opcional)
*/
window.SOM = {
  recursos: [
    { tipo: "simulador", ud: 2,
      url: "simuladores/planificacion/index.html",
      titulo: "Planificación de procesos",
      desc: "Avanza instante a instante y mira quién ocupa la CPU, cómo se mueve la cola y cómo se construye el cronograma.",
      temas: ["FCFS", "SJF", "SRTF", "Round Robin"] },

    { tipo: "simulador", ud: 2,
      url: "simuladores/memoria/index.html",
      titulo: "Gestión de memoria",
      desc: "Los mismos procesos colocados en memoria de cinco formas distintas, para ver dónde se desperdicia espacio en cada una.",
      temas: ["Particiones fijas", "Particiones variables", "Paginación", "Segmentación", "Intercambio"] }
  ]
};
