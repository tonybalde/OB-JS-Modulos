
import { suma, multiplica } from "./controller.js";

import chalk from 'chalk';

let suma1 = suma(2,3);

let suma2 = suma(5,5);

let multi = multiplica(suma1, suma2);

console.log(suma1);

console.log(chalk.green(multi));

