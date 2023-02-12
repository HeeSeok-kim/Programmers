function solution(n, m) {
    var answer = [];
    let nData = n > m ? n : m;
    let mData = n > m ? m : n;
    let result = nData % mData;
    while(result > 0){
        nData = mData;
        mData = result;
        result = nData % mData;
    }
    answer = [mData, (n*m)/mData]
    return answer;

}

console.log(solution(3,12))