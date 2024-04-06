function calculateMoney(ticketSale){
    if(ticketSale <= 0){
        return "Invalid Number"
    }
    const TotalSale = 120*ticketSale;
    const GuardCost = 500;
    const LunchCost = 50*8;
    const RemainingTotal = TotalSale - GuardCost - LunchCost;
    return RemainingTotal;
}

const calculation1 = calculateMoney(10);
console.log(calculation1);

const calculation2 = calculateMoney(1055);
console.log(calculation2);

const calculation3 = calculateMoney(93);
console.log(calculation3);

const calculation4 = calculateMoney(-130);
console.log(calculation4);