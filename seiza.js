//事前の設定プログラム
let seiza = ["おひつじ座","おうし座","ふたご座","かに座","しし座","おとめ座","てんびん座","さそり座","いて座","やぎ座","みずがめ座","うお座",];
let color = ["赤","青","緑","黄色","紫","ピンク","茶","白","黒",];
let un0 = ["最高","良い","ふつう","ちょっと悪い","サイアク",];//４グループに分けて、ちょっと悪いとちょっと良いの間にふつうを作る
let un1 = [
"今日のアナタは絶好調！何をやってもうまくいきます。苦手なことに再チャレンジしたら案外うまくいくかも！",
"今日は調子が良い日。久しぶりに昔の友だちに連絡してもるのもいいかも！",
"今日はとてもいつもどおりな日。気を抜きすぎて寝坊をしやすくなるかも？",
"今日はなんだか気分が良くない日。忘れ物には気をつけて！",
"今日は何もせずゆっくりしているのが良いかも・・・",
];

let i = 0;//繰り返し用プログラム
let n = 0;//繰り返し用プログラム

let rank= [];//ランキングのための変数
let un = 0;//運勢を判別するための変数
let color_r = Math.floor( Math.random() * color.length);//ラッキーカラー
let un_r = Math.floor( Math.random() * seiza.length);//運勢をランキングを選ぶ

var resultHtml = "<p>今日の星座ランキング</p>"

 for (i=0 ;i < seiza.length;){

    n = 0;//変数をリセット
    un_r = Math.floor( Math.random() * seiza.length);//運勢のランキングを選ぶ
    color_r = Math.floor( Math.random() * color.length);//ラッキーカラー

    while(n < seiza.length){
      if (seiza[un_r] != rank[n]){n++;}
      else {break;}
    }

    if (n >= seiza.length){

      i++;//iにプラス１を追加

        if (i >= 0 && i <= 2) {un = 0;}
        else if (i >= 3 && i <= 5) {un = 1;}
        else if (i >= 6 && i <= 8) {un = 2;}
        else if (i >= 9 && i <= 10) {un = 3;}
        else if (i >= 11 && i <= 12) {un = 4;} 

    //書き出しのプログラム
        document.write("<ul style='padding-left: 300px;'");
        document.write("<li>第"+ i +"位"+ seiza[un_r] +"</li>");
        document.write("<li>今日のアナタの運勢は"+ un0[un] + "です</li>");
        document.write("<li>"+ un1[un] +"</li>");
        document.write("<li>今日のラッキーカラーは"+ color[color_r] +"です</li>");
        document.write("</ul>");

      rank.push(seiza[un_r]);//リストに記憶

     }

    }
