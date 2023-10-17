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

  async ngOnInit() {
    await this.buscarDados()
  }
  
  async buscarDados() {
    this.dados = await this.inicioService.getInicio();
  }

}
