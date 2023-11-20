import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class GruposDePesquisaService {

  constructor(private httpConfig: HttpConfigService) { }

  getGruposDePesquisa(){
    return this.httpConfig.get(
      "atividades-e-producao-grupos-de-pesquisa",
      "?populate=*"
    );
  }
}
