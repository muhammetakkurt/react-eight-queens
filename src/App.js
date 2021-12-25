import { useEffect, useState } from "react";
import Chess from "./Helpers/chess";
import { getMessage, makeDimensionalArray } from "./Helpers/helpers";
import { Board, Header, Modal } from "./Components";
import { hidePath, showPath } from "./Store/chessPathShow";
import { decrease, setDefault } from "./Store/gameLifeCount";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "./Store/gameStarted";

const App = () => {
  let defaultModalParameters = getMessage(101);
  const dispatch = useDispatch();
  const gameStatus = useSelector((state) => state.gameStarted.status);
  const gameLifeCount = useSelector((state) => state.gameLifeCount.value);
  const [autoFinder, setAutoFinder] = useState(false);

  const [modalStatus, setModalStatus] = useState({
    showModal: true,
    message: defaultModalParameters.message,
    information: defaultModalParameters.information,
    action: "startGame",
  });

  const [resultBoard, setResultBoard] = useState(
    makeDimensionalArray(8, 8, " ")
  );
  const [successXLocation, setSuccessXLocation] = useState(0);
  let CHESS = new Chess();

  useEffect(() => {
    switch (gameStatus) {
      case "continue":
        setModalStatus((prevState) => ({
          ...prevState,
          showModal: false,
        }));
        dispatch(setStatus({ status: "started" }));
        break;
      case "replayed" || ("continue" && gameLifeCount === 0):
        handleRestartGame();
        setModalStatus((prevState) => ({
          ...prevState,
          showModal: false,
        }));
        break;
      case "started":
        setModalStatus((prevState) => ({
          ...prevState,
          showModal: false,
        }));
        break;
      default:
        break;
    }
  }, [gameStatus]);

  useEffect(() => {
    setModalStatus({
      ...getMessage(100),
      showModal: true,
    });
  }, [successXLocation === 8 && autoFinder === false]);

  const handleRestartGame = () => {
    dispatch(setStatus({ status: "started" }));
    setSuccessXLocation(0);
    setResultBoard(makeDimensionalArray(8, 8, " "));
    dispatch(setDefault());
    dispatch(hidePath());
  };

  const handleClickCell = (X, Y) => {
    if (["started", "continue"].includes(gameStatus)) {
      let chess = new Chess(
        X,
        Y,
        setSuccessXLocation,
        setResultBoard,
        resultBoard
      );
      chess.setSelectedChess().catch(async (error) => {
        dispatch(decrease());
        dispatch(showPath());
        if (gameLifeCount === 0) {
          setModalStatus({
            ...getMessage(11),
            showModal: true,
          });
        } else {
          setModalStatus({ ...error, showModal: !modalStatus.showModal });
        }
      });
    }
  };

  const walkChessBoard = async (X, Y) => {
    setAutoFinder(true);
    dispatch(setDefault());
    dispatch(hidePath());
    let chess = new Chess(X, Y, setSuccessXLocation, setResultBoard);
    chess.clearBoard();
    await chess.walkChess();
    setAutoFinder(false);
  };

  return (
    <div className="wrapper">
      <Header
        handleClickCell={walkChessBoard}
        handleRestartGame={handleRestartGame}
        autoFinder={autoFinder}
      />
      <div className="board animate__animated animate__zoomInUp">
        <Board
          board={resultBoard}
          successXLocation={successXLocation}
          chess={CHESS}
          handleClickCell={handleClickCell}
        />
      </div>
      <Modal
        active={modalStatus.showModal}
        text={modalStatus.message}
        buttonText={modalStatus.information}
        action={modalStatus.action}
      />
    </div>
  );
};

export default App;
