// Emma
// [Which are in? from Emma](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

// const a1 = ["arp", "live", "strong"]

// const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

const a1 = ["tarp", "mice", "bull"]

const b1 = ["live", "strong", "arp"]

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]
function inArray(array1,array2){
    let arr = []
    array1.forEach((value1)=>{
        const regExp = new RegExp(value1)
        // console.log('regExp',regExp);
        array2.forEach((value2) =>{
            // console.log('regExp Inner',regExp );
            // console.log('a2,val',val);
            // console.log('test', regExp.test(val));
            if(regExp.test(value2)){
                arr.push(value1)
            }
        })
    })
    const newArr = [...new Set(arr)]
    newArr.sort()
    return newArr
}


const results = inArray(b1,a2)

console.log('results', results);

