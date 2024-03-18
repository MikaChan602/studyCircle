// Mika
// Submitted
// [Sum of Digits / Digital Root from Mika](https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript)
function digitalRoot(n) {
    if(n < 10){
        return n
    }
    const initValue = n.toString()
    let numArr = [...initValue]
    let numLen = n.toString().length; // 轉str type 和計算str長度
    let sum = 0;
  
    while(numLen > 1){
      sum = 0;
      numArr.forEach((value)=>{
        sum += parseInt(value,10);
      })
      numLen = sum.toString().length;
      const newValue = sum.toString();
      numArr = [...newValue];
    }
    return sum
  }

  module.exports = digitalRoot



  // Balkoth解答的寫法????看不懂
  // function digital_root(n) {
  //   return (n - 1) % 9 + 1;
  // }