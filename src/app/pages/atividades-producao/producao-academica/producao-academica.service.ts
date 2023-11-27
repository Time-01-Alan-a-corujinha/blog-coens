import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProducaoAcademicaService {

  constructor(private httpConfig: HttpConfigService) { }

  getProducaoAcademica() {
    return this.httpConfig.get(
      "atividades-e-producao-producao-academica",
      "?populate[0]=producoesAcademicasPorAno.academicosTCC"
    )
  }
}
