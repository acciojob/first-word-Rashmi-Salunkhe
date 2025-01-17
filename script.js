function firstWord(str) {
  // Trim any leading or trailing whitespace
  str = str.trim();

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If no space is found, return the entire string
  if (spaceIndex === -1) {
    return str;
  }

  // Otherwise, return the substring from the start to the first space
  return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
