// Функция для проверки длины строки.
function checkStringLength (string,length) {
  return string.length <= length;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом.
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

checkStringPalindrome('топот');
checkStringPalindrome('ДовОд');
checkStringPalindrome('Кекс');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа.
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

getNumberFromString('2023 год');
getNumberFromString('ECMAScript 2022');
getNumberFromString('1 кефир, 0.5 батона');
getNumberFromString('а я томат');

// Функция возврата строки с добавленными символами
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

addCharactersToString('1', 2, '0');
addCharactersToString('1', 4, '0');
addCharactersToString('q', 4, 'werty');
addCharactersToString('q', 4, 'we');
addCharactersToString('qwerty', 4, '0');
