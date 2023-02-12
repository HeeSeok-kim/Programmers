function solution(numbers) {
    let answer = [];
    let tmp = [];
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            sum += numbers[i] + numbers[j]
            tmp.push(sum)
            sum = 0;
        }
    }
    let result = new Set(tmp);
    answer = [...result];
    answer.sort((x,y) => {return x-y})


    return answer;
}

console.log(solution([2,1,3,4,1]))