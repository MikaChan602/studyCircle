// 各種類型的todolist的原型

class List {
  constructor(bindDom, inputDom) {
    this.bindDom = bindDom; // 傳入綁定bindDom
    this.inputDom = inputDom; // 傳入應該綁定的input
  }
  list = [];
  totalList = ""; // 串接列表
  // 標準物件格式
  listObject = {
    content: "",
    time: "",
    type: "",
  };
  // 創建時間
  createdTime() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const HH = today.getHours();
    const MM = today.getMinutes();
    const SS = today.getSeconds();
    const MS = today.getUTCMilliseconds();
    const fullDate = `${year}-${month}-${day}`;
    const currentTime = `${HH}:${MM}:${SS}:${MS}`;
    const current = `${fullDate}  ${currentTime}`;
    return current;
  }

  deleteItem(key) {
    const id = key.id - 1;
    this.list.splice(id, 1);
    let li = key.parentNode;
    li.parentNode.removeChild(li);
    console.log("刪除後陣列", this.list);
  }
  loopList() {
    // TODO: 如何刪除重複的內容
    // this.list.forEach((value)=>{
    //     this.totalList += value.con  tent;
    //     this.bindDom.innerHTML = this.totalList;
    // })
    const lastItem = this.list.length - 1;
    this.totalList += this.list[lastItem].content;
    this.bindDom.innerHTML = this.totalList;
    this.listObject.time = this.createdTime();
    this.listObject.type = selectedId;
    console.log("迴圈抓的陣列", this.list);
  }
  //   loop() {
  //     this.list.forEach((value) => {
  //       const bindData = document.getElementById("#bindData");
  //       bindData.innerHTML = "";
  //       this.totalList += value.content;
  //       this.bindDom.innerHTML = this.totalList;
  //     });
  //   }
}

// Normal
class Normal extends List {
  createNew() {
    const value = this.inputDom.value;
    if (value === "") {
      alert("輸入值不可為空");
      return false;
    } else {
      // this.list.push(value);
      const key = this.list.length + 1;
      const btn = `<button type="button" class="btn btn-danger" onclick="newList.deleteItem(this)">刪除</button>`;
      const content = `<li id=${key}>${value} ${btn}</li>`;
      const time = this.createdTime();

      const results = {
        content: content,
        time: time,
        type: selectedId,
      };
      this.list.push(results);
      console.log(this.list);
      return true;
    }
  }
}

// class Work extends List {
//   createNew() {
//     const value = this.inputDom.value;
//     // this.list.push(value);
//     const key = this.list.length + 1;
//     const btn = `<button type="button" class="btn btn-danger" onclick="newList.deleteItem(${key})">工作完成</button>`;
//     const content = `<li id=${key}>${value} ${btn}</li>`;
//     const time = this.createdTime();
//     const results = {
//       content: content,
//       time: time,
//     };
//     this.list.push(results);
//     console.log(this.list);
//   }
// }

// 包裝
function createList(listTarget, inputTarget) {
  return new Normal(listTarget, inputTarget);
}

// function createWorkList(listTarget, inputTarget) {
//   return new Work(listTarget, inputTarget);
// }

// 第一個TODOLIST instance
const listTarget = document.getElementById("bindData");
const inputTarget = document.getElementById("inputData");
const newList = createList(listTarget, inputTarget); // 創建實例 instance
// const workList = createWorkList();
// newList.createdTime();
function getInputData() {
  newList.createNew();
  newList.loopList(newList.createNew());
}

let selectedId = "normal"; // 處理類別
function getValue(thisValue) {
  selectedId = thisValue.value;
  console.log(selectedId);
}

// 要把li 連接在一起
// 想要的資料結構
// TODO:
// 1. 創建時間
// 2. 內容 content
// 3. id
