import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {
  private configUrl: string = "http://localhost:1337/api/"
  private populate: string = "?populate=*" // Trazer informações e mídias

  constructor() { }

  async get(endereco: string): Promise<any> {
    let retorno = await fetch(this.configUrl + endereco + this.populate)
    return (await retorno.json()).data.attributes
  }
  
}
