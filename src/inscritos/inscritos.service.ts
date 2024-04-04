// src/inscritos.service.ts

import { Injectable } from '@nestjs/common';
import { Inscrito } from './inscrito.model';

@Injectable()
export class InscritosService {
  private inscritos: Inscrito[] = [];

  getAllInscritos(): Inscrito[] {
    return this.inscritos;
  }

  getInscritoById(id: number): Inscrito {
    return this.inscritos.find(inscrito => inscrito.id === id);
  }

  // Métodos para adicionar, editar e excluir inscritos podem ser adicionados aqui
}
