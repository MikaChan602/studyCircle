// Carolyn
// Submiited
// [Take a Ten Minutes Walk from Carolyn](https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript)


// 第一版
// function isValidWalk(walk) {
//     if(walk.length !== 10) return false; 
//     // counter
//     let n = 0; // 北 正
//     let s = 0; // 南 負
//     let e = 0; // 東 正
//     let w = 0; // 西 負
//     walk.forEach((value) =>{
//         if(value === 'n'){
//             n++
//         }else if (value === 's'){
//             s--
//         }else if (value === 'e'){
//             e++
//         }else if ( value === 'w'){
//             w--
//         }
//     })
    

//     return n + s === 0 && e + w === 0 ? true : false
//   }

// 嘗試使用reduce改寫
  function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    const counts = walk.reduce((acc, direction) => {
      acc[direction]++;
    //   console.log('direction',direction,acc[direction]); 
      return acc;
    }, { n: 0, s: 0, e: 0, w: 0 });
    console.log(counts);
    return counts.n === counts.s && counts.e === counts.w;
  }

// 網友:SammyUN解答很有趣， 直接算每一個的長度做判斷滿直覺簡單
// function isValidWalk(walk) {
//     //insert brilliant code here
//     const north = walk.filter(item => item === 'n').length;
//     const south = walk.filter(item => item === 's').length;
//     const east = walk.filter(item => item === 'e').length;
//     const west = walk.filter(item => item === 'w').length;
    
//     return walk.length === 10 && north === south && west === east;
//   }

const arr1 = ['n','s','n','s','n','s','n','s','n','s']  // 10minutes
const arr2 = ['w','e','w','e','w','e','w','e','w','e','w','e']

const Value1 = isValidWalk(arr1)
console.log('value1',Value1);
