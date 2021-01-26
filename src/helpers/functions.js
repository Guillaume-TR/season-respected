const reduceMonthWord = (word) => {
  let newWord = word;

  if (word.length > 4) {
    if ((word.slice(2, 3) === 't') ||
        (word.slice(2, 3) === 'v') ||
        (word.slice(2, 3) === 'c'))
    {
      newWord = word.slice(0, 3) + '.';
    }
    else {
      newWord = word.slice(0, 4) + '.';
    }
  }

  return newWord;
}

export { reduceMonthWord };
