function solution(k, tangerine) {
    var answer = 0;
    let mapObj = new Map()
    let box = 0;

    tangerine.forEach((x)=> {
        mapObj.set(x,(mapObj.get(x) || 0) + 1);
    })
    let mapSort = new Map([...mapObj.entries()].sort((x,y)=> {return y[1] - x[1]}));

    for(let [key,value] of mapSort){
        box += value;
        answer +=1;
        if(box >= k){
            break;
        }
    }

    return answer;
}

console.log(solution(6,[1, 3, 2, 5, 4, 5, 2, 3]	))