function monthlySavings(arr, livingCost){
    if(Array.isArray(arr) === false || typeof(livingCost) !== 'number'){
        return 'invalid input';
    }
    let earning = 0;
    for(const num of arr){
        if(num<3000){
            earning = earning + num;
        }
        else{
            earning = earning + (num - (num*20)/100);
        }
    }
    const savings = earning - livingCost;
    if(savings>=0){
        return savings;
    }
    return "earn more";
}

const totalSavings1 = monthlySavings([ 1000 , 2000 , 3000 ] , 5400);
console.log(totalSavings1);

const totalSavings2 = monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
console.log(totalSavings2);

const totalSavings3 = monthlySavings([ 900 , 2700 , 3400] , 10000);
console.log(totalSavings3);

const totalSavings4 = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(totalSavings4);