// 共通√のデータ
const endingTextArray = [
  "月面基地、第二研究棟――防音パネルに覆われた狭い通信室に、ひとりで佇んでいた。",
  "ガラス越しに見える外の風景は、何も語らない。",
  "空はない。風もない。沈黙だけが、そこにあった。",
  ">新着通信：極秘・最優先",
  ">暗号照合完了。自動再生を開始します。",
  "雑音の混じった音声が、冷たい機械音に混ざって流れ始める。",
  "「……ここは地上。帝都ゲルマニアからの報告だ」",
  "「総統閣下は……死亡された」",
  "声は軍人のものだ。くぐもっていて、疲れ切っていた。どこかで砲声のような音が混じる。",
  "「ゲーリング元帥は、空軍施設を封鎖。信頼できる者以外の接触を拒否し、軍の動員を開始」",
  "「ボルマンはそれを拒絶し、自らが『正統なる後継者』と宣言した」",
  "「応じなかった地方司令部は粛清対象に指定され、武力衝突が発生している」",
  "無機質な声の中に、わずかな揺れがあった。",
  "「……ハイドリヒはポーランドに兵を集めている。武装親衛隊の残存戦力を吸収し、『秩序の再建』を掲げているらしい」",
  "そこで一瞬、沈黙が走った。",
  "「鋼鉄の帝国は、錆びて崩れ始めた」",
  "基地内の空調の音が、やけに大きく聞こえる。私は受信装置の前に立ったまま、目を伏せた。",
  "「あなたが今、月にいることは把握している。任務は続行中――だが」",
  "「あなたが帰還するその時、『帰る場所』が残っているかは、分からない」",
  "何かが、遠くで軋む音がした。地球では、戦争が始まった。再び。今度は自分たちの中で。",
  "「――あなたは、どこに帰るつもりだ？」",
  "通信は、そこで途切れた。",
  "長い沈黙。",
  "機械は黙り込み、モニターは再び黒に染まった。",
  "ゆっくりと窓の外へ目をやった。",
  "地平線の向こうに、地球が浮かんでいる。",
  "小さな、青い点。かつて『祖国』と呼ばれた、かつて『帝国』だった場所。",
  "だが、もはやそこに国はなく、旗はなく、命令も、栄光も、存在しない。",
  "鷲は墜ちた。鋼鉄は朽ちた。",
  "月――ここだけが、まだ静かだった。",
  "そのまま通信装置のスイッチを切った。",
  "そしてただ、死のように静かな月の地平を、目を閉じずに、見つめ続けた。"
];

