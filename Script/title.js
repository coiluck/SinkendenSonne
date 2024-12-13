document.addEventListener('DOMContentLoaded', () => {
  // HTMLが読み込まれたら...
  // タイトル（日独）をフェードインで表示
  const titleJPN = document.getElementById('title-JPN');
  const titleGER = document.getElementById('title-GER');
  titleJPN.style.opacity = "0";
  titleGER.style.opacity = "0";
  setTimeout(function(){ 
    titleJPN.classList.add('fadein-title');
    titleGER.classList.add('fadein-title');
  }, 200);
  console.log("display title-text");
  if (window.innerWidth >= 1981) {
    alert("画面幅が大きすぎます。FHD以上の幅はレイアウトが崩れる可能性があります。Windowの幅を変更することをお勧めします");
  }
});

window.addEventListener('load', () => {
  // 全てのリソースが読み込まれた後に実行
  const startButton = document.getElementById('start-button');
  setTimeout(function(){
    startButton.style.display = "block"; // "見える化、ね"
    startButton.classList.add('fadein-title-button'); // "おしゃれの本質"
  }, 1200);
  // startボタンに下線を引く
  setTimeout(function(){
    startButton.classList.add('active');
  }, 3500);
  console.log("display start-button");
});

document.getElementById('start-button').addEventListener('click', event => {
  // startボタンが押されたら...
  const titleJPN = document.getElementById('title-JPN');
  const titleGER = document.getElementById('title-GER');
  const startButton = document.getElementById('start-button');
  // 文字全部フェードアウト
  titleJPN.classList.add('fadeout-title');
  titleGER.classList.add('fadeout-title');
  startButton.classList.add('fadeout-title');
  console.log("clear title-text");
  // 文字消えてから国家選択表示
  setTimeout(function(){
    const countrySection = document.getElementById('country-sections');
    const selectText = document.getElementById('select-text');
    const selectGER = document.getElementById('select-GER');
    const selectJPN = document.getElementById('select-JPN');
    countrySection.style.display = "flex";
    countrySection.classList.add('fadein');
    selectText.style.display = "block";
    selectText.classList.add('fadein');
    selectGER.style.display = "block";
    selectGER.classList.add('fadein');
    selectJPN.style.display = "block";
    selectJPN.classList.add('fadein');
    // 上の部分見づら過ぎておもろいw
    console.log("display country-section");
  }, 800);
});

document.getElementById('select-GER').addEventListener('click', function() {
  // ドイツが選択されたら...
  const confirmButton = document.getElementById('select-country-confirm')
  confirmButton.classList.remove('active'); // 一度引いた線を消して..
  confirmButton.style.display = "block"; // ボタン表示
  confirmButton.classList.add('fadein');
  confirmButton.textContent = "総統のために！" // ドイツのボタンに書き換え
  setTimeout (function(){
    confirmButton.classList.add('active');
  }, 500);
});
document.getElementById('select-JPN').addEventListener('click', function() {
  // 日本が選択されたら...
  const confirmButton = document.getElementById('select-country-confirm')
  confirmButton.classList.remove('active'); // 一度引いた線を消して..
  confirmButton.style.display = "block"; // ボタン表示
  confirmButton.classList.add('fadein');
  confirmButton.textContent = "天皇万歳！" // 日本のボタンに書き換え
  setTimeout (function(){
    confirmButton.classList.add('active');
  }, 500);
});

// ここでわけてからイベントリスナーでモーダルひとつひとつ結び付ければいい
document.getElementById('select-country-confirm').addEventListener('click', function() {
  // 国家決定ボタンが押されたら...
  const forWho = document.getElementById('select-country-confirm').textContent
  if (forWho === "総統のために！"){
    console.log("選択: ドイツ")
    setTimeout(function(){
      document.getElementById("GER-modal-opening").style.display = "flex";
      document.getElementById("GER-modal-opening").classList.add('fadein');
    }, 1000); // タイトルが消えるのと同時にフェードイン開始
    setTimeout(function(){
      const hasSeenGER = localStorage.getItem("hasSeenGER");
      if (hasSeenGER === "true") {
        // Skip表示
        console.log("感知しました: ドイツのオープニング - 複数回目");
        document.getElementById("skip-window").style.display = "block";
        document.getElementById("skip-window").classList.add('fadein');
      } else {
        console.log("感知しました: ドイツのオープニング - 初回");
      }
    }, 1500); // 少し遅れてSkipボタンを表示
  } else if (forWho === "天皇万歳！"){
    console.log("選択: 日本")
    setTimeout(function(){
      document.getElementById("JPN-modal-opening").style.display = "flex";
      document.getElementById("JPN-modal-opening").classList.add('fadein');
    }, 1000); // タイトルが消えるのと同時にフェードイン開始
  } else {
    console.log("選択した国が見つかりません")
    alert("国家選択で意図しないバグが発生しました。製作者に報告してくれると助かります")
  }
  document.getElementById("modal-title").classList.add('fadeout');
  setTimeout(function(){ 
    document.getElementById('modal-title').style.display = "none"; 
  }, 1000);
});

// Skipボタンの処理
const skipCansel = function(event){
  // イベントの伝播を防ぐ
  event.stopPropagation();
  // スキップをキャンセル
  console.log("選択しました: スキップしない");
  document.getElementById("skip-button").removeEventListener('click', skipButton); // イベントリスナーを解除
  document.getElementById("skip-cancel").removeEventListener('click', skipCansel); // イベントリスナーを解除
  document.getElementById("skip-window").classList.add('fadeout'); // フェードアウト開始
  setTimeout(function() { 
    document.getElementById("skip-window").style.display = "none"; 
  }, 1000);
}
const skipButton = function(event){
  // イベントの伝播を防ぐ
  event.stopPropagation();
  // スキップする場合
  console.log("選択しました: スキップする");
  document.getElementById("skip-button").removeEventListener('click', skipButton); // イベントリスナーを解除
  document.getElementById("skip-cancel").removeEventListener('click', skipCansel); // イベントリスナーを解除
  // 見えてるのはフェードアウト、それ以外は見えなくする
  document.getElementById("GER-modal-opening").classList.add('fadeout'); // フェードアウト開始
  document.getElementById("GER-modal-opening-room").style.display = "none";
  document.getElementById("GER-modal-opening-rocket").style.display = "none";
  setTimeout(function(){ 
    document.getElementById('GER-modal-opening').style.display = "none"; 
  }, 1000);
  // 選択画面を表示
  document.body.style.overflow = "hidden"; // スクロールバー無効化しないと画面変になる
  document.getElementById('GER-modal-character-select').style.display = "block";
  document.getElementById('GER-modal-character-select').classList.add('fadein');
  setTimeout(function(){
    document.body.style.overflow = ""; // 選択モーダル見えたらスクロールバー表示してもいいよ
  }, 800);
  // 選択画面の確定ボタンを押した後の挙動を変更（これが面倒なのよ）
  // うおおおおおおおお　上に表示してるだけだから全部消しちゃえば選択画面の下はゲームモーダルだ！！！！
  // 2日前のおれ神すぎ！！！！
}

document.getElementById("skip-cancel").addEventListener('click', skipCansel);
document.getElementById("skip-button").addEventListener('click', skipButton);
