import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class RecentesService {

  constructor(private httpConfig: HttpConfigService) { }

  getPostsRecentes() {
    return this.httpConfig.get("posts")
  }
}
