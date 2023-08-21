// TODO 1001
// 다음 단어를 출력하시오.
// Hello
console.log("Hello")

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
console.log("Hello"+"\n"+"World");

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

console.log("\u0001" + "\u0016" + "\u0002" + "\n" + "\u0019" + "\u0010" + "\u0017" + "\n" + "\u0003" + "\u0015" + "\u0004");

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
// console.log(result);