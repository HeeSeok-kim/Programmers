function solution(arr) {
    if(arr.length === 1){
        return [-1]
    }
    var answer = [];

    let min = Math.min(...arr)
    arr.splice(arr.indexOf(min),1)
    answer = arr

    return answer;
}

console.log(solution([4,3,2,1]))