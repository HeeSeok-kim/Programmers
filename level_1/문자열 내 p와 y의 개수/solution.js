function solution(s){
    var answer = true;
    let pNumber = s.replaceAll('p','').replaceAll('P','').length
    let yNumber = s.replaceAll('y','').replaceAll('Y','').length
    answer = pNumber === yNumber
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

console.log(solution("pPoooyY"))