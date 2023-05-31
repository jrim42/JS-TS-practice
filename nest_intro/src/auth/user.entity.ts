import { Board } from 'src/boards/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
// findOne등을 이용해서 중복되는 것이 있는지 찾는 것보다는 DB level에서 처리
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // eager: true일 경우 user 정보를 가져올 때 board도 같이 가져온다.
  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];

  async validatePassword(password: string): Promise<boolean> {
    const isValid = await bcrypt.compare(password, this.password);

    return isValid;
  }
}
