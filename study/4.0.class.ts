abstract class UserClass {
	constructor(protected firstName: string, private lastName: string) {}

	abstract getFullName(): void;
}

class PlayerClass extends UserClass {
	getFullName() {
		console.log(this.firstName);
	}
}

/* 

추상 메소드
: 메소드를 클래스 안에서 구현하지 않으면 돼
: 구현하지 않는 대신 call signature 을 적어두면 됑
: 프로퍼티를 사용하고싶다면 public  이나 protected / private 은 안됌!!!!

*/
