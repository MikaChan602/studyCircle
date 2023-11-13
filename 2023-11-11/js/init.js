// 新建一個物件 or Class(ES6後新方法)
function Dog(name){
    const dogName = name;
    function bark(){
        console.log('Bark!');
    }
}

// 創建實例
const kiwawa = new Dog('小吉');
const shibainu = new Dog('柴柴');

// 判斷吉娃娃和柴犬是否來自同一個原型
console.log("===============判斷吉娃娃和柴犬是否來自同一個原型=====================");
// console.log(`kiwawa.__proto__ === shibainu.__proto__ 判斷結果：${kiwawa.__proto__ === shibainu.__proto__}`); // true
// console.log(`kiwawa.__proto__ === Dog.prototype 判斷結果：${kiwawa.__proto__ === shibainu.__proto__}`); 
// // true
// console.log(`shibainu.__proto__ === shibainu.__proto__ 判斷結果：${shibainu.__proto__ === shibainu.__proto__}`); // true

// console.log(shibainu.__proto__.dogName === shibainu.__proto__.dogName);