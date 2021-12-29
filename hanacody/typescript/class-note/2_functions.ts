// 함수의 파라미터에 타입을 정의하는 방식
function sum(a : number, b : number) : number {
  return a + b;
}
sum(10,20);

// 함수의 반환 값에 타입을 정의하는 방식
function add() : number {
  return 10;
}

// 함수 옵셔널 파라미터(?)
function logs(a : string, b? : string, c? : string) {
  console.log(a,b,c);
}
logs('hello world');
logs('hello ts', 'abc');
