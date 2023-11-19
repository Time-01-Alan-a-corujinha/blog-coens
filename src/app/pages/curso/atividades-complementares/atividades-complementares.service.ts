import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class AtividadesComplementaresService {

  constructor(private httpConfig: HttpConfigService) { }

  getAtividadesComplementares() {
    return this.httpConfig.get(
      "curso-atividade-complementar",
      "?populate[0]=RegulamentosAtividadesComplementares.linksRegulamentos&populate[1]=SistemasAtividadesComplementares.linksSistemas&populate[2]=ProfessorResponsavelAC"
    )
  }
}
