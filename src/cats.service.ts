import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats(): string {
    return 'All the cats will be returned here but the cats are not ready to be returned yet...';
  }
}
