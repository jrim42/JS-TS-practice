// entity를 사용하기 때문에 아래의 부분은 필요가 없다
/* 
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 공개글과 비공개글을 구분해주는 요소 - enumeration 사용
}
*/

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
