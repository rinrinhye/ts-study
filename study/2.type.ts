let a: number = 1;
let b: string = "p";
let c: boolean = true;

let aArray: number[] = [1];
let bArray: string[] = [];
let cArray: boolean[] = [];

/* 
가능한 한 typeScript 로 추론하게 하는 것이 좋음
*/

const playerA: {
	readonly name: string;
	age?: number;
} = {
	name: "a",
	age: 23,
};

type Player2 = {
	name: string;
	age?: number;
};

const playerNico: Player2 = {
	name: "nico",
};

function playerMaker(name: string): Player2 {
	return {
		name,
	};
}

const nico2 = playerMaker("rrz");
nico2.age = 12;

const numbersArray: readonly number[] = [1, 2, 3];

const playerTuple: readonly [string, number, boolean] = ["rr", 12, false];

/* 

any : typescript 에서 벗어나기 위해 사용됨
매우 신중하게 사용해야된다
가급적 사용 X

*/

/* 
unknown : 어떤 타입인지 모르는 변수에게 사용한다.

*/

let aUnknown: unknown;

if (typeof aUnknown === "string") {
	console.log("나는 스트링");
}

/* 
void : 아무것도 return 하지 않는 함수, 따로 안써줘도 됨
*/

/* 
never : 함수가 절대 return 하지 않을 때
ex) throw new Error 에러던질때

*/

function hellowNever(name: string | number) {
	if (typeof name === "string") {
	} else if (typeof name === "number") {
	} else {
		name;
	}
}
