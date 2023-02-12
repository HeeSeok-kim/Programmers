function solution(a, b) {
    let start = a;
    let end = b;
    if(a === b){
        return a
    }
    if(a > b) {
        start = b;
        end = a;
    }

    return (end - start + 1) * (start + end) / 2;
}