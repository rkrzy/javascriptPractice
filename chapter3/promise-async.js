// const p1 = new Promise((resolve, reject) => {
//     resolve('success');
// });
// p1.then((data) => console.log(data));

const p2 = new Promise((resolve, reject) => {
    reject('error');
});
p2.catch((error) => console.log(error));


const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});
setTimeoutPromise(3000).then(() => {
    console.log('3초 뒤에 실행됩니다.')
});

// setTimeoutPromise(1000).then(() => {
//     console.log('1초 뒤에 실행됩니다.');
// });
// console.log('내가 먼저');

// setTimeoutPromise(1000);
// console.log('1초 뒤에 실행됩니다.')
// console.log('내가 나중에')

async function main() {
    await setTimeoutPromise(1000);
    console.log('1초 뒤에 실행됩니다.');
    console.log('내가 나중에');
}
main();


const p1 = new Promise((resolve, reject) => {
    reject('에러!');
});
try{
    await p1;
}catch{
    console.log('에러인 경우');
}finally{
    console.log('성공이든 에러든 마지막에 실행됩니다.')
}