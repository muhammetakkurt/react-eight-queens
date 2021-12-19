import { useState } from "react";
import Chess from "./Helpers/chess";
import Cell from "./Components/Cell";
import { makeDimensionalArray } from "./Helpers/helpers";

const App = () => {
  const [resultBoard, setResultBoard] = useState(
    makeDimensionalArray(8, 8, " ")
  );
  const [locations, setLocations] = useState(0);

  const handleClickCell = (X, Y) => {
    let chess = new Chess(X, Y, setLocations, setResultBoard);
    chess.clearBoard();
    chess.walkChess();
  };

  return (
    <div className="wrapper">
      <div className="board animate__animated animate__zoomInUp">
        {resultBoard.map((boardX, X) =>
          boardX.map((boardY, Y) => (
            <Cell
              key={`${X}_${Y}`}
              className={`item ${(X + Y) % 2 === 0 ? " odd" : " even"} ${
                resultBoard[X][Y] === new Chess().pathValue &&
                "possible animate__animated animate__pulse"
              }`}
              onClick={() => handleClickCell(X, Y)}
            >
              {resultBoard[X][Y] !== new Chess().pathValue && resultBoard[X][Y]}
            </Cell>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
