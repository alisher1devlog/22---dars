export function object(obj){
    const object = new Object(obj)
    return Object.entries(object);
}

console.log(object("{'salom': ALisher}"));
