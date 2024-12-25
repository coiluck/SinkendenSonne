document.getElementById("GER-game-tutorial-close").addEventListener("click", function() {
  // チュートリアルが閉じられた時の処理
  document.getElementById("game-tutorial").classList.add("fast-fadeout");
  setTimeout(function(){
    document.getElementById("game-tutorial").style.display = "none";
  }, 500);
  const neverShowCheckbox = document.getElementById("neverShowMeTutorialModal");
  if (neverShowCheckbox && neverShowCheckbox.checked) {
    // 「二度と表示しない」を選択したらローカルストレージに書き込む
    localStorage.setItem("hasSeenTutorial", "true");
    console.log("記録しました: チュートリアル - 二度と表示しない");
  }
});


const decreasePersonnelGER = function(){
  // 人員を減らすボタンの処理
  const countElement = document.getElementById("GER-personnel-count");
  const decreaseButton = document.getElementById("GER-personnel-decrease");
  const increaseButton = document.getElementById("GER-personnel-increase");
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
const increasePersonnelGER = function(){
  // 人員を増やすボタンの処理
  const countElement = document.getElementById("GER-personnel-count");
  const decreaseButton = document.getElementById("GER-personnel-decrease");
  const increaseButton = document.getElementById("GER-personnel-increase");
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
document.getElementById("GER-personnel-decrease").addEventListener("click", decreasePersonnelGER);
document.getElementById("GER-personnel-increase").addEventListener("click", increasePersonnelGER);


















// ゲームデータ
const gameScenarios = [
  [
    {
      title: '資源探査',
      effects: [{ stat: 'resources', value: 10 }],
      stories: [
        '未知の月面クレーターに到着。地質センサーが反応を示し始める。',
        '岩石サンプルを採取。希少な鉱物の痕跡を発見。',
        '探査チームが驚くべき地質学的特徴を報告する。'
      ]
    },
    {
      title: '通信システム拡張',
      effects: [{ stat: 'progress', value: 15 }],
      stories: [
        '新しい衛星通信システムの設置を開始。',
        '地球との通信が劇的に改善される。',
        '高速データ伝送の実験に成功。'
      ]
    },
    {
      title: '緊急対応訓練',
      effects: [{ stat: 'moon-development', value: 12 }],
      stories: [
        '宇宙飛行士が極限状況下での生存訓練を実施。',
        '複雑な救助シミュレーションを完了。',
        '危機管理能力が大幅に向上。'
      ]
    }
  ],
  [
    {
      title: '深部探査',
      effects: [{ stat: 'resources', value: 12 }],
      stories: [
        '月の深い峡谷に調査ローバーを派遣。',
        '未知の地質構造の証拠を発見。',
        '予想外の地下資源の痕跡を確認。'
      ]
    },
    {
      title: '生命維持技術革新',
      effects: [{ stat: 'progress', value: 18 }],
      stories: [
        '閉鎖型生態系システムの開発が進む。',
        '持続可能な資源再生技術のブレイクスルー。',
        '完全自給自足の生活環境モデルを構築。'
      ]
    },
    {
      title: '居住モジュール改良',
      effects: [{ stat: 'moon-development', value: 15 }],
      stories: [
        '次世代型居住モジュールの設計が完了。',
        '放射線防護と快適性を両立する革新的な構造。',
        '宇宙飛行士の長期滞在を可能にする設計。'
      ]
    }
 ],
  [
    {
      title: '希少鉱物抽出',
      effects: [{ stat: 'resources', value: 12 }],
      stories: [
        '高度な採掘技術で貴重な鉱物を発見。',
        '地球では入手困難な希少金属の大量採掘に成功。',
        '資源開発の新たな可能性が広がる。'
      ]
    },
    {
      title: '先端医療研究',
      effects: [{ stat: 'progress', value: 20 }],
      stories: [
        '無重力環境での医学研究が新局面へ。',
        '宇宙特有の生理学的変化に関する画期的な発見。',
        '将来の長期宇宙滞在に向けた医療技術が進歩。'
      ]
    },
    {
      title: '自律型インフラ構築',
      effects: [{ stat: 'moon-development', value: 18 }],
      stories: [
        '自動建設ロボットによるインフラ拡張。',
        '完全自動化された基地運営システムの稼働。',
        '人間の介入最小限の月面基地運営を実現。'
      ]
    }
  ]
];

let currentRound = 0;
let currentScenarioIndex = 0;
let currentStoryIndex = 0;
let isSeeingStory = false;



const { kannkei, kennkyuu, hokyuu, shouhi } = window.gameDataByChar;
// これうまくいかないから使わない。window.gameDataByChar.kannkei のようにして数値取り出す

// 選択肢を更新
function updateChoices() {
  const choiceCards = document.querySelectorAll(".GER-choice-card");
  choiceCards.forEach((card, index) => {
    const scenario = gameScenarios[currentRound][index];
    const effectDescriptions = scenario.effects.map(effect => {
      let statName;
      switch (effect.stat) {
        case 'resources': statName = '資源'; break;
        case 'relations': statName = '他国との関係'; break;
        case 'progress': statName = '研究進度'; break;
        case 'moon-development': statName = '月面開発'; break;
        default: statName = '不明';
      }
      return `${statName}: +${effect.value}`;
    }).join(', ');
    
    card.querySelector("h3").textContent = scenario.title;
    card.querySelector("p").textContent = effectDescriptions;
    card.id = `GER-selestion${index + 1}`;
  });

  // 物資を補充
  const resourcesElement = document.getElementById("GER-resources");
  let resources = parseInt(resourcesElement.textContent, 10);
  resources += 500 * window.gameDataByChar.hokyuu;
  resourcesElement.textContent = resources;
  console.log("ゲーム選択肢を更新しました");
  console.log("補給適用倍率: 500 * " + window.gameDataByChar.hokyuu);
}

// ストーリーテキストを更新
function updateStoryText() {
  const currentScenario = gameScenarios[currentRound][currentScenarioIndex];
  const gameTextElement = document.getElementById('GER-game-text');  
  if (currentStoryIndex < currentScenario.stories.length) {
    gameTextElement.textContent = currentScenario.stories[currentStoryIndex];
    currentStoryIndex++;
  } else {
    // ストーリーの最後なら...
    resetToChoices();
  }
}

// 選択肢画面に戻る
function resetToChoices() {
  currentRound++;
  currentStoryIndex = 0;
  isSeeingStory = false;

  document.querySelector(".GER-gameText-screen").classList.add("no-display");
  document.querySelector(".GER-gameText-screen").classList.remove("yes-display");  
  document.querySelector(".GER-game-screen").classList.remove("no-display", "fast-fadeout");
  document.querySelector(".GER-game-screen").classList.add("fast-fadein");
  // 新しい選択肢
  if (currentRound < gameScenarios.length) {
    updateChoices();
  } else {
    // ゲーム終了処理（後で関数書いて入れておく）
    document.querySelector(".GER-game-screen").classList.remove("fast-fadein");
    document.querySelector(".GER-game-screen").classList.add("no-display");
    document.querySelector(".GER-gameText-screen").classList.remove("yes-display", "fast-fadein-text");
    document.querySelector(".GER-gameText-screen").classList.add("no-display");
    setTimeout(function () {
      document.querySelector(".GER-gameText-screen").classList.remove("no-display");
      document.querySelector(".GER-gameText-screen").classList.add("yes-display");
      document.querySelector(".GER-gameText-screen").classList.add("fast-fadein-text");
      // ストーリーの表示を開始
      displayMiddleStory();
    }, 500);
  }
}

// 選択肢クリック時
function handleChoiceClick(event) {
  if (isSeeingStory) return;
  // 物資を減少
  const personnelCount = parseInt(document.getElementById("GER-personnel-count").textContent, 10);
  const resourcesElement = document.getElementById("GER-resources");
  let resources = parseInt(resourcesElement.textContent, 10);
  const resourceCost = 200 + personnelCount * 5 * window.gameDataByChar.shouhi;
  resources -= resourceCost;
  resourcesElement.textContent = resources;
  console.log("消費適用倍率: 200 + " + personnelCount + " * 5 * " + window.gameDataByChar.shouhi);
  // これなにをやっている？
  const choiceCards = document.querySelectorAll(".GER-choice-card");
  choiceCards.forEach((card, index) => {
    if (card === event.currentTarget) {
      currentScenarioIndex = index;
    }
  });
  // ステータスの更新を追加
  const selectedScenario = gameScenarios[currentRound][currentScenarioIndex];
  updateStatus(selectedScenario.effects, personnelCount);
  // 選択肢を消してテキストを表示
  document.querySelector(".GER-game-screen").classList.add("fast-fadeout");  
  setTimeout(function(){ 
    document.querySelector(".GER-game-screen").classList.add("no-display"); 
    document.querySelector(".GER-gameText-screen").classList.remove("no-display"); 
    document.querySelector(".GER-gameText-screen").classList.add("yes-display"); 
    document.querySelector(".GER-gameText-screen").classList.add("fast-fadein-text");     
    // 最初のストーリーテキストを表示
    updateStoryText();
    isSeeingStory = true;
  }, 500);
}

// ステータスを更新する関数を追加
function updateStatus(effects, personnelCount) {
  // 人員により倍率適用
  const scoreRatio = [1, 1.13, 1.23, 1.31, 1.38, 1.44, 1.5];
  const ratioIndex = Math.floor((personnelCount - 30) / 10);
  const ratio = scoreRatio[ratioIndex];
  effects.forEach(effect => {
    const statElement = document.getElementById(`GER-${effect.stat}`);
    const currentValue = parseInt(statElement.textContent, 10);
    let value = effect.value * ratio;
    // 研究人員なら倍率適用
    if (effect.stat === 'progress') {
      value *= window.gameDataByChar.kennkyuu;
      console.log("スコア適用倍率: " + ratio + " * " + window.gameDataByChar.kennkyuu); // スコア適用倍率を表示
    } else {
      console.log("スコア適用倍率: " + ratio); // スコア適用倍率を表示
    }
    statElement.textContent = Math.round(currentValue + value);
  });
}

// ストーリー読むとき
function handleModalClick() {
  // isSeeingStoryがtrueの場合連続クリックを防ぐ
  if (isSeeingStory) {
    // 一時的に無効化
    document.getElementById('GER-modal-game').removeEventListener('click', handleModalClick);
    updateStoryText();
    // 少し遅延を置く
    setTimeout(() => {
      document.getElementById('GER-modal-game').addEventListener('click', handleModalClick);
    }, 100);
  }
}

// 初期設定
function initializeGame() {
  // 初期選択肢の設定
  updateChoices();
  // 選択肢にイベントリスナーを追加
  document.querySelectorAll(".GER-choice-card").forEach(card => { 
    card.addEventListener('click', handleChoiceClick);
  });
  // モーダルにイベントリスナーを追加
  document.getElementById('GER-modal-game').addEventListener('click', handleModalClick);
}

// ゲーム初期化
initializeGame();

// 中間ストーリー（共栄圏の崩壊イベント）
function displayMiddleStory() {
  const storyTextElement = document.getElementById('GER-game-text');
  const storySequence = [
    "本国からの伝達: インドネシア反乱",
    "新たな挑戦が待つ未来に向け、チームは一丸となる。",
    "技術と忍耐の結晶が形になりつつある。"
  ];
  let storyIndex = 0;
  storyTextElement.textContent = storySequence[storyIndex];
  // クリックでストーリーを更新
  document.getElementById('GER-modal-game').addEventListener('click', function onStoryClick() {
    storyIndex++;
    if (storyIndex < storySequence.length) {
      storyTextElement.textContent = storySequence[storyIndex];
    } else {
      // ストーリーが終わったら...
      changeToGame2();
      console.log("モーダル入れ替え成功");
    }
  });
}

function changeToGame2() {
  // 数値を別のモーダルで使えるように取得
  const currentResources = document.getElementById('GER-resources').textContent;
  const currentResourcesNum = parseInt(currentResources ,10); // 補給はこのターンも継続
  const currentRelations = document.getElementById('GER-relations').textContent;
  const currentProgress = document.getElementById('GER-progress').textContent;
  const currentPersonnel = document.getElementById('GER-personnel-count').textContent;
  const currentMoonDevelopment = document.getElementById('GER-moon-development').textContent;
  // それを新しいモーダルに入れる
  document.getElementById('GER-resources2').textContent = currentResourcesNum + 500 * window.gameDataByChar.hokyuu;
  document.getElementById('GER-relations2').textContent = currentRelations;
  document.getElementById('GER-progress2').textContent = currentProgress;
  document.getElementById('GER-personnel-count2').textContent = currentPersonnel;
  document.getElementById('GER-moon-development2').textContent = currentMoonDevelopment;
  // いれる処理が終わってからid: GER-modal-gameを非表示にし、id: GER-modal-game2を表示
  document.querySelector('.GER-gameText-screen').classList.add("fast-fadeout-text");
  setTimeout(function(){
    document.getElementById('GER-modal-game').style.display = "none";
    document.getElementById('GER-modal-game2').style.display = "block";
  }, 500);
}

