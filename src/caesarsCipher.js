"use strict";

// A shift cipher, where letters are shifted by a set amount (13 places, aka ROT13).
// Where 'A' is shifted to 'N', and so on.
// This function takes ROT13 encoded string and returns a decoded string.
// All letters are uppercase and never transform non-alphabetic characters.

let rot13Test = () => {
    console.log(convertFirst13('A'));
    console.log(convertFirst13('B'));
    console.log(convertFirst13('C'));
    console.log('...');
    console.log(convertFirst13('K'));
    console.log(convertFirst13('L'));
    console.log(convertFirst13('M'));
    console.log('...');
    console.log('...');
    console.log(convertLast13('N'));
    console.log(convertLast13('O'));
    console.log(convertLast13('P'));
    console.log('...');
    console.log(convertLast13('X'));
    console.log(convertLast13('Y'));
    console.log(convertLast13('Z'));
};

// 'a' - 'm' (uppercase ASCII 65 to 77; lowercase ASCII 97 to 110)
let convertFirst13 = (character) => {
    return String.fromCharCode(character.charCodeAt(0) + 13);
};

// 'n' - 'z' (uppercase ASCII 78 to 90; lowercase ASCII 111 to 123)
let convertLast13 = (character) => {
    return String.fromCharCode(character.charCodeAt(0) - 13);
};

let capitalize = (str) => {
    let capitalizedString = [];
    let stringArray = str.split("");
    capitalizedString = stringArray.map( (character) => {
        return character.toUpperCase();
    } );
    return capitalizedString;
};

let convertToArray = (str) => {
    let newArray = capitalize(str);
    return newArray;
};

let decodeROT13 = (tempArray) => {
    let decodedArray = tempArray.map( (character) => {
        if( (character.charCodeAt(0) >= 65) && (character.charCodeAt(0) <= 77) ) {
            return convertFirst13(character);
        } else if( (character.charCodeAt(0) >= 78) && (character.charCodeAt(0) <= 90) ) {
            return convertLast13(character);
        } else {
            return character;
        }
    });
    return decodedArray;
};

function rot13(str) {
    let tempArray = convertToArray(str);
    let decodedArray = decodeROT13(tempArray);
    let decodedString = decodedArray.join('');
    str = decodedString;
    // rot13Test();
return str;
}

rot13("SERR PBQR PNZC");
