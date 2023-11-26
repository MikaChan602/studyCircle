class List {
  constructor(bindDom, inputDom) {
    this.bindDom = bindDom; // 傳入綁定bindDom
    this.inputDom = inputDom; // 傳入應該綁定的input
  }

  deleteBtn(node) {
    const deleteNode = node.target.parentNode.parentNode;
    deleteNode.remove();
  }
}

// Normal
class Normal extends List {
  createNew() {
    const value = this.inputDom.value;
    if (value === "") {
      alert("輸入值不可為空");
    } else {
      // 操作DOM
      let value = document.getElementById("inputData").value;
      // checkbox狀態
      const category = document.createElement("p");

      // to-do-list狀態
      const li = document.createElement("li");
      li.className = "row";
      // 第一個box
      const innerTextBox = document.createElement("div");
      innerTextBox.className = "col-1";
      innerTextBox.appendChild(category).append("基本");
      li.appendChild(innerTextBox);
      // 第二個box
      const textInput = document.createElement("div");
      textInput.className = "col-9";
      const text = document.createTextNode(value);
      textInput.appendChild(text);
      // 第三個box
      const btnDiv = document.createElement("div");
      btnDiv.className = "col-2";
      // 創建按鈕組件
      const btn = document.createElement("button");
      btn.className = "btn btn-danger";
      btn.addEventListener("click", this.deleteBtn, false);
      btn.appendChild(document.createTextNode("x"));
      // 將按鈕組件加入div中
      btnDiv.appendChild(btn);

      li.appendChild(textInput);
      li.appendChild(btnDiv);
      this.bindDom.appendChild(li);
    }
  }
}

class Work extends List {
  createNew() {
    const value = this.inputDom.value;
    if (value === "") {
      alert("輸入值不可為空");
    } else {
      // 操作DOM
      let value = document.getElementById("inputData").value;

      // to-do-list狀態
      const li = document.createElement("li");
      li.className = "row";
      // 第一個box
      const innerTextBox = document.createElement("div");
      const category = document.createElement("p");
      innerTextBox.appendChild(category).append("工作");
      innerTextBox.className = "col-1";
      li.appendChild(innerTextBox);
      // 第二個box
      const textInput = document.createElement("div");
      textInput.className = "col-9";
      const text = document.createTextNode(value);
      textInput.appendChild(text);
      // 第三個box
      const btnDiv = document.createElement("div");
      btnDiv.className = "col-2";
      // 創建按鈕組件
      const btn = document.createElement("button");
      btn.className = "btn btn-secondary";
      btn.addEventListener("click", this.deleteBtn, false);
      btn.appendChild(document.createTextNode("x"));
      // 將按鈕組件加入div中
      btnDiv.appendChild(btn);

      li.appendChild(textInput);
      li.appendChild(btnDiv);
      this.bindDom.appendChild(li);
    }
  }
}

class Sport extends List {
  createNew() {
    const value = this.inputDom.value;
    if (value === "") {
      alert("輸入值不可為空");
    } else {
      // 操作DOM
      let value = document.getElementById("inputData").value;
      // to-do-list狀態
      const li = document.createElement("li");
      li.className = "row";
      // 第一個box
      const innerTextBox = document.createElement("div");
      const category = document.createElement("p");
      innerTextBox.appendChild(category).append("運動");
      innerTextBox.className = "col-1";
      li.appendChild(innerTextBox);
      // 第二個box
      const textInput = document.createElement("div");
      textInput.className = "col-9";
      const text = document.createTextNode(value);
      textInput.appendChild(text);
      // 第三個box
      const btnDiv = document.createElement("div");
      btnDiv.className = "col-2";
      // 創建按鈕組件
      const btn = document.createElement("button");
      btn.className = "btn btn-warning";
      btn.addEventListener("click", this.deleteBtn, false);
      btn.appendChild(document.createTextNode("x"));
      // 將按鈕組件加入div中
      btnDiv.appendChild(btn);

      li.appendChild(textInput);
      li.appendChild(btnDiv);
      this.bindDom.appendChild(li);
    }
  }
}

// 包裝
function createList(listTarget, inputTarget) {
  const selectedItem = document.getElementById("selector").value;
  console.log("進入function", selectedItem);
  if (selectedItem === "normal") {
    return new Normal(listTarget, inputTarget).createNew();
  } else if (selectedItem === "work") {
    return new Work(listTarget, inputTarget).createNew();
  } else if (selectedItem === "sport") {
    return new Sport(listTarget, inputTarget).createNew();
  }
}

// 第一個TODOLIST instance
const listTarget = document.getElementById("bindData");
const inputTarget = document.getElementById("inputData");

function getInputData() {
  createList(listTarget, inputTarget);
  // 清除輸入值
  const inputClearNode = document.getElementById("inputData");
  inputClearNode.value = "";
}
