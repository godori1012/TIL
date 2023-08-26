/*
bind => this를 지정할 수 있음 
     => 함수의 this 값을 값을 영구히 바꿀 수 있음
     => 예를 들어, this 값을 항상 es가 되도록
*/

const es = {name: "eunseoKo"};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const esUpdate = update.bind(es);

esUpdate(2000, "student");

console.log(es);