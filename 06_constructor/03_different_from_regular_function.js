

//일반 함수와 다른점
function Student(name,age)
{
    this.name = name;
    this.age =age;
    this.getInfo = function()
    {
        return `${this.name}은 ${this.age}세 입니다.`;

    }
}

//일반 함수와 생성자 함수의 특별한 형식적 차이는 없다.
//new 연산자와 함께 호출하면 생성자 함수로 동작한다.
//만약 new연산자와 함께 호출하지 않으면 일반 함수로 동작한다.

const student = Student("강감찬",35);

console.log(student); //함수의 반환 타입이 없어서(?)
console.log(age); // new가없으면 전역 함수로된다

//ES6 에서는 new.target을 지원한다.
//생성자 함수가 new 없이 호출되는 것을 방지하기 위해.



function Dog(name,age)
{
    if(!new.target){ // ㄷnew 안붙으면 이게 언디파인디드 느낌표 붙이면 트루
        return new Dog(name,age);
    }

    this.name = name;
    this.age = age;
}

// 대부분의 빌트인 생성자 함수(object,String,Number ...)은
// new 연산자와 함꼐 호출 되었는지를 확인한 후 적절하게 반환한다.
const obj = Object();
console.log(obj);