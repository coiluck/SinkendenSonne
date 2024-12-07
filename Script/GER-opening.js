const openingTextArray = [
  "ここは帝都 ゲルマニア",
  "――世界で最も強大な国の首都",
  "我々は成し遂げた。カエサルもナポレオンもできなかった、ヨーロッパの支配を。",
  "親衛隊の統治するフランス北部からモスコーヴィエン国家弁務官区の置かれたモスクワまで、すべてアーリア人の土地となった。",
  "――世界で最も壮大な外観と規模の都市",
  "総統閣下はシュペーアをゲルマニア計画の統括責任者に任命した。",
  "シュペーアは適任だった。壮麗な凱旋門や総統官邸は、見る者に世界の覇者を自覚させるだろう。",
  "そして――世界で最も、破滅に近い場所",
  "千年帝国を築いた総統閣下はもう長くない。",
  "ボルマン、ゲッベルス、ハイドリヒ――彼らは「次の座」を狙っている。",
  "...",
  "",
  "",
] // 前史についてなど。うまく書いておいてね、未来の僕。
let currentOpeningIndex = 0
const modalOpening = document.getElementById('GER-modal-opening');
modalOpening.addEventListener('click', function() {
  // 現在のテキストを更新
  const textArea = document.getElementById('GER-opening-text');
  if (textArea) {
    textArea.textContent = openingTextArray[currentOpeningIndex];
    // インデックスを次に進める
    if (currentOpeningIndex + 1 <= openingTextArray.length) {
        currentOpeningIndex += 1; // 次のインデックスに進む
      } else {
        byeOpening(); // 最後ならこのモーダルとのお別れ処理
      }
  } else {
    console.log("テキストコンテナが見つかりません")
    alert("テキスト更新で意図しないバグが発生しました。製作者に報告してくれると助かります")
  }
});

function byeOpening() {
  console.log("Opening終了");
  document.getElementById('GER-modal-opening').classList.add('fadeout'); // これだとフェードアウト中の1秒間イベントリスナー続く
  setTimeout(function(){ 
    document.getElementById('GER-modal-opening').style.display = "none"; 
  }, 1000);
  setTimeout(function(){
    document.getElementById("GER-modal-opening-room").style.display = "flex";
    document.getElementById("GER-modal-opening-room").classList.add('fadein');
  }, 1000); // このモーダルが消えるのと同時にフェードイン開始
}
