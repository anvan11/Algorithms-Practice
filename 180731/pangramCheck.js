//Check a String if it contains all characters from a to z

function pangramCheck(input){
  input = input.toUpperCase();

  for(var i=65; i<=90; i++){
    if(input.indexOf(String.fromCharCode(i)) === -1){
      return false;
    }
  }
  return true;
}

var notPangram = "this is not a pangram";
var pangram = "The quick brown fox jumps over the lazy dog...!!!";

console.log(notPangram, "is a pangram?", isPangram(notPangram));
console.log(pangram, "is a pangram?", isPangram(pangram));

