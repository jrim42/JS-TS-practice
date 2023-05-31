import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  // 상태는 public 혹은 private만 가능하다
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not a valid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    // 들어있으면 index값을 리턴하고 아니면 -1을 리턴한다.
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
