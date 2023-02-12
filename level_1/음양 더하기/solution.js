function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < signs.length; i++){
        signs[i] ? answer += absolutes[i] : answer += (absolutes[i] * -1)
    }
    return answer;
}

console.log(solution([4,7,12],[true,false,true]))