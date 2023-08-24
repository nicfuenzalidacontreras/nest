import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Auth } from '../auth/decorators';
import { validRoles } from '../auth/interfaces/valid-role.interface';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  //@Auth(validRoles.admin)
  executedSeed() {
    return this.seedService.runSeed();
  }
}
