// 1. [연습문제 - 학점 계산기]
/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

const score = 75;
if (score >= 90) {
	console.log('A');
} else if (score >= 80) {
	console.log('B');
} else if (score >= 70) {
	console.log('C');
} else if (score >= 60) {
	console.log('D');
} else {
	console.log('F');
}

// 1. 짝수와 홀수 판별
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.

const num = 31;
console.log(num % 2 === 0 ? 'Even' : 'Odd');

// 3. 로그인 확인 및 권한 부여
// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
// - 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
// - 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.
const isLoggedIn = true;
const isAdmin = false;
if (!isLoggedIn) {
	console.log('Please log in');
}
if (isLoggedIn && !isAdmin) {
	console.log('Access denied');
}
if (isLoggedIn && isAdmin) {
	console.log('Welcome, admin!');
}

// 4. 숫자 크기 비교
// - 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
// - `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.
const a = 10;
const b = 10;
if (a > b) {
	console.log('a is greater');
} else if (a < b) {
	console.log('b is greater');
} else {
	console.log('a and b are equal');
}

// 1.  월별 계절 판별
// 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
// `month`에 따라 해당하는 계절을 출력하세요:
// - 12, 1, 2: "Winter"
// - 3, 4, 5: "Spring"
// - 6, 7, 8: "Summer"
// - 9, 10, 11: "Fall"

const month = 10;
switch (month) {
	case 12:
	case 1:
	case 2:
		console.log('Winter');
		break;
	case 3:
	case 4:
	case 5:
		console.log('Spring');
		break;
	case 6:
	case 7:
	case 8:
		console.log('Summer');
		break;
	default:
		console.log('Fall');
		break;
}
