function stripComments(text, commentSymbols) { 
    for (let i = 0; i < commentSymbols.length; i++) {
        const element = commentSymbols[i];
        text = text.replace(new RegExp(`${element}.*`), "").trim();
    }
    console.log(text);
}

stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);

// let text = "apples, pears # and bananas\ngrapes\nbananas !apples";
// text = text.replace(/#.*/, "");
// text = text.replace(/!.*/, "");
// console.log(text);