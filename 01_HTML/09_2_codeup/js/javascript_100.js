// TODO 1001
// 다음 단어를 출력하시오.
// Hello
console.log("Hello");

// TODO 1002
// 이번에는 공백()을 포함한 문장을 출력한다.
// 다음 문장을 출력해보자.
// Hello World
// (대소문자에 주의한다.)
console.log("Hello World");

// TODO 1003
// 이번에는 줄을 바꿔 출력하는 출력문을 연습해보자.
// 다음과 같이 줄을 바꿔 출력해야 한다.

// Hello
// World
// (두 줄에 걸쳐 줄을 바꿔 출력)
console.log("Hello" + "\n" + "World");

// TODO 1004
// 이번에는 작은 따옴표(single quotation mark)가 들어있는
// 특수한 형태의 출력문에 대한 연습을 해보자.

// 다음 문장을 출력하시오.
// 'Hello'
console.log("'Hello'");

// TODO 1005
// 이번에는 큰따옴표(double quotation mark)가 포함된 출력문을 연습해보자.

// 다음 문장을 출력하시오.
// "Hello World"
// (단, 큰따옴표도 함께 출력한다.)
console.log('"Hello World"');

// TODO 1006
// 다음 문장을 출력하시오.

// "!@#$%^&*()"
// (단, 큰따옴표도 함께 출력한다.)
console.log('"!@#$%^&*"');

// TODO 1007
// 다음 경로를 출력하시오.

// "C:\Download\hello.cpp"
// (단, 큰따옴표도 함께 출력한다.)
console.log('"C:\\Download\\hello.cpp"');

// TODO 1008
// 이번에는 특수문자를 출력하는 연습을 해보자.

// 키보드로 입력할 수 없는 다음 모양을 출력해보자.
// (** 참고 : 운영체제의 문자 시스템에 따라 아래와 같은 모양이 출력되지 않을 수 있다.)

// ┌┬┐
// ├┼┤
// └┴┘

console.log(
  "\u0001" +
    "\u0016" +
    "\u0002" +
    "\n" +
    "\u0019" +
    "\u0010" +
    "\u0017" +
    "\n" +
    "\u0003" +
    "\u0015" +
    "\u0004"
);

// TODO 1010
// 문제 설명
// 정수형(int)으로 변수를 선언하고, 변수에 정수값을 저장한 후
// 변수에 저장되어 있는 값을 그대로 출력해보자.

// let a = Number(prompt("정수를 입력하세요"));
// console.log(a);

// TODO 1011
// 문자형(char)으로 변수를 하나 선언하고, 변수에 문자를 저장한 후
// 변수에 저장되어 있는 문자를 그대로 출력해보자.
// let char = prompt("문자를 입력하세요");
// console.log(char);

// TODO 1012
// 실수형(float)로 변수를 선언하고 그 변수에 실수값을 저장한 후
// 저장되어 있는 실수값을 출력해보자.
// let float = Number(prompt("실수를 입력하세요"));
// console.log(float);

// TODO 1013
// 정수(int) 2개를 입력받아 그대로 출력해보자.
// 입력 예시
// 1 2

// 출력 예시
// 1 2
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("두번째 정수를 입력하세요"));
// console.log(a + " " + b);

// TODO 1014
// 2개의 문자(ASCII CODE)를 입력받아서 순서를 바꿔 출력해보자.
// 입력 예시
// A b

// 출력 예시
// b A

// let char1 = prompt("첫번째 문자를 입력하세요");
// let char2 = prompt("두번째 문자를 입력하세요");
// console.log(char2 + " " + char1);

// TODO 1015
// 실수(float) 1개를 입력받아 저장한 후,
// 저장되어 있는 값을 소수점 셋 째 자리에서 반올림하여
// 소수점 이하 둘 째 자리까지 출력하시오.
// 입력 예시
// 1.59254

// 출력 예시
// 1.59
// let float = Number(prompt("실수를 입력하세요"));
// let result1 = float.toFixed(2);
// console.log(result1);

// TODO 1017
// 정수 1개를 입력받아 공백을 사이에 두고 3번 출력해보자.
// 입력 예시
// 125

