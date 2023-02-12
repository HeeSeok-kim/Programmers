function solution(a, b) {
    var answer = '';
    const week = {
        0:"SUN",
        1:"MON",
        2:"TUE",
        3:"WED",
        4:"THU",
        5:"FRI",
        6:"SAT"
    }
    Object.freeze(week);

    let data = new Date(`2016-${a}-${b}`);
    answer = week[data.getDay()]

    return answer;
}

console.log(solution(5,24))