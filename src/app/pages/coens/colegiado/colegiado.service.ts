import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class ColegiadoService {

  constructor(private httpConfig: HttpConfigService) { }

  getColegiado() {
    return this.httpConfig.get("coens-colegiado", "?populate[0]=AtasColegiado.AtasDoColegiado.media&populate[1]=RegulamentoColegiado")
  }
}
