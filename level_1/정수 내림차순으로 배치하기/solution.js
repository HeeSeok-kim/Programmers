function solution(n) {
    var answer = 0;
    let data =
        answer = (n + '').split('').sort((x,y)=> {return y-x}).join("")

    return Number(answer)
}

console.log(solution(118372))