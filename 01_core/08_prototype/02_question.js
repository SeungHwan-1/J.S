
//animal 과 dog 클래스 구현

//animal은 name속성과 speak 메소드를 가짐
// speak는 나는 [name] 출력

//Dog 은 Animal을 상속받고
//breed 속성을 가짐. 개의 품종
//bark메소드를 가지고 메소드는 "나는 [breed]"를 출력

class Animal
{
    constructor(name)
    {
        this.name = name;
    }
    speak()
    {
        console.log(`나는 ${this.name}`)
    }
}

class Dog extends Animal
{
    constructor(name,bark)
    {
        super(name);
        this.bark = bark;
    }
    bark1()
    {
        console.log(`나는 ${this.bark}`)
    }
}
me = new Dog("이승환","안녕");

me.speak();
me.bark1(); 
