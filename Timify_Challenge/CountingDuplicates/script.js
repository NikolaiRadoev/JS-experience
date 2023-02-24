let count = 0;
function duplicateCount(text) {
  if (!text) {
    console.log(count);
    return;
  }
  text = text.toLowerCase();
  let last = text.slice(1, text.length);
  if (last.includes(text[0])) {
    count++;
    last = last.replaceAll(text[0], "");
  }
  return duplicateCount(last);
}
let text = "ABBA";
duplicateCount(text);
