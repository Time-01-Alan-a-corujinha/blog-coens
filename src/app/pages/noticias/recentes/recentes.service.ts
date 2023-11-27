import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class RecentesService {

  constructor(private httpConfig: HttpConfigService) { }

  getPostsRecentes(paginacao?: number) {
    return paginacao ? this.httpConfig.get("posts", `?pagination[page]=${paginacao}&pagination[pageSize]=5&populate=*`) : this.httpConfig.get("posts")
  }
}
