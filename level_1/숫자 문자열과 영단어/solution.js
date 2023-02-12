function solution(s) {
    var answer = 0;
    let numberObj = {
        'zero':0,
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9
    }

    for(let num in numberObj){
        if(s.indexOf(num) > -1){
            s = s.replaceAll(num,numberObj[num])
        }
    }
    answer = Number(s)

    return answer;
}

console.log(solution("one4seveneight"))