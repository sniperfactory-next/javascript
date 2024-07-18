function membershipCard() {
	return function () {
		return function () {
			return {
				name: '수코딩 온라인 사이트',
				grade: 'basic',
			};
		};
	};
}
console.log(membershipCard()()());

const membershipCard2 = () => () => () => ({
	name: '수코딩 온라인 사이트',
	grade: 'basic',
});
console.log(membershipCard2()()());
