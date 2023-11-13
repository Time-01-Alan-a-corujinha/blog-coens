import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class DescricaoCursoService {

  constructor(private httpConfig: HttpConfigService) { }

  getDescricaoCurso() {
    return this.httpConfig.get("curso-descricao-do-curso", "?populate=projetoPedagogico.media")
  }
}
