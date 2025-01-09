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


let gameScenarios2 = [ // あとで書き換えるので let
  [
    {
      title: '大日本帝国基地からの連絡',
      effects: [{ stat: 'relations', value: 10 }, { stat: 'resources', value: -200 }],
      stories: [
        '1962年12月5日、一件の通信があった。',
        '大日本帝国華陽基地からだった。',
        'かの国では泥沼化した共栄圏情勢により、月面への物資援助が滞っているという。',
        "そこで少しの援助が欲しい、と。",
        "我々は少し迷ったが、彼らを助けることにした。"
      ],
      buttonText: "彼らは敵ではない。少なくとも、今は。"
    },
    {
      title: '通信システム拡張',
      effects: [{ stat: 'progress', value: 15 }],
      stories: [
        '新しい衛星通信システムの設置を開始。',
        '地球との通信が劇的に改善される。',
        '高速データ伝送の実験に成功。'
      ],
      buttonText: "実験は成功だ"
    },
    {
      title: '緊急対応訓練',
      effects: [{ stat: 'moon-development', value: 12 }],
      stories: [
        '宇宙飛行士が極限状況下での生存訓練を実施。',
        '複雑な救助シミュレーションを完了。',
        '危機管理能力が大幅に向上。'
      ],
      buttonText: "我々はどんな状況でも生き延びられるだろう"
    }
  ],
  [
    {
      title: '月面秘密実験の開始',
      effects: [{ stat: 'progress', value: 20 }],
      stories: [
        '極秘実験プログラムの開始指令が下る。',
        '不安の中で科学者たちが実験の準備を進める。',
        '予期せぬ事故が発生、基地内に緊張が走る。'
      ],
      buttonText: "まだ失敗ではない"
    },
    {
      title: '日本との技術交換交渉',
      effects: [{ stat: 'relations', value: 15 }],
      stories: [
        '日本側からの技術供与の提案が持ち込まれる。',
        '微妙な駆け引きの末、合意に至る。',
        '新たな技術が基地の運営を支えることになる。'
      ],
      buttonText: "ふーん"
    },
    {
      title: '月面核シェルター建設',
      effects: [{ stat: 'moon-development', value: 18 }],
      stories: [
        '万が一のための核シェルター建設計画が始動。',
        '困難な建設作業が続く中、事故が発生。',
        '作業員たちの尽力で完成し、安全性が強化される。'
      ],
      buttonText: "月での安全性が保たれた"
    }
  ],
  [
    {
      title: '月面資源の過剰採掘',
      effects: [{ stat: 'resources', value: 20 }],
      stories: [
        '資源枯渇を懸念する声を無視して採掘を強行。',
        '予想を超える成果が得られるが、環境破壊が深刻化。',
        '長期的な影響を懸念する研究者たちの抗議が高まる。'
      ],
      buttonText: "資源が必要なのだ"
    },
    {
      title: '人体改良実験',
      effects: [{ stat: 'progress', value: 25 }],
      stories: [
        '極限環境に適応するための人体改良実験が始まる。',
        '実験対象者の中に未知の副作用を示す者が現れる。',
        '成果と倫理の間で苦悩しながらも研究が続行される。'
      ],
      buttonText: "これでいいのか？？"
    },
    {
      title: '月面防衛システム強化',
      effects: [{ stat: 'moon-development', value: 22 }],
      stories: [
        '基地の防衛を目的とした自動砲塔の設置が進む。',
        '軍事利用への転用を懸念する声が上がる。',
        'システムは完成し、基地の防御力が大幅に向上する。'
      ],
      buttonText: "戦争はしたくないものだが"
    }
  ],
  [
    {
      title: '月面反乱の鎮圧',
      effects: [{ stat: 'relations', value: -10 }, { stat: 'moon-development', value: 15 }],
      stories: [
        '一部の作業員が待遇改善を求め反乱を起こす。',
        '武力による鎮圧が行われ、反乱は収束。',
        'その後、労働環境の改善策が導入される。'
      ],
      buttonText: "仕方ない"
    },
    {
      title: '核廃棄物の処理施設設置',
      effects: [{ stat: 'progress', value: 15 }],
      stories: [
        '核実験の副産物処理のため新施設が建設される。',
        '作業員たちが危険な環境に直面し、士気が低下。',
        '最終的に効率的な処理方法が確立される。'
      ],
      buttonText: "一安心だな"
    },
    {
      title: '自律型探査機の試験運用',
      effects: [{ stat: 'resources', value: 15 }, { stat: 'progress', value: 10 }],
      stories: [
        '新型探査機が月面での自律運用を開始。',
        '通信トラブルや制御ミスで一時運用が中断される。',
        '調整後、探査機は予想以上の成果を上げる。'
      ],
      buttonText: "実験は成功だ"
    }
  ]
]  


