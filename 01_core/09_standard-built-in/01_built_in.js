
// 전역객체, 전역 함수

//코드가 실행되기 이전에 자바스크립트 엔진이
//어떤 객체보다도 먼저 생성해놓는 특수한 객체
//어떤 객체에도 속하지 않는 객체

//Infinity - 무한대를 나타내는 숫자 값

console.log(global.Infinity === Infinity); // global 생략 가능
//양의 무한
console.log(10/0);
//음의 무한
console.log(-10/0);
console.log(typeof Infinity);

//NaN : 숫자가 아님을 나타내는 숫자

console.log(typeof NaN);
console.log(global.NaN);
console.log(Number('abc'));

console.log(Infinity / Infinity);

//undefined 
console.log(global.undefined);
console.log(typeof undefined);