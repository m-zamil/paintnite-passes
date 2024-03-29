window.onload = function () {
  if (window.LottieInteractivity) {
    LottieInteractivity.create({
      player: "#worksLottieM",
      mode: "scroll",
      container: "#worksAnimationPlay",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [25, 189],
        },
      ],
    });

    LottieInteractivity.create({
      player: "#worksLottieD",
      mode: "scroll",
      container: "#worksAnimationPlay",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [25, 189],
        },
      ],
    });

    LottieInteractivity.create({
      player: "#orange__circlePlayer",
      mode: "scroll",
      container: "#orange__circleCont",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [0, 100],
        },
      ],
    });

    LottieInteractivity.create({
      player: "#apronPlayer",
      mode: "scroll",
      container: "#apronContainer",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [0, 100],
        },
      ],
    });

    LottieInteractivity.create({
      player: "#redeemBrushPlayer",
      mode: "scroll",
      container: "#redeemBrushCont",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [50, 75],
        },
      ],
    });

    LottieInteractivity.create({
      player: "#greencirclePlayer",
      mode: "scroll",
      container: "#greenCircleCont",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [0, 100],
        },
      ],
    });
  }
};