// 출력 예시
// 125 125 125
// let num = Number(prompt("정수를 입력해주세요"));
// console.log(num + " " + num + " " + num);

// TODO 1018
// 어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자
// 입력
// 시(hour)와 분(minute)이 ":" 으로 구분되어 입력된다.

// 출력
// 입력받은 시간을 "시:분" 형식으로 출력한다.
// let time = prompt("시간을 입력해주세요").split(":");
// console.log(time[0] + ":" + time[1]);

// TODO 1019
// 년, 월, 일을 입력받아 지정된 형식으로 출력하는 연습을 해보자.
// 연, 월, 일이 ".(닷)"으로 구분되어 입력된다.

// 출력
// 입력받은 연, 월, 일을 yyyy.mm.dd 형식으로 출력한다.
// 입력 예시
// 2013.8.5

// 출력 예시
// 2013.08.05

// let date = prompt("년.월.일 을 입력해주세요").split(".");
// console.log(date[0] + "." + "0" + date[1] + "." + "0" + date[2]);

// TODO 1020
// 주민번호 앞 6자리와 뒷 7자리가 '-'로 구분되어 입력된다.
// (입력값은 가상의 주민번호이다.)
// ex)110011-0000000
// '-'를 제외한 주민번호 13자리를 모두 붙여 출력한다.

// let code = prompt("주민번호를 입력하세요").split("-");
// console.log(code[0]+code[1]);

// TODO 1021
// 1개의 단어를 입력받아 그대로 출력해보자.
// 입력 예시
// Informatics

// 출력 예시
// Informatics
// console.log("Informatics");

// TODO 1022
// 공백 문자가 포함되어 있는 문장을 입력받고 그대로 출력하는 연습을 해보자.
// 입력 예시
// Programming is very fun!!

// 출력 예시
// Programming is very fun!!
// console.log("Programming is very fun!!");

// TODO 1023
// 실수 1개를 입력받아 정수 부분과 실수 부분으로 나누어 출력한다.
// 입력 예시
// 1.414213

// 출력 예시
// 1
// 414213

// let a = prompt("실수를 입력하세요").split(".");
// console.log(a[0] + "\n"+ a[1]);

// TODO 1024
// 단어를 1개 입력받는다.
// 입력받은 단어(영어)의 각 문자를
// 한줄에 한 문자씩 분리해 출력한다.

// 입력 예시
// Boy

// 출력 예시
// 'B'
// 'o'
// 'y'

// let str = prompt("문자를 입력해주세요").split("");
// console.log("'" + str[0] + "'" + "\n" + "'" + str[1] + "'" + "\n" + "'" + str[2] + "'" );

// TODO 1025
// 다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다.
// 입력 예시
// 75254

// 출력 예시
// [70000]
// [5000]
// [200]
// [50]
// [4]

// let num = prompt("다섯자리 정수를 입력해주세요");
// let x1 = "[" + num[0] + "0000" + "]" + "\n";
// let x2 = "[" + num[1] + "000" + "]" + "\n";
// let x3 = "[" + num[2] + "00" + "]" + "\n";
// let x4 = "[" + num[3] + "0" + "]" + "\n";
// let x5 = "[" + num[4] + "]";
// console.log(x1+x2+x3+x4+x5);

// TODO 1026
// 입력되는 시:분:초 에서 분만 출력해보자.
// 입력 예시
// 17:23:57

// 출력 예시
// 23

// let time = prompt("시:분:초 를 입력해주세요").split(":");
// console.log(time[1]);

// TODO 1027
// 입력 예시
// 2014.07.15

// 출력 예시
// 15-07-2014

// let date = prompt("년.월.일을 입력해주세요").split(".");
// let result = date[2] + "-" + date[1] + "-" + date[0];
// console.log(result);

// TODO 1028
// 정수 1개를 입력받아 그대로 출력해보자.
// 입력 예시
// 2147483648

// 출력 예시
// 2147483648

// let num = Number(prompt("정수를 입력해주세요"));
// console.log(num);

// TODO 1029
// 실수 1개를 입력받아 그대로 출력해보자.
// 입력 예시
// 3.14159265359

