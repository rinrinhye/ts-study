type Words = {
    [key : string] :string
}


// 단어 삭제, 단어 업데이트 하는 메소드 만들기
class Dict {
    private words: Words;
    constructor(){
        this.words = {}
    }

    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }

    def(term:string){
        return this.words[term]
    }

    delete(term:string){
        if(this.words[term] !==undefined){
            delete this.words[term]
        }
    }
}

// 단어의 정의 추가, or 수정하는 메소드, 단어 출력하는 메소드 만들기
class Word{
    constructor (
        public readonly term:string,
        public readonly def:string
    ) {
    }

    print(){
        console.log(this.term, this.def)
    }
}

const kimchi = new Word('kimchi','한국의 음식');
const banana = new Word('banana','원숭이가 먹는다 바나나')

const dict = new Dict();

dict.add(kimchi);
dict.add(banana);
dict.def('kimchi')
console.log(dict)
