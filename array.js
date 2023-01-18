// 5. 배열

// 배열은 값의 순서 있는 집합이다. 각 값을 요소라고 부르며 각 요소에는 배열에서 차지하는 위치를 나타내는 숫자인 인덱스가 있다.
// 자바스크립트 배열에는 타입이 없다.

// 5.1 배열 생성
// 배열을 만드는 방법은 여러가지이다.
// - 배열 리터럴
// - 이터러블 객체의 분해 연산자 ... 적용
// - Array() 생성자
// - Array.of()와 Array.from() 팩토리 메서드

// 5.1.1
// 배열을 만드는 가장 단순한 방법은 배열 리터럴이다.
// 배열 리터럴은 배열 요소를 대활호 안에서 콤마로 구분한 리스트 형태이다.

let empty = []; // 요소가 없는 배열
let primes = [2, 3, 5, 7, 11]; // 숫자 요소가 다섯 개 있는 배열
let misc = [1.1, true, 'A']; // 타입이 다른 요소가 세 개 있고 콤마로 끝난 배열

// 배 열 리터럴에 콤마를 연속해서 썼는데 그 사이에 값이 없으면 성긴 배열이 만들어 진다.
// 값을 생략한 위치에 실제로 배열 요소가 존재하지는 않지만 검색하면 undefined가 반환된다.

let count = [1, , 3]; // 인덱스 0과 2에는 요소가 있지만 1에는 요소가 없다.
let undefs = [, ,]; // 요소가 없지만 길이가 2인 배열

// 배열 리터럴 문법은 마지막에 콤마를 허용하므로 [,,]의 길이는 3이 아니라 2이다.

// 5.1.2
// 분해 연산자
// ES6 이후에는 분해 연산자 ...를 써서 배열 리터럴 안에 다른 배열 요소를 넣을 수 있다.

let a = [1, 2, 3];
let b = [0, ...a, 4];

console.log(b); // b == [0, 1, 2, 3, 4]

// 분해 연산자는 배열을 얕게(shallow) 복사할 때도 유용하다.

let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; // 사본을 수정해도 원본에는 영향이 없다.
original[0]; //  1;

// 5.1.3 Array() 생성자
// Array() 생성자를 써서 배열을 만들 수도 있다. 이 생성자는 다음과 같이 세 가지 방법으로 호출할 수 있다.
// - 인자 없이 호출
let arr1 = new Array();
// 이 방법은 요소 없는 빈 배열을 생성하며 배열 리터럴 []과 동등하다.

// - 배열 길이를 나타내는 숫자 인자 하나로 호출
let arr2 = new Array(10);
// 이 방법은 지정된 길이를 가진 배열을 생성한다.
// 배열 요소가 몇 개인지 미리 알고 있으면 이런 식으로 Array() 생성자를 사용할 수 있다.

// - 배열 요소를 두 개 이상 쓰거나 숫자가 아닌 요소를 하나만 넘겨 호출
let arr3 = new Array(5, 4, 3, 2, 1, 'testing, testing');
// 이렇게 사용하면 생성자의 인자가 새 배열의 요소가 된다.
// Array() 생성자보다는 배열 리터럴이 거의 항상 더 단순하다.

// 5.1.4 Array.of()
// Array() 생성자를 숫자 인자 하나만 넘겨 호출하면 길이가 그 숫자인 배열이 생성된다.
// 숫자 인자가 하나 이상 있으면 이들 각각을 요소로 취급한다.
// 따라서 Array() 생성자로는 숫자 요소가 하나만 있는 배열은 생성할 수 없다.
// ES6의 Array.of() 함수는 이 문제를 해결한다. 이 함수는 인자의 개수를 따지지 않고 각 인자를 새 배열의 요소로 사용한다.

Array.of(); // [] => 인자가 없으므로 빈 배열
Array.of(10); // [10] => 숫자 인자가 하나만 있어도 된다.
Array.of(1, 2, 3); // => [1, 2, 3]

// 5.1.5 Array.from()
// 이 메서드는 첫 번째 인자로 이터러블 객체나 배열 비슷한 객체를 받으며, 해당 객체의 요소로 새 배열을 만들어 반환한다.
// Array.form(iterable)은 분해 연산자를 사용한 [...iterable]과 동등하다.
let copy = Array.from(original);

// Array.from()이 중요한 이유는 배열 비슷한 객체를 진정한 배열로 바꾸는 방법이기 때문이다.
// 배열 비슷한 객체란 숫자인 length 프로퍼티가 있고, 이름이 정수인 프로퍼티에 값이 저장된 객체를 말한다.

// Array.from()은 선택 사항으로 두 번째 인자를 받는다. 두 번째 인자로 함수를 전달하면, 새 배열을 생성할 때 소스 객체의 각 요소를 이 함수에 전달하고 반환 값을 배열에 저장한다.

// 5.2 배열 요소 읽기와 쓰기
// 배열 요소에 접근할 때는 [] 연산자를 사용한다.
// 대괄호 왼쪽에는 배열 참조가 있어야 한다.

// 5.3 성긴 배열
// 성긴 배열은 인덱스가 연속적이지 않은 배열이다.

// 5.4 배열 길이
// 모든 배열에는 length 프로퍼티가 있으며 이 프로퍼티는 일반적인 자바스크립트 객체와 배열을 구분하는 특징이다.
// 빽빽한 배열에서 length 프로퍼티는 배열에 포함된 요소 개수와 같다. 그 값은 배열에서 가자 큰 인덱스에 1을 더한 값이다.

[].length; // 0 => 배열의 요소가 없기 때문
['a', 'b', 'c'].length; // 3 => 가장 큰 인덱스는 2이고 길이는 3이다.

// 5.5 배열 요소 추가와 삭제
// 배열에 요소를 추가하는 가장 단순한 방법은 이미 본 것처럼 새 인덱스에 값을 할당하는 방법이다.

let a = []; // 빈 배열로 시작한다.
a[0] = 'zero'; // 요소를 추구한다.
a[1] = 'one';