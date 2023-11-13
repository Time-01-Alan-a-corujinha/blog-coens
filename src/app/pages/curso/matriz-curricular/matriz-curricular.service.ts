import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class MatrizCurricularService {

  constructor(private httpConfig: HttpConfigService) { }

  getMatrizCurricular() {
    return this.httpConfig.get("curso-matriz-curricular", "?populate[0]=MatrizCurricular.imagemMatriz&populate[1]=MatrizCurricular.projetoPedagogicoPDF")
  }
}
