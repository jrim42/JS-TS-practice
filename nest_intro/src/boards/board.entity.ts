import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/auth/user.entity';

// 아래와 같은 column table을 가진 entity가 저절로 생성된다.
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}

// repository는 entity 개체와 함께 작동하며 entity 찾기, 삽입, 업데이트, 삭제 등을 처리한다.
// DB 관련된 일은 서비스가 아닌 repository에서 해주게 된다 (repository pattern)
