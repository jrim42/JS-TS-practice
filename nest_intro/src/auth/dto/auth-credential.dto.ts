import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(5)
  @MaxLength(20)
  // only alphabet and number
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password should contain only english alphabet and numbers',
  })
  password: string;
}
