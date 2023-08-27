/* [ 전역 스코프 ]
- 프로그램을 시작할 때 / 어떤 함수도 호출하지 않았을 때 => 전역 스코프의 흐름에 있다.
- 전역 스코프에서 선언된 것 =>  "전역 변수" 
*/

let user = {
    name: eunseo,
    age: 24,
}

function greet(user){
    console.log(`Hello, ${user.name}`);
}

function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}