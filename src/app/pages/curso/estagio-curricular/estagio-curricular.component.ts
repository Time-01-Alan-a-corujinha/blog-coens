import { Component, OnInit } from '@angular/core';
import { EstagioCurricularService } from './estagio-curricular.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-estagio-curricular',
  templateUrl: './estagio-curricular.component.html',
  styleUrls: ['./estagio-curricular.component.scss']
})
export class EstagioCurricularComponent implements OnInit {

  public dados: any = {}

  constructor(private estagioCurricularService: EstagioCurricularService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.estagioCurricularService.getEstagioCurricular().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        this.dados.titulo = infos.titulo
        TextoUtils.preencheElementoDOM("descricao-inicial", TextoUtils.markDownParaHtml(infos.descricao));
        this.dados.perguntas = {
          titulo: infos.PerguntasEstagioCurricular[0].titulo,
          lista: infos.PerguntasEstagioCurricular[0].DocsPerguntas
        }
        this.dados.edital = {
          titulo: infos.EditalInfo[0].titulo,
          linkTitulo: infos.EditalInfo[0].editalEstagioPDF.data.attributes.url
        }
        TextoUtils.preencheElementoDOM("descricao-edital", TextoUtils.markDownParaHtml(infos.EditalInfo[0].descricao));
        
        this.dados.normas = {
          titulo: infos.NormasRegulamentos.titulo,
          lista: infos.NormasRegulamentos.linksNormasERegulamentos
        }
        
        this.dados.sistemas = {
          titulo: infos.SistemasEstagioCurricular[0].titulo,
          lista: infos.SistemasEstagioCurricular[0].linksSistemas,
        }
        
        this.dados.professor = {
          titulo: infos.ProfessorResponsavelEstagio.titulo,
          nomeProf: infos.ProfessorResponsavelEstagio.nomeProf,
          telefoneProf: infos.ProfessorResponsavelEstagio.telefoneProf,
          emailProf: infos.ProfessorResponsavelEstagio.emailProf,
          emailUniversidade: infos.ProfessorResponsavelEstagio.emailUniversidade,
          linkDeAjuda: infos.ProfessorResponsavelEstagio.linkDeAjuda,
        }
      }
    })
  }
}
