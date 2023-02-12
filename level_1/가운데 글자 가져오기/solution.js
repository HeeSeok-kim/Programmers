function solution(s) {
    let number = parseInt(s.length / 2);
    return  (s.length % 2 === 0) ? s[number-1] + s[number] : s[number];
}

console.log(solution("abcde"))