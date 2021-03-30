module.exports = {

  add : (a, b) => {
    return a + b;
  },

  sub : (a, b) => {
    return a - b;
  },

  mul : (a, b) => {
    return a * b;
  },

  div : (a, b) => {
    if (b === 0) {
      throw new Error('Division par zéro impossibles.');
    }
  },

  prct : (a, prct) => {
    let result = CalculService.mul(a,prct);
    result = CalculService.div(result, 100);
    return result;
  }
}
