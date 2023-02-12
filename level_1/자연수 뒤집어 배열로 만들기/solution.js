function solution(n) {
    var answer = [];
    let tmp = '' + n;
    answer = tmp.split('').reverse()
    return answer.map(Number);
}

console.log(solution(12345))