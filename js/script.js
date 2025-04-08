document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loading");
  const loadingVideo = document.querySelector(".loading__video");
  const loadingBar = document.querySelector(".loading__bar");
  const titleElements = document.querySelectorAll(
    ".title-sub, .title, .description"
  );

  // ローディングバーのアニメーション完了を監視
  loadingBar.addEventListener("animationend", (e) => {
    // まずバーを非表示に
    loadingBar.style.opacity = "0";

    // 少し待ってからローディング画面全体を非表示に
    setTimeout(() => {
      loading.classList.add("is-hidden");

      // 動画を停止してメモリを解放
      loadingVideo.pause();
      loadingVideo.remove();

      // タイトル要素を順番に表示
      titleElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("is-active");
        }, 600 + index * 200);
      });
    }, 300); // バーのフェードアウトを待つ
  });
});
