# this 키워드

자신을 호출한 객체를 가리키는 특수한 키워드

따라서, 아래와 같이 멤버쉽에 Joined 함수를 호출할 때, this를 출력해보면 자기 자신을 가리킵니다.

```js
const membership = {
	name: '김기수',
	joined: function () {
		console.log(this);
	},
};
```

만약 브라우저에서 다음과 같은 함수를 정의한다면, window 객체에 자동으로 등록된다.

```js
function member() {
	console.log(this);
}
```

그래서 호출 시, window.member() 형태로 해야 하지만, member()로도 호출이 가능하다.

window 객체에 자동으로 등록되기 때문에, 위에서 작성한 코드의 this는 window를 가리키게 된다.

<this가 가리키는 객체>.<this를 출력한 함수명>() 형태로 호출하면, this가 가리키는 객체가 곧 this가 되는 것이다.

this를 잘 활용하면 다음과같은 코드도 가능하다.

```js
const membership = {
	name: '김기수',
	joined: function () {
		console.log(`${this.name}님이 가입했습니다.`);
	},
};
console.log(membership.joined());

// 이렇게 한다면, window 객체를 가리키기 때문에, this.name이 아무 값도 나오지 않는다.
const joined = membership.joined;
console.log(joined());
```

this가 가리키는 객체를 인위적으로 지정해서 묶어줄 수도 있다. 이렇게 사용한다면 this가 가리키는 대상을 명확하게 명시할 수 있습니다.

```js
function member() {
	console.log(this);
}
member.bind({name: '수코딩'})();
```

함수를 단축해서 적는 방법이 있다!
객체 속성 내부에 정의하는 함수의 경우에는 이렇게 단축해서 사용할 수 있다.

```js
const membership = {
	name: '김기수',
	// 기본 함수
	joined: function () {
		console.log(`${this.name}님이 가입했습니다.`);
	},
};

const membership = {
	name: '김기수',
	// 단축한 함수
	joined() {
		console.log(`${this.name}님이 가입했습니다.`);
	},
};
```
