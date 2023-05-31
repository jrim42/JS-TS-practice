import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserRepository } from './user.repository';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    // 토큰이 유효한지 확인하는 부분
    // super: 부모 컴포넌트의 부분을 사용하기 위해서 사용하는 키워드
    super({
      secretOrKey: 'shhhhhhh...',
      // 토큰이 어디에서 오는지?
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async vaidate(payload) {
    const { username } = payload;
    const user: User = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
