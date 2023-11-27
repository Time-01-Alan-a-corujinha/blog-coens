import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class PosGraduacaoService {

  constructor(private httpConfig: HttpConfigService) { }

  getPosGraduacao() {
    return this.httpConfig.get("pos-graduacao", "?populate%5B0%5D=CursoPosGraduacao.imagemDoCurso")
  }
}
