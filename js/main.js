//スライドメニュー
const openBtn = document.querySelector("#menu-open"); //開くボタン
const closeBtn = document.querySelector("#menu-close"); //閉じるボタン
const menuPanel = document.querySelector("#menu-all"); //パネル全体
const menuLists = document.querySelectorAll(".menu-list li"); //リスト配列
// メニュー全体で使いまわすtimingOptions
const menuOptions = {
    duration: 1100, // アニメーション時間 1.4秒
    easing:'ease', // アニメーション加速度
    fill:'forwards', // 終了状態保持
};

// メニューを開く処理
openBtn.addEventListener('click', () => {
    // メニューパネルの表示処理
    menuPanel.animate(
        {
            translate: ["100vw", 0],
        },
        menuOptions,
    );
});

// メニューを閉じる処理
closeBtn.addEventListener("click", () => {
    menuPanel.animate(
        {
            translate: [0, "100vw"],
        },
        menuOptions,
    );
});