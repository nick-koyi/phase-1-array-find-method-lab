// code your solution here
function superbowlWin(arrRecords) {
  // define the a variable that contains the year won
  let yearWon;
  arrRecords.find((arrRecord) => {
    if (arrRecord.result === "W") {
      yearWon = arrRecord.year;
    }
    return yearWon;
  });
  return yearWon;
}
