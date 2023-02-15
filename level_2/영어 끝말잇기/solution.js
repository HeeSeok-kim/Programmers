function solution(n, words) {
    var answer = [0,0];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    let player = 0;
    let stage = 0;

    for(let i=0; i<words.length; i++){
        if(i%n === 0 ){ player=0; stage +=1;}
        if(i===0){
            player += 1;
            continue
        }
        let length = words[i-1].length;
        let before = words[i-1][length-1];
        let word = words[i];
        console.log(words.indexOf(word))
        console.log(i)
        if(before !== word[0] || words.indexOf(word) !== i){
            answer=[player+1,stage];
            break
        }
        player += 1;
    }
    console.log(answer)

    return answer;
}

solution(2, ["aba","aba"]);