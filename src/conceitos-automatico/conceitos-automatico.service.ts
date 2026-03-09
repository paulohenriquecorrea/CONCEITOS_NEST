import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  getHome(): string {
    return 'Conceitos Automático Service (veio do service)';
  }
}
