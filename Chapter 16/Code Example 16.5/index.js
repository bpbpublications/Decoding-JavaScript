let isLeap = new Date(2020, 1, 29).getMonth() === 1;

if(isLeap === true) {
    printStatement();
}

function printStatement() {
    console.log(`It is a leap year.`);
}
