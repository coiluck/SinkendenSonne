const endingTextArray = [
  "本国からの伝達: ",
  "内戦やばいね",
  "すでにどこそこは動員し始めた",
]
let end1storyIndex = 0;
const end1Click = function() {
  const textArea = document.getElementById("GER-ending1-text");
  if (textArea) {
    textArea.textContent = endingTextArray[end1storyIndex];
    // インデックスを次に進める
    if (end1storyIndex + 1 <= endingTextArray.length) {
        end1storyIndex += 1;
    } else {
      // 最後ならボタン表示
      document.getElementById("GER-modal-end1").removeEventListener('click', end1Click);
      document.getElementById("GER-endbutton-1").addEventListener("click", end1to2);
      document.getElementById("GER-endbutton-1").classList.remove("no-display");
      document.getElementById("GER-endbutton-1").classList.add("fast-fadein");
      document.getElementById("GER-endbutton-1").textContent = "本国がまずいぞ...";
    }
  } else {
    console.log("テキストコンテナが見つかりません");
    alert("テキスト更新で意図しないバグが発生しました。製作者に報告してくれると助かります");
  }
};

document.getElementById("GER-modal-end1").addEventListener('click', end1Click);

const end1to2 = function() {
  console.log("終了 - 共通エンディング");
  document.getElementById("GER-endbutton-1").removeEventListener("click", end1to2);
  // テキストエリアをfade-out-in
}