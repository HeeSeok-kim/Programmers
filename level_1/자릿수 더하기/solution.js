function solution(n)
{
    var answer = 0;
    let data = n.toString().split('');

    for(let i=0; i<data.length; i++){
        answer += parseInt(data[i])
    }
    // answer = data.reduce((acc,cur) => {return acc += Number(cur)},0)

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

console.log(solution(123))