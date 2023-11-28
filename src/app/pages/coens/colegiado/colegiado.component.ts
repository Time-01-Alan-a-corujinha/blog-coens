import { Component, OnInit } from '@angular/core';
import { ColegiadoService } from './colegiado.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-colegiado',
  templateUrl: './colegiado.component.html',
  styleUrls: ['./colegiado.component.scss']
})
export class ColegiadoComponent implements OnInit {

  public dados: any = {}

  constructor(private colegiadoService: ColegiadoService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.colegiadoService.getColegiado().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes        
        
        TextoUtils.preencheElementoDOM("descricao", TextoUtils.markDownParaHtml(infos.descricao));
        TextoUtils.preencheElementoDOM("membrosColegiado", TextoUtils.markDownParaHtml(infos.membrosColegiado));
        this.dados = {
          titulo: infos.titulo,
          regulamento: {
            titulo: infos.RegulamentoColegiado[0].texto,
            link: infos.RegulamentoColegiado[0].link
          },
          atas: infos.AtasColegiado
        }        
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }
}
