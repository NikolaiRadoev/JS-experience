function beggarsSum(coins, beggarsCount) { 
    const sum = Array(beggarsCount).fill(0);
    coins.forEach((value, index) => {
        sum[index % beggarsCount] += value;
    });
    console.log(sum);
    return sum;
}

beggarsSum([1, 2, 3, 4, 5], 6);

/*const n = [0, 0, 0, 0];
n[3%n.length] += 9;
console.log(n);*/