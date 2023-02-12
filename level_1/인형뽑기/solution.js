function solution(board, moves) {
    var answer = 0;
    let stack = [];

    moves.forEach(move => {
        for(let i=0; i<board.length; i++){
            let kakao = board[i][move-1]
            if(kakao !== 0 ){
                stack.push(kakao)
                board[i][move-1] = 0;
                if(stack[stack.length-1] === stack[stack.length-2]){
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }
                break;
            }
        }
    })
    return answer;
}

let board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
let move = [1, 5, 3, 5, 1, 2, 1, 4]
console.log(solution(board,move))