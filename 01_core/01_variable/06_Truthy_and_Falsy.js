
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy Falsy 로 구분한다..
// 암묵적 타입 변환이 일어난다..

let test1;
console.log(!!test1);

// 객체 리터럴
let test = {
    a : null,
    b : 0,
    fun(){
        console.log("testtest");
        return "test";
    }
};
test = null;
if(test?.b){
    console.log("true");
}else{
    console.log("false");
}

test?.b ? console.log(true) : console.log(false);

