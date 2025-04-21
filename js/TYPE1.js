
const TYPE1_1 = function () {
  console.log("TYPE1ルート - ボルマンにつく");
  // ボタンを非表示＆押せないように
  const btn1 = document.getElementById("endbutton-1");
  const btn2 = document.getElementById("endbutton-2");
  const btn3 = document.getElementById("endbutton-3");
  [btn1, btn2, btn3].forEach(btn => {
    btn.classList.add("fast-fadeout");
    btn.disabled = true;
    btn.style.pointerEvents = "none";
  });
  // 初期設定
  const textArea = document.getElementById("ending-text");
  const story = [
    { text: "月面基地、第二観測室――" },
    { text: "窓の外に浮かぶ青い星を、誰も見ようとはしなかった。" },
    { text: "それは「地球」ではあったが、もはや「帰るべき場所」ではなかった。" },
    { text: "通信装置に赤いランプが灯る。" },
    { text: "画面には、かろうじて読み取れるシグナル――【極秘：最終命令文】発信元：国家書記局委員会。" },
    { text: "静かにファイルを開いた。" },
    { text: "「帝国の継承権は総統が遺した通り、国家書記長マルティン・ボルマン閣下に帰属する。」" },
    { text: "だが、その名に重みはなかった。少なくとも、ここ――月には。" },
    { text: "「これに基づき、帝国の再臨と真なる秩序の確立が宣言された」" },
    { text: "その「再臨」は、祈りのように読み上げられたが、応える者のいない祈りだった。" },
    { text: "かつて欧州を焼き尽くした帝国の「秩序」も、今や瓦礫の下に沈んでいる。" },
    { text: "数十年しか続かなかった千年帝国の終わりの音が聞こえた。" },
    { text: "「月面基地は以後、『国家管理区』として再編され、その象徴的地位を保持する」" },
    { text: "「通信網の断絶に伴い、暫定的に独立行動権限が付与される。だが、帝国への忠誠は忘れるな」" },
    { text: "忠誠――それは既に誰のものでもなくなった、形だけの儀式だった。" },
    { text: "声にすれば崩れてしまうほど脆く、しかし命を賭して守れと命じられる名残だった。" },
    { text: "「今後の指令は、国家書記局の教令第一〇三号に基づき、忠誠と秩序をもって維持されたい」" },
    { text: "誰のための命令なのか。何のための維持なのか。" },
    { text: "それは語られない。ただ、音だけが届く。" },
    { text: "「生き延びたまえ。君たちは今や、帝国の象徴なのだから」" },
    { text: "それきり、通信は途絶えた" },
    { text: "私は先ほどの言葉を頭のなかで反芻していた。" },
    { text: "意味だけが重く、命令だけが残された。だが、救援も帰還船もなかった。" },
    { text: "「ただ、そこにあれ」と。" },
    { text: "基地の照明は一部しか点灯していない。" },
    { text: "補助電源への切り替えが続くたび、室内の温度がわずかに下がる。" },
    { text: "誰もが、黙って作業を続けていた。" },
    { text: "宇宙服の点検、酸素濃度のチェック、実験データの整理――" },
    { text: "それはまるで、まだ「誰かに報告できる」と信じているかのようだった。" },
    { text: "窓の向こう、地球が見える。青い球体。" },
    { text: "だが、その表面には、もう『帝国』の形は存在しなかった。" },
    { text: "今、そこに広がっているのは――" },
    { text: "誰も指揮しない戦争、誰も責任を取らない崩壊。そして、誰も命令しない沈黙。" },
    { text: "あの星に帰って、何をする？" },
    { text: "どの旗のもとに、立つというのか？" },
    { text: "総統は亡くなられた。" },
    { text: "秩序は失われた。" },
    { text: "そして、命令だけがあり、理由も、希望も、もう、どこにもなかった。" },
    { text: "「……」" },
    { text: "誰かが隣に立った。顔も名前も思い出せない。" },
    { text: "ただ、その人物が黙って言った。" },
    { text: "「……これが、最後の命令なんでしょうか」" },
    { text: "私は答えなかった。" },
    { text: "窓の外で、地球が回っていた。変わらず、静かに。" }
  ];
  let currentTextIndex = 0;
  let isProcessingTYPE1 = false;
  // 初期テキストを表示
  if (story.length > 0) {
    textArea.textContent = story[0].text;
    currentTextIndex = 1; // 次に表示するのは2番目の要素
  }
  const clickHandler = function() {
    // 処理中なら何もしない
    if (isProcessingTYPE1) {
      console.log("処理中のためクリックを無視します");
      return;
    }
    isProcessingTYPE1 = true;
    // ストーリーの最後に到達したかチェック
    if (currentTextIndex >= story.length) {
      console.log("ストーリーの最後に到達しました");
      document.getElementById("modal-ending").removeEventListener("click", clickHandler);
      document.getElementById("modal-ending").classList.remove("fadein");
      document.getElementById("modal-ending").classList.add("fadeout");
      setTimeout(() => {
        document.getElementById("modal-ending").style.display = "none"
        document.getElementById("modal-restart").style.display = "block"
        document.getElementById("modal-restart").classList.add("fadein");
      }, 1000);
      return;
    }
    // 現在のテキストとアクションを取得
    const currentItem = story[currentTextIndex];
    // テキストを表示
    if (currentItem.text !== "") {
      textArea.textContent = currentItem.text;
    }
    // アクションがあれば実行
    if (typeof currentItem.action === 'function') {
      currentItem.action();
    }
    // 次のテキストインデックスに進む
    currentTextIndex++;
    isProcessingTYPE1 = false;
  };
  // テキストエリアにクリックイベントを追加
  document.getElementById("modal-ending").addEventListener("click", clickHandler);
  // 表示が終わったらイベントリスナを消しておく
  return function cleanup() {
    textArea.removeEventListener("click", clickHandler);
    console.log("TYPE1_1のイベントリスナーをクリーンアップしました");
  };
}

