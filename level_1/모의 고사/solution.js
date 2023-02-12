function solution(answers) {
    var answer = [];
    let studentArr = [];
    let max = 0;
    studentArr.push(student([1,2,3,4,5],answers));
    studentArr.push(student([2, 1, 2, 3, 2, 4, 2, 5],answers));
    studentArr.push(student([3, 3, 1, 1, 2, 2, 4, 4, 5, 5],answers));

    max = Math.max.apply(null,studentArr);
    for(let i=0; i<studentArr.length; i++){
        if(studentArr[i] === max ){
            answer.push(i+1);
        }
    }
    return answer;
}

function student(studentAnswers,answer) {
    let cnt = 0;
    let result = 0;
    for(let i=0; i<answer.length; i++){
        if(answer[i] === studentAnswers[cnt]){
            result += 1;
        }
        cnt +=1;
        if(cnt === studentAnswers.length){
            cnt = 0;
        }
    }
    return result;
}
console.log(solution([1,2,3,4,5]))