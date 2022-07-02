/*
function myFunction(a) {
  const result = a + 2;
  return result;
}

function calcsum(a, b, c) {
  const result = a + b + c;
  return result;
}

function myFunction() {
  console.log('こんにちは');
}

function myFunction(a, b) {
  if (a >= 100) {
    return a;
  }
  return b;
}
*/

//関数の宣言
function calcFunction(price, tax) {
  const result = price + price * tax;
  return result;
}
//関数を実行し、戻り値をmyResultに代入する
const myResult = calcFunction(100, 0.1);
console.log(myResult);

//引数が不要な関数であれば、()内には何も記述しない
function myFunction() {
  console.log('こんにちは');
}

myFunction();