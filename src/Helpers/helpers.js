export const makeDimensionalArray = (w, h, val) => {
  let arr = [];
  for (let i = 0; i < h; i++) {
    arr[i] = [];
    for (let j = 0; j < w; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
};

export const getMessages = (params) => {
  return [
    {
      name: "Error",
      code: 10,
      buttonCaption: `Okay, continue 😏`,
      message: `Opps! Something went wrong!`,
      action: "continue",
    },
    {
      name: "Error",
      code: 11,
      buttonCaption: "😞 Replay?",
      message: "Unfortunately, Game over...",
      action: "replay",
    },
    {
      name: "Error",
      code: 99,
      buttonCaption: "😞 Replay?",
      message: "There is no way! End of the game. The queen has caught you! ♕",
      action: "replay",
    },
    {
      name: "Success",
      code: 100,
      buttonCaption: "😎 REPLAY",
      message: "Congrats 🎉",
      action: "replay",
    },
    {
      name: "Success",
      code: 102,
      buttonCaption: "😎 Play It!",
      message: "Yeah! Like this 🎉",
      action: "replay",
    },
    {
      name: "Success",
      code: 101,
      message: "Just click cells 🥳",
      buttonCaption: "Start Game 🚀",
      action: "startGame",
    },
  ];
};

export const getMessage = (code, params = {}) => {
  return getMessages(params).find((message) => message.code === code);
};
