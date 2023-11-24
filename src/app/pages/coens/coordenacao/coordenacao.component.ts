import { Component, OnInit } from '@angular/core';
import { CoordenacaoService } from './coordenacao.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-coordenacao',
  templateUrl: './coordenacao.component.html',
  styleUrls: ['./coordenacao.component.scss']
})
export class CoordenacaoComponent implements OnInit {
  public dados: any = {
    coordenacao:<object>[]
  }
  constructor(private CoordenacaoService: CoordenacaoService) { }

  ngOnInit(): void {
    this.getCoordenacao();
  }

  getCoordenacao(){
    this.CoordenacaoService.getCoordenacao().subscribe({
      next:(dados:any) => {
        const info = dados.data.attributes

        TextoUtils.preencheElementoDOM("Assessoria", TextoUtils.markDownParaHtml(info.descricao));

        this.dados = {
          coordenador: info.Coordenador,
          coordenadorSubst: info.CoordenadorSubst,
          titulo: info.titulo
        }
        console.log(this.dados)
      },error:(err) => {
        console.log(err)
      }
    })
  }
}
