console.log("¡Todo pronto! Proyecto inicializado con pnpm v11.1.3");


// Ejercicio 1.

import chalk from 'chalk';

console.log(chalk.green('✔ Éxito: El proceso se completó correctamente.'));
console.log(chalk.red('✖ Error: Algo salió mal en el sistema.'));
console.log(chalk.yellow('⚠ Advertencia: Revisa la configuración antes de seguir.'));


// Ejercicio 2.

import cowsay from 'cowsay';

console.log(cowsay.say({
    text: "¡Hola, soy Agustín programando en Node.js!",
    e: "oO", 
    T: "U "  
}));


// Ejercicio 3.

import axios from 'axios';

const pokemonName = 'pikachu';

console.log(chalk.cyan(`\nBuscando datos de ${pokemonName} en la nube... 🔍`));

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
        const pokemonData = response.data;

        console.log(chalk.yellow.bold('\n==============================='));
        console.log(chalk.green.bold(`   📊 DATOS DE: ${pokemonData.name.toUpperCase()} `));
        console.log(chalk.yellow.bold('==============================='));
        
        // Lo que pide el profesor: nombre, altura y peso
        console.log(`${chalk.blue.bold('Nombre:')} ${pokemonData.name}`);
        console.log(`${chalk.blue.bold('Altura:')} ${pokemonData.height} decímetros`);
        console.log(`${chalk.blue.bold('Peso:')} ${pokemonData.weight} hectogramos`);
        
        console.log(chalk.yellow.bold('===============================\n'));
    })
    .catch(error => {
        console.error(chalk.red('✖ Error al conectar con la PokeAPI:'), error.message);
    });