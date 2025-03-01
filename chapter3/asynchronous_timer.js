

/*
setTimeout(() => {
    console.log('2초 후에 실행됩니다.')
}, 2000);

console.log("adsf")
*/


//지정한 시간마다 주기적으로 지정한 함수를 실행한다.
/*
setInterval(() => {
    console.log("2초마다 실행됩니다.");
},2000)
*/


//setTimeout함수는 clearTimerout을 통해서 취소가 가능하다.
//setTimeout함수는 비동기 함수라서 실행되지 않고 아래의 clearTimeout가 먼저 실행됨
/*
const timerId = setTimeout(() => {
    console.log("0초 뒤에 실행됩니다.");
},0)
console.log("내가 먼저");
clearTimeout(timerId);
*/


//setInterval함수는 clearInterval함수로 취사가 가능하다.
/*
const timerId = setInterval(() => {
    console.log("2초마다 실행됩니다.");
},2000)
console.log("내가 먼저");
clearInterval(timerId);
*/
