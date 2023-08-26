/*
스코프 => 변수와 상수, 매개변수가 언제 어디서 정의되는지 결정함
*/

// ex> 함수 매개변수가 함수 바디 안에서만 존재하는 것
function f(x) {
    return x+3;
}

console.log(f(5));  // 8
console.log(x);     // Uncaught ReferenceError ReferenceError: x is not defined

// x가 잠시 존재하였지만 함수 바디를 벗어나면 x는 존재하지 않는 것 처럼 보임 => x의 스코프: 함수 f
 