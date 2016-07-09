function titleCase(str) {
  return str
    .split(' ')
    .map((word) =>
      word.length ? word[0].toUpperCase() + word.slice(1, word.length) : ''
    ).join(' ');
}

export function capitalize(str) {
  return titleCase(str);
}
