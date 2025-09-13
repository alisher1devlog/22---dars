import { add } from "./add.js";
import { div } from "./div.js";
import { mul } from "./mul.js";
import { sub } from "./sub.js";

const input = process.argv[2];

const valueA = process.argv[3];
const valueB = process.argv[4];

switch(input){
    case  "add":
        console.log(add(valueA,valueB));
        break;
    case "div":
        console.log(div(valueA,valueB));
        break;
    case "sub":
        console.log(sub(valueA,valueB));
        break;
    case "mul":
        console.log(mul(valueA,valueB));
        break;
}

