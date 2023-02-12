function solution(new_id) {
    var answer = '';
    let idLength = new_id.length;

    //1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    let newid = new_id.toLowerCase();
    console.log("1 단계 ==== ",newid)
    //2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    newid = newid.replace(/[^a-z0-9-_.]/g,'');
    console.log("2 단계 ==== ",newid)

    //3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    newid = newid.replace(/\.+/g, '.');

    console.log("3 단계 ==== ",newid)

    //4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    newid = newid.replace(/^\.|\.$/g, "")
    console.log("4 단계 ==== ",newid)

    //5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if(newid.length === 0){
        newid = 'a';
    }
    console.log("5 단계 ==== ",newid)

    //6단계
    if(newid.length >= 16) {
        newid = newid.slice(0,15)
        newid = newid.replace(/\.$/g,"")
    }
    console.log("6 단계 ==== ",newid)

    //7단계
    if(newid.length < 3){
        for(let i = newid.length; i<3; i++){
            newid += newid[newid.length - 1];
        }
    }
    console.log("7 단계 ==== ",newid)

    answer = newid

    return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));


