function solution(n) {
    let answer;
    let data = [BigInt(0),BigInt(1)]
    for(let i=2; i<n; i++){
        data[i] = BigInt(data[i-1] + data[i-2]);
    }
    answer = data[data.length-1] + data[data.length-2]
    return answer % BigInt(1234567)
}