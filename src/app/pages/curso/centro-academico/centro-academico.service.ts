import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class CentroAcademicoService {

  constructor(private httpConfig: HttpConfigService) { }

  getCentroAcademico() {
    return this.httpConfig.get("curso-centro-academico", "?populate[0]=logoCAES&populate[1]=Diretoria.Diretoria")
  }
}
