
//var은 함수 스코프
//let은 블록 스코프를 가진다.
//블록 스코프는 블록이 끝날 때 내부의 변수도 같이 사라진다.
//함수 스코프는 하무가 끝날 때 내부의 변수도 같이 사라진다.


//클로저 : 외부 값에 접근하는 함수

const a = 1;
const func = () => {
    console.log(a);
};

//var를 사용하면 이미 i의 값이 4로 증가한 이후에 setTimeout함수가 실행되서 오류가 발생한다.
const number =[1, 3, 5, 7];
for(var i = 0; i < number.length; i++){
    setTimeout(() => {
        console.log(number[i]);
    }, 1000 * (i + 1));
}

//let은 반복문을 돌 때마다 새로운 블록을 생성한다. 따라서 문제가 발생하지 않는다.
for(let i = 0; i < number.length; i++){
    setTimeout(() => {
        console.log(number[i]);
    }, 1000 * (i + 1));
}

//var를 이용하려면 for문이 끝나기 이전에 var변수의 값을 넣어주는 함수를 만들어서 매개변수로 입력받는다면 끝값에 도달하기 이전에 값을 고정시키는게 가능하다.
function helper(j) {
    return () => {
        console.log(number[j], j);
    }
}
for(var i = 0; i < number.length; i++){
    setTimeout(helper(i), 1000 * (i + 1));
}
//forEach를 이용해서 잡는것도 가능하다.
number.forEach((num, i) => {
    setTimeout(() => {
        console.log(num, i);
    }, 1000 * ( i + 1));
})

//let은 블록단위 함수라서 함수의 범위를 제대로 지정해주지 않으면 문제가 발생할 수 있다.
const type = 'a';
switch(type) {
    case 'a' :{ 
        let name = '제로초';
        console.log(name);
        break;
    }
    case 'b' :{
        let name = '레오';
        console.log(name);
        break;
    }
    case 'c' : {
        let name = '체리';
        console.log(name);
        break;
    }
    
}
