import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class InternacionalizacaoService {

  constructor(private httpConfig: HttpConfigService) { }

  getInternacionalizacao() {
    return this.httpConfig.get(
      "curso-internacionalizacao",
      "?populate%5B0%5D=Imagens.media&populate%5B1%5D=EditaisDuplaDiplomacaoAnteriores.TextoELink&populate%5B2%5D=EditaisMobilidadeEstudantilAnteriores.TextoELink&populate%5B3%5D=LinksImportantes.TextoELink&populate%5B4%5D=professorResponsavelInternacionalizacao"
    )
  }
}
