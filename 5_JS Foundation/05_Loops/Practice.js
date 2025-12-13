// Sum of N numbers

let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("Sum =", sum);


// table of a number

let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}


// Reverse a number

let number = 1234;
let reverse = 0;

while (number > 0) {
  let digit = number % 10;
  reverse = reverse * 10 + digit;
  number = Math.floor(number / 10);
}

console.log("Reversed number:", reverse);
