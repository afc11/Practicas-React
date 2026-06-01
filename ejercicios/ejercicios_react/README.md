# Ejercicios React

Crear un proyecto en react y resolver cada ejercicio en un componente por cada uno

Comando de creación de proyecto React

```sh
npx create-next-app@latest --use-pnpm --js --no-tailwind --no-agents-md --src-dir --no-app
```

## Estados

Ejercicios usando `useState`

### Ejercicio 1

Crear un contador que:
- empiece en 0, 
- tenga un botón para sumar 1
- muestre el valor en pantalla

Extra:
- agregar un botón para restar

### Ejercicio 2

Crear un input donde:
- el usuario escriba texto,
- debajo se muestre exactamente lo escrito.

> [!tip]
> Usar propiedad `onChange={}`

### Ejercicio 3

Crear un botón que:
- muestre un mensaje al tocarlo,
- vuelva a ocultarlo al tocarlo otra vez.

### Ejercicio 4

Crear un componente con:
- un cuadrado,
- un botón.

Cada vez que se toca el botón:
- cambiar el color del cuadrado alternando entre rojo y azul.

### Ejercicio 5

Crear:
- un input,
- un botón “Agregar”.

Cada vez que el usuario agrega algo:
- mostrarlo debajo en una lista. 

> [!tip]
> A la hora de actualizar el estado con la lista usar `setLista([...lista, input])`

## Sincronización

Ejercicios usando `useEffect`

### Ejercicio 1

Mostrar mensaje al cargar, cuando el componente aparezca:
- mostrar un `console.log("Componente cargado")`

Usar: `useEffect(..., [])`

### Ejercicio 2

Detectar cambios en un contador, hacer un contador con `useState`.

Cada vez que cambie:
- mostrar en consola: 

```sh 
El contador cambió
```

### Ejercicio 3

Cambiar el título de la pestaña, crear un contador.

Cada vez que cambie:
- actualizar el título de la página.

Usar:
```js
document.title
```

### Ejercicio 4

Detectar si el número es par o impar, crear:
- un contador,
- un botón para incrementarlo.

Cada vez que cambie el contador:
- mostrar en consola:

```js
El número es par
```
o
```js
El número es impar
```

Usar:
- `useEffect` escuchando el contador.
