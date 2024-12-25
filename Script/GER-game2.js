const decreasePersonnelGER2 = function(){
  // 人員を減らすボタンの処理
  const countElement = document.getElementById("GER-personnel-count2");
  const decreaseButton = document.getElementById("GER-personnel-decrease2");
  const increaseButton = document.getElementById("GER-personnel-increase2");
  // 現在の人員を取得
  let count = parseInt(countElement.textContent, 10);
  // 人員を10減らす
  count = count - 10;
  countElement.textContent = count;
  // 一定の範囲内になるように
  if (count <= 30) {
    decreaseButton.style.visibility = "hidden"; // レイアウト計算を保ったまま非表示
  }
  if (count < 90) {
    increaseButton.style.visibility= "visible" // 表示
  }
};
const increasePersonnelGER2 = function(){
  // 人員を増やすボタンの処理
  const countElement = document.getElementById("GER-personnel-count2");
  const decreaseButton = document.getElementById("GER-personnel-decrease2");
  const increaseButton = document.getElementById("GER-personnel-increase2");
  // 現在の人員を取得
  let count = parseInt(countElement.textContent, 10);
  // 人員を10増やす
  count = count + 10;
  countElement.textContent = count;
  // 一定の範囲内になるように
  if (count > 30) {
    decreaseButton.style.visibility = "visible" // 表示
  }
  if (count >= 90) {
    increaseButton.style.visibility = "hidden"; // 非表示
  }
};

// ボタンにイベントリスナーを追加
document.getElementById("GER-personnel-decrease2").addEventListener("click", decreasePersonnelGER2);
document.getElementById("GER-personnel-increase2").addEventListener("click", increasePersonnelGER2);