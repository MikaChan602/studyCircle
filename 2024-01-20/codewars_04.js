// Howard
// hard
// [Valid Braces from Howard](https://www.codewars.com/kata/5277c8a221e209d3f6000b56)

function validBraces(braces){
    let strArr = [];
    // console.log('初始arr', braces);
    // 字典法
    let pairs = {
        '(':')',
        '[':']',
        '{':'}'
    }

    // 堆疊法
    for(let i = 0 ; i < braces.length; i++){
        if(braces[i] === '(' || braces[i] === '[' || braces[i] === '{'){
            strArr.push(braces[i])
            // console.log('推進ARR',strArr);
        }else if(braces[i] === ')' || braces[i] === ']' || braces[i] === '}'){
            // 說明下面這段
            // 1. 如果stack是空的，代表從來沒推進去過開括號
            // 2. 如果不是開括號拿出strArr中的最後一個值去比對現在這個壁括號是否為一對

            if(strArr.length === 0 || pairs[strArr.pop()] !== braces[i]){
                return false
            }
        }
    }
    return strArr.length === 0;
}


module.exports = validBraces


// const result = validBraces(strE);
// console.log('results',result);
// TODO:規則
// 1. 括號的總數如果不是偶數也false
// 2. 有分左右的括號，一開始是右的或結尾是左的直接 false
// 3. 若左右對稱的括號中間有單獨的左或右也直接false => 這要怎麼判斷??