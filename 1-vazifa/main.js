class CaesarCipher {
    constructor(shift){
        this.shift = shift % 26;
    }

    encode(code){
        let coder = ""
        for(let i of code){
            let char = i.charCodeAt(0);
            if (char >= 65 && char <= 90) {
                char = char + this.shift;
                const char2 = String.fromCharCode(char);
                coder += char2;
            }else if(char >= 97 && char <= 122){
                char = char + this.shift;
                const char2 = String.fromCharCode(char);
                coder += char2;
            }else{
                coder += i;
            }
        }
        return coder;
    }
}

const c = new CaesarCipher(5);
console.log(c.encode("salom"));



