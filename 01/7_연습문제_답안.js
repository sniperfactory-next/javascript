// [변수 선언과 할당]
// CHECKLIST x, y, sum은 재할당 가능성이 없기 때문에, const를 사용해주세요
const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);

// [변수 재할당]
let name = 'Alice';
name = 'Bob';
console.log(name);

// [상수]
const PI = 3.14;
console.log(PI);

// [변수 스왑]
let a = 5;
let b = 10;

const temp = a;
a = b;
b = temp;
console.log('a:', a, ', b:', b);
