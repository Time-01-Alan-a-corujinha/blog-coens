import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private httpConfig: HttpConfigService) { }

  async getInicio() {    
    return await this.httpConfig.get("inicio")
  }
}
