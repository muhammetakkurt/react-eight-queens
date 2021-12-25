import { useSelector } from "react-redux";
import { Cell } from ".";

const Board = ({ board, successXLocation, chess, handleClickCell }) => {
  const chessPathShow = useSelector((state) => state.chessPathShow.value);

  return board.map((boardX, X) =>
    boardX.map((boardY, Y) => (
      <Cell
        key={`${X}_${Y}`}
        className={`item ${(X + Y) % 2 === 0 ? " odd" : " even"} ${
          board[X][Y] === chess.pathValue &&
          chessPathShow &&
          "possible animate__animated animate__pulse"
        }`}
        disabled={successXLocation < X}
        onClick={() => handleClickCell(X, Y)}
      >
        {board[X][Y] !== chess.pathValue && board[X][Y]}
      </Cell>
    ))
  );
};

export default Board;
