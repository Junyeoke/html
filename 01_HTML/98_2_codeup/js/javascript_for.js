// TODO 1251 : 1 부터 100까지 출력하기
// 반복문 연습용 예제입니다.
// 입력은 없습니다.
// 1부터 100까지 공백으로 띄워 하나씩 출력하세요.

// let result = "";
// for(let i = 1; i <= 100; i++){
//     result += i + " ";
// } document.write(result);

// TODO 1252 : 1 부터 n 까지 출력하기
// 문제 설명
// 어떤 수 n을 입력으로 받아 1부터 n까지의 숫자를 출력하시오.

// 입력
// n이 입력으로 들어온다. (1 <= n <= 100000)

// 출력
// 1부터 n까지 공백으로 띄워 출력한다.

// 입력 예시   
// 5

// 출력 예시
// 1 2 3 4 5 

// let number = Number(prompt("숫자를 입력해주세요"));
// let result = "";
// for(let i = 1; i <= number; i++){
//     result += i + " ";
// } document.write(result);

// TODO 1253 : a 부터 b까지 출력하기
// 문제 설명
// 어떤 두 수 a, b가 있을 때 두 수 사이의 모든 정수를 오름차순으로 출력하시오.

// 예를 들어, a=5 , b=10일 경우 5 6 7 8 9 10입니다.

// 입력
// 두 수 a, b가 입력으로 들어온다. ( a, b는 정수, a, b 중 어떤 수가 큰지 모름)

// 출력
// a와 b 사이의 정수들을 오름차순으로 출력한다.

// 입력 예시   
// 3 8

// 출력 예시
// 3 4 5 6 7 8 

// let a = Number(prompt("숫자 입력"));
// let b = Number(prompt("숫자 입력"));
// let min = Math.min(a, b);
// let max = Math.max(a, b);
// let result = "";
// for(let i = min; i <= max; i++){
//     result += i + " ";
// } document.write(result);

// TODO 1254 : 알파벳 출력하기
// 문제 설명
// 시작 알파벳과 마지막 알파벳을 입력받아 그 두 알파벳 사이의 모든 알파벳을 출력하시오.

// 예)
// a f   ====> a b c d e f  

// 입력
// 시작 알파벳과 마지막 알파벳을 공백으로 띄워 입력받는다.(소문자만 입력되고, 사전순으로 입력된다.)

// 출력
// 두 알파벳 사이의 모든 알파벳을 출력한다.

// 입력 예시   
// d g

// 출력 예시
// d e f g 

// let first = prompt("시작 알파벳을 입력하세요").charCodeAt(0);
// let last = prompt("마지막 알파벳을 입력하세요").charCodeAt(0);
// let result = "";
// for(let i = first; i <= last; i++){

//     result += String.fromCharCode(i) + " d";
// }
// document.write(result);

// TODO : 1255 : 두 실수 사이 출력하기
// 문제 설명
// 소수 둘째 자리의 두 실수 a와 b가 입력으로 주어진다.

// a와 b사이의 수를 0.01간격으로 오름차순으로 출력하시오.

// 예)
// 5.67 5.73  ==> 5.67 5.68 5.69 5.70 5.71 5.72 5.73

// let a = Number(prompt("숫자를 입력해주세요"));
// let b = Number(prompt("숫자를 입력해주세요"));
// let result = "";
// for(let i = a; i <= b; i+=0.01){
//     result += i + " ";
// } document.write(result);


// TODO 1256 : 별 출력하기
// 문제 설명
// 별(*)을 n개 만큼 출력한다.

// 입력
// 별의 개수인 n이 입력된다.(1 <= n <=1000)

// 출력
// 별(*)을 개수만큼 출력한다.

// 입력 예시   
// 5

// 출력 예시
// *****

// let a = Number(prompt("개수를입력하세요"));
// let result = "";
// for(let i = 1; i <= a; i++){
//     result += "*"
// } 
// document.write(result);

// TODO 1257 

// 문제 설명
// 시작수와 마지막 수가 입력되면

// 시작수부터 마지막 수까지의 모든 홀수를 출력하시오.

// 입력
// 두 수 a, b 가 입력된다. ( a <= b )

// 출력
// a~b의 홀수를 모두 출력한다.

// 입력 예시   
// 2 7

// 출력 예시
// 3 5 7 

// let a = Number(prompt("시작수 입력"));
// let b = Number(prompt("마지막수 입력"));
// let result = "";
// for(let i = a; i <= b; i++){
//     if(i % 2 !== 0) {
//         result += i + " ";
//     }
// } document.write(result);