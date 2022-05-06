const { calculateResult, getTotalResult } = require("../utils");

const getGameStartController = async (req, res) => {
  const result = [];
  for(let i = 0; i < 50; i++){
    let player1Input = Math.floor(Math.random() * 3);
    let player2Input = Math.floor(Math.random() * 3);
    let player3Input = Math.floor(Math.random() * 3);
    let player4Input = Math.floor(Math.random() * 3);
    console.log(player1Input, player2Input, player3Input, player4Input);
    let currIterationresult = calculateResult(player1Input, player2Input, player3Input, player4Input);
    let updatedResult = i==0 ? currIterationresult : getTotalResult(currIterationresult, result[i-1]);
    result.push(updatedResult);
  }
  return res.send(result);
};

module.exports = getGameStartController;
