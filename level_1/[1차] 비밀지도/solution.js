function solution(n, arr1, arr2) {
    var answer = [];
    let data = '';

    for(let i = 0; i<n; i++){
        data = (arr1[i] | arr2[i]).toString(2)
        data = "0".repeat(n-data.length) + data
        answer.push(data.replaceAll('1','#').replaceAll('0',' '))
    }

    return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n,arr1,arr2));