import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

// title, year, genres에서 바꾸고 싶은것들만 바꿀거기 때문에 ? 옵션을 주게 된다.
// 하지만 PartialType을 사용하면 간단하게 줄일 수 있다.
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