// 출력 예시
// 3.14159265359

// let float = Number(prompt("실수를 입력해주세요"));
// console.log(float);

// TODO : 1030
// 정수 1개를 입력받아 그대로 출력해보자.
// 입력 예시
// -2147483649

// 출력 예시
// -2147483649
// let num = Number(prompt("정수를 입력해주세요"));
// console.log(num);

// TODO : 1031
// 10진수를 입력받아 8진수(octal)로 출력해보자.
// 입력 예시
// 10

// 출력 예시
// 12

// let num = Number(prompt("10진수 숫자를 입력해주세요"));
// let result = num.toString(8);
// // console.log(result);

// TODO : 1032
// 10진수를 입력받아 16진수(hexadecimal)로 출력해보자.
// 입력 예시
// 255

// 출력 예시
// ff
// let num = Number(prompt("10진수 숫자를 입력해주세요"));
// let result = num.toString(16);
// console.log(result);

// TODO 1033
// 10진수를 입력받아 16진수(hexadecimal)로 출력해보자.
// 입력 예시
// 255

// 출력 예시
// FF

// let num = Number(prompt("10진수 숫자를 입력해주세요"));
// let result = num.toString(16);
// console.log(result.toUpperCase());

// TODO 1034
// 8진수로 입력된 정수 1개를 10진수로 바꾸어 출력해보자.
// 입력 예시
// 13

// 출력 예시
// 11
// let num = parseInt(prompt("8진수를 입력해주세요"), 8);
// let result = parseInt(num, 10);
// console.log(result);

// TODO 1035
// 16진수로 입력된 정수 1개를 8진수로 바꾸어 출력해보자.
// 입력 예시
// f

// 출력 예시
// 17
// let num = prompt("16진수를 입력해주세요");
// let result = parseInt(num, 16).toString(8);
// console.log(result);

// TODO 1036
// 영문자 1개를 입력받아 아스키 코드표의 10진수 값으로 출력해보자.
// 입력 예시
// A

// 출력 예시
// 65
// let char = prompt("영문자 1개를 입력하시오.");
// let asc = char.charCodeAt(0);
// console.log(asc);

// TODO 1037
// 10진 정수 1개를 입력받아 아스키 문자로 출력해보자.
// 입력 예시
// 65

// 출력 예시
// A
// let asc = prompt("아스키 코드를 입력해주세요");
// let char = String.fromCharCode(asc);
// console.log(char);

// TODO 1038
// 정수 2개를 입력받아 합을 출력하는 프로그램을 작성해보자.
// 입력 예시
// 123 -123

// 출력 예시
// 0

// let num1 = Number(prompt("첫번째 정수를 입력해주세요"));
// let num2 = Number(prompt("두번째 정수를 입력해주세요"));
// let sumVal = num1 + num2;
// console.log(sumVal);

// TODO 1039
// 정수 2개를 입력받아 합을 출력해보자.
// 입력 예시
// 2147483648 2147483648

// 출력 예시
// 4294967296
// let num1 = Number(prompt("첫번째 정수를 입력하세요"));
// let num2 = Number(prompt("두번째 정수를 입력하세요"));
// let sumVal = num1 + num2;
// console.log(sumVal);

// TODO 1040
// 입력된 정수의 부호를 바꿔 출력해보자.
// 입력 예시
// -1

// 출력 예시
// 1

// let num = Number(prompt("정수를 입력하시오"));
// console.log(-(num));

// TODO 1041
// 영문자 1개를 입력받아 그 다음 문자를 출력해보자.
// 입력 예시
// a

// 출력 예시
// b

// let char = prompt("문자 한개를 입력하시오.").charCodeAt(0);
// let nextChar = char + 1;
// console.log(String.fromCharCode(nextChar));

// TODO 1042
// 정수 2개(a, b) 를 입력받아 a를 b로 나눈 몫을 출력해보자.
// 입력 예시
// 1 3

// 출력 예시
// 0

// let a = Number(prompt("첫번째 정수를 입력"));
// let b = Number(prompt("두번째 정수를 입력"));
// let result = parseInt((a / b));
// console.log(result);

