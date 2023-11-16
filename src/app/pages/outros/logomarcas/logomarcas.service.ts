import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class LogomarcasService {

  constructor(private httpConfig: HttpConfigService) { }

  getLogomarcas() {
    return this.httpConfig.get("logomarcas")
  }
}
