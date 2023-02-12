function solution(dartResult) {
    var answer = 0;
    let datArr = dartResult.split('');
    let sumArr = []
    let tmp = 0;
    for(let i=0; i<datArr.length; i++){
        let dat = datArr[i];
        if(dat === 'S' || dat === 'D' || dat === 'T' || dat === '*' || dat === '#'){
            if(dat === 'S'){
                tmp = Number(tmp) ** 1;
                sumArr.push(tmp);
            }else if(dat === 'D'){
                tmp = Number(tmp) ** 2;
                sumArr.push(tmp);
            } else if(dat === 'T'){
                tmp = Number(tmp) ** 3;
                sumArr.push(tmp);
            } else if(dat === '*'){
                sumArr[sumArr.length-1] = sumArr[sumArr.length-1] * 2
                sumArr[sumArr.length-2] = sumArr[sumArr.length-2] * 2
            } else {
                sumArr[sumArr.length-1] = sumArr[sumArr.length-1] * (-1);
            }
        }else {
            if(tmp === '1' && dat === '0'){
                tmp += dat;
            }else {
                tmp = dat;
            }
        }
    }
    return sumArr.reduce((sum,num)=>{return sum+=num});

}

console.log(solution("1S2D*3T"))