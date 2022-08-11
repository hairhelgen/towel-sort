
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(!matrix) {
    return [];
  }
  
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2) {
      arr.push(matrix[i].reverse());
    } else arr.push(matrix[i]);
  }
  return arr.flat();
}