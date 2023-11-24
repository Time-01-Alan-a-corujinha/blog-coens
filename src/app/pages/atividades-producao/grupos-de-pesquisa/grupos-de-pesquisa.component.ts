import { Component, OnInit } from '@angular/core';
import { GruposDePesquisaService } from './grupos-de-pesquisa.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-grupos-de-pesquisa',
  templateUrl: './grupos-de-pesquisa.component.html',
  styleUrls: ['./grupos-de-pesquisa.component.scss'],
})
export class GruposDePesquisaComponent implements OnInit {
  gruposDePesquisa: any;

  constructor(private gruposService: GruposDePesquisaService) {}

  ngOnInit() {
    this.gruposService.getGruposDePesquisa().subscribe(data => {
      this.gruposDePesquisa = data;
      setTimeout(() => {
        this.gruposDePesquisa.data.attributes.GrupoDePesquisa.forEach((grupo: any, i: number) => {
          TextoUtils.preencheElementoDOM("descricao"+i, TextoUtils.markDownParaHtml(grupo.descricao))
        });
      }, 100);
    });
  }
}
