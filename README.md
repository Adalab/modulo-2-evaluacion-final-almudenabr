1-[] EVENTO CLICK

1.1-[x] Fetch obtener datos

1.1.1-[x] Necesario recoger texto introducido en el buscador -[x] filtrar por nombre

1.2-[x] Parsear datos del servidor
1.3-[x] Pintar una foto
1.3.1- [x] pintar título de la serie en el html
1.4-[x] pintar todas las series que contengan la palabra introducida
1.5-[x] Si no hay foto mostrar img de relleno
1.6-[x] Al hacer nueva búsqueda borrar la búsqueda anterior

2-[] MARCAR COMO FAVORITAS LAS SELECCIONADAS POR LA USUARIA

2.1-[x] Escuchar el evento click en cada serie
2.2-[x] Identificar el elemento clicado
2.3-[x] guardar los favoritos array
2.4-[x] añadir la clase de favorito
2.5-[x] color de fondo y fuente se intercambian en las seleccionadas como favoritas
2.6-[x] los favoritos se guardan en listado a la izq - (array para almacenarlas)
2.7-[] los favoritos siguen apareciendo a la izq con nueva búsqueda

2.6-[] localStorage

3-[x]eliminar value=game del input de html

BONUS:

-[] quitar la clase de favorito clikando en x en la peli guardada en fav -[x] quitar la clase de favorito al hacer click en la peli
-[] al hacer nueva búsqueda las series favoritas salen remarcadas en el resultado de búsqueda

-[] maquetar css

## Estructura de carpetas

La estructura de carpetas tiene esta pinta:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```
