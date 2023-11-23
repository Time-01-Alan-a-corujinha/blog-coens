import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GruposDePesquisaService {
  private apiUrl = 'https://coens-strapi-back.onrender.com/api/atividades-e-producao-grupos-de-pesquisa?populate=*';

  constructor(private http: HttpClient) {}

  getGruposDePesquisa(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
