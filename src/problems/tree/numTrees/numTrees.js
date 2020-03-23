/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let c = 1;
  for (let i = 0; i < n; i += 1) {
    c = c * 2 * (2 * i + 1) / (i + 2);
  }
  
  return c;
};