// 個別√のデータ
const TYPE1TextArray = [
  { text: "通信が途切れてから、どれほどの時間そこに立ちつづけていたのだろう。" },
  { text: "帝国は崩壊した。それは事実だ。血で築かれた千年帝国は、わずか数年で朽ち果てた。" },
  { text: "基地も時期に酸素は尽き、食料も底をつく。" },
  { text: "しかし、まだ何かができるはずだ。何かを——選ばなければならない。" },
  { text: "通信機器のモニターが再び明滅した。新しい信号が届いている。" },
  { text: "私は深く息を吸い込み、決断の時を迎えた。" }
];
const TYPE2TextArray = [
  { text: "――数ヵ月が経過した。" },
  { text: "地上からの物資支援は止まり、指令系統も沈黙を続けている。" },
  { text: "かつて帝国が築いた月面基地は、ゆっくりと朽ちるはずだった。" },
  { text: "だが、そうはならなかった。" },
  { text: "理由はただ一つ――研究を諦め、生活に賭けたからだ。" },
  { text: "開発班がかつて築いた、水と酸素の循環装置が稼働を続けていた。" },
  { text: "太陽光を蓄えるパネル群、再生型温室、人工培養装置――すべてが、帝国の栄光のためではなく、生存のために用いられた。" },
  { text: "私は知っていた。本国が求めていたのは、もっと派手で、もっと破滅的な成果だった。" },
  { text: "重力兵器、粒子爆弾、超空間通信……帝国の夢を正当化する科学的勝利。" },
  { text: "だが、私が選んだのは、空気と水と、眠れる場所だった。" },
  { text: "基地内で見つけたユダヤ人科学者の存在を、報告しなかった。" },
  { text: "彼らは追放されたが、知を持っていた。息をする技術、作物を育てる知恵、生き残る意志。" },
  { text: "もう、地球の姿に意味を感じることはなくなった。" },
  { text: "そこはもう、帰るべき『祖国』ではない。音も、言葉も、何も届かない。" },
  { text: "ただ静かに、青い球が空に浮かんでいるだけだ。" },
  { text: "帝国は崩れた。ボルマンの政府は内戦に沈み、親衛隊の残党が街を焼いていると噂がある。" },
  { text: "だがここ、月には火も煙も届かない。" },
  { text: "月面基地――かつては帝国のための実験場、今は我々の住処。" },
  { text: "我々は、ここに留まる決意をした。" },
  { text: "完璧な独立には程遠い。酸素も、資材も、いずれ限界が来る。" },
  { text: "だが、それでも。" },
  { text: "我々は今、別の選択肢に向かおうとしている。" },
  { text: "地平線の向こう――日本の基地から、返信があった。" },
  { text: "「交信、受信した。協力を望む」" },
  { text: "国境も、命令系統も、ここでは意味をなさない。" },
  { text: "我々は国に仕えるのではなく、互いに仕える。" },
  { text: "忠誠ではなく、尊厳のために。" },
  { text: "科学の野心ではなく、生きるというただそれだけの目的のために。" },
  { text: "私は通信記録を閉じた。外では、温室のライトがまた一つ点灯していた。" },
  { text: "月面は、いまだ沈黙の世界だ。" },
  { text: "空はない。だが、闇も終わらないとは限らない。" },
  { text: "帝国の『陽』が沈んだ場所で、我々は火を灯した。" },
  { text: "陽が沈んだこの地で、ようやく自分の影を踏まずに歩けるようになった。" },
  { text: "新しい歴史は、今ここで始まる。" }
];
const TYPE3TextArray = [
  { text: "年月が流れた。" },
  { text: "地球との交信は、やがて完全に途絶えた。" },
  { text: "戦乱か、沈黙か。何が起きたのかさえ、もう知る術はない。" },
  { text: "月面基地は、最後の補給から数ヶ月をもって自立に移行。最低限のインフラは稼働を続けていた。" },
  { text: "だがそれは、帝国の叡智でも、国家の威信でもなかった。" },
  { text: "ただ、生き延びるための機械の反復。呼吸をするように、維持されるだけの生。" },
  { text: "ここには、もはや祖国も敵も存在しない。" },
  { text: "言葉は不要となり、旗は色褪せ、命令は更新されることはなかった。" },
  { text: "科学の栄光は、観測記録と研究データとしてサーバの中で眠り続けている。" },
  { text: "だが、それを受け取る者はいない。" },
  { text: "月面には、静けさがある。" },
  { text: "あまりにも深く、あまりにも広く、痛みのように冷たい静けさが。" },
  { text: "それは沈黙というよりも――忘却だった。" },
  { text: "居住区画は無人となり、研究棟の灯りも落ちた。" },
  { text: "今、稼働を続けているのはただ一つ。" },
  { text: "地下に埋め込まれた自動化された生命維持装置が、定められた手順で空気と水を循環させ続けている。" },
  { text: "もはや誰のためでもなく、ただそのように設計されたからという理由だけで。" },
  { text: "それは墓標だった。" },
  { text: "かつて人がいたという、最後の証明。" },
  { text: "外では、砂の嵐も起こらず、時間は凍りついたままだ。" },
  { text: "地球はもう、見えない。" },
  { text: "ここは、かつて夢見た未来の、その果て。" },
  { text: "名もなき月の基地。" },
  { text: "そこに残るのは、記録と、静寂と、無。" },
  { text: "そして――誰もいない、永遠だけだった。" }
];
const TYPE4TextArray = [
  { text: "月面基地、第四期運用周期――" },
  { text: "冷却系の異常が報告されてから、すでに六度目の夜を迎えていた。" },
  { text: "太陽が昇らぬこの地において、夜という表現は正確ではない。" },
  { text: "だが、私たちはそう呼ぶ。" },
  { text: "光も音も絶たれた『間』の時間。あまりにも長く、深く、そして寒い夜。" },
  { text: "帝都からの支援物資は、もう三ヶ月以上届いていなかった。" },
  { text: "最初は通信障害を疑い、次に軌道輸送の混乱を想定した。" },
  { text: "だが、すべての仮説はやがて沈黙に塗りつぶされた。" },
  { text: "帝国が、応答を止めたのだ。" },
  { text: "かわりに届いたのは、予期せぬチャンネルからの微弱な信号だった。" },
  { text: "送信元は、日本。" },
  { text: "冷戦の仮面の裏で、同盟でも敵国でもなかったはずの国家。" },
  { text: "彼らは必要最小限の物資を届けてきた。水、酸素、修復用の部品。" },
  { text: "だがそれは救いではなく、延命だった。" },
  { text: "基地の維持は限界を迎えていた。発電効率の低下、労働者の疲弊、" },
  { text: "そして何より「この任務に意味はあるのか」という静かな問いが、日々誰の口からも語られず、ただ空気の中に滲んでいた。" },
  { text: "私は、すべての運営権限を譲渡する決断を下した。" },
  { text: "日本側の責任者と短い会話を交わし、形式的な署名と機密記録の移譲を行った。" },
  { text: "その瞬間、帝国の月面プロジェクトは終わった。" },
  { text: "その報は地球に届き、やがて帝国政府の再構成委員会から通達が来た。" },
  { text: "「極秘技術を外部に提供し、帝国の威信を損なった裏切り者」" },
  { text: "「民間協力の仮面をかぶった離反行為」" },
  { text: "そんな言葉が、誰もいないこの月にまで届いたことが、もはや滑稽ですらあった。" },
  { text: "私は寝返ったのだろうか？" },
  { text: "あるいは見捨てたのか？　何かを、誰かを。" },
  { text: "――いや、違う。ただ選ぶものが、もう何も残っていなかったのだ。" },
  { text: "月は、静かだった。" },
  { text: "帝国の鷲が墜ちたあとも、地球の空が焼かれたあとも、" },
  { text: "この白く冷たい砂漠は、何ひとつ変わらずにそこにあった。" },
  { text: "私は再び、無言の観測窓の前に立つ。" },
  { text: "地球は相変わらず、青く、遠い。" },
  { text: "だがあれを、もう『祖国』とは呼べなかった。" },
  { text: "ここには秩序も、敵意も、旗もない。" },
  { text: "ただ静寂が、深く、深く、しみわたっている。" },
  { text: "それでも、呼吸は続いている。" },
  { text: "命の機械は動き続け、わずかな酸素がこの空間を支配している。" },
  { text: "……それだけが、まだ、現実だった。" }
];
const BADENDTextArray = [
  { text: "輸送船の窓から、月の地平線がゆっくりと遠ざかっていく。" },
  { text: "そこに残るのは、未完成のドーム施設と停止した研究機材。" },
  { text: "「君には期待していた。だが……帝国には『結果』だけが必要だ」" },
  { text: "退任命令は、通信越しに一言で告げられた。" },
  { text: "理由の説明も、反論の機会もなかった。" },
  { text: "宇宙服の中で、自分の呼吸音だけがやけに大きく響く。" },
  { text: "それが、自分がまだ生かされていることをただ無慈悲に知らせていた。" },
  { text: "やがて船体が月の重力圏を抜ける。" },
  { text: "背後に広がる灰色の大地。" },
  { text: "――君は、征服に値しなかった。" },
  { text: "BAD END" }
];

