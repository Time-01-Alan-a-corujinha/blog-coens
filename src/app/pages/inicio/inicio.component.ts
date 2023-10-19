import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public dados: any

  constructor(private inicioService: InicioService) { }

  ngOnInit() {
    this.buscarDados()
  }

  buscarDados() {
    this.inicioService.getInicio().subscribe({
      next: (dados: any) => {
        this.dados = dados.data.attributes
        console.log(this.dados);
      }, error: (err) => {
        console.log(err)
      }
    });
  }

}
