// memNum : 입장객 수
// colNum : 한 줄에 앉을 사람 수
// rowNum : 필요한 줄의 개수
// rowNum = memNum / colNum => 나머지가 없을때
// rowNum = (memNum / colNum) + 1 => 나머지가 있을 때

let memNum = prompt("입장객은 몇 명?");
let colNum = prompt("한 줄에 몇 명씩 앉나요?");

if (memNum % colNum === 0) {
    rowNum = parseInt(memNum / colNum); // 나머지가 없을 경우
} else {
    rowNum = parseInt(memNum / colNum) + 1; // 나머지가 있을 경우 줄 1개 생성
}

let i, j;

document.write("<table>")
for (i = 0; i < rowNum; i++) {  // 필요한 줄 갯수까지 줄 생성
    document.write("<tr>")
    for (j = 1; j <= colNum; j++) { // 한 줄에 앉을 사람 수 까지 자리 생성
        seatNum = i * colNum + j;
        if (seatNum > memNum) break; // 좌석 번호가 입장객 수보다 크면 반복문 탈출
        document.write("<td>좌석 " + seatNum + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");