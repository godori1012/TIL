/*
화살표 표기법: function이라는 단어와 중괄호를 줄이려고 고안된 단축 문법
1. function 생략
2. 매개변수가 단 하나 뿐이라면 괄호도 생략
3. 함수 바디가 표현식 하나라면 return 생략
*/

const f1 = function () {
  return "HELLO !";
};

const f2 = () => "hello !";

// 변수 할당
const f3 = function (name) {
  return `HELLO, ${name}`;
};

const f4 = (name) => `HELLO, ${name}`;

const f5 = (a, b) => a + b;

console.log(f1());
console.log(f2());
console.log(f3("Eunseo"));
console.log(f4("Eunseo"));
console.log(f5(1, 2));

// 화살표 함수와 일반적인 함수의 중요한 차이
// 1. 화살표 함수는 정적으로 묶인다. => 자신만의 this를 가지지 않고 주변 범위의 this를 상속
// 2. 객체 생성자로 사용할 수 없음
// 3. arguments 변수도 사용할 수 없음

const o = {
  name: "EunseoKo",
  greetBackwards: function() {
    const getReverseName = () => {
      let nameBackwards = "";
      for(let i = this.name.length-1; i>=0;i--){
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym  olleH`;
  },
};

console.log(o.greetBackwards());