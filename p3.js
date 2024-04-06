function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return "Invalid Array";
    }
    let numArray = [];
    for(const elem of array){
        if(typeof(elem) === 'number' && Number.isNaN(elem) === false){
            numArray.push(elem);
        }
    }
    return numArray;
}

const arr1 = deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
console.log(arr1);

const arr2 = deleteInvalids(["1" , {num:2} , NaN ]);
console.log(arr2);

const arr3 = deleteInvalids([ 1 , 2 , -3 ]);
console.log(arr3);

const arr4 = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(arr4);

