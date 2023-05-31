import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  // inject repository to service
  constructor(
    // @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getAllBoards(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('build');

    query.where('board.userId = :userId', { userId: user.id });
    const boards = await query.getMany();
    return boards;
  }
  // async-await: 요청이 처리 완료가 된 상태의 값을 받고자할 때 사용
  async getBoardById(id: number): Promise<Board> {
    // findOne: finds first entity that matches come id or find options
    const found = await this.boardRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`cannot find board with id: ${id}`);
    }
    return found;
  }

  // create 로직은 repository로 이동
  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  // delete()와 remove() 함수의 차이
  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.boardRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`cannot find board with id: ${id}`);
    }
  }
  /* 
  // 다른 컴포넌트에서 boards의 내용을 수정하는 것을 막기 위한 접근제한
  private boards: Board[] = [];

  // 모든 게시물을 가져오는 함수
  getAllBoards(): Board[] {
    // 타입의 정의는 선택사항이지만 원하는 타입과 다른 입력이 들어올 시 에러가 발생하며
    // 코드를 읽는 사람으로 하여금 더 쉽게 코드를 이해하도록 도울 수 있다.
    return this.boards;
  }

  // 게시물을 생성하는 함수
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  // id를 이용하여 특정 게시물을 가져오는 함수
  getBoardById(id: string): Board {
    const found = this.boards.find((boards) => boards.id === id);

    if (!found) {
      throw new NotFoundException(`cannot find board with id: ${id}`);
    }
    return found;
  }

  // id를 이용하여 특정 게시물을 삭제하는 함수
  deleteBoard(id: string): void {
    // id의 유효성을 우선적으로 확인한다.
    const found = this.getBoardById(id);
    // id가 같지 않은 것들만 남겨서 board에 넣어준다.
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  // 특정 게시물의 상태를 업데이트 해주는 함수
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
  */
}
