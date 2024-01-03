// Carolyn
// [Take a Ten Minutes Walk from Carolyn](https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript)

function isValidWalk(walk) {
    //insert brilliant code here
    let counter = 0;
    let previousValue = '';
    walk.forEach((value) =>{
      if(previousValue !==value){
        counter++;
        previousValue = value;
      }else{
        previousValue = value;
      }
      
    })
    return counter === 10 ? true : false
  }

const arr1 = ['n','s','n','s','n','s','n','s','n','s'] // 10minutes
const arr2 = ['n','n','n','s','n','s','n','s','n','s']

const Value1 = isValidWalk(arr1)
console.log('value1',Value1);