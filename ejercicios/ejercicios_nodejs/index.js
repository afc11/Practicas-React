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

