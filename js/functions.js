function checkStringLength (string,length) {
  return string.length <= length;
}

function checkStringPalindrome (string) {
  string = string.toUpperCase().replaceAll(' ','');
  for (let i = 0; i <= string.length / 2; i++) {
    if (string[i] === string[string.length - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function getNumberFromString (string) {
  if (typeof(string) === 'number') {
    string = string.toString();
  }
  string = string.replaceAll(' ','');
  let numberString = '';
  for (let i = 0; i <= string.length; i++) {
    if (isNaN(string[i])) {
      continue;
    } else {
      numberString += string[i];
    }
  }
  return numberString.length > 0 ? Number(numberString) : NaN;
}

function addCharactersToString (sourceString,minLength,filler) {
  let arr = [];
  const itemsAdd = minLength - sourceString.length;
  if (itemsAdd < 0) {
    return sourceString;
  } else if (filler.length > itemsAdd) {
    sourceString = filler.substr(0, itemsAdd) + sourceString;
    return sourceString;
  } else {
    for (let i = itemsAdd; i >= 0; i--) {
      sourceString = arr.join('') + sourceString;
      arr = [];
      for (let j = 0; j < filler.length; j++) {
        if ((j + sourceString.length) >= minLength) {
          break;
        }
        arr.push(filler[j]);
      }
    }
    return sourceString;
  }
}
