import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class TccService {

  constructor(private httpConfig: HttpConfigService) { }

  getTcc() {
    return this.httpConfig.get(
      "curso-trabalho-de-conclusao-de-curso",
      "?populate[0]=manualExecucao.ManualDeExecucao.media&populate[1]=Anexos.DocsAnexos.media&populate[2]=fluxoTCC&populate[3]=ProfessorResponsavelTCC&populate[4]=RegulamentosDoTCC.regulamentosComLink&populate[5]=DocumentosEntregaFinal.DocsEntrega.media&populate[6]=SistemasELink.LinkSistemasTCC"
    )
  }
}
