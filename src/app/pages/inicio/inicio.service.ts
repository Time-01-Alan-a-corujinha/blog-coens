import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private httpConfig: HttpConfigService) { }

  getInicio() {    
    return this.httpConfig.get("inicio")
  }
}
