function solution(nums) {
    var answer = 0;

    let sumArr = []

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k]
                sumArr.push(sum);
            }
        }
    }

    sumArr.forEach(data => {
        for(let i=2; i<data; i++){
            if(data % i === 0) {
                answer -= 1;
                break;
            }
        }
        answer +=1 ;
    })
    return answer;
}

console.log(solution([1,2,3,4]))