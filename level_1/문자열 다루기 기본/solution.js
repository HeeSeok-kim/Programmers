function solution(s) {
    if(!(s.length === 4 || s.length === 6)){
        return false
    }

    var answer = true;
    if(s.replaceAll(/[0-9]/g,'').length > 0){
        answer = false
    }
    return answer;
}

console.log(solution("a234"))
console.log(solution("1234"))