module.exports = function check(str, bracketsConfig) {

  let result = str;

  for (let i = 0; i <= str.length/2; i++) {
    bracketsConfig.forEach(element => {
      let closedBrackets = String(element[0] + element[1]);
      if (result.includes(closedBrackets)) {
        result = result.replace(closedBrackets,'');
      };
    });
  };

  if (!result) {
    return true
  } else {
    return false
  };
}
