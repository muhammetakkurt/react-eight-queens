/*
 * @author Muhammet Akkurt
 * @github https://github.com/muhammetakkurt
 */
import { getMessage, makeDimensionalArray } from "./helpers";

let x = 0;
let y;
class Chess {
  constructor(
    X = 0,
    Y = 0,
    setSuccessXLocation,
    setResultBoard,
    resultBoard = null
  ) {
    this.X = X;
    this.Y = Y;
    this.x = X;
    this.y = Y;
    this.setSuccessXLocation = setSuccessXLocation;
    this.setResultBoard = setResultBoard;
    this.board =
      resultBoard !== null
        ? resultBoard
        : makeDimensionalArray(8, 8, this.emptyValue);
  }
  emptyValue = " ";
  pathValue = "×";
  queenIcon = "♕";
  setSelectedChess = async () => {
    x = this.X;
    y = this.Y;

    if (
      this.board[x][0] === this.pathValue &&
      this.board[x][1] === this.pathValue &&
      this.board[x][2] === this.pathValue &&
      this.board[x][3] === this.pathValue &&
      this.board[x][4] === this.pathValue &&
      this.board[x][5] === this.pathValue &&
      this.board[x][6] === this.pathValue &&
      this.board[x][7] === this.pathValue
    ) {
      throw getMessage(99);
    } else if (this.board[x][y] === this.pathValue) {
      throw getMessage(10);
    } else {
      this.setQueen();
      await this.markPosibblePathsOfQueen();
      this.setSuccessXLocation(x + 1);
      await this.sleep(100);
    }
  };
  walkChess = async () => {
    for (x = 0; x < 8; x++) {
      y = this.Y;

      this.setSuccessXLocation(x);
      while (true) {
        if (
          this.board[x][0] === this.pathValue &&
          this.board[x][1] === this.pathValue &&
          this.board[x][2] === this.pathValue &&
          this.board[x][3] === this.pathValue &&
          this.board[x][4] === this.pathValue &&
          this.board[x][5] === this.pathValue &&
          this.board[x][6] === this.pathValue &&
          this.board[x][7] === this.pathValue
        ) {
          this.clearBoard();
        } else if (this.board[x][y] === this.pathValue) {
          this.findAWay();
        } else {
          this.setQueen();
          await this.sleep(10);
          break;
        }
      }
      await this.markPosibblePathsOfQueen();
      this.setSuccessXLocation(x + 1);
    }
  };

  findAWay = () => {
    y = Math.floor(Math.random() * 8);
  };

  sleep = async (time = 200) => {
    await new Promise((r) => setTimeout(r, time));
  };

  clearBoard = () => {
    for (let p = 0; p < 8; p++) {
      for (let w = 0; w < 8; w++) {
        this.board[p][w] = this.emptyValue;
        x = 0;
        this.setResultBoard(this.board);
      }
    }
  };

  setQueen = () => {
    this.board[x][y] = this.queenIcon;
    this.setResultBoard(this.board);
  };

  markPosibblePathsOfQueen = async () => {
    if (this.board[x][y] === this.queenIcon) {
      const toBottom = async () => {
        let newX = x + 1;
        while (newX < 8) {
          this.board[newX][y] = this.pathValue;
          this.setResultBoard(this.board);
          newX++;
          await this.sleep(10);
        }
      };

      const toLeftBottom = async () => {
        let newY = y - 1;
        let newX = x + 1;
        while (newY >= 0 && newX < 8) {
          this.board[newX][newY] = this.pathValue;
          this.setResultBoard(this.board);
          newY--;
          newX++;
          await this.sleep(10);
        }
      };

      const toLeft = async () => {
        let newY = y - 1;
        while (newY >= 0) {
          this.board[x][newY] = this.pathValue;
          this.setResultBoard(this.board);

          newY--;
          await this.sleep(10);
        }
      };

      const toRightBottom = async () => {
        let newYI = y + 1;
        let newX = x + 1;
        while (newYI < 8 && newX < 8) {
          this.board[newX][newYI] = this.pathValue;
          this.setResultBoard(this.board);

          newX++;
          newYI++;
          await this.sleep(10);
        }
      };
      const toRight = async () => {
        let newYI = y + 1;
        while (newYI < 8) {
          this.board[x][newYI] = this.pathValue;
          this.setResultBoard(this.board);

          newYI++;
          await this.sleep(10);
        }
      };

      await toBottom();
      await toLeftBottom();
      await toLeft();
      await toRightBottom();
      await toRight();
    }
  };
}

export default Chess;
