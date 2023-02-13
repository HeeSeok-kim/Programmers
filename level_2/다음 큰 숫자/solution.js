function solution(n) {
    let answer = n;
    let number = n.toString(2).replaceAll('0','');
    while(true){
        answer += 1;
        if(answer.toString(2).replaceAll('0','') === number){
            break;
        }
    }
    return answer;
}

console.log(solution(78));