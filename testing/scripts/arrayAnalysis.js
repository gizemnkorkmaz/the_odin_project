function analyse(array) {
  const length = array.length;
  const average = array.reduce((prev, curr) => prev + curr, 0) / length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyse;
