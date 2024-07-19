# Promise

비동기 작업을 처리할 수 있게 도와주는 객체이다.

사용법은 아래와 같다.

```js
new Promise((resolve, reject) => {
	// 작업이 성공하면
	resolve();

	// 작업이 실패하면
	reject();
});
```

Promise는 3가지 상태를 가진다.

- pending: 비동기 처리가 아직 수행되지 않은 상태
- fulfilled: 비동기 처리가 수행된 상태
- rejected: 비동기 처리가 실패한 상태

Promise는 콜백함수에 있는 함수를 즉시 실행한다.

```js
new Promise((resolve, reject) => {
	console.log('doing something...');
});
```

promise를 출력하면 어떨까?

```js
const promise = new Promise((resolve, reject) => {
	console.log('doing something...');
});

console.log(promise);
```

- [[Prototype]]: Promise
- [[PromiseState]]: "pending"
- [[PromiseResult]]: undefined

그렇다면, [[PromiseState]]를 실행상태로 만들려면?

resolve를 실행시켜야만 한다.
실행하면, fulfilled로 상태가 변경된 것을 확인할 수 있다.

그런데 여전히 [[PromiseResult]] 값이 undefined 이다. 왜 그럴까?

resolve 함수를 호출하면서 매개변수를 넘겨주지 않았기 때문이다. 이 넘겨주는 매개변수가 곧 [[PromiseResult]]의 값이 된다.

promise는 프로토타입에서 더 쉬운 방법으로 사용하는 방식을 제공하는데 ...

```js
promise
	.then(
		(value) => console.error(value),
		(error) => console.error(error) // 이렇게 코딩을 한다면, catch 블럭 대신 이 함수가 실행되기 때문에 catch 구문이 필요가 없어진다.
	)
	.catch((error) => {
		console.error(error);
	})
	.finally(() => console.log('finally'));
```

```js
promise
	.then((value) => {
		return value + 1; // 이렇게 처리하는 것과, resolve(value + 1)와 동일하다.
	})
	.then((value2) => {
		console.log(value2); // 따라서 then을 한번 더 써서 해당하는 값을 받아낼 수 있다. 이 값은 이전 값에 1을 더한 값이 된다.
		return value2;
	})
	// 이렇게 Promise를 반환할 수도 있다!
	.then((value3) => new Promise((resolve, reject) => {
			reject(value3);
		});
	)
	.catch((value3) => {
		return value3; // 만약에, 특정 부분에서 에러가 난 경우, 작업을 무시하고 그대로 진행해라 라고 할 수도 있다.
	})
	.then((value3) => new Promise((resolve, reject) => {
			resolve(value3);
		});
	)
	.catch((error) => {
		console.error(error);
	})
	.finally(() => console.log('finally'));
```

## 콜백함수를 Promise로 바꿔보기

```js
function task1(callback) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('task1 시작');
			resolve();
		}, 1000);
	});
}
function task2(callback) {
	return new Promise((resolve) => {
		console.log('task2 시작');
		resolve();
	});
}
function task3(callback) {
	return new Promise((resolve) => {
		console.log('task3 시작');
		resolve();
	});
}
function task4(callback) {
	return new Promise((resolve) => {
		console.log('task4 시작');
		resolve();
	});
}

// [콜백 지옥 패턴] 이럴수가! 몇겹이나 정의해야 하는 걸까 ...
task1() //
	.then(() => task2())
	.then(() => task3())
	.then(() => task4())
	.then(() => console.log('모든 작업 끝'));
```
