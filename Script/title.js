<<<<<<< HEAD
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
        // 上の部分見づら過ぎておもろい
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
let selectedCountry; // 関数の外でも取り出せるように宣言
document.getElementById('select-country-confirm').addEventListener('click', function() {
  // 国家決定ボタンが押されたら...
  const forWho = document.getElementById('select-country-confirm').textContent
  if (forWho === "総統のために！"){
    console.log("選択: ドイツ")
    selectedCountry = "GER";
  } else if (forWho === "天皇万歳！"){
    console.log("選択: 日本")
    selectedCountry = "JPN";
  } else {
    console.log("選択した国が見つかりません")
    alert("国家選択で意図しないバグが発生しました。製作者に報告してくれると助かります")
  }
  document.getElementById("modal-title").classList.add('fadeout');
  setTimeout(function(){ 
    document.getElementById('modal-title').style.display = "none"; 
  }, 1000);
=======
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
>>>>>>> master
});