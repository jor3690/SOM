/* Construye la portada a partir de assets/recursos.js. No hace falta tocar este archivo para ampliar la web. */
(function () {
  const APARTADOS = [
    { tipo: "simulador", titulo: "Simuladores", boton: "Abrir el simulador" },
    { tipo: "apuntes",   titulo: "Apuntes",     boton: "Ver los apuntes" },
    { tipo: "practica",  titulo: "Prácticas",   boton: "Ver la práctica" },
    { tipo: "enlace",    titulo: "Enlaces",     boton: "Abrir el enlace" }
  ];
  const ACENTOS = ["var(--p1)", "var(--p2)", "var(--p3)", "var(--p4)"];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const recursos = (window.SOM && window.SOM.recursos) || [];

  document.getElementById("apartados").innerHTML = APARTADOS.map(a => {
    const lista = recursos.filter(r => r.tipo === a.tipo);
    if (!lista.length) return "";
    return `
    <section aria-labelledby="t-${a.tipo}">
      <h2 id="t-${a.tipo}">${a.titulo}</h2>
      <div class="tarjetas">${lista.map((r, k) => {
        const externo = /^https?:/.test(r.url);
        return `
        <article class="tarjeta" style="--acento:${ACENTOS[k % ACENTOS.length]}">
          ${r.ud ? `<span class="ud">Unidad ${esc(r.ud)}</span>` : ""}
          <h3><a href="${esc(r.url)}"${externo ? ' target="_blank" rel="noopener"' : ""}>${esc(r.titulo)}</a></h3>
          ${r.desc ? `<p>${esc(r.desc)}</p>` : ""}
          ${r.temas ? `<ul class="temas">${r.temas.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
          <span class="abrir" aria-hidden="true">${a.boton}</span>
        </article>`; }).join("")}
      </div>
    </section>`;
  }).join("");
})();
