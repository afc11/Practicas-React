import chalk from 'chalk';
import cowsay from 'cowsay';
import axios from 'axios';
import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';


console.log("¡Todo pronto! Proyecto inicializado con pnpm v11.1.3");


// Ejercicio 1.

console.log(chalk.green('✔ Éxito: El proceso se completó correctamente.'));
console.log(chalk.red('✖ Error: Algo salió mal en el sistema.'));
console.log(chalk.yellow('⚠ Advertencia: Revisa la configuración antes de seguir.'));


// Ejercicio 2.

console.log(cowsay.say({
    text: "¡Hola, soy Agustín programando en Node.js!",
    e: "oO", 
    T: "U "  
}));


// Ejercicio 3.

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


// Ejercicio 5.


console.log(chalk.magenta.bold('========================================='));
console.log(chalk.magenta.bold(' 🎲 EJERCICIO 5: GENERACIÓN DE 5 NOMBRES '));
console.log(chalk.magenta.bold('========================================='));

const config = {
    dictionaries: [adjectives, animals],
    separator: '-'
};

for (let i = 1; i <= 5; i++) {
    const randomName = uniqueNamesGenerator(config);
    
    console.log(`${chalk.gray(`${i}.`)} ${chalk.cyan.bold(randomName)}`);
}

console.log(chalk.magenta.bold('=========================================\n'));