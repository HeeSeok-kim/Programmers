function solution(num) {
    var answer = 0;
    let data = num;

    while(data > 1){
        answer += 1;
        if(data%2 === 0 ){
            data = data / 2
        }else {
            data = (data * 3) + 1
        }
        if(answer === 500) {
            answer = -1
            break
        }
    }

    return answer;
}

console.log(solution(6));