const TYPE1_2 = function () {
  console.log("TYPE1ルート - ゲーリングにつく");
  // ボタンを非表示＆押せないように
  const btn1 = document.getElementById("endbutton-1");
  const btn2 = document.getElementById("endbutton-2");
  const btn3 = document.getElementById("endbutton-3");
  [btn1, btn2, btn3].forEach(btn => {
    btn.classList.add("fast-fadeout");
    btn.disabled = true;
    btn.style.pointerEvents = "none";
  });
  // 初期設定
  const textArea = document.getElementById("ending-text");
  const story = [
    { text: "月面基地、第二観測室――" },
    { text: "窓の外に浮かぶ青い星を、誰も見ようとはしなかった。" },
    { text: "それは「地球」ではあったが、もはや「帰るべき場所」ではなかった。" },
    { text: "通信装置に赤いランプが灯る。" },
    { text: "画面には、かろうじて読み取れるシグナル――【極秘：最終命令文】発信元：帝国空軍・臨時軍司令部。" },
    { text: "静かにファイルを開いた。" },
    { text: "「帝国の継承権は空軍元帥ヘルマン・ゲーリング閣下に帰属する。」" },
    { text: "だが、その名に重みはなかった。少なくとも、ここ――月には。" },
    { text: "「これに基づき、帝国の再編と新秩序の構築が宣言された」" },
    { text: "「新秩序」――その語に、かつての憧れがあった。" },
    { text: "だが今、その響きは空っぽの金属音のようだった。" },
    { text: "数十年しか続かなかった千年帝国の終わりの音が聞こえた。" },
    { text: "「月面基地は以後、『帝国空軍直轄領』として認定され、その象徴的地位を保持する」" },
    { text: "「通信網の断絶に伴い、地球側からの人的支援・物資供給は一時停止となる」" },
    { text: "地球からの完全な断絶が宣言された。いつ再開するのかは、誰にもわからない。" },
    { text: "「今後の指令は、個別の判断に任せる。基地は自主的に秩序を維持されたし」" },
    { text: "誰のための命令なのか。何のための維持なのか。" },
    { text: "それは語られない。ただ、音だけが届く。" },
    { text: "「生き延びたまえ。君たちは今や、帝国の象徴なのだから」" },
    { text: "それきり、通信は途絶えた" },
    { text: "私は先ほどの言葉を頭のなかで反芻していた。" },
    { text: "意味をなさない言葉。責任のない命令。救援も、帰還船もなかった。" },
    { text: "「ただ、そこにあれ」と。" },
    { text: "基地の照明は一部しか点灯していない。" },
    { text: "補助電源への切り替えが続くたび、室内の温度がわずかに下がる。" },
    { text: "誰もが、黙って作業を続けていた。" },
    { text: "宇宙服の点検、酸素濃度のチェック、実験データの整理――" },
    { text: "それはまるで、まだ「誰かに報告できる」と信じているかのようだった。" },
    { text: "窓の向こう、地球が見える。青い球体。" },
    { text: "だが、その表面には、もう『帝国』の形は存在しなかった。" },
    { text: "今、そこに広がっているのは――" },
    { text: "誰も指揮しない戦争、誰も責任を取らない崩壊。そして、誰も命令しない沈黙。" },
    { text: "あの星に帰って、何をする？" },
    { text: "どの旗のもとに、立つというのか？" },
    { text: "総統は亡くなられた。" },
    { text: "秩序は失われた。" },
    { text: "そして、命令も、目標も、帰る理由も――もう、どこにもなかった。" },
    { text: "「……」" },
    { text: "誰かが隣に立った。顔も名前も思い出せない。" },
    { text: "ただ、その人物が黙って言った。" },
    { text: "「本当に、もう何も来ないんですね」" },
    { text: "私は答えなかった。" },
    { text: "窓の外で、地球が回っていた。変わらず、静かに。" }
  ];
  let currentTextIndex = 0;
  let isProcessingTYPE1 = false;
  // 初期テキストを表示
  if (story.length > 0) {
    textArea.textContent = story[0].text;
    currentTextIndex = 1; // 次に表示するのは2番目の要素
  }
  const clickHandler = function() {
    // 処理中なら何もしない
    if (isProcessingTYPE1) {
      console.log("処理中のためクリックを無視します");
      return;
    }
    isProcessingTYPE1 = true;
    // ストーリーの最後に到達したかチェック
    if (currentTextIndex >= story.length) {
      console.log("ストーリーの最後に到達しました");
      document.getElementById("modal-ending").removeEventListener("click", clickHandler);
      document.getElementById("modal-ending").classList.remove("fadein");
      document.getElementById("modal-ending").classList.add("fadeout");
      setTimeout(() => {
        document.getElementById("modal-ending").style.display = "none"
        document.getElementById("modal-restart").style.display = "block"
        document.getElementById("modal-restart").classList.add("fadein");
      }, 1000);
      return;
    }
    // 現在のテキストとアクションを取得
    const currentItem = story[currentTextIndex];
    // テキストを表示
    if (currentItem.text !== "") {
      textArea.textContent = currentItem.text;
    }
    // アクションがあれば実行
    if (typeof currentItem.action === 'function') {
      currentItem.action();
    }
    // 次のテキストインデックスに進む
    currentTextIndex++;
    isProcessingTYPE1 = false;
  };
  // テキストエリアにクリックイベントを追加
  document.getElementById("modal-ending").addEventListener("click", clickHandler);
  // 表示が終わったらイベントリスナを消しておく
  return function cleanup() {
    textArea.removeEventListener("click", clickHandler);
    console.log("TYPE1_2のイベントリスナーをクリーンアップしました");
  };
}

