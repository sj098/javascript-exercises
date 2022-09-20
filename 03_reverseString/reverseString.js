const reverseString = function(string) {
    answer = ''
    array = string.split("")
    for (let i = (array.length - 1); i >= 0; i--) {
        answer += array[i]
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
