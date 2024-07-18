// Q1.
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
const sum = (...args) => {
	let result = 0;
	for (const num of args) {
		result += num;
	}
	return result;
};
console.log('sum(1, 2, 3):', sum(1, 2, 3));

// Q2.
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.
//구현 방법은 자율입니다.
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
console.log('add(10, 10):', add(10, 10));
console.log('subtract(10, 10):', subtract(10, 10));
console.log('divide(10, 10):', divide(10, 10));
console.log('multiply(10, 10):', multiply(10, 10));

// Q3.
// 짝수와 홀수 판별하기
// 숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
// 함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
const isEven = (n) => n % 2 === 0;
console.log('isEven(7):', isEven(7));

// Q4. 팩토리얼 계산하기
// 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
const factorial = (n) => {
	let result = 1;
	for (let i = n; i > 0; i--) {
		result *= i;
	}
	return result;
};
console.log('factorial(5):', factorial(5));

// Q5. 삼각형 넓이 계산하기
// 삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
// 함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
const triangleArea = (base, height) => (base * height) / 2;
console.log('triangleArea(10, 5):', triangleArea(10, 5));
