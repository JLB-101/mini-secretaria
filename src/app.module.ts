import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InscritosService } from './inscritos/inscritos.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, InscritosService],
})
export class AppModule {}
