import { useDispatch, useSelector } from "react-redux";
import { Button, GameLife } from ".";
import { showPath, hidePath } from "./../Store/chessPathShow";

const Header = ({ handleClickCell, handleRestartGame, autoFinder }) => {
  const dispatch = useDispatch();
  const gameLifeCount = useSelector((state) => state.gameLifeCount.value);
  const chessPathShow = useSelector((state) => state.chessPathShow.value);

  const handleChessPathShowClick = () => {
    return dispatch(chessPathShow ? hidePath() : showPath());
  };

  return (
    <header className="header">
      <div className="button-group">
        <Button onClick={handleChessPathShowClick}>
          {chessPathShow ? "Hide" : "Show"} Queen`s Path
        </Button>
        <Button onClick={handleRestartGame}>{"Restart Game"}</Button>
        <Button
          disabled={autoFinder}
          onClick={() => handleClickCell(0, Math.floor(Math.random() * 8))}
        >
          Show How Can?
        </Button>
      </div>
      <GameLife gameLifeCount={gameLifeCount} />
    </header>
  );
};

export default Header;
