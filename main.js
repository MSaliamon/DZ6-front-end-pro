
let array = [1, 5, "hello", true]

function sum(arr) {
    let result = 0;
    let count = 0;
    for (let elem of array) {
        if (typeof(elem) === "number") {
            result += elem;
            count++;
        }
    }
    console.log(result/count)
}

sum(array)

let number = Number(prompt("введіть число"));
let number2 = Number(prompt("введіть число"));
let znak = prompt("введіть знак");
doMath(number, number2, znak);
function doMath(a, b, z) {
  let result;
  switch (z) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*": 
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    case "%":
        result = a % b;
        break;
    case "^":
        result = a ** b;
        break;
  }
  console.log(result);
}

3
function fillArray() {

    const n = parseInt(prompt("Введіть довжину основного масиву:"));
  

    const m = parseInt(prompt("Введіть довжину внутрішніх масивів:"));
  
    const array1 = new Array(n);

    for (let i = 0; i < n; i++) {
      array1[i] = new Array(m);
      for (let j = 0; j < m; j++) {
        array1[i][j] = prompt(`Введіть значення для елемента (${i},${j}):`);
      }
    }
  
    return array1;
  }
  
 
  const array2 = fillArray();
  console.log(array2);


let text = prompt("Введіть текст");

let symbs = prompt("Введіть символи");
function dellSymbs(text, symbs) {
    Array.from(text).forEach(symb => {
        if (symbs.includes(symb)) {
            text = text.replaceAll(symb, "");
        }
    })
    return text;
}
console.log(dellSymbs(text, symbs));
