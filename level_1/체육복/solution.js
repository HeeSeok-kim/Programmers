function solution(n, lost, reserve) {
    let reserveCopy = reserve.filter(data=>{ return !lost.includes(data)});
    let lostCopy = lost.filter(data=> {return !reserve.includes(data)});
    reserveCopy.sort((x,y)=>{return x-y});
    lostCopy.sort((x,y)=>{return x-y});

    for(let i=0; i<reserveCopy.length; i++){
        if(lostCopy.includes(reserveCopy[i] + 1)){
            if(lostCopy.includes(reserveCopy[i] - 1)){
                lostCopy.splice(lostCopy.indexOf(reserveCopy[i] - 1),1);
            }else{
                lostCopy.splice(lostCopy.indexOf(reserveCopy[i] + 1),1);
            }
            reserveCopy[reserveCopy.indexOf(reserveCopy[i])] = "" ;
        }else if(lostCopy.includes(reserveCopy[i] - 1)){
            if(lostCopy.includes(reserveCopy[i] + 1)){
                lostCopy.splice(lostCopy.indexOf(reserveCopy[i] + 1),1);
            }else {
                lostCopy.splice(lostCopy.indexOf(reserveCopy[i] - 1),1);
            }
            reserveCopy[reserveCopy.indexOf(reserveCopy[i])] = "" ;
        }
    }
    return n-lostCopy.length
}

let n = 5;
let lost = [2,4];
let reserve = [1,3,5];
console.log(solution(n, lost, reserve))