import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class CoordenacaoService {

  constructor(
    private httpConfig : HttpConfigService
  ) { }

  getCoordenacao(){
    return this.httpConfig.get("coens-coordenacao" , "?populate[0]=Coordenador.profileImagem&populate[1]=CoordenadorSubst.profileImagem&populate[2]=AtasDaCoordenacao.atasDocs.docsAta")
  }
}
