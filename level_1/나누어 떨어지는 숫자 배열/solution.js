function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(data => {
        if(data % divisor === 0){
            return data
        }
    })
    if(answer.length === 0){
        answer = [-1]
    }

    return answer.sort((x,y)=> {return x-y});
}

console.log(solution([5, 9, 7, 10],5));