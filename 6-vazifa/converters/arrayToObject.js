export function array(arr) {
    const arrParse = JSON.parse(arr);
    return Object.fromEntries(arrParse);

}

console.log(array("[['salom', 'Alisher'],['sa','sdada'],[1,5]]"));
