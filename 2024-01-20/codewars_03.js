// Emma 
// Submitted
// [Which are in? from Emma](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

function inArray(array1,array2){
    let arr = []
    array1.forEach((value1)=>{
        const regExp = new RegExp(value1)
        array2.forEach((value2) =>{
            if(regExp.test(value2)){
                arr.push(value1)
            }
        })
    })
    const newArr = [...new Set(arr)]
    newArr.sort()
    return newArr
}

module.exports = inArray
