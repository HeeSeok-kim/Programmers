function solution(n) {
    var answer = 0;
    let data = [...Array(n+1)].map(() => true);

    data[0] = false;
    data[1] = false;

    for(let i=2; i*i<=n; i++){
        if(data[i]){
            for(let j=i*i; j<=n; j+=i){
                data[j] = false;
            }
        }
    }
    data = data.filter(data => {return data})

    return data.length;
}
console.log(solution(10))