// つかいそう
const choiceCards2 = document.querySelectorAll(".GER-choice-card2");
const gameText2 = document.getElementById("GER-game-text2");
const modalGame2 = document.getElementById("GER-modal-game2");
const gameButton2 = document.getElementById("game-button-will");
let currentRound2 = 0;
let currentScenarioIndex2 = 0;
let currentStoryIndex2 = 0;
let isSeeingStory2 = false;
let hasSavedJPN = false; // 分岐に使用
let hasSavedJewishMan = false; // 分岐に使用

document.querySelector("#save-Jew").addEventListener("click", function() {
  // 別にいいんだけどなんでquerySelector使っているんだ
  hasSavedJewishMan = true;
  document.getElementById("ENDING_TYPE_JEW").textContent = "true";
  console.log("記録しました: 男 - 救済")
});

// 選択肢を更新
function updateChoices2() {
  choiceCards2.forEach((card, index) => {
    const scenario = gameScenarios2[currentRound2][index];
    const effectDescriptions = scenario.effects.map(effect => {
      let statName;
      switch (effect.stat) {
        case 'resources': statName = '資源'; break;
        case 'relations': statName = '他国との関係'; break;
        case 'progress': statName = '研究進度'; break;
        case 'moon-development': statName = '月面開発'; break;
        default: statName = '不明';
      }
      const sign = effect.value > 0 ? "+" : ""; // 負の場合は+を付けない
      return `${statName}: ${sign}${effect.value}`;
    }).join(', ');

    card.querySelector("h3").textContent = scenario.title;
    card.querySelector("p").textContent = effectDescriptions;
    card.id = `GER-selestion2-${index + 1}`;
  });
  // 物資の補充はどうする？
  // resetToChoices2のなかにありますよ～
}

// ストーリーテキストを更新
function updateStoryText2() {
  const currentScenario = gameScenarios2[currentRound2][currentScenarioIndex2];
  const gameTextElement = document.getElementById('GER-game-text2');  
  if (currentStoryIndex2 < currentScenario.stories.length) {
    gameTextElement.textContent = currentScenario.stories[currentStoryIndex2];
    currentStoryIndex2++;
  } else {
    // ストーリーの最後ならボタンを表示
    document.getElementById("game-button-will").style.display = "flex";
    document.getElementById("game-button-will").classList.add("fast-fadein");
    // resetToChoices();
  }
}
document.getElementById("game-button-will").addEventListener("click", resetToChoices2);

function resetToChoices2() {
  currentRound2++;
  currentStoryIndex2 = 0;
  isSeeingStory2 = false;

  document.getElementById("game-button-will").style.display = "none";
  document.getElementById("GER-gameTextBox2").classList.add("no-display");
  document.getElementById("GER-gameTextBox2").classList.remove("yes-display");  
  document.getElementById("GER-game2-choice").classList.remove("no-display", "fast-fadeout");
  document.getElementById("GER-game2-choice").classList.add("fast-fadein");
  // 新しい選択肢
  if (currentRound2 < gameScenarios2.length) {
    updateChoices2();
    // 物資を補充(ここに書けば初手で実行されないな)
    const resourcesElement = document.getElementById("GER-resources2");
    let resources = parseInt(resourcesElement.textContent, 10);
    resources += 500 * window.gameDataByChar.hokyuu;
    resourcesElement.textContent = resources;
    console.log("更新しました: ゲーム選択肢");
    console.log("補給適用倍率: 500 * " + window.gameDataByChar.hokyuu);
  } else {
    // ゲーム終了処理（後で関数書いて入れておく）
    console.log("終了 - ゲームコンテンツ");
    document.getElementById("GER-game2-choice").classList.remove("fast-fadein");
    document.getElementById("GER-game2-choice").classList.add("no-display");
    document.getElementById("GER-gameTextBox2").classList.remove("yes-display", "fast-fadein-text");
    document.getElementById("GER-gameTextBox2").classList.add("no-display");
    determineEnding();
  }
}

