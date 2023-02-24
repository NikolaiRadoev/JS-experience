function moveZeros(arr) { 
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === 0 || element === '0') { 
            output.push(arr.splice(i, 1));
        }
    }
    console.log(arr.concat(...output));
}

moveZeros([null, false, '0', 9, 0])