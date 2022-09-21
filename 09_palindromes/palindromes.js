// const palindromes = function (a) {
//     const newArray = a.split('');
//     function newArr(a) {
//         let i = 0;
//         if (a[i] == " " || a[i] == "," || a[i] == "." || a[i] == "!") {
//             a.splice(i, 0);
//         } else {
//             i++;
//         }
//         return a;
//     }};

//     newArr(newArray);
//     let j = 0;
//     while (j < newArray.length/2) {
//         let result;
//         for (let k = 0; k < (newArray.length)/2; k++) {
//             if (newArray[j] === newArray[-j]) {
//                 result = true;
//             } else {
//                 reuslt = false;
//             }
//         }
//         j++;
//         return result;
// };


const palindromes = function(a) {
    let newString = a.toLowerCase().replace(/[^a-z]/g, "");
    reversedString = newString.split("").reverse().join("");
    if (reversedString === newString) {
        return true;
    } else {
        return false;
    }
}

// Learn breakpoints and use to figure out why last test isn't working

// Do not edit below this line
module.exports = palindromes;
