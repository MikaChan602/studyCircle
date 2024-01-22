// 1. const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
    const a = { a: 'a' }
    const b = { b: 'b' }
    // const c = {...a, ...b}
    const c = Object.assign({},a,b)
    console.log('c',c);

// 2. const arry = ['aa','bb','cc','dd','ee','ff','gg']; のdd,ee,ffを新たな配列として返してください
const arry = ['aa','bb','cc','dd','ee','ff','gg'];

let arryNew = []
arry.forEach((value)=>{
    if(value === 'dd' || value === 'ee' || value === 'ff'){
        return arryNew.push(value)
    }
})
console.log('arrNew', arryNew);