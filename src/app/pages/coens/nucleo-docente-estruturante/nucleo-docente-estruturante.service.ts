import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class NucleoDocenteEstruturanteService {

  constructor(private httpConfig: HttpConfigService) { }

  getNucleoDocente() {
    return this.httpConfig.get("coens-nucleo-docente-estruturante", "?populate[0]=RegulamentoNDEs.media&populate[1]=AtasNDE.media")
  }
}
