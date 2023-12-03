import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {
  private configUrl: string = "https://coens-strapi-back.onrender.com/api/";

  constructor(private http: HttpClient) { }

  get(endereco: string, enderecoMidia: string = "?populate=*") {
    return this.http.get(this.configUrl + endereco + enderecoMidia) // enderecoMidia = Trazer informações e mídias
  }
  
}
