import "./styles.css";

const onClickedAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  const deleteTargetDiv = target.parentNode;
  const deleteTargetLi = deleteTargetDiv.parentNode;
  console.log(deleteTargetLi);
  document.getElementById("incomplete-list").removeChild(deleteTargetLi);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p作成
  const p = document.createElement("p");
  p.innerText = text;

  //完了button作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton);

    //完了リストに追加
    const addTargetDiv = completeButton.parentNode;
    const addTargetLi = addTargetDiv.parentNode;

    //TODO内容を取得
    const text = addTargetDiv.firstElementChild.innerText;
    console.log("text");
    console.log(text);
    //li以下を初期化
    addTargetLi.textContent = null;
    console.log(addTargetLi);

    //li生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p作成
    const p = document.createElement("p");
    p.innerText = text;

    //戻すbutton作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押させた戻すボタンの親タグを完了リストから削除
      const deleteTargetDiv = backButton.parentNode;
      const deleteTargetLi = deleteTargetDiv.parentNode;
      document.getElementById("complete-list").removeChild(deleteTargetLi);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTargetLi.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTargetLi);
  });

  //削除button作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton);
  });

  //divタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickedAdd());
