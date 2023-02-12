function solution(arr) {
    var answer = [...new Set(arr)];

    return answer;
}

console.log(solution([1,1,3,3,0,1,1]))