const TYPE2_1 = function () {
  console.log("TYPE1ルート - ハイドリヒにつく");
  // ボタンを非表示＆押せないように
  const btn1 = document.getElementById("endbutton-1");
  const btn2 = document.getElementById("endbutton-2");
  const btn3 = document.getElementById("endbutton-3");
  [btn1, btn2, btn3].forEach(btn => {
    btn.classList.add("fast-fadeout");
    btn.disabled = true;
    btn.style.pointerEvents = "none";
  });
  // 初期設定
  const textArea = document.getElementById("ending-text");
  const story = [
    { text: "月面基地は、もう数週間沈黙の中にあった。" },
    { text: "物資は底をつき、水は再生成装置の故障で塩素の味がする。" },
    { text: "食料は配給制になり、次に『尽きるもの』の名を皆が知っていた。" },
    { text: "通信は通じない。" },
    { text: "地球からは、もはや何の声も届かない。" },
    { text: "ある夜、モニターに突如通信が走った。" },
    { text: "発信元はポーランド総督府。画面には一言、「開封せよ」。" },
    { text: "「君は『忠実』な人間だった。」" },
    { text: "「月面内に潜んでいたユダヤ人研究員――君はためらわず、我々に報せた。」" },
    { text: "「君のような人間が、この『秩序なき帝国』を正すのだ。」" },
    { text: "薄氷のように冷たく、美しい声が脳内に響いた。" },
    { text: "「地上はもはや、救えぬ混沌だ。ボルマンは叫び、ゲーリングは狂い、帝都は瓦礫に沈む。」" },
    { text: "「だから我々とともに帝国を救おう。」" },
    { text: "「君らが開発した新型の戦略核兵器――それを、使用せよ。座標は添付してある。」" },
    { text: "「着弾は、ゲルマニア中央政府区。時刻は朝08:30。」" },
    { text: "「それが合図になる。我々が、そこから『新たな秩序』を再建する。」" },
    { text: "「完了すれば、食糧・水・医療資材・酸素――必要なものすべてを一週間以内に送る。」" },
    { text: "メッセージはそこまでだった。" },
    { text: "私は無言のまま、端末の入力画面を見つめていた。" },
    { text: "自分の名の横に、「アクセス権限：最高機密」と表示されている。" },
    { text: "彼はゆっくりと、記憶の奥を掘り返す。" },
    { text: "ハインツ――月に来る前、いつもふざけ合っていた、あの親衛隊の男。" },
    { text: "「こんな時代、笑ってないと死んだみたいじゃん」" },
    { text: "あいつは、どこで何をしているだろうか。" },
    { text: "彼の顔が、ふと脳裏をかすめた。" },
    { text: "だがそれでも、主人公は手を動かす。" },
    { text: "一つ、二つ、三つ。座標入力を確認し、最終キーに指をかけた。" },
    { text: "なぜか、涙は出なかった。" },
    { text: "午前8時28分。" },
    { text: "月の地平から、静かに一筋の光が放たれた。" },
    { text: "声もなく、炎もなく、ただ弾道が夜空に消えていく。" },
    { text: "数分後、通信装置に新たな接続が走る。" },
    { text: "「確認した。お前は正しい。『旧きもの』は焼かれるべきだった。」" },
    { text: "自分は何も応答しなかった。接続を切り、部屋を出る。" },
    { text: "廊下は静まり返っていた。" },
    { text: "外へ出た。地球が、視界の中央にあった。" },
    { text: "小さな青い球体。" },
    { text: "今も美しくあり続けるその中心で、いま何十万人が燃え尽きているのか、想像もできない。" },
    { text: "地面に膝をつく。" },
    { text: "呼吸は浅く、胸は空虚だ。" },
    { text: "勝利も敗北も、正義も反逆も、すべてが遠く、意味をなさなかった。" },
    { text: "この手で、帝国を終わらせた。" },
    { text: "それでも、生きてしまった。" },
    { text: "そして、基地内に再び沈黙が訪れる。" },
    { text: "月は語らず、死を悼まない。" },
    { text: "ただ、静寂の中に、最後の帝国が崩れ落ちていった。" }
  ];
  let currentTextIndex = 0;
  let isProcessingTYPE1 = false;
  // 初期テキストを表示
  if (story.length > 0) {
    textArea.textContent = story[0].text;
    currentTextIndex = 1; // 次に表示するのは2番目の要素
  }
  const clickHandler = function() {
    // 処理中なら何もしない
    if (isProcessingTYPE1) {
      console.log("処理中のためクリックを無視します");
      return;
    }
    isProcessingTYPE1 = true;
    // ストーリーの最後に到達したかチェック
    if (currentTextIndex >= story.length) {
      console.log("ストーリーの最後に到達しました");
      document.getElementById("modal-ending").removeEventListener("click", clickHandler);
      document.getElementById("modal-ending").classList.remove("fadein");
      document.getElementById("modal-ending").classList.add("fadeout");
      setTimeout(() => {
        document.getElementById("modal-ending").style.display = "none"
        document.getElementById("modal-restart").style.display = "block"
        document.getElementById("modal-restart").classList.add("fadein");
      }, 1000);
      return;
    }
    // 現在のテキストとアクションを取得
    const currentItem = story[currentTextIndex];
    // テキストを表示
    if (currentItem.text !== "") {
      textArea.textContent = currentItem.text;
    }
    // アクションがあれば実行
    if (typeof currentItem.action === 'function') {
      currentItem.action();
    }
    // 次のテキストインデックスに進む
    currentTextIndex++;
    isProcessingTYPE1 = false;
  };
  // テキストエリアにクリックイベントを追加
  document.getElementById("modal-ending").addEventListener("click", clickHandler);
  // 表示が終わったらイベントリスナを消しておく
  return function cleanup() {
    textArea.removeEventListener("click", clickHandler);
    console.log("TYPE1_2のイベントリスナーをクリーンアップしました");
  };
}
const TYPE2_2 = function () {
  console.log("TYPE1ルート - 日本につく");
  // ボタンを非表示＆押せないように
  const btn1 = document.getElementById("endbutton-1");
  const btn2 = document.getElementById("endbutton-2");
  const btn3 = document.getElementById("endbutton-3");
  [btn1, btn2, btn3].forEach(btn => {
    btn.classList.add("fast-fadeout");
    btn.disabled = true;
    btn.style.pointerEvents = "none";
  });
  // 初期設定
  const textArea = document.getElementById("ending-text");
  const story = [
    { text: "第三通信室の窓から、私は外を見ていた。" },
    { text: "白い月の地面は、今日も何ひとつ変わらず、音もなく広がっていた。" },
    { text: "基地は静かだった。いや、静かすぎた。" },
    { text: "かつて鳴り響いていた補給輸送のアラームも、定時連絡のビープ音も、もう聞こえない。" },
    { text: "帝都ゲルマニアとの通信が断絶されてから、すでに二ヶ月が経った。" },
    { text: "地上では内戦が激化しているらしい。誰が勝って、誰が死んだのか、それすら分からない。" },
    { text: "空軍か、親衛隊か、あるいは――もう、何も残っていないのか。" },
    { text: "ここ、月面には、もう補給も命令も届かない。私たちは完全に、孤立した。" },
    { text: "そんなある日、沈黙を破る通信が届いた。" },
    { text: ">送信元：大日本帝国月面基地" },
    { text: "静かにメッセージを開く。" },
    { text: "「以前、我々が月面で孤立した際、貴基地の支援を受けました。その恩義は、我々は忘れておりません」" },
    { text: "短い言葉だった。だが、それだけで十分だった。" },
    { text: "その通信が届いた日、基地内のすべての灯がほんのわずかに明るくなったように思えた。" },
    { text: "すぐに小さな宇宙船が届き、わずかな物資が届けられた。" },
    { text: "日本の支援を受け、最低限の維持活動は可能となった。" },
    { text: "決して贅沢ではなかったが、命をつなぐには十分だった。" },
    { text: "完成していた戦略核――決定的な光。地球を焼き尽くすことすら可能な力。" },
    { text: "本国は、その引き渡しを命じてきた。だが我々は、その命令を「処理中」として保留したまま、応答しなかった。" },
    { text: "やがて、催促も止まった。指揮系統が、崩れ始めていたのだ。" },
    { text: "我々は装置を地下の格納庫へ移し、起動コードを封印した。" },
    { text: "それを誰かに渡すことも、自ら使うことも、最後までなかった。" },
    { text: "静かな観測室で、日本の若い研究員がつぶやいた。" },
    { text: "「あれは……使われなかったのは、正しかったのでしょうか？」" },
    { text: "私は答えなかった。ただ、基地の外に広がる漆黒の地平を見つめていた。" },
    { text: "我々が手に入れた「陽」は、誰も照らさなかった	。" },
    { text: "だが同時に、誰の足元にも、影を落とさなかった" },
    { text: "それが、我々にできたすべてだった。" },
    { text: "遠くに、青く小さな地球が浮かんでいる。" },
    { text: "そこにはもう、帝国も、命令も、凱旋もない。" },
    { text: "だが月には、まだ沈黙が残っていた。" },
    { text: "そして、それを壊さなかったことが――" },
    { text: "唯一、我々が世界に残した選択だった。" }
  ];
  let currentTextIndex = 0;
  let isProcessingTYPE1 = false;
  // 初期テキストを表示
  if (story.length > 0) {
    textArea.textContent = story[0].text;
    currentTextIndex = 1; // 次に表示するのは2番目の要素
  }
  const clickHandler = function() {
    // 処理中なら何もしない
    if (isProcessingTYPE1) {
      console.log("処理中のためクリックを無視します");
      return;
    }
    isProcessingTYPE1 = true;
    // ストーリーの最後に到達したかチェック
    if (currentTextIndex >= story.length) {
      console.log("ストーリーの最後に到達しました");
      document.getElementById("modal-ending").removeEventListener("click", clickHandler);
      document.getElementById("modal-ending").classList.remove("fadein");
      document.getElementById("modal-ending").classList.add("fadeout");
      setTimeout(() => {
        document.getElementById("modal-ending").style.display = "none"
        document.getElementById("modal-restart").style.display = "block"
        document.getElementById("modal-restart").classList.add("fadein");
      }, 1000);
      return;
    }
    // 現在のテキストとアクションを取得
    const currentItem = story[currentTextIndex];
    // テキストを表示
    if (currentItem.text !== "") {
      textArea.textContent = currentItem.text;
    }
    // アクションがあれば実行
    if (typeof currentItem.action === 'function') {
      currentItem.action();
    }
    // 次のテキストインデックスに進む
    currentTextIndex++;
    isProcessingTYPE1 = false;
  };
  // テキストエリアにクリックイベントを追加
  document.getElementById("modal-ending").addEventListener("click", clickHandler);
  // 表示が終わったらイベントリスナを消しておく
  return function cleanup() {
    textArea.removeEventListener("click", clickHandler);
    console.log("TYPE2_2のイベントリスナーをクリーンアップしました");
  };
}
const TYPE2_4 = function () {
  console.log("TYPE1ルート - 我々が陽を照らす");
  // ボタンを非表示＆押せないように
  const btn1 = document.getElementById("endbutton-1");
  const btn2 = document.getElementById("endbutton-2");
  const btn3 = document.getElementById("endbutton-3");
  [btn1, btn2, btn3].forEach(btn => {
    btn.classList.add("fast-fadeout");
    btn.disabled = true;
    btn.style.pointerEvents = "none";
  });
  // 初期設定
  const textArea = document.getElementById("ending-text");
  const story = [
    { text: "総統が死んだ。" },
    { text: "それは、あまりに静かな終わりだった。" },
    { text: "――だが、そこから始まった。" },
    { text: "ボルマン、ゲーリング、ハイドリヒ――誰一人として「帝国」を導く器ではなかった。" },
    { text: "彼らが奪い合ったのは、理想ではなく、瓦礫の中の権力だけだった。" },
    { text: "地上では、黒い旗が翻るたびに血が流れた。" },
    { text: "帝国は、もはや秩序ではなく、暴力そのもので満たされた。" },
    { text: "帝国はすでに腐っていた。" },
    { text: "いや、だれも口にしなかったが最初から腐っていたのかもしれない。" },
    { text: "ドイツ国民が皆握りしめていた同じ夢の破片は、鋭いばかりで傷つけることしかしなかった。" },
    { text: "月――地球の記憶から切り離されたこの場所で、帝国の残響に耳を澄ませていた。" },
    { text: "かつて信じたものは、本当にただの狂気だったのか。" },
    { text: "あの巨大な凱旋門の下を、誰の命が通っていたのか。" },
    { text: "光は、誰のために照らされていたのか。" },
    { text: "地上では内戦が拡大し、秩序はもはや記号にすぎない。" },
    { text: "「再建」を口にする者の誰一人として、何を壊したかを語ろうとはしなかった。" },
    { text: "――ならば、自分が終わらせる。" },
    { text: "ならば、自分が照らす。" },
    { text: "私は、月面基地に秘匿されていた戦略兵器の最終認証を通す。" },
    { text: "それは、かつて「太陽爆弾」と呼ばれた新型の核兵器。" },
    { text: "目標は、帝都ゲルマニア――死せる帝国の心臓部。" },
    { text: "それは「破滅」ではない。" },
    { text: "それは、帝国という亡霊に与える、最後の「夜明け」だった。" },
    { text: "鷲はもはや飛べない。" },
    { text: "鋼鉄の帝国は、錆び、崩れ、朽ちた。" },
    { text: "だが――我々が陽を照らす。" },
    { text: "照らすのは、未来ではない。" },
    { text: "過去に葬られるべき、亡骸の影だ。" },
    { text: "新たな帝国など、どこにもない。" },
    { text: "ただ、その墓標として、世界に光を落とす。" },
    { text: "その閃光は、夜の大地を照らし、そしてすべてを呑み込んだ。" },
    { text: "月の空には、何も響かない。" },
    { text: "だが確かに、そこには「ひとつの意思」があった――" }
  ];
  let currentTextIndex = 0;
  let isProcessingTYPE1 = false;
  // 初期テキストを表示
  if (story.length > 0) {
    textArea.textContent = story[0].text;
    currentTextIndex = 1; // 次に表示するのは2番目の要素
  }
  const clickHandler = function() {
    // 処理中なら何もしない
    if (isProcessingTYPE1) {
      console.log("処理中のためクリックを無視します");
      return;
    }
    isProcessingTYPE1 = true;
    // ストーリーの最後に到達したかチェック
    if (currentTextIndex >= story.length) {
      console.log("ストーリーの最後に到達しました");
      document.getElementById("modal-ending").removeEventListener("click", clickHandler);
      document.getElementById("modal-ending").classList.remove("fadein");
      document.getElementById("modal-ending").classList.add("fadeout");
      setTimeout(() => {
        document.getElementById("modal-ending").style.display = "none"
        document.getElementById("modal-restart").style.display = "block"
        document.getElementById("modal-restart").classList.add("fadein");
      }, 1000);
      return;
    }
    // 現在のテキストとアクションを取得
    const currentItem = story[currentTextIndex];
    // テキストを表示
    if (currentItem.text !== "") {
      textArea.textContent = currentItem.text;
    }
    // アクションがあれば実行
    if (typeof currentItem.action === 'function') {
      currentItem.action();
    }
    // 次のテキストインデックスに進む
    currentTextIndex++;
    isProcessingTYPE1 = false;
  };
  // テキストエリアにクリックイベントを追加
  document.getElementById("modal-ending").addEventListener("click", clickHandler);
  // 表示が終わったらイベントリスナを消しておく
  return function cleanup() {
    textArea.removeEventListener("click", clickHandler);
    console.log("TYPE2_4のイベントリスナーをクリーンアップしました");
  };
}




