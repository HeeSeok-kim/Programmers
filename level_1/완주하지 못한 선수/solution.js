function solution(participant, completion) {
    var answer = '';
    let hashMap = new Map();

    //해쉬 생성
    participant.forEach(person=> {
        hashMap.set(person,isNaN(hashMap.get(person)) ? 1 : hashMap.get(person) + 1)
    });
    //완주자 제거
    completion.forEach(person => {
        hashMap.set(person,hashMap.get(person) -1 )
    })
    //완주못한사람 출력
    hashMap.forEach((value,key) => {
        if(value > 0){
            answer = key;
        }
    })

    return answer;
}

let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];

console.log(solution(participant,completion))