function solution(s, n) {
    var answer = '';
    let ASCII = 0
    let sum = 0;
    for(let i=0; i<s.length; i++){
        ASCII = s[i].charCodeAt()
        //대문자
        let upperCase = (ASCII >= 65 && 90 >= ASCII)
        //소문자
        let lowCase = (ASCII >=97 && 122 >= ASCII)
        if(upperCase || lowCase){
            sum = ASCII + n
            if(upperCase && sum > 90){
                sum = 64 + (sum - 90)
            }
            if(lowCase && sum > 122){
                sum = 96 + (sum - 122)
            }
            ASCII = sum
        }
        answer += String.fromCharCode(ASCII);
    }
    return answer;
}

console.log(solution("AB",1))