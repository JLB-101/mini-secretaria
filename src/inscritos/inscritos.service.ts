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

  addInscrito(inscrito: Inscrito): void {
    this.inscritos.push(inscrito);
  }

  updateInscrito(inscrito: Inscrito): Inscrito {
    const index = this.inscritos.findIndex(i => i.id === inscrito.id);
    if (index !== -1) {
      this.inscritos[index] = inscrito;
      return inscrito;
    }
    return null; // Retornar null ou lançar uma exceção se o inscrito não for encontrado
  }

  deleteInscrito(id: number): Inscrito {
    const index = this.inscritos.findIndex(i => i.id === id);
    if (index !== -1) {
      const inscrito = this.inscritos[index];
      this.inscritos.splice(index, 1);
      return inscrito;
    }
    return null; // Retornar null ou lançar uma exceção se o inscrito não for encontrado
  }

  // Outros métodos (editar, excluir, etc.) podem ser implementados aqui
}
