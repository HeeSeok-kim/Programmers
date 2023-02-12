function solution(strings, n) {
    var answer = [];
    strings.sort((x,y)=> {
        let data = (x[n] > y[n]) - (x[n] < y[n]);

        if(x[n] === y[n]){
            data = (x > y) - (x < y)
        }
        return data


    })
    answer = strings
    return answer;
}

const strings = ["sun", "bed", "car"];
const n = 1;
console.log(solution(strings,n))