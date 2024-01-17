import { Module } from '@nestjs/common';
import { AppController } from './core/interface/controllers/app.controller';
import { AppService } from './core/infra/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
