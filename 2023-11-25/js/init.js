// 各種類型的todolist的原型

class List {
  constructor(bindDom, inputDom) {
    this.bindDom = bindDom; // 傳入綁定bindDom
    this.inputDom = inputDom; // 傳入應該綁定的input
  }

  deleteItem(key) {
    const id = key.id - 1;
    this.list.splice(id, 1);
    let li = key.parentNode;
    li.parentNode.removeChild(li);
  }
}

// Normal
class Normal extends List {
  createNew() {
    const value = this.inputDom.value;
    if (value === "") {
      alert("輸入值不可為空");
      return false;
    } else {
      // 操作DOM
      let value = document.getElementById('inputData').value;
      // checkbox狀態
      const chkBox = document.createElement('input');
      chkBox.type = 'checkbox';
      chkBox.className = 'form-check-label';

      // to-do-list狀態
      const li = document.createElement('li'); 
      li.className='row';
      // 第一個box
      const innerTextBox = document.createElement('div');
      innerTextBox.className = 'col-1';
      innerTextBox.appendChild(chkBox);

      // function 抓check狀態
      innerTextBox.onclick = function(chk){
        const thisChk = chk.target;
        const status = chk.target.checked; // 抓狀態
        if(status){
          // console.log(thisChk);
          const parent = thisChk.parentNode;
          parent.classList.add('checked'); // 新增className
          // console.log(parent);
        }else{
          const parent = thisChk.parentNode;
          parent.classList.remove('checked'); // 新增className
        }
      } 
      li.appendChild(innerTextBox);
      // 第二個box
      const textInput = document.createElement('div');
      textInput.className = 'col-9';
      const text = document.createTextNode(value);
      textInput.appendChild(text);
      // 第三個box
      const btnDiv = document.createElement('div');
      btnDiv.className = 'col-2';
      // 創建按鈕組件
      const btn = document.createElement('button');
      btn.className = 'btn btn-danger';
      btn.onclick=function(node){
          console.log('刪除');
          const deleteNode = node.target.parentNode.parentNode;
          deleteNode.remove();
          console.log(deleteNode);
      }
      btn.appendChild(document.createTextNode('x'));
      // 將按鈕組件加入div中
      btnDiv.appendChild(btn);
      




      // btn.createTextNode('刪除');
      // const btn = `<button type="button" class="btn btn-danger" onclick="newList.deleteItem(this)">刪除</button>`;
      
      // li.appendChild(text);
      li.appendChild(textInput);
      li.appendChild(btnDiv);
      this.bindDom.appendChild(li);
      return true;
    }
  }
}

// class Work extends List {
//   createNew() {
//     const value = this.inputDom.value;
//     this.list.push(value);
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
  // 清除輸入值
  const inputClearNode = document.getElementById('inputData');
  inputClearNode.value = '';
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


