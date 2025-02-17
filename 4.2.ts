// interface
// object 의 모양을 설명해줌 
// type 보다 제한적임
// 중복 가능

type Team = 'red' | 'blue' | 'yellow';
type Health = 1 | 5 | 10 ;

interface Player {
    nickname :string,
    team : Team,
    health : Health
}

const nico : Player = {
    nickname :'nico',
    team : 'yellow',
    health : 5
}

interface User01{
    name:string
}

interface Player01 extends User01{
    age: number
}

type User02 ={
    name:string
}

type Player02 =  User02 & {
    age: number
}

/* 
추상화를 사용하면 js 코드로 변환이 된다. 그러나!
인터페이스를 사용해서 클래스의 청사진을 만들면 js 코드로는 변환이 안됨!!!!!!!

private, protected 사용 못함, 무조건 public
*/

interface UserInterface {
    firstName :string,
    lastName : string,
    sayHi(name:string) :string,
    fullName():string
}

interface HumanInterface {
    age:number
}

class PlayerInterface implements UserInterface,HumanInterface{
constructor(   
    public firstName:string,
    public lastName: string,
    public age : number    
){
}

sayHi(name:string){
    return `${name} ${this.firstName}`
}
fullName(){
return `${this.firstName } ${this.lastName}`
}
}