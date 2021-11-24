<<<<<<< HEAD
// Demo : Functions
let accountA = {
    name: 'Zehra Dogan',
    accountNumber : '34127934',
    totalMoney: 4340,
    plusMoney: 1000
}
let accountB = {
    name: 'Aysin Dogan',
    accountNumber : '45127934',
    totalMoney: 9330,
    plusMoney: 3000
}
function getMoney(accountName,money){
    console.log(`Hello ${accountName.name}`);

    if(accountName.totalMoney >= money){
         console.log('You have enough money')
    }
    else{
        let total = accountName.totalMoney + accountName.plusMoney;
        if(total >= money){
            if(confirm('Would you like to use the money in your additional account?')){
                console.log('You can get your money');
                let account = accountName.totalMoney;
                let plus = account - plus;
                accountName.totalMoney = 0;
                accountName.plusMoney = accountName.plusMoney - plus;
            }
            else{
                console.log(`${accountName.accountNumber} in your account ${accountName.totalMoney} there is money`);
            }
        }else{
            console.log('We are sorry! You haven\'t enough money');
        }

    }
}
getMoney(accountA,5000);
=======
// Demo : Functions
let accountA = {
    name: 'Zehra Dogan',
    accountNumber : '34127934',
    totalMoney: 4340,
    plusMoney: 1000
}
let accountB = {
    name: 'Aysin Dogan',
    accountNumber : '45127934',
    totalMoney: 9330,
    plusMoney: 3000
}
function getMoney(accountName,money){
    console.log(`Hello ${accountName.name}`);

    if(accountName.totalMoney >= money){
         console.log('You have enough money')
    }
    else{
        let total = accountName.totalMoney + accountName.plusMoney;
        if(total >= money){
            if(confirm('Would you like to use the money in your additional account?')){
                console.log('You can get your money');
                let account = accountName.totalMoney;
                let plus = account - plus;
                accountName.totalMoney = 0;
                accountName.plusMoney = accountName.plusMoney - plus;
            }
            else{
                console.log(`${accountName.accountNumber} in your account ${accountName.totalMoney} there is money`);
            }
        }else{
            console.log('We are sorry! You haven\'t enough money');
        }

    }
}
getMoney(accountA,5000);
>>>>>>> 8e8a6f7bd8dee6a88212c6a69ca9005dcaeaa6c8
getMoney(accountB,3456);