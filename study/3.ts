/* 

call signature

*/

function add(a: number, b: number) {
	return a + b;
}

type Add = (a: number, b: number) => number;

const addCall: Add = (a, b) => a + b;

// ----------------------------------------------------------------------

/* 

overloading
- 함수가 여러개의 call signatures 를 가지고 있을 때 발생시킴

*/

type Config = {
	path: string;
	state: object;
};

type Push = {
	(path: string): void;
	(config: Config): void;
};

const push: Push = (config) => {
	if (typeof config === "string") {
	} else {
	}
};

// 파라미터의 개수가 다른 경우

type AddParams = {
	(a: number, b: number): number;
	(a: number, b: number, c: number): number;
};

const addParams: AddParams = (a, b, c?: number) => {
	return a + b + c;
};

// ----------------------------------------------------------------------
/* 

polymorphism 다형성


*/

type SuperPrint = {
	(arr: number[]): void;
};

const superPrint: SuperPrint = (arr) => {
	arr.forEach((v) => console.log(v));
};

type SuperPrintGeneric = {
	<T>(arr: T[]): void;
};

const superPrintGeneric: SuperPrint = (arr) => {
	arr.forEach((v) => console.log(v));
};

/* 

type SuperPrintGeneric = {
	<T>(arr: T[]): T; <-- 이것도 가능
};

*/

function supersuper<T>(a: T[]) {
	return a[0];
}

type PlayerGeneric<E> = {
	name: string;
	extraInfo: E;
};

const nicoGeneric: PlayerGeneric<{ favFood: string }> = {
	name: "nico",
	extraInfo: { favFood: "kim" },
};
