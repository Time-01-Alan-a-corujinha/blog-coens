import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  constructor(
    private httpConfig : HttpConfigService

  ){}

  getDocentes(){
    return this.httpConfig.get("coens-docente" , "?populate[0]=Professores.profileImagem");
  }
}
