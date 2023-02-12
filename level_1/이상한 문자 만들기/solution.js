function solution(s) {
    var answer = '';
    let data = s.split(' ')
    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].length; j++){
            if(j%2 == 0){
                answer += data[i][j].toUpperCase()
            }else {
                answer += data[i][j].toLowerCase()
            }
        }
        answer += ' '
    }
    return answer.slice(0,-1);
}

console.log(solution("try hello world"));