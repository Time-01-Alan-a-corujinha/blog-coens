import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetosExtensaoService {

  constructor(private httpConfig: HttpConfigService) { }

  buscarProjetosExtensao() {
    return this.httpConfig.get("atividades-e-producao-projetos-de-extensao")
  }
}
