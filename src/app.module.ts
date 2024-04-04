import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InscritosService } from './inscritos/inscritos.service';
import { InscritosController } from './inscritos/inscritos.controller';


@Module({
  imports: [],
  controllers: [AppController, InscritosController],
  providers: [AppService, InscritosService],
})
export class AppModule {}
