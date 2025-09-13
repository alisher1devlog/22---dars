import { mb } from "./memory.js";
import { time } from "./uptime.js";
import { proces } from "./process.js";

export function ex(){
    console.log(`Mb: ${Math.floor(mb)}`);
    console.log(`Time Soat:${Math.floor(time)}`);
    console.log(proces());
}  



