// このファイルはドイツ選択時のオープニング処理スクリプトです
// このファイルでの残タスク一覧
/* 
・シナリオを書く
・話し相手の立ち絵用意
・キャラ選択処理をOP-Skip時でもうまくいくように書く: 2024-12-11 Cleared
*/
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
let currentOpeningIndex = 0;
const modalOpening = document.getElementById('GER-modal-opening');
const handleClick = function() {
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
    console.log("テキストコンテナが見つかりません");
    alert("テキスト更新で意図しないバグが発生しました。製作者に報告してくれると助かります");
  }
};

modalOpening.addEventListener('click', handleClick);

function byeOpening() {
  console.log("Opening終了");
  modalOpening.removeEventListener('click', handleClick); // イベントリスナーを解除
  modalOpening.classList.add('fadeout'); // フェードアウト開始
  setTimeout(function() { 
    modalOpening.style.display = "none"; 
  }, 1000);
  setTimeout(function() {
    const modalOpeningRoom = document.getElementById("GER-modal-opening-room");
    modalOpeningRoom.style.display = "block";
    modalOpeningRoom.classList.add('fadein');
  }, 1000); // このモーダルが消えるのと同時にフェードイン開始
}



// OP2(Room)
const opening2TextArray = [
  "aaa",
  "bbb",
  "ccc",
  "ddd",
  "eee",
  "fff",
  "ggg",
  "hhh",
  "iii",
  "jjj",
  "kkk",
  "lll",
  "mmm",
  "nnn"
] 
let currentOpening2Index = 0
const modalOpening2 = document.getElementById('GER-modal-opening-room');
const handleClick2 = function(){
  const textArea = document.getElementById('GER-opening-room-text');
  if (textArea) {
    textArea.textContent = opening2TextArray[currentOpening2Index];
    // 話し相手の立ち絵表示
    if (currentOpening2Index === 5) {
      document.getElementById('opening-room-character').style.display = "block";
    } 
    // キャラクター選択を有効化
    if (currentOpening2Index === 8) {
      document.body.style.overflow = "hidden"; // スクロールバー無効化しないと画面変になる
      document.getElementById('GER-modal-character-select').style.display = "block";
      document.getElementById('GER-modal-character-select').classList.add('fadein');
      setTimeout(function(){
        document.body.style.overflow = ""; // 選択モーダル見えたらスクロールバー表示してもいいよ
      }, 800);
    } 
    // インデックスを次に進める
    if (currentOpening2Index + 1 <= opening2TextArray.length) {
        currentOpening2Index += 1; // 次のインデックスに進む
        if (window.getComputedStyle(document.getElementById('GER-modal-game')).display === "block") {
          document.getElementById('GER-modal-game').style.display = "none";
        } // 計算済みのスタイルを取得 これでスキップしなかったときもgame-modalがなくなるからOP2->OP3への移行時に映らない
      } else {
        byeOpening2(); // 最後ならこのモーダルとのお別れ処理
      }
  } else {
    console.log("テキストコンテナが見つかりません")
    alert("テキスト更新で意図しないバグが発生しました。製作者に報告してくれると助かります")
  }
};

modalOpening2.addEventListener('click', handleClick2);

function byeOpening2() {
  console.log("Opening2終了");
  modalOpening2.removeEventListener('click', handleClick2);
  document.getElementById('GER-modal-opening-room').classList.add('fadeout'); // これだとフェードアウト中の1秒間イベントリスナー続く
  setTimeout(function(){ 
    document.getElementById('GER-modal-opening-room').style.display = "none"; 
  }, 1000);
  setTimeout(function(){
    document.getElementById("GER-modal-opening-rocket").style.display = "block";
    document.getElementById("GER-modal-opening-rocket").classList.add('fadein');
  }, 1000); // このモーダルが消えるのと同時にフェードイン開始
}

// OP3(Launch)
const opening3TextArray = [
  "ccc",
  "ddd",
] 
let currentOpening3Index = 0
const modalOpening3 = document.getElementById('GER-modal-opening-rocket');
const handleClick3 = function(){
  const textArea = document.getElementById('GER-opening-rocket-text');
  if (textArea) {
    textArea.textContent = opening3TextArray[currentOpening3Index];
    // インデックスを次に進める
    if (currentOpening3Index + 1 <= opening3TextArray.length) {
        currentOpening3Index += 1; // 次のインデックスに進む
      } else {
        byeOpening3(); // 最後ならこのモーダルとのお別れ処理
      }
  } else {
    console.log("テキストコンテナが見つかりません")
    alert("テキスト更新で意図しないバグが発生しました。製作者に報告してくれると助かります")
  }
};

modalOpening3.addEventListener('click', handleClick3);

function byeOpening3() {
  console.log("Opening3終了");
  modalOpening3.removeEventListener('click', handleClick3);
  document.getElementById('GER-modal-opening-rocket').classList.add('fadeout'); // これだとフェードアウト中の1秒間イベントリスナー続く
  setTimeout(function(){ 
    document.getElementById('GER-modal-opening-rocket').style.display = "none"; 
  }, 1000);
  setTimeout(function(){
    document.getElementById("GER-modal-game").style.display = "block";
    document.getElementById("GER-modal-game").classList.add('fadein');
  }, 1000); // このモーダルが消えるのと同時にフェードイン開始
  // ローカルストレージから値を取得
  const hasSeenGER = localStorage.getItem("hasSeenGER");
  if (hasSeenGER === "true") {
    // Good Player :)
    console.log("知っています: ドイツのオープニング - 複数回目");
  } else {
    localStorage.setItem("hasSeenGER", "true");
    console.log("記録しました: ドイツのオープニング - 読了");
  }
  const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
  if (hasSeenTutorial === "true") {
    console.log("チュートリアルを削除");
    document.getElementById("game-tutorial").style.display = "none";
  }
}