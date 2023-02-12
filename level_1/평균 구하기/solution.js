function solution(arr) {
    var answer = 0;
    arr.map(data => {
        answer += data
    })
    return answer / arr.length;
}

console.log([1,2,3,4]);