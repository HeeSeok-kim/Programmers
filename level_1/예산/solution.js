function solution(d, budget) {
    var answer = 0;
    let sum = 0;

    d.sort((x,y) => x - y);

    d.forEach(data => {
        answer += 1;
        sum += data;

        if(budget < sum){
            answer -= 1;
        }
    });

    return answer;
}

console.log(solution([1, 3, 2, 5, 4],9))