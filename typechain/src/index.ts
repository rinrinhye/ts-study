// const sayHello = () => {
// 	return "hi";
// };

// import { init, exit } from "./myPackage.js";

// init({ url: "tr" });
// exit(2);

/* 
블록체인 - 여러개의 블록이 사슬처럼
블록체인 안에는 데이터가 있다 블록체인으로 보호하고싶은!
이 블록은 다른 블록에 묶여잇고
연결고리는 해쉬값

*/

import crypto from "crypto";

interface BlockShape {
	hash: string;
	prevHash: string;
	height: number;
	data: string;
}

class Block implements BlockShape {
	public hash: string;

	constructor(
		public prevHash: string,
		public height: number,
		public data: string
	) {
		this.hash = Block.calculateHash(prevHash, height, data);
	}

	static calculateHash(prevHash: string, height: number, data: string) {
		const toHash = `${prevHash}${height}${data}`;
		return crypto.createHash("sha256").update(toHash).digest("hex");
	}
}

class Blockchain {
	private blocks: Block[];
	constructor() {
		this.blocks = [];
	}
	private getPrevHash() {
		if (this.blocks.length === 0) return "";
		return this.blocks[this.blocks.length - 1].hash;
	}

	public addBlock(data: string) {
		const newBlock = new Block(
			this.getPrevHash(),
			this.blocks.length + 1,
			data
		);
		this.blocks.push(newBlock);
	}

	public getBlocks() {
		return [...this.blocks];
	}
}

const blockchain = new Blockchain();

blockchain.addBlock("우히핫");

console.log(blockchain.getBlocks());

/* 
네, 맞습니다! TypeScript에서 프라이빗(private) 프로퍼티는 클래스 외부에서 접근할 수 없도록 제한되지만, 클래스 내부에서 해당 프로퍼티를 참조하거나 리턴하는 것은 가능합니다.

즉, 클래스 내부에서 해당 프로퍼티에 접근하는 메소드가 있다면, 그 메소드를 통해 값을 외부로 리턴하거나 반환할 수 있습니다. 이런 방식으로 사실상 프라이빗 프로퍼티의 값을 알 수 있게 되는 거죠.

*/
