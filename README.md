# javascriptPractice
자바스크립트 공부
인터프리터 방식 : 코드를 한 덩어리씩 실행해 결과를 출력하는 방식
콘솔 : 한 줄씩 입력받아 평가 후 출력 하고 반복 (REPL)
## 사용 엔진
웹 브라우저 내부에 자바스크립트 코드를 실행하는 프로그램인 자바스크립트 엔진이 내장되어 있다.
- 파이어폭스 : 스파이더몽키
- 크롬, 엣지, 오페라 : V8
- 사파리 : 자바스크립트코어


<details>
  <summary>Chapter 3 - 비동기와 타이머, 스코프와 클로저, 호출 스택과 이벤트 루트</summary>

- 호출 스택 : 동기 코드를 담당한다.
- 이벤트 루프 : 비동기 코드를 담당한다.
- 백그라운드 : 타이머를 처리하고 이벤트 리스너를 저장하는 공간 -> 백그라운드에서 코드를 실행하는게 아닌 콜백 함수들을 테스크 큐로 보낸다.
- 테스크 큐 : 실행될 콜백 함수들이 대기하고 있는 공간
- 이벤트 루프 : 테스크 큐에서 호출 스택으로 함수를 이동시키는 존재. -> 호출 스택이 비어있으면 옮긴다.
- 가장 처음 실행되는 함수는 annonymous이다.
- annonymous가 호출 스택에서 나가면 종료되는게 맞지만 백그라운드, 태스크 큐에도 함수가 없어야 전체가 종료된다.
- 콜백 함수는 지정한 시간이 지나고 호출 스택이 비어 있어야만 실행될 수 있어서 비동기와 타이머를 실행할때 문제가 발생할 수 있다.

## 재귀 함수
- 내부에서 자기 자신을 다시 호출하는 함수
- 재귀함수가 연산량이 많으면 웹 브라우저가 느려지는 현상이 발생할 수 있다.

## 프로미스와 async/await
- 실행된 결과 값을 저장하고 있으며 언제든지 필요할 때 그 값을 꺼낼 수 있는 객체
- 비동기 작업을 처리하기 위한 객체로, 미래에 완료될 작업을 나타낸다.
- await : 프로미스가 resolve()할 때까지 기다리라는 뜻. 프로미스 코드에서만 가능하다.
</details>

<details>
<summary>Chapter 4 - HTML과 DOM 조작하기</summary>

- DOM(Document Object Model) : document 객체를 통해 접근 및 조작할 수 있다.
- class : .
- id : #
- 다중 속성을 찾을때는  const $span = document.querySelector('div span'); 형식을 사용한다.
  - 그럼 div안에 있는 span파일을 검색하는 과정을 수행한다.
- 
  ```javascript
  const $div = document.querySelector('div');
  console.log($div.textContent);
  console.log($div.innerHTML)
  //이런 형식을 사용하면 InnerHTML을 사용해서 어떻게 나오는지 볼 수 있다.
- 
  ```javascript
  $div.innerHTML = '';
  const $button = document.querySelector('button');
  $button.innerHTML = '<b>굵게</b>';
  //안에 Html문을 넣을수도 있다.
- Html내부의 값을 선택할때는 textContent 입력받은 값을 가져올때는 value를 사용한다.
- 
  ```javascript
  const $input = document.querySelector('input');
  $input.value = 123
  $input.focus();
  //안에 값을 넣고 그 칸을 하이라이트 한다.
- 이벤트 리스너는 대표적인 비동기 함수 중  하나다.
  - 이벤트 리스너가 존재하는한 전체코드도 종료되지 않는다.

- 이벤트 캡처링 : 이벤트가 자식 태그로 전파되어 내려가는 현상.

</details>
