/* Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels
from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */
'use strict';
//  a e i o u
function disemvowel(str) {
    let newArr = [];
     str = str.split("");   
    for (let i = 0;i < str.length;i++) {
        if (str[i].toLowerCase() !== 'a' && str[i].toLowerCase() !== 'e' &&
         str[i].toLowerCase() !== 'i' && str[i].toLowerCase() !== 'o' && str[i].toLowerCase() !== 'u') {
            newArr.push(str[i]);
        }
    }
    newArr = newArr.join('');
    return newArr;
}
console.log(disemvowel("HEllO my nAme Is Vlad!"));


let str = 'AJHsfdsJJdsaeJ';
str = str.split("");
str.forEach(element => {
        element.toLowerCase();
 });
 console.log(str);