import { Controller, Get, Param, Req } from '@nestjs/common';
import { BrasilAPIService } from 'src/core/infra/services/brasil-api.service';

@Controller('api')
export class BrasilAPIController {
  constructor(private readonly brasilAPIService: BrasilAPIService) {}

  @Get()
  async getHello() {
    const requestResult = this.brasilAPIService.getHello();
    return requestResult;
  }

  @Get(':cnpj')
  async getCNPJ(@Param() params: any) {
    const handleRequest = await this.brasilAPIService.getCNPJ(params.cnpj);
    return handleRequest;
  }


}
