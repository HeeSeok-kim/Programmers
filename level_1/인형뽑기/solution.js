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

