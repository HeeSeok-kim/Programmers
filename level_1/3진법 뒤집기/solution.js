function solution(n) {
    var answer = 0;
    let data = n;
    let tmp = '';
    while(data >= 3){
        tmp = '' + data % 3 + tmp
        data = Math.floor(data / 3)
    }
    tmp = '' + data + tmp
    tmp = tmp.split('')
    tmp = tmp.map(Number)

    for(i=0; i<tmp.length; i++){
        answer += tmp[i] * (3 ** i)
    }

    return answer;
}

console.log(solution(45))