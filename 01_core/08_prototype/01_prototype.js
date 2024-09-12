//프로토 타이푸


/*
    모든 객체는 자신의 부모 객체로 연결되는
    프로토타입 [prototype]을 가지고 있다.
    이 때 상속을 받는 부모 객체를 프로토타입 이라고 부른다.
    객체가 특정 프로퍼티나 메소드를 찾을 때 먼저 그 객체에서 찾고
    없으면 객체의 프로토타입에서 찾는다.

 

*/

const obj = {};
console.log(obj.toString());
console.log(Object.prototype.hasOwnProperty("tostring"));

const obj2 = {
    toString(){
        return "custom tostring";
    }
}
console.log(obj2.toString());

//object.create 를 이용한 상속

const user = {
    greet()
    {
        console.log(`안녕 ${this.name} .`);
    }

};

const student = Object.create(user);
student.name = "홍길동";
student.study = function()
{
    console.log(`${this.name}은 공부중이야`);

}
student.greet();
student.study();

//proto 방식

const user2 ={
    greet(){
        console.log("hello");
    }
}

const student2 = {
    name: "유관순"
}

student2.__proto__=user2;
student2.greet(); 

/*
    __proto__는 사용하지 않는 것을 권장한다.
    안정성, 성능, 명확 관련 문제가 많기 때문이다.

*/

class User{

}
class Student extends User{
    constructor(name,grade)
    {
        super(name);
        this.grade = grade;
    }
}
study()
{
    console.log(`${this.name} 님은`)
}