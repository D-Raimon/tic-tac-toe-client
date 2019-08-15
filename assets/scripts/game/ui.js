'use strict'

const playerOne = 'X'
const playerTwo = 'O'
// let startBoard = ['', '', '', '', '', '', '', '', '']
// const winCombo = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]
//
// const startGame = () => {
//   let player = currentPlayer()
// }
//
const currentPlayer = () => {
  for (let i = 0; i < board.length; i++) {
    if (board.length === 1 || board.length === 3 || board.length === 5 || board.length === 7 || board.length === 9)
    return playerOne
  } else {
    return playerTwo
  }
}
//
// const checkWin = () => {
//
// }
//
//
//
// module.exports = {
//   startGame,
//
// }
