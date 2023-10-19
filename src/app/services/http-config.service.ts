import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {
  private configUrl: string = "http://localhost:1337/api/"
  private populate: string = "?populate=*" // Trazer informações e mídias

  constructor(private http: HttpClient) { }

  get(endereco: string) {
    return this.http.get(this.configUrl+endereco+this.populate)
  }
  
}
