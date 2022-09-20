const palindromes = function (a) {
    const newArray = a.split('');
    function newArr(a) {
        let i = 0;
        if (a[i] == " " || a[i] == "," || a[i] == "." || a[i] == "!") {
            a.splice(i, 0);
        } else {
            i++;
        }
        return a;
    }

    newArr(newArray);

    for (let j = 0; j < (newArray.length)/2; j++) {
        if (newArray[j] === newArray[-j]) {
            return true;
        } else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
