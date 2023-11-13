import { Component, OnInit } from '@angular/core';
import { DescricaoCursoService } from './descricao-curso.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-descricao-curso',
  templateUrl: './descricao-curso.component.html',
  styleUrls: ['./descricao-curso.component.scss']
})
export class DescricaoCursoComponent implements OnInit {

  public dados: any = {
    titulo: <string> "",
    projeto: {
      texto: <string> "",
      linkPdf: <string> ""
    }
  }

  constructor(private descricaoCursoService: DescricaoCursoService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.descricaoCursoService.getDescricaoCurso().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        this.dados.titulo = infos.titulo
        TextoUtils.preencheElementoDOM("texto-descricao", TextoUtils.markDownParaHtml(infos.descricao));
        this.dados.projeto.texto = infos.projetoPedagogico.texto
        this.dados.projeto.linkPdf = infos.projetoPedagogico.media.data.attributes.url
      }
    })
  }
}
