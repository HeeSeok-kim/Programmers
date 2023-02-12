function solution(phone_number) {
    var answer = '';
    let lastNumber = phone_number.slice(phone_number.length-4)
    let replaceNumber = phone_number.slice(0,phone_number.length-4)
    answer = replaceNumber.replaceAll(/([0-9])/g,'*') + lastNumber
    return answer;
}

console.log(solution('027778888'))