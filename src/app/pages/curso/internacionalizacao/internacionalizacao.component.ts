import { Component, OnInit } from '@angular/core';
import { InternacionalizacaoService } from './internacionalizacao.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-internacionalizacao',
  templateUrl: './internacionalizacao.component.html',
  styleUrls: ['./internacionalizacao.component.scss']
})
export class InternacionalizacaoComponent implements OnInit {

  public dados: any = {}

  constructor(private internacionalizacaoService: InternacionalizacaoService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.internacionalizacaoService.getInternacionalizacao().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        this.dados.titulo = infos.titulo
        TextoUtils.preencheElementoDOM("descricao", TextoUtils.markDownParaHtml(infos.descricao));
        
        this.dados.imagemPrincipal = infos.Imagens[1].media.data.attributes.url
        this.dados.legendaImagemPrincipal = infos.Imagens[1].legenda
        
        this.dados.imagemSecundaria = infos.Imagens[0].media.data.attributes.url
        this.dados.legendaImagemSecundaria = infos.Imagens[0].legenda
        
        this.dados.editaisDuplaDiplomacao = infos.EditaisDuplaDiplomacaoAnteriores
        this.dados.editaisMobilidadeEstudantil = infos.EditaisMobilidadeEstudantilAnteriores
        this.dados.linksImportantes = infos.LinksImportantes
        
        this.dados.professor = {
          titulo: infos.professorResponsavelInternacionalizacao.titulo,
          nomeProf: infos.professorResponsavelInternacionalizacao.nomeProf,
          telefoneProf: infos.professorResponsavelInternacionalizacao.telefoneProf,
          emailProf: infos.professorResponsavelInternacionalizacao.emailProf,
          emailUniversidade: infos.professorResponsavelInternacionalizacao.emailUniversidade,
          linkDeAjuda: infos.professorResponsavelInternacionalizacao.linkDeAjuda,
        }
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }
}
