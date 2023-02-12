function solution(sizes) {
    var answer = 0;
    let xMax, yMax;
    for(let i=0; i<sizes.length; i++){
        sizes[i].sort((x,y) => {return x-y})
    }
    xMax = sizes[0][0]
    yMax = sizes[0][1]
    for(let i=1; i<sizes.length; i++){
        if(xMax < sizes[i][0]){
            xMax = sizes[i][0];
        }
        if(yMax < sizes[i][1]){
            yMax = sizes[i][1];
        }
    }

    return xMax * yMax;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]	))