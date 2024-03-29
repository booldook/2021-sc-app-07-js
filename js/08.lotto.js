/* 
Math: abs(): 절대값, floor(): 버림, ceil(): 올림, round(): 반올림, random(): 난수발생
Array
- arr.length : 배열요소의 갯수
- arr.push('값'): 배열의 맨 뒤에 값을 넣는다.
- arr.unshift('값'): 배열의 맨 앞에 값을 넣는다.
- arr.pop(): 배열의 맨 뒤의 값을 뽑아낸다(배열이 변한다);
- arr.shift(): 배열의 맨 앞의 값을 뽑아낸다(배열이 변한다);
- arr.splice(idx, 빼고싶은 갯수, 넣을 값): 배열의 중간에 값을 넣거나 빼거나 교체한다.
- arr.indexOf(값): 값이 위치한 index값을 리턴한다. 만약 값이 없으면 -1을 리턴한다.
- arr.sort(): 배열의 값을 정렬한다.
	1. 오름차순 arr.sort(function(a, b) { return a - b })
	2. 내림차순 arr.sort(function(a, b) { return b - a })
*/

// console.log( Math.abs(-1) );		// 절대값
// console.log( Math.floor(4.8) ); // 소수점 이하 버림
// console.log( Math.ceil(4.1) ); 	// 소수점 이하 올림
// console.log( Math.round(4.5) ); // 소수점 이하 반올림
// console.log( Math.random() ); 	// 0 ~ 0.999999999 까지의 난수를 발생

// 1 ~ 45까지의 난수 발생
// console.log( Math.random() * 45 ); 										// 0 ~ 44.9999999
// console.log( Math.floor( Math.random() * 45 ) ); 			// 0 ~ 44
// console.log( Math.floor( Math.random() * 45 ) + 1 ); 	// 1 ~ 45

// 200 ~ 299까지의 난수 발생
// console.log( Math.random() * 100 ); // 0 ~ 99.9999...
// console.log( Math.floor( Math.random() * 100 ) ); // 0 ~ 99
// console.log( Math.floor( Math.random() * 100 ) + 200 ); // 200 ~ 299

/*
function sum(a, b) {
	a, b: 인자/매개변수/parameter/arguments
}
var a = {
	a: 'A', // property
	b: function() { // method

	}
}
*/


console.log( random(1, 45) );

var arr = ['A', 'B'];

console.log(arr); 											// ['A', 'B']

console.log( arr.push('C') );						// 3 (배열의 갯수를 리턴)
console.log(arr); 											// ['A', 'B', 'C']

console.log( arr.unshift('Z') );				// 4 (배열의 갯수를 리턴)
console.log(arr); 											// ['Z', 'A', 'B', 'C']

console.log(arr[2]);										// B (값을 가져올 뿐 방에서 값이 나오진 않는다)
console.log(arr);												// ['Z', 'A', 'B', 'C']

console.log( arr.pop() );								// C
console.log( arr );											// ['Z', 'A', 'B']

console.log( arr.shift() );							// Z
console.log( arr );											// ['A', 'B']

var fruits = ['apple', 'banana', 'cherry'];
// 값을 넣기만 함
console.log( fruits.splice(1, 0, 'melon') );		// [] (꺼내는 값들을 새로운 배열에 넣어서 리턴한다)
console.log( fruits );													// ['apple', 'melon', 'banana', 'cherry']

var fruits = ['apple', 'banana', 'cherry'];
// 값을 빼기만 함
console.log( fruits.splice(1, 1) );							// ['banana']
console.log( fruits );													// ['apple', 'cherry']

var fruits = ['apple', 'banana', 'cherry'];
// 값을 교체 함
console.log( fruits.splice(1, 1, 'melon', 'orange') );	// ['banana']
console.log( fruits );																// ['apple', 'melon', 'orange' 'cherry']

var fruits = ['apple', 'banana', 'cherry'];
// 값을 교체 함
console.log( fruits.splice(1, 2, 'melon', 'orange') );	// ['banana', 'cherry']
console.log( fruits );																	// ['apple', 'melon', 'orange']

var fruits = ['apple', 'banana', 'cherry'];
// 값을 찾아냄
console.log( fruits.indexOf('melon') );

// console.clear();

/**************** 로또 프로그램 *****************/
function choiceLotto() {
	var numbers = [];
	var lotto = new Array();
	
	for(var i=1; i<=45; i++) numbers.push(i);
	// for(; lotto.length < 6;) {
	while(lotto.length < 6) {
		var idx = random(0, 45); // Math.floor(Math.random * 45) + 0;
		if( lotto.indexOf(numbers[idx]) === -1 ) lotto.push(numbers[idx]);
	} // while(조건) {  조건이 참일때까지 반복, 반복회수 제한이 애매할때 }
	lotto.sort(function(a, b) {return a - b}); // 오름차순 정렬
	setHtml(lotto);
}

function setHtml(lotto) {
	var lottoEl = document.getElementById('lotto');
	var historyEl = document.getElementById('history');
	var html = lottoEl.innerHTML;
	historyEl.innerHTML = '<li><ul class="d-flex my-2 justify-content-center">'+html+'</ul></li>' + historyEl.innerHTML;
	lottoEl.innerHTML = '';
	for(var i=0; i<6; i++) {
		lottoEl.innerHTML += '<li class="ball '+getLottoColor(lotto[i])+'">'+lotto[i]+'</li>';
	}
}

function getLottoColor(n) {
	var color = '';
	if(n <= 10) color = 'yellow';
	else if(n <= 20) color = 'blue';
	else if(n <= 30) color = 'red';
	else if(n <= 40) color = 'black';
	else color = 'green';
	return color;
}

