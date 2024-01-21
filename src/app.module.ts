import { Module } from '@nestjs/common';
import { AppController } from './core/interface/controllers/app.controller';
import { AppService } from './core/infra/services/app.service';
import { BrasilAPIController } from './core/interface/controllers/brasil-api.controller';
import { BrasilAPIService } from './core/infra/services/brasil-api.service';

@Module({
  imports: [],
  controllers: [AppController, BrasilAPIController],
  providers: [AppService, BrasilAPIService],
})
export class AppModule {}