// 選択肢クリック時
function handleChoiceClick2(event) {
  if (isSeeingStory2) return;
  // 物資を減少
  const personnelCount = parseInt(document.getElementById("GER-personnel-count2").textContent, 10);
  const resourcesElement = document.getElementById("GER-resources2");
  let resources = parseInt(resourcesElement.textContent, 10);
  const resourceCost = 200 + personnelCount * 5 * window.gameDataByChar.shouhi;
  resources -= resourceCost;
  if (resources < 0) {
    console.log("Failed to Resource-Control");
    determineEndingToBadEnd();
  }
  resourcesElement.textContent = resources;
  console.log("消費適用倍率: 200 + " + personnelCount + " * 5 * " + window.gameDataByChar.shouhi);
  // クリックされた選択肢カードを特定し、対応するシナリオのインデックスを取得
  const choiceCards = document.querySelectorAll(".GER-choice-card2");
  choiceCards.forEach((card, index) => {
    if (card === event.currentTarget) {
      currentScenarioIndex2 = index;
      // 日本を救った場合、記録
      if (currentRound2 === 0 && gameScenarios2[currentRound2][index].title === "大日本帝国基地からの連絡") {
        hasSavedJPN = true;
        document.getElementById("ENDING_TYPE_JPN").textContent = "true";
        console.log("記録しました: 日本基地 - 救済");
      }
      // ボタンテキストを取得して書き換え
      const buttonText = gameScenarios2[currentRound2][index].buttonText;
      if (buttonText) {
        document.getElementById("game-button-will").textContent = buttonText;
      }
    }
  });
  // ステータスの更新を追加
  const selectedScenario = gameScenarios2[currentRound2][currentScenarioIndex2];
  updateStatus2(selectedScenario.effects, personnelCount); // あとでかく
  // 選択肢を消してテキストを表示
  document.getElementById("GER-game2-choice").classList.add("fast-fadeout");  
  setTimeout(function(){ 
    document.getElementById("GER-game2-choice").classList.add("no-display"); 
    document.getElementById("GER-gameTextBox2").classList.remove("no-display"); 
    document.getElementById("GER-gameTextBox2").classList.add("yes-display"); 
    document.getElementById("GER-gameTextBox2").classList.add("fast-fadein-text");     
    // 最初のストーリーテキストを表示
    updateStoryText2();
    isSeeingStory2 = true;
  }, 500);
}

// ステータスを更新する関数を追加
function updateStatus2(effects, personnelCount) {
  // 人員により倍率適用
  const scoreRatio = [1, 1.13, 1.23, 1.31, 1.38, 1.44, 1.5];
  const ratioIndex = Math.floor((personnelCount - 30) / 10);
  const ratio = scoreRatio[ratioIndex];
  effects.forEach(effect => {
    const statElement = document.getElementById(`GER-${effect.stat}2`);
    const currentValue = parseInt(statElement.textContent, 10);
    let value = effect.value * ratio;
    // 研究人員なら倍率適用
    if (effect.stat === 'progress') {
      value *= window.gameDataByChar.kennkyuu;
      console.log("スコア適用倍率: " + ratio + " * " + window.gameDataByChar.kennkyuu); // スコア適用倍率を表示
    } else if (effect.stat === 'relations') {
      value = effect.value * window.gameDataByChar.kannkei;
      console.log("スコア適用倍率: " + window.gameDataByChar.kannkei);
    } else if(effect.stat === 'resources') {
      value = effect.value;
      console.log("スコア適用倍率: 1");
    } else {
      console.log("スコア適用倍率: " + ratio); // スコア適用倍率を表示
    }
    statElement.textContent = Math.round(currentValue + value);
  });
}

