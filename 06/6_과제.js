// Q1.
// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
const i1 = 'aaabbbccc';
const o1 = 'a3b3c3';
const i2 = 'aabbaa';
const o2 = 'a2b2a2';
const i3 = 'abbbffd';
const o3 = 'a1b3f2d1';

function compress(str) {
	let count = 0;
	let result = '';
	for (let i = 0; i < str.length; i++) {
		count++;
		if (str[i] !== str[i + 1]) {
			result += str[i] + count;
			count = 0;
		}
	}
	return result;
}
console.log(compress(i1) === o1);
console.log(compress(i2) === o2);
console.log(compress(i3) === o3);

// Q2. 다음 구구단을 출력하는 코드를 반복문을 사용해서 출력하도록 변경해주세요.
function gugudan(dan) {
	for (let i = 1; i <= 9; i++) {
		console.log(`${dan}*${i}=${dan * i}`);
	}
}
gugudan(3);
gugudan(4);
gugudan(5);
