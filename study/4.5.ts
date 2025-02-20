/* 
	클래스에도 <T> 를 사용할 수 있다.
	interface에도 <T>를 사용할 수 있다.

*/

interface SStorage<T> {
	[key: string]: T;
}

class LocalStorage<T> {
	private storage: SStorage<T> = {};
	set(key: string, value: T) {
		this.storage[key] = value;
	}
	remove(key: string) {
		delete this.storage[key];
	}
	get(key: string): T {
		return this.storage[key];
	}
	clear() {
		this.storage = {};
	}
}

const stringsStorage = new LocalStorage<string>();
