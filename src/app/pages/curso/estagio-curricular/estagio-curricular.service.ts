import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class EstagioCurricularService {

  constructor(private httpConfig: HttpConfigService) { }

  getEstagioCurricular() {
    return this.httpConfig.get(
      "curso-estagio-curricular", 
      "?populate%5B0%5D=EditalInfo.editalEstagioPDF&populate%5B1%5D=ProfessorResponsavelEstagio&populate%5B2%5D=NormasRegulamentos.linksNormasERegulamentos&populate%5B3%5D=SistemasEstagioCurricular.linksSistemas&populate%5B4%5D=PerguntasEstagioCurricular.DocsPerguntas.media"
      )
  }
}