document.getElementById("endbutton-1").addEventListener("click", TYPE1_1);
document.getElementById("endbutton-2").addEventListener("click", TYPE1_2);
document.getElementById("endbutton-4").addEventListener("click", TYPE2_4)
// ボタン3のみ選択肢を更新する
document.getElementById("endbutton-3").addEventListener("click", function(){
  // 一度ボタンを非表示
  document.getElementById("endbutton-1").classList.add("fast-fadeout");
  document.getElementById("endbutton-2").classList.add("fast-fadeout");
  document.getElementById("endbutton-3").classList.add("fast-fadeout");
  // ボタンを押せなくする
  document.getElementById("endbutton-1").disabled = true;
  document.getElementById("endbutton-2").disabled = true;
  document.getElementById("endbutton-3").disabled = true;
  // 見えなくなった後...
  setTimeout(() => {
  // ボタン1と2を更新
    document.getElementById("endbutton-1").textContent = "ハイドリヒにつく";
    document.getElementById("endbutton-2").textContent = "この国に未来はない";
    document.getElementById("endbutton-4").textContent = "我々が陽を照らす";
    document.getElementById("endbutton-1").removeEventListener("click", TYPE1_1);
    document.getElementById("endbutton-2").removeEventListener("click", TYPE1_2);
    document.getElementById("endbutton-1").addEventListener("click", TYPE2_1);
    document.getElementById("endbutton-2").addEventListener("click", TYPE2_2);
    // 条件に合致するものだけ表示
    if(document.getElementById("ENDING_TYPE1_HEYDRICH").textContent == "true") {
      document.getElementById("endbutton-1").classList.remove("fast-fadeout");
      document.getElementById("endbutton-1").classList.add("fast-fadein");
      document.getElementById("endbutton-1").disabled = false;
    }
    if(document.getElementById("ENDING_TYPE1_BETRAY").textContent == "true") {
      document.getElementById("endbutton-2").classList.remove("fast-fadeout");
      document.getElementById("endbutton-2").classList.add("fast-fadein");
      document.getElementById("endbutton-2").disabled = false;
    }
    if(document.getElementById("ENDING_TYPE1_SHINETHESUN").textContent == "true") {
      document.getElementById("endbutton-4").classList.remove("no-display");
      document.getElementById("endbutton-4").classList.add("fast-fadein");
    }
  }, 500);
});

document.getElementById("restart-button").addEventListener("click", () => {
  document.getElementById("modal-restart").classList.add("fadeout");
  setTimeout(() => {
    location.reload();
  }, 1000);
});