// TODO 1043
// 정수 2개(a, b) 를 입력받아 a를 b로 나눈 나머지를 출력해보자.
// 입력 예시
// 10 3

// 출력 예시
// 1

// let a = Number(prompt("첫번째 정수"));
// let b = Number(prompt("두번째 정수"));
// let result = a % b;
// console.log(result);

// TODO 1044
// 정수를 1개 입력받아 1만큼 더해 출력해보자.
// 입력 예시
// 2147483647

// 출력 예시
// 2147483648

// let num = Number(prompt("정수를 입력"));
// let result = num + 1;
// console.log(result);

// TODO 1045
// 입력 예시
// 10 3

// 출력 예시
// 첫 줄에 합
// 둘째 줄에 차,
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 여섯째 줄에 나눈 값을 순서대로 출력한다.
// (실수, 소수점 이하 셋째 자리에서 반올림해 둘째 자리까지 출력)
// 13
// 7
// 30
// 3
// 1
// 3.33
// let a = Number(prompt("정수입력1"));
// let b = Number(prompt("정수입력2"));
// let result = (a + b) +"\n" + (a - b) + "\n" + (a * b) + "\n" + parseInt(a / b) + "\n" + (a % b) + "\n" + (a / b).toFixed(2) ;
// console.log(result);

// TODO 1046
// 정수 3개를 입력받아 합과 평균을 출력해보자.
// 입력 예시
// 1 2 3

// 출력 예시
// 6
// 2.0

// let a = Number(prompt("첫번째"));
// let b = Number(prompt("두번째"));
// let c = Number(prompt("세번째"));
// let sum = a + b + c;
// let avg = (sum / 3).toFixed(1);
// console.log(sum + "\n" + avg);

// TODO 1047
// 정수 1개를 입력받아 2배 곱해 출력해보자.
// 입력 예시
// 1024
// 출력 예시
// 2048

// let num = Number(prompt("정수입력"));
// let result = num << 1;
// console.log(result);

// TODO 1048
// 정수 2개(a, b)를 입력받아 a를 2^b배 곱한 값으로 출력해보자.
// 입력 예시
// 1 3

// 출력 예시
// 8
// let a = Number(prompt("정수를 입력1"));
// let b = Number(prompt("정수를 입력2"));
// let result = a * Math.pow(2, b);
// console.log(result);

// TODO 1049
// 두 정수(a, b)를 입력받아

// a가 b보다 크면 1을, a가 b보다 작거나 같으면 0을 출력하는 프로그램을 작성해보자.
// 입력 예시   
// 9 1

// 출력 예시
// 1
// let a = Number(prompt("첫번째 정수를 입력"));
// let b = Number(prompt("두번째 정수를 입력"));
// if (a > b) {
//     console.log("1");
// } else if (a <= b) {
//     console.log("0");
// }

// TODO 1050
// 두 정수(a, b)를 입력받아
// a와 b가 같으면 1을, 같지 않으면 0을 출력하는 프로그램을 작성해보자.

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));
// if (a === b) {
//     console.log("1");
// } else {
//     console.log("0");
// }

// TODO 1051
// 두 정수(a, b)를 입력받아
// b가 a보다 크거나 같으면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.
// 입력 예시   
// 0 -1

// 출력 예시
// 0

// let a = Number(prompt("첫번째 정수입력"));
// let b = Number(prompt("두번째 정수입력"));
// if (b > a) {
//     console.log("1");
// } else {
//     console.log("0");
// }

// TODO 1052
// 두 정수(a, b)를 입력받아
// a와 b가 서로 다르면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.
// 입력 예시   
// 0 1

// 출력 예시
// 1
// let a = Number(prompt("첫번째 정수입력"));
// let b = Number(prompt("두번째 정수입력"));
// if (a !== b) {
//     console.log("1");
// } else {
//     console.log("0");
// }

// TODO 1053
// 1(true, 참) 또는 0(false, 거짓) 이 입력되었을 때
// 반대로 출력하는 프로그램을 작성해보자.

// let a = Number(prompt("1 또는 0 입력"));
// if (a === 1) {
//     console.log("0");
// } else {
//     console.log("1");
// }

