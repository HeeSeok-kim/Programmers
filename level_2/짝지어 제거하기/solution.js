function solution(s)
{
    let answer = 0;
    let arr = s.split('');
    let stack = [];
    if(s.length % 2 === 1){
        return 0
    }
    for(let i=0; i<arr.length; i++){
        if(stack[stack.length-1] === arr[i]){
            stack.pop();
        }else {
            stack.push(arr[i]);
        }
    }

    stack.length === 0 ? answer = 1 : answer = 0;

    return answer;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));