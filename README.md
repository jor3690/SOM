# SOM · Sistemas Operativos Monopuesto

Web del módulo para el alumnado de 1.º de SMX, publicada con GitHub Pages en `https://<usuario>.github.io/som/`.

## Estructura

```
index.html                        Portada del módulo
404.html                          Página para enlaces rotos
.nojekyll                         Evita que GitHub procese la web con Jekyll
assets/
  recursos.js                     Unidades y recursos: lo único que hay que tocar para ampliar
  portada.js                      Construye la portada a partir de recursos.js
  som.css                         Estilos de la portada
  favicon.svg                     Icono de la pestaña
simuladores/
  planificacion/index.html        Planificación de procesos (UD2)
  memoria/index.html              Gestión de memoria (UD2)
```

Cada simulador es un único HTML autónomo. Lo único que se le ha añadido es el enlace
«Sistemas Operativos Monopuesto» de arriba, para volver a la portada.

## Publicarla

1. Crea un repositorio público llamado `som` y sube todo el contenido de esta carpeta (no la carpeta en sí).
2. En el repositorio, ve a **Settings → Pages**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
3. En un par de minutos estará en `https://<usuario>.github.io/som/`.

Si algún día cambias el nombre del repositorio, cambia también `/som/` en `404.html`.

## Añadir un recurso

Abre `assets/recursos.js`, busca la unidad y añade un objeto en `recursos`:

```js
{ tipo: "simulador",                         // "simulador", "apuntes", "practica" o "enlace"
  url: "simuladores/procesos-linux/index.html",
  titulo: { es: "Procesos en Linux", va: "Processos en Linux" },
  desc:   { es: "Frase corta de qué se practica.", va: "Frase curta del que es practica." },
  temas:  { es: ["ps", "top", "kill"], va: ["ps", "top", "kill"] } }   // opcional
```

La portada lo coloca sola: los simuladores salen como tarjetas arriba y todos los recursos
aparecen además en su unidad, en la lista por evaluaciones. `url` también puede ser un enlace
externo (por ejemplo, a Aules).

## Añadir un simulador nuevo

1. Crea una carpeta en `simuladores/` y pon dentro el HTML con el nombre `index.html`.
2. Para el enlace de vuelta, pega esto justo después de `<div class="envoltorio">` (o al principio del `<body>`):

   ```html
   <nav class="som-volver" aria-label="Volver"><a href="../../index.html">Sistemas Operativos Monopuesto</a></nav>
   ```

   y copia el bloque `<style>` con `.som-volver` que hay al final del `<head>` de cualquiera de los simuladores actuales.
3. Añádelo en `assets/recursos.js` como en el apartado anterior.

## Probarla en tu ordenador

Basta con abrir `index.html` con doble clic: los enlaces funcionan también sin servidor.
