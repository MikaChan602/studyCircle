
// 各種類型的todolist的原型
class Card {
    static defaultDom = document.getElementById('cardWrapper');
    constructor(settingObj){
        this.title = settingObj.title;
    }
    /** 創建一個to-do-list空白卡片 */
    create(){
        const templateCard =
        `<div class="card col-4">
            <h3>${this.title}</h3>
            <div class="addList">
                <label for="inputData">新增代辦事項</label>
                <input id="inputData" type="text" class="form-control">
                <button type="button" class="btn btn-primary" onclick="getInputData()">新增</button>
            </div>
            <ul id="bindData">
            </ul>
        </div>`
        let newItem = `<a>test</a>` 
        newItem = encodeURI(newItem);
        // Card.defaultDom.innerHTML = templateCard;
        Card.defaultDom.append(newItem)
    }
    /** 處理得到的input參數*/ 
    getInputData(){
        newList.createNew();
        newList.loopList();
    }
}

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
    loopList(){
        this.inputDom.innerHTML=''; // TODO: 如何刪除重複的內容
        this.list.forEach((value)=>{
            this.totalList += value.content;
            this.bindDom.innerHTML = this.totalList;
        })
    }
}

// Normal
class Normal extends List {
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
}

class Work extends List {
    createNew(){
        const value = this.inputDom.value;
        // this.list.push(value);
        const key = this.list.length -1;
        const btn = `<button type="button" class="btn btn-danger" onclick="newList.deleteItem(${key})">完成</button>`
        const content = `<li id=${key}>${value} ${btn}</li>`
        const time = this.createdTime();
        const results = {
            content:content,
            time:time
        }
        this.list.push(results);
        console.log(this.list);
    }
}


// 包裝
function createList(listTarget,inputTarget){
    return new Normal(listTarget,inputTarget);
}

function createWorkList(listTarget,inputTarget){
    return new Work(listTarget,inputTarget);
}

const cardSetting = {
    title: '測試'
}

function createCard(cardSetting){
    return new Card(cardSetting);
}

// 共用取input值得function
function getValue(dom){
    const input = dom;
    const value = input.value;
    const id = input.id;

    return {
        value: value,
        id:id
    }
}

// 創建一張新卡
function newCard(){
    const newDom = document.getElementById('cardName');
    const valueObj = getValue(newDom);
    console.log(valueObj);
    const cardSetting = {
        title: valueObj.value
    }
    const card = createCard(cardSetting);
    card.create();
}



// 第一個TODOLIST instance
// const listTarget = document.getElementById('bindData')
// const inputTarget = document.getElementById('inputData')
// const newList = createList(listTarget,inputTarget); // 創建實例 instance
// const workList = createWorkList(cardSetting)
// const card = createCard(cardSetting)
// card.create()
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