// TODO 1054
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 모두 참일 때에만 참을 출력하는 프로그램을 작성해보자.

// 입력
// 1 또는 0의 값만 가지는 2개의 정수가 공백을 두고 입력된다.
// 출력
// 둘 다 참(1)일 경우에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.

// 입력 예시   
// 1 1

// 출력 예시
// 1

// let a = prompt("1또는 0을 입력하세요").split(" ");
// if (a[0] === "1" && a[1] === "1") {
//   console.log("1");
// } else {
//   console.log("0");
// }

// TODO 1055

// 문제 설명
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 하나라도 참이면 참을 출력하는 프로그램을 작성해보자.
// 입력
// 1 또는 0의 값만 가지는 2개의 정수가 공백을 두고 입력된다.
// 출력
// 하나라도 참일 경우 1을 출력하고, 그 외의 경우에는 0을 출력한다.
// 입력 예시   
// 1 1
// 출력 예시
// 1

// let a = prompt("1또는 0을 입력하세요").split(" ");
// if (a[0] === "1" || a[1] === "1") {
//   console.log("1");
// } else {
//   console.log("0");
// }

// TODO 1056
// 두 가지의 참(1) 또는 거짓(0)이 입력될 때,
// 참/거짓이 서로 다를 때에만 참을 출력하는 프로그램을 작성해보자.
// 1 또는 0의 값만 가지는 2개의 정수가 공백을 두고 입력된다.
// 출력
// 참/거짓이 서로 다를 때에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.
// 입력 예시   
// 1 1
// 출력 예시
// 0

// let a = prompt("1 또는 0을 입력하세요").split(" ");
// if (a[0] ^ a[1]) {
//   console.log("1");
// } else {
//   console.log("0");
// }

// TODO 1057
// 문제 설명
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 참/거짓이 서로 같을 때에만 참이 계산되는 프로그램을 작성해보자.
// 입력
// 1 또는 0의 값만 가지는 2개의 정수가 공백을 두고 입력된다.
// 출력
// 참/거짓이 서로 같을 때에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.
// 입력 예시   
// 0 0
// 출력 예시
// 1

// let a = prompt("1 또는 0을 입력하세요").split(" ");
// if (a[0] === a[1]) {
//   console.log("1");
// } else {
//   console.log("0");
// }

// TODO 1058
// 문제 설명
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 모두 거짓일 때에만 참이 계산되는 프로그램을 작성해보자.

// 입력
// 1 또는 0의 값만 가지는 2개의 정수가 공백을 두고 입력된다.

// 출력
// 둘 다 거짓일 경우에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.

// 입력 예시   
// 0 1

// 출력 예시
// 0

// let a = prompt("1 또는 0을 입력하세요").split(" ");
// if (a[0] === "0" && a[1] === "0") {
//   console.log("1");
// } else {
//   console.log("0");
// }

// TODO 1059
// 입력 된 정수를 비트단위로 참/거짓을 바꾼 후 정수로 출력해보자.
// 비트단위(bitwise)연산자 ~ 를 붙이면 된다.(~ : tilde, 틸드라고 읽는다.)
// 출력
// 비트 단위로 1 -> 0, 0 -> 1로 바꾼 후 그 값을 10진수로 출력한다.
// 입력 예시   
// 2
// 출력 예시
// -3

// let a = Number(prompt("정수를 입력해주세요"));
// console.log(~a);


// TODO 1060
// 입력된 정수 두 개를 비트단위로 and 연산한 후 그 결과를 정수로 출력해보자.
// 비트단위(bitwise)연산자 &를 사용하면 된다.(and, ampersand, 앰퍼센드라고 읽는다.)
// 출력
// 두 정수를 비트단위(bitwise)로 and 계산을 수행한 결과를 10진수로 출력한다.
// 입력 예시   
// 3 5
// 출력 예시
// 1

// let a = prompt("두 정수를 입력하세요").split(" ");
// console.log(a[0] & a[1]);

// TODO 1061
// 문제 설명
// 입력된 정수 두 개를 비트단위로 or 연산한 후 그 결과를 정수로 출력해보자.
// 비트단위(bitwise) 연산자 |(or, vertical bar, 버티컬바)를 사용하면 된다.
// 입력 예시   
// 3 5

