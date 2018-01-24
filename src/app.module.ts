import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CatsModule, DatabaseModule]
})
export class ApplicationModule {}