function solution(x) {
    var answer = true;
    let data = ('' + x).split('')
    let sum = data.reduce((prev,curr) => prev + Number(curr),0)
    if(x%sum !== 0) {
        answer = false
    }
    return answer;
}

console.log(solution(10))