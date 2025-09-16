export function bool(input){
    if (input === "true") {
        return 1;
    }else if (input === "false") {
        return 0;
    }else{
        return "Xato kiritish";
    }
}

console.log(bool("True"));
