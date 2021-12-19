/*
 * @author Muhammet Akkurt
 * @github https://github.com/muhammetakkurt
 */

import { makeDimensionalArray } from "./helpers";

let x = 0;
let y;
class Chess {
  constructor(X = 0, Y = 0, setLocations, setResultBoard) {
    this.X = X;
    this.Y = Y;
    this.setLocations = setLocations;
    this.setResultBoard = setResultBoard;
  }
  emptyValue = " ";
  pathValue = "×";
  board = makeDimensionalArray(8, 8, this.emptyValue);
  queenIcon = "♕";
  walkChess = async () => {
    for (x = 0; x < 8; x++) {
      y = this.Y;

      this.setLocations(`${x + 1}, ${y + 1}`);
      await this.sleep(500);
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
          await this.sleep(1000);
          this.clearBoard();
        } else if (this.board[x][y] === this.pathValue) {
          this.findAWay();
        } else {
          this.setQueen();
          await this.sleep(500);
          break;
        }
      }
      await this.markPosibblePathsOfQueen();
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
    this.setLocations(`${x + 1}, ${y + 1}`);
  };

  markPosibblePathsOfQueen = async () => {
    if (this.board[x][y] === this.queenIcon) {
      const toBottom = async () => {
        let newX = x + 1;
        while (newX < 8) {
          this.board[newX][y] = this.pathValue;
          this.setResultBoard(this.board);

          newX++;
          this.setLocations(`${newX + 1}, ${y + 1}`);
          await this.sleep(50);
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
          this.setLocations(`${newX + 1}, ${newY + 1}`);
          await this.sleep(50);
        }
      };

      const toLeft = async () => {
        let newY = y - 1;
        while (newY >= 0) {
          this.board[x][newY] = this.pathValue;
          this.setResultBoard(this.board);

          newY--;
          this.setLocations(`${x + 1}, ${newY + 1}`);
          await this.sleep(50);
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
          this.setLocations(`${newX + 1}, ${newYI + 1}`);
          await this.sleep(50);
        }
      };
      const toRight = async () => {
        let newYI = y + 1;
        while (newYI < 8) {
          // to right
          this.board[x][newYI] = this.pathValue;
          this.setResultBoard(this.board);

          newYI++;
          this.setLocations(`${x + 1}, ${newYI + 1}`);
          await this.sleep(50);
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
