# Async / Await

Promise에 설탕을 첨가한 문법이다.

```js
const getIcon = async () => {
	await delay(300); // await란 비동기 작업을 기다려 주는 것이다.
};
```

## Promise.all

여러개의 함수를 실행할때 모두 await를 하는 것은 동기와 동일하고 모두 다 순서대로 기다려야하기 때문에
Promise.all 을 사용해서 데이터를 한번에 불러올 수 있다.

## Promise.allSettled

하지만, 하나라도 실패하면 모든 요청을 안해버리기 때문에 Promise.allSettled라는 함수를 사용하여 묶어줄 수 있다
이것을 사용하면, 실패한 것을 제외한 나머지 것들을 불러올 수 있다.

차이점은 status, value 가 담긴 객체를 반환하기 때문에, value만 추출하는 map이 필요하다는 것이다.

## 내가 궁금한 내용의 GPT 답변

JavaScript에서 함수가 비동기 함수인지 아닌지를 알아내는 방법은 몇 가지가 있습니다:

함수 정의 확인: 함수가 async 키워드로 정의되어 있는지 확인합니다.

javascript
코드 복사
async function asyncFunction() {
// 비동기 함수의 내용
}

function syncFunction() {
// 동기 함수의 내용
}

console.log(asyncFunction instanceof AsyncFunction); // true
console.log(syncFunction instanceof AsyncFunction); // false
instanceof 및 AsyncFunction 확인: 비동기 함수는 내장 클래스 AsyncFunction의 인스턴스입니다.

javascript
코드 복사
async function asyncFunction() {
// 비동기 함수의 내용
}

function syncFunction() {
// 동기 함수의 내용
}

console.log(asyncFunction instanceof AsyncFunction); // true
console.log(syncFunction instanceof AsyncFunction); // false
함수 유형 체크: Function 객체의 toString 메서드를 사용하여 함수의 문자열 표현을 확인하고, 비동기 함수는 "async" 키워드가 포함되어 있습니다.

javascript
코드 복사
async function asyncFunction() {
// 비동기 함수의 내용
}

function syncFunction() {
// 동기 함수의 내용
}

function isAsyncFunction(func) {
return func[Symbol.toStringTag] === 'AsyncFunction';
}

console.log(isAsyncFunction(asyncFunction)); // true
console.log(isAsyncFunction(syncFunction)); // false
이 방법들 중에서 async 키워드로 함수를 정의하거나 AsyncFunction 클래스를 사용하는 것이 가장 직관적이고 표준적인 방법입니다.
