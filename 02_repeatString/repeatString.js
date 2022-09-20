const repeatString = function(string, num) {
    answer = ''
    if (num > 0) {
        for (let i = num; i > 0; i--) {
            answer += string
        }
    }
    else if (num < 0) {
        answer += 'ERROR'
    }
    else {
        answer
    }
    return answer;
}



// Do not edit below this line
module.exports = repeatString;
