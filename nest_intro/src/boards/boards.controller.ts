import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards(@GetUser() user: User): Promise<Board[]> {
    return this.boardService.getAllBoards(user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    return this.boardService.createBoard(createBoardDto, user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.boardService.deleteBoard(id, user);
  }
}

/*
Pipe: data transformation and data validation
메소드 호출 직전에 pipe를 지나가게 된다.
pipe를 통과하면 handler에 도달하여 response를 작성한다. 
pipe를 통과하지 못하면 error가 발생한다.

data transformation: 입력 데이터를 원하는 형식으로 변환한다.
data validation: 입력 데이터의 유효성을 평가한다.

1. handler-level pipe:
2. parameter-level pipe: 특정 param에게만 적용되는 파이프
3. global-level pipe: 클라이언트로부터 오는 모든 요청에 적용되는 파이프

nestJS의 built-in pipe 6가지를 사용할 수도 있다.
*/

/*
typeORM: ts로 작성된 객체 관계형 매퍼 라이브러리
ORM: 객체와 RDB의 데이터를 자동으로 변형 및 연결하는 작업

typeORM은 모델을 기반으로 DB 테이블 체계를 자동으로 생성하며 
간단한 코딩으로 ORM 프레임 워크를 사용하기 쉽고 다른 모듈과 쉽게 통합된다.
*/
