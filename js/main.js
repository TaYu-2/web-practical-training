//スライドメニュー
(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);

const fadeAnimation = (entries, obs) =>{
    // entriesは配列なのでforEachで展開
    entries.forEach((entry) =>{
        // アニメーション処理
        if(entry.isIntersecting){ //交差していたら
            entry.target.animate(
                {
                    opacity:[0,1] /* 不透明度　0% ⇒100%*/,
                    translate:["0 5rem" ,0] /* 移動　x0 y5rem ⇒0*/,
                    filter:["blur(.5rem)", "blur(0)"] /* フィルター　ぼかし5rem　⇒0ぼかし無し*/,
                },
                {
                    duration: 1000 /* アニメーション時間*/,
                    easing: "ease" /* アニメーション加速度*/,
                    fill: "forwards" /* アニメーション終了状態保持*/,
                }
            );
            // 一度アニメーションが起きたら監視を外す処理
            obs.unobserve(entry.target);
        }
    });
};


// 1.交差(Intersection)監視(Observer)用のインスタンス生成
const fadeObserver = new IntersectionObserver(fadeAnimation);

// 2.どれを監視するかインスタンスに指示
const fadeIns = document.querySelectorAll(".fadeIn");
// 配列をForEachで展開
fadeIns.forEach((fadeIn)=>{
    // 監視処理
    fadeObserver.observe(fadeIn);
});