// 출력 예시
// 7

// let a = prompt("두 정수를 입력하세요").split(" ");
// console.log(a[0] | a[1]);

// TODO 1062
// 문제 설명
// 입력된 정수 두 개를 비트단위로 xor 연산한 후 그 결과를 정수로 출력해보자.
// 입력 예시   
// 3 5

// 출력 예시
// 6

// let a = prompt("두 정수를 입력해주세요").split(" ");
// console.log(a[0] ^ a[1]);

// TODO 1063
// 입력된 두 정수 a, b 중 큰 값을 출력하는 프로그램을 작성해보자.
// 단, 조건문을 사용하지 않고 3항 연산자 ? 를 사용한다.
// 입력 예시   
// 123 456

// 출력 예시
// 456

// let a = prompt("두 정수를 입력해주세요").split(" ");
// console.log((a[0] > a[1])? a[0] : a[1]);

// TODO 1064
// 문제 설명
// 입력된 세 정수 a, b, c 중 가장 작은 값을 출력하는 프로그램을 작성해보자.
// 단, 조건문을 사용하지 않고 3항 연산자 ? 를 사용한다.
// 입력 예시   
// 3 -1 5

// 출력 예시
// -1

// let a = prompt("세 정수를 입력해주세요").split(" ");
// console.log(((a[0] < a[1]) ? a[0] : a[1]) < a[2] ? ((a[0] < a[1]) ? a[0] : a[1]) : a[2]);

// TODO 1065
// 문제 설명
// 세 정수 a, b, c가 입력되었을 때, 짝수만 출력해보자.
// 입력 예시   
// 1 2 4

// 출력 예시
// 2
// 4

// let a = prompt("세 정수를 입력해주세요").split(" ");

// if(Number(a[0]) % 2 === 0){
//   console.log(a[0]);
// }
// if(Number(a[1]) % 2 === 0){
//   console.log(a[1]);
// }
// if(Number(a[2]) % 2 === 0){
//   console.log(a[2]);
// }

// TODO 1066
// 세 정수 a, b, c가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.
// 입력 예시   
// 1 2 8

// 출력 예시
// odd
// even
// even

// let a = prompt("세 정수를 입력해주세요").split(" ");
// if(Number(a[0]) % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// if(Number(a[1]) % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// if(Number(a[2]) % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// TODO 1067
// 정수 1개가 입력되었을 때, 음(minus)/양(plus)과 짝(even)/홀(odd)을 출력해보자.
// 입력 예시   
// -2147483648

// 출력 예시
// minus
// even
// let a = Number(prompt("정수를 입력해주세요"));
// if (a < 0) {
//   console.log("minus");
//   if(a % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// } else {
//   console.log("plus");
// }

// TODO 1068
// 문제 설명
// 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//  0 ~   39 : D
// 로 평가되어야 한다.
// 입력 예시   
// 73

// 출력 예시
// B

// let score = Number(prompt("점수를 입력해주세요"));
// if(score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 70 && score <= 89) {
//   console.log("B");
// } else if (score >= 40 && score <= 69) {
//   console.log("C");
// } else if (score >= 0 && score <= 39) {
//   console.log("D");
// }

// TODO 1069
// 문제 설명
// 평가를 문자(A, B, C, D, ...)로 입력받아 내용을 다르게 출력해보자.
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?

// 입력 예시   
// A

// 출력 예시
// best!!!

// let grade = prompt("평가를 입력해주세요");

// switch(grade) {
//   case "A" :
//     console.log("best!!!");
//     break;
//   case "B" :
//     console.log("good!!");
//     break;
//   case "C" :
//     console.log("run!");
//     break;
//   case "D" :
//     console.log("slowly~");
//     break;
//   default :
//     console.log("what?");
//     break;
// }

// TODO 1070
// 월이 입력될 때 계절 이름이 출력되도록 해보자.

// 예
// 월 : 계절 이름
// 12, 1, 2 : winter
//   3, 4, 5 : spring
//   6, 7, 8 : summer
//   9, 10, 11 : fall

