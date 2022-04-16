
const containerDiv = document.createElement("div");
containerDiv.className = "containerDiv";
document.body.appendChild(containerDiv);

const chessTable = document.createElement("table");
containerDiv.appendChild(chessTable);

function rowStartBlack(row) {
    for(let i=0; i<8; i++) {
      if(i % 2 == 0) {
        let chessTile = row.insertCell(i);
        chessTile.className = "blackTile";
      }
      else {
        let chessTile = row.insertCell(i);
        chessTile.className = "whiteTile";
      }
    }
  }
  function rowStartWhite(row) {
      for(let i=0; i<8; i++) {
        if(i % 2 == 0) {
          let chessTile = row.insertCell(i);
          chessTile.classList.add("whiteTile");
        }
        else {
          let chessTile = row.insertCell(i);
          chessTile.classList.add("blackTile");
        }
      }
  }

for(let i=0; i<8; i++) {
  let chessRow = chessTable.insertRow(i);
  if (i % 2 == 0) {
    rowStartBlack(chessRow);
  }
  else {
    rowStartWhite(chessRow);
  }
}
