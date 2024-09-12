//배열 정렬 기준

let number = [];

for(let i = 0; i < 10 ;i++)
{
    number[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(`정렬 전 숫자 : ${number}`);

number.sort();
console.log(`정렬 후 number : ${number}`); //문자열정렬이라서 앞자리
//배열은 기본적으로 문자열 정렬이 되므로ㅓ 한자리수,두자리수가 올바르지 않음
//다른 정렬 기준을 사용하려면 매개변수로 compare함수를 전달

function compare(a,b)
{
    if(a>b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}
number.sort(compare);
console.log("매개변수로 compare 전달 후 숫자 오름차순 정렬");
console.log(number);

number.sort((a,b)=>a-b); // a-b가 양수면 sort가 자체적으로 순서를 바꿈
console.log(number);