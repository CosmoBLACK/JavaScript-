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


//関数の定義
const calcSum = (a, b, c) => {
  const result = a + b + c;
  return result;
};
const myResult = calcSum(1, 2, 3);
console.log(myResult);

//関数の宣言
const myFunction1 = (a) => {
  return a + 2;
}
const myResult1 = myFunction1(1)
console.log(myResult1)

//関数の宣言(引数が１個の場合は括弧を省略できる)
const myFunction2 = a => {
  return a + 2;
}
const myResult2 = myFunction2(2)
console.log(myResult2)

//アロー関数内の処理が１行の場合は、{}とreturnを省略できる
const myFunction3 = a => a + 2;
const myResult3 = myFunction3(3)
console.log(myResult3)


function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}
//taxの引数を省略すると、初期値0.08が使用される
const result1 = calcFunction(100);
console.log(result1);
//taxの引数を指定すると、その値が使用される
const result2 = calcFunction(100, 0.1);
console.log(result2);


//不特定数の引数を受け取る関数を定義するには「...」を記述する
//calcSum()関数ではpricesに引数が配列として格納されている
function calcSum(...prices) {
  let result = 0;
  for (const value of prices) {
    result += value;
  }
  return result;
}
const result1 = calcSum(10, 20);
console.log(result1);


const myPrice = 100
if (myPrice >= 50) {
  alert('myPriceは50以上です');
} else if (myPrice >= 10) {
  alert('myPriceは10以上50未満です');
} else {
  alert('myPriceは10未満です');
}

if (true) {
  alert('Hello');
}

const randomNum = Math.random() * 10; //乱数×10
if (randomNum >= 5) {
  alert('randomNumは5以上')
} else {
  alert('randomNumは5未満')
}

const randomNum = Math.random() * 10;
//ブロック内の処理が1行だけの場合、{}は省略可能
if (randomNum >= 5) alert('randomNumは5以上');


const myFruit = 'りんご';
switch (myFruit) {
  case 'りんご':
    alert('りんごです');
    break;
  case 'みかん':
    alert('みかんです');
    break;
  default:
    alert('その他です');
    break;
}

const myFruit = 'りんご';
switch (myFruit) {
  case 'りんご':
  case 'みかん':
    alert('りんごかみかんです');
    break;
  default:
    alert('その他です');
}


for (let index = 0; index < 10; index++) {
  console.log(index);
}

let myNumber = 0;
while (myNumber < 10) {
  console.log(myNumber);
  myNumber += 1;
}


for (let index = 0; index > 10; index++) {
  if (index % 2 === 0) {
    //indexが偶数の場合、以降の処理はスキップ
    continue;
  }
  //奇数の場合のみ出力
  console.log(index);
}
//ループが終了したら実行
console.log('ループ終了');


const a = 10;
const b = 20;
console.log(a < b);
console.log(a > b);
*/
//長方形
const rectangle = document.querySelector('.rectangle');
//ボタンをクリックしたらonClickButton()を実行する
document.querySelector('.button').addEventListener('click', onClickButton);
//ボタンをクリックするたびにグラデーションが変わる
function onClickButton() {
  //0~359のランダムな数を取得
  const randomHue = Math.trunc(Math.random() * 360);
  //グラデーションの開始色と終了色の指定
  const randomColorStart = 'hsl(${randomHue}, 100%, 50%)';
  const randomColorEnd = 'hsl(${randomHue + 40}, 100%, 50%)';
  
  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}