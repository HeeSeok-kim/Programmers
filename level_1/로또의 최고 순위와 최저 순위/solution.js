function solution(lottos, win_nums) {
    let rankEnum = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    }
    var answer = [];
    let zeroCnt = 0;
    let count = 0;
    lottos.forEach(num => {
        if(num === 0 ){
            zeroCnt += 1;
        }
        if(win_nums.includes(num)){
            count += 1;
        }
    });
    answer.push(rankEnum[count]);
    answer.push(rankEnum[count+zeroCnt])

    answer.sort((x,y)=>{return x-y})

    return answer;
}
let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos,win_nums))