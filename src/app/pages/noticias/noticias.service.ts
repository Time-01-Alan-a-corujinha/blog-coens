import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpConfig: HttpConfigService) { }

  getNoticias(paginacao?: number, itensPorPagina: number = 5): any {
    return paginacao ? this.httpConfig.get("posts", `?pagination[page]=${paginacao}&pagination[pageSize]=${itensPorPagina}&populate=*`) : this.httpConfig.get("posts")
  }
}
