// Carolyn
// Submiited
// [Take a Ten Minutes Walk from Carolyn](https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript)


function isValidWalk(walk) {
    if(walk.length !== 10) return false; 
    // counter
    let n = 0; // 北 正
    let s = 0; // 南 負
    let e = 0; // 東 正
    let w = 0; // 西 負
    walk.forEach((value) =>{
        if(value === 'n'){
            n++
        }else if (value === 's'){
            s--
        }else if (value === 'e'){
            e++
        }else if ( value === 'w'){
            w--
        }
    })
    

    return n + s === 0 && e + w === 0 ? true : false
  }

const arr1 = ['n','s','n','s','n','s','n','s','n','s']  // 10minutes
const arr2 = ['w','e','w','e','w','e','w','e','w','e','w','e']

const Value1 = isValidWalk(arr2)
console.log('value1',Value1);