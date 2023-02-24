function order(text) { 
    let output = [];
    const arr = text.split(' ');
    for (let i = 1; i <= arr.length; i++) {
        for (const word in arr) { 
            if (arr[word].includes(`${i}`)) { 
                output.push(arr[word]);
                break;
            }
        }
    }
console.log(output.toString().replaceAll(',', ' '));
}

order('is2 Thhi1s T4est 3a');