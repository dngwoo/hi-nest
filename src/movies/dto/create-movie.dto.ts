import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() // 이걸 써주면 create할때 넣어도 되고 안넣어도 된다.
  @IsString({ each: true })
  readonly genres: string[];
}
