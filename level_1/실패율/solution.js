function solution(N, stages) {
    var answer = [];
    let obj = [];

    stages.sort((x,y) => {return x-y});

    for(let i=1; i<=N; i++){
        let count = 0;
        let leng = stages.filter(data => {
            if(data === i){
                count +=1;
            }
            return data >= i
        }).length;
        obj.push([i , count/leng]);
    }
    obj.sort((x,y)=>{
        return y[1] - x[1];
    })
    for(let i=0; i<obj.length; i++){
        answer.push(obj[i][0]);
    }
    return answer;
}
let number = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3]
console.log(solution(number,stages))