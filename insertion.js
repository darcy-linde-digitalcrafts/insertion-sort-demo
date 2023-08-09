const insertion = (input) => {
  let i = 1;
  while (i < input.length) {
    let j = i;
    while (j > 0 && input[j - 1] > input[j]) {
      const temp = input[j - 1];
      input[j - 1] = input[j];
      input[j] = temp;
      j--;
    }
    i++;
  }
  return input;
};
