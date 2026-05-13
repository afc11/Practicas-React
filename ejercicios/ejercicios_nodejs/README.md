# Ejercicios Nodejs

Ejercicios usando Node.js y dependencias externas.

## Ejercicio 0

En este directorio crear:

- Inicializar un proyecto Node.js: `pnpm init`.
- Agregar el campo `"type": "module"` al [package.json](./package.json).

> [!tip]
> Para ejecutar el código usar
> ```sh
> node index.js
> ```

## Ejercicio 1

Mostrar mensajes de distintos colores en consola.

Usando [Chalk](https://www.npmjs.com/package/chalk) importar la librería (`import`) y mostrar:

- Un mensaje verde de éxito.
- Un mensaje rojo de error.
- Un mensaje amarillo de advertencia.

> [!tip]
> Leer la documentación de `chalk` para ver los colores.

## Ejercicio 2

En el mismo archivo [index.js](./index.js) instalar y usar [Cowsay](https://www.npmjs.com/package/cowsay) para mostrar un mensaje (tu nombre, una frase, un chiste) a elección.

> **Extra**: probar distintos personajes (en documentación de la librería)

## Ejercicio 3

Utilizar [axios](https://www.npmjs.com/package/axios) para obtener información de un pokemon.

Mostrar en consola: 

- nombre (`name`)
- altura (`height`)
- peso (`weight`).

## Ejercicio 4

Usar [nodemon](https://www.npmjs.com/package/nodemon). Nodemon es una herramienta de desarrollo que nos permite tener el programa ejecutándose sin necesidad de tener que volver a ejecutarlo cuando se hace un cambio.

1. Instalar `Nodemon`
2. Agregar en [package.json](./package.json), en los scripts: `"start": "nodemon index.js"`
3. Ejecutar script que agregamos: `pnpm run start`.
4. Modificar alguna linea de [index.js](./index.js)

> **Extra**: Agregar otro script `"test"` que use el flag experimental de node: `"node --watch index.js` y probarlo.

## Ejercicio 5

Generación de nombres aleatorios. Usando [unique names generator (API)](https://www.npmjs.com/package/unique-names-generator#api) generar 5 nombres aleatorios mostrándolos en consola.

Ej:

```sh
silent-tiger
blue-panda
fast-eagle
...
```

> [!tip]
> En el ejemplo de la documentación aparece `:string` que va a mostrar un error que corresponde a `typescript` simplemente hay que eliminarlo del código.

> **Extra**: Usar `chalk` para colorear el resultado.