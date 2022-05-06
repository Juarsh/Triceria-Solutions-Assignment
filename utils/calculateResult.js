const calculateResult = (...inputs) => {
  const obj = {};
  inputs.forEach((item1, index1) => {
    obj[`player${index1+1}`] = [];
    inputs.forEach((item2, index2)=> {
      if(index1 != index2)
        obj[`player${index1+1}`].push( ((item1-item2 == 1) && (item1 > item2)) || (item1 == 0 && item2 == 2) ? 1 : 0 );
      else
        obj[`player${index1+1}`].push('-');
    })
  })
  return obj;
};

module.exports = calculateResult;
