function sum(num) { 
    return num.split('').reduce((acumulator,currentValue) => acumulator + +currentValue, 0)
}

function orderWeight(weights) { 
    console.log(weights.split(' ').sort((a, b) => sum(a) - sum(b) || a > b || -(a < b)).join(' '));
}

orderWeight('103 123 4444 99 2000');
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123");