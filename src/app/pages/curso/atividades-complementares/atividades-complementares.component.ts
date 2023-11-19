import { Component, OnInit } from '@angular/core';
import { AtividadesComplementaresService } from './atividades-complementares.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-atividades-complementares',
  templateUrl: './atividades-complementares.component.html',
  styleUrls: ['./atividades-complementares.component.scss']
})
export class AtividadesComplementaresComponent implements OnInit {

  public dados: any = []

  constructor(private atividadesComplementaresService: AtividadesComplementaresService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.atividadesComplementaresService.getAtividadesComplementares().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        TextoUtils.preencheElementoDOM("descricao", TextoUtils.markDownParaHtml(infos.descricao));
        this.dados = {
          titulo: infos.titulo,
          regulamentos: infos.RegulamentosAtividadesComplementares[0],
          sistema: infos.SistemasAtividadesComplementares[0],
          professor: infos.ProfessorResponsavelAC
        }
      }
    })
  }
}
