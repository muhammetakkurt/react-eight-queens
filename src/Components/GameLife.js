const GameLife = ({ gameLifeCount = 0 }) => {
  const gameLife =
    gameLifeCount > 0 &&
    new Array(gameLifeCount)
      .fill()
      .map((x, y) => <span key={y} className="game-life"></span>);

  return <div className="game-life-container">{gameLife}</div>;
};

export default GameLife;
