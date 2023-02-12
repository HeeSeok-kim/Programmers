function solution(left, right) {
    var answer = 0;
    let count = 0;
    let index = 1;
    for(i=left; i<=right; i++){
        while(index <= i){
            if(i % index === 0){
                count +=1
            }
            index +=1;
        }
        count % 2 === 0 ? answer += i : answer += (i*-1)
        index = 1;
        count = 0;
    }
    return answer;
}

console.log(solution(13,17));