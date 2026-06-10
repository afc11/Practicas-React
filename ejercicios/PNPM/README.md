# Configuración de PNPM

[![NPM Version](https://img.shields.io/npm/v/pnpm?label=pnpm)](https://pnpm.io/es/)

`PNPM` es un gestor de paquetes al igual que `npm` pero más moderno, rápido y seguro. 

En vez de almacenar una copia de cada dependencia en cada `node_modules` de cada proyecto, este almacena una única vez la dependencia y por cada proyecto crea un enlace, evitando tener almacenado más de una vez una misma dependencia.

Además permite configurar la edad mínima de una dependencia (actualizar pasado un cierto tiempo de subida la nueva versión), evitar la ejecución de scripts al instalar dependencias de un proyecto e ignorar ejecución de scripts en dependencias. Todo esto evitará caer en modos de ataques actuales en la industria.

## Instalación

Seguir los pasos de [pnpm.io/es/installation](https://pnpm.io/es/installation).

### Usando Corepack

```sh
npm install --global corepack@latest
```

```sh
corepack enable pnpm
```

```sh
pnpm --version 
# 10.33.2
```

## Configuración

Configurar Edad mínima de dependencias:

```sh
# 1440 ~ 1 día
pnpm --global config set minimum-release-age=1440
```

Ignorar scripts en `package.json`

```sh
pnpm --global config set ignore-scripts=true
```

Ignorar scripts opcionales en las dependencias

```sh
 pnpm --global config set block-exotic-subdeps=true
```

### Comprobación

Ejecutar 

```sh
pnpm --global config list
```

y como resultado algo parecido:

```js
...
ignore-scripts=true
ignored-optional-dependencies=false
minimum-release-age=1440
...
```
