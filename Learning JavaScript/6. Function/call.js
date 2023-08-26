/*
call 메서드: 함수를 어디서 어떻게 호출했느냐와 관계없이 this가 무엇인지 지정할 수 있음
            => 모든 함수에서 사용할 수 있음
            => this를 특정값으로 지정할 수 있음
*/

const es = {name: "EunseoKo"};
const br = {name: "Bruce"};

function greet() {
    return `Hello, I'm ${this.name}`;
    // 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용할 수 있음
}

console.log(greet());           // this는 어디에도 묶이지 않기 때문에 undefined
console.log(greet.call(es));    // call을 통해 es를 호출시킴 => es의 name 출력
console.log(greet.call(br));    // call을 통해 br을 호출시킴 => br의 name을 출력

// 함수를 호출하면서 call을 사용함
// call의 첫 번째 매개변수는 this로 사용할 값이고, 추가적으로 매개변수를 선언하면 호출하는 함수로 전달됨
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(es, 2000, "student");
update.call(br, 999, "no job");

console.log(es);    // {name: 'EunseoKo', birthYear: 2000, occupation: 'student'}
console.log(br);    // {name: 'Bruce', birthYear: 999, occupation: 'no job'}