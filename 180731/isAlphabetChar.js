// check a string if it has only alphabet, not number or strange character
//

var isAphabetChar = function(str){
  var result = true;
 for(var i=0; i<str.length; i++){
   var num = str.charCodeAt(i);
   console.log(num);
   if (  (num < 65)  || (num > 122) ||
          ((num >=90) && (num <=97))  ){
   result = false;
   console.log(result)
   break;
   }
 }
return result;
}




