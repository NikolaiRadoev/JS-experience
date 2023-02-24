function square() { 
    console.log(this);
    console.log(this.map(n => n ** 2));
}

function cube() { 
    console.log(this.map(n => n ** 3));
}

function sum() { 
    let sumValue = 0;
    this.map(n => sumValue += n)
    console.log(sumValue);
    return sumValue;
}

function average() { 
    console.log(this.sum() / this.length);
}

function even() { 
    console.log(this.filter(n => n % 2 === 0));
}

function odd() { 
    console.log(this.filter(n => n % 2 === 1));
}

Array.prototype.square = square;
Array.prototype.cube = cube;
Array.prototype.sum = sum;
Array.prototype.average = average;
Array.prototype.even = even;
Array.prototype.odd = odd;

const arr = [1, 2, 3, 4, 5];
arr.square();
arr.cube();
arr.average();
arr.sum();
arr.even();
arr.odd();
console.log(arr);