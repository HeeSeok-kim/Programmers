function solution(numbers, hand) {
    var answer = [];
    let keyBored = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
    ]
    let leftLocation = [3,0];
    let rightLocation = [3,2];
    let moveLocation = [];
    numbers.forEach(move=>{
        for(let i=0; i<keyBored.length; i++){
            let xLocation = keyBored[i].indexOf(move.toString());
            if(xLocation !== -1){
                moveLocation = [i,xLocation];
                break;
            }
        }
        if(move === 1 || move === 4 || move === 7){
            answer.push('L');
            leftLocation = [...moveLocation];
        }else if(move === 3 || move === 6 || move === 9){
            answer.push('R');
            rightLocation = [...moveLocation];
        }else {
            let leftMove = Math.abs(moveLocation[0] - leftLocation[0]) + Math.abs(moveLocation[1] - leftLocation[1]);
            let rightMove = Math.abs(moveLocation[0] - rightLocation[0]) + Math.abs(moveLocation[1] - rightLocation[1]);

            if(leftMove > rightMove){
                answer.push('R')
                rightLocation = [...moveLocation];
            }else if(leftMove < rightMove){
                answer.push('L')
                leftLocation = [...moveLocation];
            }else {
                if(hand === 'right'){
                    answer.push('R')
                    rightLocation = [...moveLocation];
                }else {
                    answer.push('L');
                    leftLocation = [...moveLocation];
                }
            }
        }
    })
    return answer.join('');
}

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
console.log(solution(numbers,hand));