// ストーリー読むとき
function handleModalClick2() {
  // isSeeingStoryがtrueの場合連続クリックを防ぐ
  if (isSeeingStory2) {
    // 一時的に無効化
    document.getElementById('GER-modal-game2').removeEventListener('click', handleModalClick2);
    updateStoryText2();
    // 少し遅延を置く
    setTimeout(() => {
      document.getElementById('GER-modal-game2').addEventListener('click', handleModalClick2);
    }, 100);
  }
}

// 初期設定
function initializeGame2() {
  // 初期選択肢の設定
  updateChoices2();
  // 選択肢にイベントリスナーを追加
  document.querySelectorAll(".GER-choice-card2").forEach(card => { 
    card.addEventListener('click', handleChoiceClick2);
  });
  // モーダルにイベントリスナーを追加
  document.getElementById('GER-modal-game2').addEventListener('click', handleModalClick2);
}
initializeGame2();


function determineEnding() {
  // √分岐system
  const Relations = Number(document.getElementById("GER-relations2").textContent);
  const Progress = Number(document.getElementById("GER-progress2").textContent);
  const Development = Number(document.getElementById("GER-moon-development2").textContent);
  console.log("最終スコア: " + Relations + "," + Progress + "," + Development);
  if (Progress >= 100) {
    // 誰につく？の分岐
    document.getElementById("ENDING_TYPE").textContent = "TYPE_1";
    document.getElementById("GER-modal-game2").classList.add("fadeout");
    setTimeout(() => {
      document.getElementById("GER-modal-game2").style.display = "none";
      document.getElementById("GER-modal-end1").style.display = "block";
      document.getElementById("GER-modal-end1").classList.add("fadein");
    }, 1000);
  } else if (Relations >= 100 && Development >= 100 && hasSavedJPN == True) {
    // 日本と統合（ドイツ優位）
    document.getElementById("ENDING_TYPE").textContent = "TYPE_2";
    document.getElementById("GER-modal-game2").classList.add("fadeout");
    setTimeout(() => {
      document.getElementById("GER-modal-game2").style.display = "none";
      document.getElementById("GER-modal-end2").style.display = "block";
      document.getElementById("GER-modal-end2").classList.add("fadein");
    }, 1000);
  } else if (Development >= 100) {
    // 月面帝国
    document.getElementById("ENDING_TYPE").textContent = "TYPE_3";
    document.getElementById("GER-modal-game2").classList.add("fadeout");
    setTimeout(() => {
      document.getElementById("GER-modal-game2").style.display = "none";
      document.getElementById("GER-modal-end2").style.display = "block";
      document.getElementById("GER-modal-end2").classList.add("fadein");
    }, 1000);
  } else if (Relations >= 100 && hasSavedJPN == True) {
    // 日本と統合（日本優位）
    document.getElementById("ENDING_TYPE").textContent = "TYPE_4";
    document.getElementById("GER-modal-game2").classList.add("fadeout");
    setTimeout(() => {
      document.getElementById("GER-modal-game2").style.display = "none";
      document.getElementById("GER-modal-end2").style.display = "block";
      document.getElementById("GER-modal-end2").classList.add("fadein");
    }, 1000);
  } else {
    determineEndingToBadEnd();
  }
}

function determineEndingToBadEnd(){
  // すべて終わっていないor物資が足りなくなる
  alert("Bad End.");  // あとでけす
  document.getElementById("ENDING_TYPE").textContent = "TYPE_5";
  document.getElementById("GER-modal-game2").classList.add("fadeout");
  setTimeout(() => {
    document.getElementById("GER-modal-game2").style.display = "none";
    document.getElementById("GER-modal-end2").style.display = "block";
    document.getElementById("GER-modal-end2").classList.add("fadein");
  }, 1000);
}
