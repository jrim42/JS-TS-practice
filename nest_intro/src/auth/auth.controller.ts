import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // localhost:3000/auth/signup
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}

/*
JWT (json web token)
당사자 간 정보를 JSON 개체로 안전하게 전송하기 위한 방식을 정의하는 개방형 표준
이 정보는 디지털 서명이 되어있으므로 신뢰할 수 있다.
정보를 안전하게 전할 때 혹은 user의 권한 같은 것을 체크하기 위해 사용하는 모듈

token: header + payload + verify signature

유저 로그인 -> 토큰 생성 -> 토큰 보관
++) admin 전용 게시물에 접근하려고 하는 경우, 
    token을 request header에 같이 넣어서 보낸다.
    서버에서 JWT를 이용해서 token을 다시 생성한 뒤 둘을 비교하고
    통과한 경우 admin 전용 게시물에 접근할 수 있게 된다.

*/
