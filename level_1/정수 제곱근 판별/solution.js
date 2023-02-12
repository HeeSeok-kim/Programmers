function solution(n) {
    let number = Math.sqrt(n);
    return Number.isInteger(number) ? (number+1) ** 2 : -1
}

console.log(solution(121))