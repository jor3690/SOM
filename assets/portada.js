/* Construye la portada a partir de assets/recursos.js. No hace falta tocar este archivo para ampliar la web. */
(function () {
  const TEXTOS = {
    es: {
      doc: "SOM · Sistemas Operativos Monopuesto",
      h1: "Sistemas Operativos Monopuesto",
      sub: "1.º de Sistemas Microinformáticos y Redes. Simuladores y recursos para practicar en clase y en casa.",
      simuladores: "Simuladores",
      curso: "El curso, unidad a unidad",
      evaluacion: n => `${n}.ª evaluación`,
      abrir: "Abrir el simulador",
      vacio: "Todavía sin recursos",
      ud: n => `Unidad ${n}`,
      tipos: { simulador: "Simulador", apuntes: "Apuntes", practica: "Práctica", enlace: "Enlace" },
      pie: "Los simuladores funcionan en el navegador, también en el móvil, y no guardan nada de lo que hagas."
    },
    va: {
      doc: "SOM · Sistemes Operatius Monolloc",
      h1: "Sistemes Operatius Monolloc",
      sub: "1r de Sistemes Microinformàtics i Xarxes. Simuladors i recursos per a practicar a classe i a casa.",
      simuladores: "Simuladors",
      curso: "El curs, unitat a unitat",
      evaluacion: n => `${n}a avaluació`,
      abrir: "Obri el simulador",
      vacio: "Encara sense recursos",
      ud: n => `Unitat ${n}`,
      tipos: { simulador: "Simulador", apuntes: "Apunts", practica: "Pràctica", enlace: "Enllaç" },
      pie: "Els simuladors funcionen en el navegador, també en el mòbil, i no guarden res del que faces."
    }
  };
  const ACENTOS = ["var(--p1)", "var(--p2)", "var(--p3)", "var(--p4)"];
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let idioma = "es";
  try { if (localStorage.getItem("som-idioma") === "va") idioma = "va"; } catch (e) {}

  function pintar() {
    const T = TEXTOS[idioma];
    const unidades = (window.SOM && window.SOM.unidades) || [];
    document.documentElement.lang = idioma === "va" ? "ca-ES-valencia" : "es";
    document.title = T.doc;
    $("h1").textContent = T.h1;
    $("sub").textContent = T.sub;
    $("t-simuladores").textContent = T.simuladores;
    $("t-curso").textContent = T.curso;
    $("pie").textContent = T.pie;
    document.querySelectorAll("#idioma button").forEach(b => b.setAttribute("aria-pressed", b.dataset.idioma === idioma));

    // Tarjetas: todos los simuladores, en el orden de las unidades
    const sims = [];
    unidades.forEach(u => u.recursos.forEach(r => { if (r.tipo === "simulador") sims.push({ u, r }); }));
    $("tarjetas").innerHTML = sims.map(({ u, r }, k) => `
      <article class="tarjeta" style="--acento:${ACENTOS[k % ACENTOS.length]}">
        <span class="ud">${esc(T.ud(u.ud))}</span>
        <h3><a href="${esc(r.url)}">${esc(r.titulo[idioma])}</a></h3>
        <p>${esc(r.desc[idioma])}</p>
        ${r.temas ? `<ul class="temas">${r.temas[idioma].map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        <span class="abrir" aria-hidden="true">${esc(T.abrir)}</span>
      </article>`).join("");
    $("sec-simuladores").hidden = !sims.length;

    // Unidades agrupadas por evaluación
    const evals = [...new Set(unidades.map(u => u.eval))].sort();
    $("evaluaciones").innerHTML = evals.map(n => `
      <div class="evaluacion">
        <h3>${esc(T.evaluacion(n))}</h3>
        <ol class="unidades">${unidades.filter(u => u.eval === n).map(u => `
          <li class="unidad${u.recursos.length ? " con-recursos" : ""}">
            <span class="num" aria-label="${esc(T.ud(u.ud))}">UD${u.ud}</span>
            <span class="nombre">${esc(u.titulo[idioma])}</span>
            <span class="enlaces">${u.recursos.length
              ? u.recursos.map(r => `<a href="${esc(r.url)}">${esc(r.titulo[idioma])} <small>${esc(T.tipos[r.tipo] || "")}</small></a>`).join("")
              : `<span class="vacio">${esc(T.vacio)}</span>`}</span>
          </li>`).join("")}
        </ol>
      </div>`).join("");
  }

  $("idioma").addEventListener("click", e => {
    const b = e.target.closest("button[data-idioma]");
    if (!b) return;
    idioma = b.dataset.idioma;
    try { localStorage.setItem("som-idioma", idioma); } catch (e) {}
    pintar();
  });
  pintar();
})();