// let a = Number(prompt("월을 입력해주세요"));
// switch(a) {
//   case 3 :
//   case 4 :
//   case 5 :
//     console.log("spring");
//     break;
//   case 6 :
//   case 7 :
//   case 8 :
//     console.log("summer");
//     break;
//   case 9 :
//   case 10 :
//   case 11 :
//     console.log("fall");
//     break;
//   case 12 :
//   case 1 :
//   case 2 :
//     console.log("winter");
// }

// TODO 1071
// 출력
// 입력된 정수를 줄을 바꿔 하나씩 출력하는데, 0이 입력되면 종료한다.
// (0은 출력하지 않는다.)
// 입력 예시   
// 7 4 2 3 0 1 5 6 9 10 8

// 출력 예시
// 7
// 4
// 2
// 3
// let a = prompt("정수를 입력").split(" ");
// let result = "";
// for(let i = 0; i < a.length; i++) {
//   if(a[i] !== "0") {
//     result += a[i]+"\n";
//   } else {
//     break;
//   }
  
// } console.log(result);

// TODO 1072
// 문제 설명
// n개의 정수가 순서대로 입력된다.
// 출력
// n개의 정수를 한 개씩 줄을 바꿔 출력한다.

// 입력 예시   
// 5
// 1 2 3 4 5

// 출력 예시
// 1
// 2
// 3
// 4
// 5
// let a = Number(prompt("정수하나만 입력하세요"));
// let b = prompt("정수를 입력하세요").split(" ");
// let result = "";
// for(i = 0; i < a; i++){
//   result += b[i] + "\n";
// }
// console.log(result);

// TODO 1073
// 문제 설명
// 정수가 순서대로 입력된다.
// 출력
// 입력된 정수를 줄을 바꿔 하나씩 출력하는데, 0이 입력되면 종료한다.
// (0은 출력하지 않는다.)


// 입력 예시   
// 7 4 2 3 0 1 5 6 9 10 8

// 출력 예시
// 7
// 4
// 2
// 3

// let a = prompt("숫자를 입력해주세요").split(" ");
// let result = "";
// for(let i = 0; i < a.length; i++){
//   if(a[i] !== "0") {
//     result += a[i] + "\n";
//   } else {
//     break;
//   }
// } console.log(result);

// TODO 1074
// 문제 설명
// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.

// 입력
// 정수 1개가 입력된다.
// (1 ~ 100)


// 출력
// 1씩 줄이면서 한 줄에 하나씩 1이 될 때까지 출력한다.


// 입력 예시   
// 5

// 출력 예시
// 5
// 4
// 3
// 2
// 1

// let a = Number(prompt("숫자입력"));
// while(a > 0) {
//   console.log(a);
//   --a;
// }

// TODO 1075
// 문제 설명
// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.
// 입력
// 정수 1개가 입력된다.
// (1 ~ 100)

// 출력
// 1씩 줄이면서 한 줄에 하나씩 0이 될 때까지 출력한다.


// 입력 예시   
// 5

// 출력 예시
// 4
// 3
// 2
// 1
// 0
// let a = Number(prompt("숫자입력"));
// while(a !== 0) {
//   a--;
//   console.log(a);
  
// }


// TODO 1076
// 문제 설명
// 영문자(a ~ z) 1개가 입력되었을 때 그 문자까지의 알파벳을 순서대로 출력해보자.
// 입력 예시   
// f

// 출력 예시
// a b c d e f
// let a = prompt("알파벳을 입력").charCodeAt(0);
// let result = "";

// for(let i = 97; i <= a; i++) {
//   result += String.fromCodePoint(i) + " ";
// } console.log(result);

// TODO 1077
// 문제 설명
// 정수(0 ~ 100) 1개를 입력받아 0부터 그 수까지 순서대로 출력해보자.
// 입력 예시   
// 4

// 출력 예시
// 0
// 1
// 2
// 3
// 4

// let a = Number(prompt("숫자를 입력"));
// let result = "";
// for(let i = 0; i <= a; i++) {
//   result += i + "\n";
// } console.log(result);

// TODO 1078
