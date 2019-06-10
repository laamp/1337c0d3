var longestPalindrome = function (s) {
  let expanded = s.split("").join(" ");
  let longest = s.substring(0, 1);

  for (let i = 1; i < expanded.length; i++) {
    let temp = expand(expanded, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }

  return longest;
};

const expand = (str, left, right) => {
  let longest = str[left];
  while (left >= 0 && right <= str.length - 1 && str[left] === str[right]) {
    if (str.slice(left, right + 1).length > longest.length) {
      longest = str.slice(left, right + 1);
    }
    left--;
    right++;
  }
  return longest.split(" ").join("");
};

console.log(longestPalindrome("abb"));
