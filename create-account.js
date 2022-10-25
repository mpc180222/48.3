function createAccount(pin, amount) {
    let balance = amount ? amount : 0;
    let currPin = pin;
    return{
    checkBalance(enteredPin){
        if(enteredPin === currPin) return `$${balance}`;
        else{return 'Invalid PIN.'}
    },
    deposit(enteredPin, depositAmt){
        if(enteredPin===currPin){
            balance = balance + depositAmt;
            return `Succesfully deposited $${depositAmt}. Current balance: $${balance}.`
        }
        else{return 'Invalid PIN.'}
    },
    withdraw(enteredPin, withdrawAmt){
        if(enteredPin===currPin){
            if(withdrawAmt > balance) return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
            balance = balance - withdrawAmt;
            return `Succesfully withdrew $${withdrawAmt}. Current balance: $${balance}.`
        }
        else{return 'Invalid PIN.'}
    },
    changePin(enteredPin, newPin){
        if(enteredPin === currPin){
            currPin = newPin;
            return 'PIN successfully changed!'
        }
        else{return 'Invalid PIN.'}
    } }
}

module.exports = { createAccount };
