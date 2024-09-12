
// length는 요소의 갯수를 나타내는 0 이상의 정수를 값으로 갖는다.
console.log([1,2,9].length);
const arr = [1,2,3,4,5];
console.log(arr.length);

//length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
arr.push(6);
console.log(arr.length);
arr.pop();
console.log(arr.length);

arr.length = 3;
console.log(arr);

arr.length = 10;
console.log(arr);

const arr2 = [null,2, , ,4, ,6] ;
console.log(arr2);


