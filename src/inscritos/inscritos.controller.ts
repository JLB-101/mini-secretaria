import { Controller, Get, Param, Post,Put, Delete, Body } from '@nestjs/common';
import { Inscrito } from './inscrito.model';
import { InscritosService } from './inscritos.service';

@Controller('inscritos')
export class InscritosController {
  constructor(private readonly inscritosService: InscritosService) {}

  @Get()
  getAllInscritos(): Inscrito[] {
    return this.inscritosService.getAllInscritos();
  }

  @Get(':id')
  getInscritoById(@Param('id') id: string): Inscrito {
    return this.inscritosService.getInscritoById(+id);
  }

  @Post()
  addInscrito(@Body() inscrito: Inscrito): void {
    this.inscritosService.addInscrito(inscrito);
  }



  @Put(':id')
  updateInscrito(@Param('id') id: string, @Body() inscrito: Inscrito): Inscrito {
    inscrito.id = +id;
    return this.inscritosService.updateInscrito(inscrito);
  }

  @Delete(':id')
  deleteInscrito(@Param('id') id: string): Inscrito {
    return this.inscritosService.deleteInscrito(+id);
  }
  // Outros métodos podem ser implementados aqui
}
