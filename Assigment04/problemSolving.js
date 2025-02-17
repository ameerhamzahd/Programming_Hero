function cashOut() {
    let cashoutAmount = 2000;
    let cashoutCharge = 1.75;
    let cashoutOutput = 'Invalid.';

    if (cashoutAmount <= 0 || typeof cashoutAmount !== 'number') {
        return cashoutOutput;
    }
    else {
        cashoutOutput = (cashoutAmount * (cashoutCharge / 100)).toFixed(2);
        
        return cashoutOutput;
    }
}

