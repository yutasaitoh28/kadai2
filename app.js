$(function() {
    $("#getResult").click(function() {
        // 名前の取得
        var name = $('#name').val();
        if (name === ""){
            alert("名前を入力して下さい");
        }

        // 運勢結果の候補
        var actions = ['ランニング', '読書', 'プログラミング', '食事', '散歩'];
        var partners = ['家族', '友達', '恋人', '先生', 'わんこ'];
        var situations = ['遊園地', '吉野家', '山', '川', '海', 'ディズニーランド', '渋谷', 'カフェ'];

        var action = pickUpAtRandom(actions);
        var partner = pickUpAtRandom(partners);
        var situation = pickUpAtRandom(situations);

        var result = "『" + name + "』さんは明日『" + situation + "』で『" + partner + "』と『" + action + "』すると運気がアップします！";
        
        // 結果をHTML用に編集
        var resultHtml = "<h2>結果</h2><p>" + result + "</p>";

        // 画像の表示
        var resultImg = "<p><img id='img'></p>"

        // tweetリンクを生成
        var tweetHtml = "<p><a href='https://twitter.com/intent/tweet?hashtags=Gz&text=" + encodeURIComponent(result) + " jQueryの授業より'>結果をツイート</a></p>";
        
        // 占いの結果を表示する
        $("#result").html(resultHtml + resultImg + tweetHtml)

        if(action === 'ランニング'){
            $("#img").attr('src','images/running.jpeg');
        }else if(action === '読書'){
            $("#img").attr('src','images/reading.jpeg');
        }else if(action === 'プログラミング'){
            $("#img").attr('src','images/programming.jpeg');
        }else if(action === '食事'){
            $("#img").attr('src','images/eating.jpeg');
        }else{
            $("#img").attr('src','images/walking.jpeg');
        }

        $(".button01").css("display", "block");

    });
});

$(function(){
    $("#getResult").click(function() {
      $("#button01").css("display", "block");
    });
});

// 配列を受け取り、要素の一つをランダムで返す
function pickUpAtRandom(ary){
    return ary[Math.floor(Math.random() * (ary.length))];
}

