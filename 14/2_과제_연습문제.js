const students = [
	{name: 'Alice', age: 21, gender: 'male', height: 170},
	{name: 'Bob', age: 19, gender: 'male', height: 165},
	{name: 'Charlie', age: 20, gender: 'male', height: 175},
	{name: 'David', age: 22, gender: 'male', height: 180},
	{name: 'Eve', age: 17, gender: 'female', height: 160},
	{name: 'Frank', age: 18, gender: 'male', height: 175},
	{name: 'Grace', age: 21, gender: 'female', height: 165},
	{name: 'Henry', age: 19, gender: 'male', height: 170},
	{name: 'Ivy', age: 20, gender: 'female', height: 155},
	{name: 'Jack', age: 22, gender: 'male', height: 185},
];

// 1. 키가 185인 학생 찾기 (먼저 찾아지는 1명)
{
	const student = students.find((student) => student.height >= 185);
	console.log('키가 185인 학생 찾기 (먼저 찾아지는 1명)');
	console.log(student);
}

//2. 나이가 20살 이상인 학생들 찾기 (여러명)
{
	const filteredStudents = students.filter((student) => student.age >= 20);
	console.log('나이가 20살 이상인 학생들 찾기 (여러명)');
	console.log(filteredStudents);
}

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
	const hasHeightBelow165 = students.some((student) => student.height <= 165);
	console.log('키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기');
	console.log(hasHeightBelow165);
}

//4. 학생들이 모두 20살 이상인지 확인해서 true, false 반환하기
{
	// const allAbove20 = !students.some((student) => student.age < 20);
	const allAbove20 =
		students.length === students.filter((student) => student.age >= 20).length;
	console.log('학생들이 모두 20살 이상인지 확인해서 true, false 반환하기');
	console.log(allAbove20);
}

//5. 학생들의 평균 연령 구하기
{
	let sumAge = 0;
	for (const student of students) {
		sumAge += student.age;
	}
	sumAge = students.reduce((acc, current) => acc + current.age, 0);
	// for (const student of students) {
	// 	sumAge += student.age;
	// }
	console.log('학생들의 평균 연령 구하기');
	console.log(sumAge / students.length);
}

//6. 남학생들의 평균 연령 구하기
{
	let sumAge = 0;
	const males = students.filter((student) => student.gender === 'male');
	sumAge = males.reduce((acc, current) => acc + current.age, 0);
	// for (const male of males) {
	// 	sumAge += male.age;
	// }
	console.log('남학생들의 평균 연령 구하기');
	console.log(sumAge / males.length);
}

//7. 여학생들만 따로 추출해서 새로운 배열 만들기
{
	const females = students.filter((student) => student.gender === 'female');
	console.log('여학생들만 따로 추출해서 새로운 배열 만들기');
	console.log(females);
}

//8. 여학생들 중 나이가 가장 어린 학생 찾기
{
	const females = students.filter((student) => student.gender === 'female');
	females.sort((a, b) => a.age - b.age);
	console.log('여학생들 중 나이가 가장 어린 학생 찾기');
	console.log(females[0]);
}
