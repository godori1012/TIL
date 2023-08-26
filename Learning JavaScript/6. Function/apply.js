/*
apply은 기능적으로 call과 완전히 같음 => this가 무엇인지 지정할 수 있음
=> 차이점? 
        call은 일반적인 함수와 마찬가지로 매개변수를 직접 받음
        apply는 매개변수를 배열로 받음
*/
const es = {name: "eunseoKo"};
const br = {name: "Bruce"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.apply(es, [2000, "student"]);
update.apply(br, [999, "no job"]);

console.log(es);    // {name: 'eunseoKo', birthYear: 2000, occupation: 'student'}
console.log(br);    // {name: 'Bruce', birthYear: 999, occupation: 'no job'}

// apply는 배열 요소를 함수 매개변수로 사용해야 할 때 유용함
// 자바스크립트의 내장함수 Math를 이용해서 => 배열의 최솟값, 최댓값 구하기
const arr = [2, 3, 4, 15, 8];
console.log(Math.max.apply(null, arr)); // 2
console.log(Math.min.apply(null, arr)); // 15
// this의 값 자리에 null을 쓴 이유 => Math.min, Math.max가 this와 관계없이 동작하기 때문에 무엇을 넘기든 상관없음

