// board = "";
// size = 8;
// for (row = 0; row < size; row += 1){
//   board = "";
//
//     for (width = 0; width < size / 2; width += 1){
//       if (row % 2 == 0) {
//         board += " ";
//         board += "#";
//       } else {
//         board += "#";
//         board += " ";
//       }
//     }
//   console.log(board);
// }

//version 2
board = "";
size = 8;

for (row = 0; row < size; row += 1){
  for (width = 0; width < size / 2; width += 1){
    if (row % 2 == 0) {
      board += " #";

    } else {
      board += "# ";
    }
  }
  console.log(board);
  board = "\n";
}
