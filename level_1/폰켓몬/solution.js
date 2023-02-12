function solution(nums) {
    var answer = 0;
    let number = nums.length/2;
    let data = new Set(nums);

    if(number > data.size){
        answer = data.size
    }else {
        answer = number
    }

    return answer;
}

console.log(solution([3,1,2,3]))