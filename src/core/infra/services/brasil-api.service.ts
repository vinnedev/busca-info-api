import { Injectable } from '@nestjs/common';
import { Empresa, IBrasilAPIService } from 'src/core/interface/dtos/brasil-api.dto';
import { api } from 'src/core/utils/api';

@Injectable()
export class BrasilAPIService implements IBrasilAPIService {
    getHello(): string {
        return 'Hello World!';
    }

    async getCNPJ(cnpj: string): Promise<Empresa> {
        const request = await api.get(`/cnpj/v1/${cnpj}`)
        
        if (request.status !== 200) {
            throw new Error(`Error on data fetching: ${request.data.message}`)
        }

        return request.data;
    }


}
