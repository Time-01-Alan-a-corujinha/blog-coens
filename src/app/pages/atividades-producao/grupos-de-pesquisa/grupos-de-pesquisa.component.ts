import { Component, OnInit } from '@angular/core';
import { GruposDePesquisaService } from './grupos-de-pesquisa.service';

@Component({
  selector: 'app-grupos-de-pesquisa',
  templateUrl: './grupos-de-pesquisa.component.html',
  styleUrls: ['./grupos-de-pesquisa.component.scss'],
})
export class GruposDePesquisaComponent implements OnInit {
  GruposDePesquisa: any = [];

  constructor(private gruposDePesquisaService: GruposDePesquisaService) {}

  ngOnInit(): void {
    this.gruposDePesquisaService.getGruposDePesquisa().subscribe((data) => {
      this.GruposDePesquisa = data;
    });
  }
}
