import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Board } from 'src/boards/board.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  // database type
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'comfortindex',
  database: 'board-app',
  // entities to be loaded for this connection
  entities: [__dirname + '/../**/*.entity/{js, ts}', Board, User],
  synchronize: true,
};
