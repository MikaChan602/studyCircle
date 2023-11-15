console.log('Hello 11-25')

class List {
    constructor(bindDom,inputDom){
        this.bindDom = bindDom; // 傳入綁定bindDom
        this.inputDom = inputDom; // 傳入應該綁定的input
    }

    list = [];
    totalList = ''; // 串接列表
    // 標準物件格式
    listObject={
        content:'',
        time:''
    }
    // 固定產出格式
    createObject(dom,time){
        return{
            content:dom,
            time:time
        }
    }
    // 創建時間
    createdTime(){
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();
        const HH = today.getHours();
        const MM = today.getMinutes();
        const SS = today.getSeconds();
        const MS = today.getUTCMilliseconds();
        const fullDate = `${year}-${month}-${day}`;
        const currentTime = `${HH}:${MM}:${SS}:${MS}`
        const current = `${fullDate}  ${currentTime}`;
    }
    deleteItem(key){
        const id = key;
        this.list.splice(0,1);
    }
    createNew(){
        const value = this.inputDom.value;
        // this.list.push(value);
        const key = this.list.length -1;
        const btn = `<button type="button" class="btn btn-danger" onclick="newList.deleteItem(${key})">刪除</button>`
        const content = `<li id=${key}>${value} ${btn}</li>`
        const time = this.createdTime();
        const results = {
            content:content,
            time:time
        }
        this.list.push(results);
        console.log(this.list);
    }
    loopList(){
        this.inputDom.innerHTML=''; // TODO: 如何刪除重複的內容
        this.list.forEach((value)=>{
            this.totalList += value.content;
            this.bindDom.innerHTML = this.totalList;
        })
    }
}

// 第一個TODOLIST instance
const listTarget = document.getElementById('bindData')
const inputTarget = document.getElementById('inputData')
const newList = new List(listTarget,inputTarget); // 創建實例 instance
// newList.createdTime();
function getInputData(){
    newList.createNew();
    newList.loopList();
}
// 要把li 連接在一起
// 想要的資料結構
// TODO:
// 1. 創建時間
// 2. 內容 content
// 3. id