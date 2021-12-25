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
      information: `Okay, continue 😏`,
      message: `Opps! Something went wrong!`,
      action: "continue",
    },
    {
      name: "Error",
      code: 11,
      information: "😞 Replay?",
      message: "Unfortunately, Game over...",
      action: "replay",
    },
    {
      name: "Error",
      code: 99,
      information: "😞 Replay?",
      message: "There is no way! End of the game. The queen has caught you! ♕",
      action: "replay",
    },
    {
      name: "Success",
      code: 100,
      information: "😎 REPLAY",
      message: "Congrats 🎉",
      action: "replay",
    },
    {
      name: "Success",
      code: 101,
      message: "Just click cells 🥳",
      information: "Start Game 🚀",
      action: "startGame",
    },
  ];
};

export const getMessage = (code, params = {}) => {
  return getMessages(params).find((message) => message.code === code);
};
