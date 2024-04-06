function checkName(name){
    if(typeof name !== "string"){
        return 'invalid';
    }
    else{
        const check = name.toLowerCase();
        const last = check.slice(-1);
        if(last === 'a' || last === 'y' || last === 'i' || last === 'e' || last === 'o' || last === 'u' || last === 'w'){
            return 'Good Name';
        }
        return 'Bad Name' ;
    }
}

const name1 = checkName('Salman');
console.log(name1);
const name2 = checkName('RAFEE');
console.log(name2);
const name3 = checkName('Jhankar');
console.log(name3);
const name4 = checkName(199);
console.log(name4);
const name5 = checkName(["Rashed"]);
console.log(name5);
