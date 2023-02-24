function wave(text) {
  let output = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      output.push(text.substr(0, i) + text[i].toUpperCase() + text.substr(i+1));
    }
  }
  console.log(output);
}

wave("one more");
