console.log('----- LEVEL 4 -----');

const sentenceA = "Hello World!";
const sentenceB = "Good Bye!";

console.log(sentenceA);
console.log(sentenceB);

console.log('----- LEVEL 5 -----');

const sentenceC = sentenceA + " " + sentenceB;
const sentenceD = `${sentenceA} ${sentenceB}`;

console.log(sentenceC);
console.log(sentenceD);

console.log('----- LEVEL 6 -----');

console.log(sentenceA.toUpperCase());
console.log(sentenceB.toUpperCase());

console.log('----- LEVEL 7 -----');
var str = 'hello goodness';
var strArray = str.split(' ');
console.log(strArray);
var result = "";
for (i = 0; i < strArray.length; i++) { result += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1) + " "; };
console.log(result); 