let i = 0;

function recurse() {
    i++;
    recurse();
}
try {
    recurse();
}catch (ex) {
    alert('최대 크기는 ${i}\nerror: ${ex}');
}