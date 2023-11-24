import { Component, OnInit } from '@angular/core';
import { CentroAcademicoService } from './centro-academico.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-centro-academico',
  templateUrl: './centro-academico.component.html',
  styleUrls: ['./centro-academico.component.scss']
})
export class CentroAcademicoComponent implements OnInit {

  public dados: any = {}

  constructor(private centroAcademicoService: CentroAcademicoService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.centroAcademicoService.getCentroAcademico().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        TextoUtils.preencheElementoDOM("descricao", TextoUtils.markDownParaHtml(infos.descricao));
        this.dados = {
          titulo: infos.titulo,
          linkImg: infos.logoCAES.data.attributes.url,
          diretoria: infos.Diretoria
        }
      }
    })
  }
}
