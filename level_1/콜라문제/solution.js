function solution(a, b, n) {
    var answer = 0;
    let emtyCola = n
    let cola;
    let changeCola = a;

    while(emtyCola >= changeCola){
        cola = b * parseInt(emtyCola / changeCola);
        emtyCola = cola + emtyCola % changeCola;

        answer += cola
    }
    return answer;
}


console.log(solution(2,1,20));