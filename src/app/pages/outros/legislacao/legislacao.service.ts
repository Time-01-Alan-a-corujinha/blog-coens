import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class LegislacaoService {

  constructor(private httpConfig: HttpConfigService) { }

  getLegislacao() {
    return this.httpConfig.get("legislacao")
  }
}
