// 4. 객체

// 4.1 객체 생성
// 객체를 생성할 때는 객체 리터럴, new 키워드 또는 Object.create() 함수를 사용한다.

// 4.1.1 new
// new 연산자는 새 객체를 생성하고 초기화 한다.
// new 키워드 뒤에는 반드시 함수 호출이 있어야 한다. 이런 형태로 사용하는 함수를 생성자라고 부르고, 새로 생성된 객체를 초기화하는 목적으로 사용한다.

let object = new Object(); // 빈 객체를 만든다. {}와 같다.
let array = new Array(); // 빈 배열을 만든다. []와 같다.
let data = new Date(); // 현재 시간을 나타내는 Date 객체를 만든다.
let map = new Map(); // 키와 값을 연결하는 Map 객체를 만든다.

// 4.1.2 프로토타입
// 자바스크립트 객체 거의 대부분은 자신과 연결된 두 번째 객체를 갖는다.
// 여기서 두 번째 객체를 프로토타입이라 부르며, 첫 번째 객체는 프로토타입에서 프로퍼티를 상속한다.
// 객체 리터럴을 사용해 생성한 객체는 모두 같은 프로토타입 객체를 갖는다. 그리고 이 프로토타입 객체는
Object.prototype; // 이라는 코드로 참조할 수 있다.

// 4.1.3. Object.create()
// Object.create()는 첫 번째 인자를 프로토타입 삼아 새 객체를 생성한다.

let o1 = Object.create({ x: 1, y: 2 });
o1.x + o1.y; // 3

// 인자로 null을 전달해 프로토타입이 없는 객체를 생성할 수도 있지만, 이렇게 생성된 객체는 아무것도 상속하지 않으며 toString() 같은 기본 메서드조차 없다.
// 따라서 + 연산자와 함께 사용할 수도 없다.

let o2 = Object.create(null); // o2는 프로퍼티나 메서드를 상속하지 않는다.

// {}나 new Object()가 반환하는 것처럼 일반적인 빈 객첼ㄹ 만들고 싶을 때는 다음과 같이 Object.prototype을 전달한다.

let o3 = Object.create(Object.prototype); // o3는 {}나 new Object()와 같다.

// 4.2 프로퍼티 검색과 설정
// 프로퍼티 값에 접근할 때는 점(.)이나 대괄호([]) 연산자를 사용한다.
// 이 연산자의 왼쪽은 값이 객체인 표현식이어야 한다.

object.property;
object['property'];

// 위 두 표현식은 같은 값을 가진다.

// 4.3 객체 확장
// 자바스크립트 프로그램에서 객체의 프로퍼티를 다른 객체에 복사하는 것은 흔한 일이다.

let target = { x: 1 };
let source = { y: 2, z: 3 };

for (let key in Object.keys(source)) {
    target[key] = source[key];
}

console.log(target); // {x: 1, y: 2, z: 3}

// Object.assign()은 인자로 두 개 이상의 객체를 받는다.
// 첫 번째 인자는 수정해서 반환할 대상 객체이지만, 두 번째 또는 그 이후의 인자는 소스 객체이므로 수정하지 않는다.

// 4.4 객체 직렬화
// 객체 직렬화(serialize)는 객체를 문자열로 변환하는 작업이다. 이 문자열은 나중에 다시 객체로 되돌릴 수 있다.

JSON.stringify();
JSON.parse();

// 위 두 함수는 자바스크립트 객체를 직렬화하고 되돌리는 함수이다.

// 4.4 분해 연산자
// ES2018 이후에는 객체 리터럴 안에서 분해 연산자 ...를 사용해 기존 객체의 프로퍼티를 새 객체에 복사할 수 있다.
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };

// ... 분해 연산자는 객체 리터럴 안에서만 사용할 수 있는 특별 문법이다.
