// 6. 함수

// 함수는 한 번 정의하면 몇 번이고 호출할 수 있는 자바스크립트 코드 블록이다.
// 자바스크립트 함수는 매개변수화(parameterized)된다.
// 함수 정의에는 매개변수(parameter)라고 불리는 식별자 리스트가 있는데, 이들은 함수 바디에서 로컬변수처럼 동작한다.
// 함수를 호출할 때는 매개변수에 값을 전달하는데 이를 인자(argument)라고 한다.
// 함수는 보통 인자를 사용해 반환 값을 도출하며, 이 값이 함수 호출 표현식의 값이 된다.
// 매개변수 이외에도 각 호출에는 호출 컨텍스트가 존재하며 이것이 this 키워드의 값이다.

// 6.1 함수의 정의
// 자바스크립트 함수를 정의하는 가장 단순한 방법은 function 키워드이다.
// 이 키워드는 선언으로도, 표현식으로도 사용할 수 있다. function 키워드 없이 함수를 정의하는 새로운 방법인 '화살표 함수'를 도입했다.

// 8.1.1 함수 선언
// 함수 선언은 function 키워드 뒤에 다음 세 가지 구성 요소를 쓴다.
// - 함수 이름이 될 식별자. 이름은 함수 선언에서 뺄 수 없는 부분이다. 이 이름은 변수 이름으로 쓰이며, 새로 정의된 함수 객체가 이 변수에 할당된다.
// - 괄호로 감싸고 콤마로 구분한 0개 이상의 식별자 리스트. 이 식별자들은 함수 매개변수 이름이며 함수 바디 안에서 로컬 변수로 동작한다.
// - 중괄호로 감싼 0개 이상의 자바스크립트 문. 이 문이 함수 바디이며 함수를 호출할 때마다 실행된다.

// 함수 선언에서 이해해야 할 중요한 점은 함수의 이름이 변수이며 그 값은 함수 자체라는 점이다.
// 함수 선언문은 자신을 포함하는 스크립트, 함수, 또는 블록 맨 위로 끌어올려지므로 함수 선언문으로 정의한 함수는 정의하기 전에도 호출할 수 있다.
// 블록 안에서 선언된 함수는 모두 그 볼록 전체에 존재하며, 자바스크립트 인터프리터가 해당 블록의 코드를 실행하기 전에 정의된다고 봐도 된다.

// 6.1.2 함수 표현식
// 함수 선언은 실제로 변수를 선언하며 그 변수에 함수 객체를 할당한다. 반면 함수 표현식은 변수를 선언하지 않는다.
// 새로 정의한 함수 객체를 나중에 다시 참조해야 한다면, 프로그래머의 선택에 따라 변수 또는 상수에 할당한다.
// 함수 표현식을 쓸 때는 실수로 함수를 덮어 쓰지 않도록 const를 사용하는 것이 좋은 습관이다.

// 함수는 이름으로 자기 자신을 참조할 수 있다.
// 함수 표현식에 이름이 있으면, 로컬 함수 스코프에서 그 이름으로 함수 객체를 참조한다.
// 즉, 함수 이름은 함수 안에서 로컬 변수가 된다.
// 표현식으로 정의한 함수는 대부분 이름이 필요 없으므로 정의가 더 간결해진다.
// 하지만 이어서 설명할 화살표 함수만큼 간결하지는 않다.

// 함수 선언으로 함수 f()를 정의하는 것과 표현식으로 함수를 생성하고 변수 f에 할당하는 것 사이에는 중요한 차이가 있다.
// 선언 형태를 사용하면 함수 객체는 자신을 포함하는 코드가 실행되기 전에 존재하며 정의하기 전에 호출할 수도 있다.
// 표현식으로 정의된 함수는 이렇게 동작하지 않는다. 함수를 정의하는 표현식이 실제로 평가되기 전에는 함수가 존재하지 않는다.
// 또한 함수를 호출하려면 반드시 함수를 참조할 수 있어야 하는데, 표현식으로 정의된 함수는 변수에 할당하기 전에는 참조할 수 없다.
// 따라서 표현식으로 정의된 함수는 정의하기 전에 호출할 수 없다.

// 6.1.3 화살표 함수
// ES6 이후에는 화살표 함수라는 간결한 문법으로 함수를 정의할 수 있다.
// function 키워드는 사용하지 않으며 함수 이름도 필요 없다.

const sum1 = (x, y) => {
    return x + y
}

// 화살표 함수는 위보다 더 간결한 문법도 지원한다.
// 함수 바디가 return 문 하나라면 return 키워드와 중괄호를 모두 생략하고 값을 반환하는 표현식 하나만으로 함수 바디를 구성할 수 있다.

const sum2 = (x, y) => x + y

// 매겨변수가 정확히 하나라면 매개변수를 감싼 괄호도 생략할 수 있다.

const polynomial = (x) => x * x + 2 * x + 3

// 하지만 매기변수를 받지 않을 때는 반드시 빈 괄호를 써야한다.

const constantFunc = () => 42

// 화살표 함수를 작성할 때, 함수 매개변수와 => 사이에서 줄바꿈을 해선 안된다.
// 만약 줄바꿈을 한다면 const polynomial = x처럼 문법적으로 유효한 할당문이 만들어진다.
// 또한, 화살표 함수의 바디가 return 문 하나라고 해도, 반환할 표현식이 객체 리터럴이라면 객체 리터럴을 명시적으로 괄호 안에 써서 함수 바디의 중괄호와 객체 리터럴 타입의 중괄호를 혼동하지 않게 해야 한다.

const f = (x) => {
    return { value: x }
} // 좋음: f()는 객체를 반환한다.
const g = (x) => ({
    value: x,
}) // 좋음: g()는 객체를 반환한다.
const h = (x) => {
    value: x
} // 나쁨: h()는 아무것도 반환하지 않는다.
const i = (x) => {
    v: x
    w: x
} // 나쁨: 문법 에러

// 세 번째 행의 함수 h()는 대단히 모호하다.
// 코드의 의도는 객체 리터럴이었겠으나 이는 라벨 붙은 문으로도 분석할 수 있으므로 undefined를 반환하는 함수가 만들어진다.
// 네 번째 행에서는 더 복잡한 객체 리터럴을 만들었지만 이는 유효한 문이 아니므로 문법 에러가 난다.

// null 요소를 제거한 배열 사본을 만든다.
let filtered = [1, null, 2, 3].filter((item) => {
    item !== null
}) // filterd == [1, 2, 3]

// 숫자의 제곱을 구한다.
let squares = [1, 2, 3, 4].map((item) => {
    item * item
}) // squares == [1 ,4, 9, 16]

// 다른 방법으로 정의된 함수는 자신만의 호출 컨텍스트를 정의하지만, 화살표 함수는 자신이 정의된 환경의 this 키워드 값을 상속한다는 결정적인 차이가 있다.
// 이것은 화살표 함수에서 중요하고 아주 유용한 기능이며, 이 장 뒷부분에서 다시 설명한다.
// 화살표 함수는 prototype 프로퍼티가 없으므로 새로운 클래스의 생성자 함수로 사용할 수 없다.
