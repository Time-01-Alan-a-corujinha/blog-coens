import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class HorarioCalendarioService {

  constructor(private httpConfig: HttpConfigService) { }

  getHorarioCalendario() {
    return this.httpConfig.get(
      "horario-e-calendario",
      "?populate%5B0%5D=horarioECalendario.horario1Semestre&populate%5B1%5D=horarioECalendario.horario2Semestre"
    )
  }
}
