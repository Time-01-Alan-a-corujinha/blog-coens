import { Component, OnInit } from '@angular/core';
import { TccService } from './tcc.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-tcc',
  templateUrl: './tcc.component.html',
  styleUrls: ['./tcc.component.scss']
})
export class TccComponent implements OnInit {

  public dados: any = {}

  constructor(private tccService: TccService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.tccService.getTcc().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        TextoUtils.preencheElementoDOM("descricao", TextoUtils.markDownParaHtml(infos.descricao));
        this.dados = {
          titulo: infos.titulo,
          regulamentos: infos.RegulamentosDoTCC[0],
          sistema: {
            titulo: infos.SistemasELink[0].titulo,
            texto: infos.SistemasELink[0].LinkSistemasTCC[0].texto,
            link: infos.SistemasELink[0].LinkSistemasTCC[0].link,
          },
          manual: {
            titulo: infos.manualExecucao.titulo,
            texto: infos.manualExecucao.ManualDeExecucao[0].texto,
            link: infos.manualExecucao.ManualDeExecucao[0].media.data.attributes.url,
          },
          anexos: infos.Anexos,
          documentos: infos.DocumentosEntregaFinal,
          processo: infos.fluxoTCC,
          professor: infos.ProfessorResponsavelTCC,
        }
      }
    })
  }
}
