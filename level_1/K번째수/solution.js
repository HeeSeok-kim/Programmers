function solution(array, commands) {
    var answer = [];
    let data = [];
    for(let i=0; i<commands.length; i++){
        data = [];

        for(let j=commands[i][0]-1; j<commands[i][1]; j++){
            data.push(array[j])
        }
        data.sort((x,y)=> {return x-y})
        answer.push(data[commands[i][2]-1])

    }
    return answer;
}
const array = [1, 5, 2, 6, 3, 7, 4]	;
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array,commands))