let EndTextIndex = 0;
let currentRoundForEnding = 0;
// 初期配列を格納、分岐後に配列が追加される
let EndArray = [endingTextArray];
let isSeeingEnding = false;

document.addEventListener("DOMContentLoaded", (event) => {
  // 読み込まれたらエンドモーダルのテキストをendingTextArray配列の0番目に
  // 最初の表示は常に共通ルート
  document.getElementById("ending-text").textContent = EndArray[currentRoundForEnding][EndTextIndex];
  // モーダルのクリックイベントを設定
  document.getElementById("modal-ending").addEventListener("click", EndClick);
});

const EndClick = function() {
  // 処理中なら実行しない
  if (isSeeingEnding) {
    console.log("処理中のためクリックを無視します");
    return;
  }
  isSeeingEnding = true;
  // 現在の配列を取得
  let currentArray = EndArray[currentRoundForEnding];
  // 次のテキストインデックスに進む
  EndTextIndex++;
  // 現在の配列内にまだテキストがある場合
  if (EndTextIndex < currentArray.length) {
    // 現在のラウンドに応じてテキストの取得方法を変える
    let textToShow;
    if (currentRoundForEnding === 0) {
      // 共通ルートの場合、配列要素は文字列
      textToShow = currentArray[EndTextIndex];
    } else {
      // 分岐後ルートの場合、オブジェクト配列
      const currentTextData = currentArray[EndTextIndex];
      textToShow = currentTextData ? currentTextData.text : ""; // オブジェクトからtextプロパティを取得
    }
    document.getElementById("ending-text").textContent = textToShow;
    isSeeingEnding = false;
  }
  // 現在の配列の最後まで到達した場合
  else {
    // 最初の共通エンディング配列が終わった場合
    if (currentRoundForEnding === 0 && EndTextIndex >= endingTextArray.length) {
      currentRoundForEnding = 1; // 次のラウンドへ
      EndTextIndex = 0;          // インデックスをリセット
      console.log("表示します - 個別√");
      // ENDING_TYPEに基づいて次の配列を決定し、EndArrayに追加
      const endingType = document.getElementById("ENDING_TYPE").textContent;
      let nextArray = null; // 次に表示する配列を格納する変数
      switch (endingType) {
        case "TYPE_1":
          nextArray = TYPE1TextArray;
          break;
        case "TYPE_2":
          nextArray = TYPE2TextArray;
          break;
        case "TYPE_3":
          nextArray = TYPE3TextArray;
          break;
        case "TYPE_4":
          nextArray = TYPE4TextArray;
          break;
        case "TYPE_5":
          // ほんとは行われない処理（toEndingStoryの話）
          nextArray = BADENDTextArray;
          break;
        default:
          console.error("不明なエンディングタイプです:", endingType);
          isSeeingEnding = false; // エラーの場合は処理を中断
          return;
      }
      if (nextArray && nextArray.length > 0) {
        // EndArrayに次の配列を追加
        EndArray.push(nextArray); 
        // 一度画面を切り替えるエフェクト
        document.getElementById("modal-ending").removeEventListener("click", EndClick);
        document.getElementById("modal-ending").classList.remove("fadein");
        document.getElementById("modal-ending").classList.add("fadeout");
        setTimeout(() => {
          document.getElementById("modal-ending").addEventListener("click", EndClick);
          document.getElementById("modal-ending").classList.remove("fadeout");
          document.getElementById("modal-ending").classList.add("fadein");
          // 次の配列の0番目を表示
          const firstTextData = EndArray[currentRoundForEnding][EndTextIndex];
          document.getElementById("ending-text").textContent = firstTextData ? firstTextData.text : "";
        }, 1000);
      } else {
        // TYPE1以外の終了処理（後で書いといて）
        // ん、それは下にあるな、ここはいつ実行されるんだ？
        // nextArrayがない時だからエラーだな
        console.log("見つかりません - 個別√配列");
      }
      isSeeingEnding = false;
    }
    // 分岐後のエンディング配列が終わった場合
    else {
      const endingType = document.getElementById("ENDING_TYPE").textContent;
      if (endingType === "TYPE_1") {
        console.log("表示します - TYPE1 エンディング選択")
        document.getElementById("modal-ending").removeEventListener("click", EndClick);
        // TYPE1の場合、ボタンを表示
        document.getElementById("endbutton-1").classList.remove("no-display");
        document.getElementById("endbutton-1").classList.add("fast-fadein");
        document.getElementById("endbutton-2").classList.remove("no-display");
        document.getElementById("endbutton-2").classList.add("fast-fadein");
        // 特殊条件をどれかひとつでも満たす場合はendbutton-3も表示
        if ( // 絶望みたいな条件
        document.getElementById("ENDING_TYPE1_HEYDRICH").textContent === "true" ||
        document.getElementById("ENDING_TYPE1_BETRAY").textContent === "true" ||
        document.getElementById("ENDING_TYPE1_SHINETHESUN").textContent === "true"
        ) {
          document.getElementById("endbutton-3").classList.remove("no-display");
          document.getElementById("endbutton-3").classList.add("fast-fadein");
        }
        return; 
      } else {
        // TYPE1以外の場合、途中で選択はないので最後まで表示されたはず
        console.log("エンディング終了（TYPE1以外）");
        // クリックイベントを無効化
        isSeeingEnding = true;
        document.getElementById("modal-ending").removeEventListener("click", EndClick);
        document.getElementById("modal-ending").classList.remove("fadeoin");
        document.getElementById("modal-ending").classList.add("fadeout");
        setTimeout(() => {
          document.getElementById("modal-ending").style.display = "none";
          document.getElementById("modal-restart").style.display = "block";
          document.getElementById("modal-restart").classList.add("fadein");
        }, 1000);
        return; // 終了処理後はここで処理を終える
      }
    }
  }
};

// modal-resultのボタンを押すとモーダル移行
function toEndingStory() {
  document.getElementById("result-button").onclick = null;
  document.getElementById("modal-result").classList.remove("fadein");
  document.getElementById("modal-result").classList.add("fadeout");
  setTimeout(() => {
    document.getElementById("modal-result").style.display = "none";
    document.getElementById("modal-ending").style.display = "block";
    document.getElementById("modal-ending").classList.add("fadein");
    // ENDING_TYPEが"5"の場合、BADENDTextArrayを直接表示
    if (document.getElementById("ENDING_TYPE").textContent === "BADEND") {
      console.log("スキップします - 共通ルート");
      EndArray = [[{ text: "dummy" }], BADENDTextArray]; // ダミー配列と実際の配列
      EndTextIndex = 0;
      currentRoundForEnding = 1; // 直接2番目の配列（BADENDTextArray）を参照
      // BADENDTextArrayの最初の要素を表示
      document.getElementById("ending-text").textContent = BADENDTextArray[EndTextIndex].text;
    } else {
      // いらないはずだけど一応、ね
      document.getElementById("ending-text").textContent = EndArray[currentRoundForEnding][EndTextIndex];
    }
  }, 1000);
}
