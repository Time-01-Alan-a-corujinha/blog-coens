import { Component, OnInit } from '@angular/core';
import { RecentesService } from './recentes.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-recentes',
  templateUrl: './recentes.component.html',
  styleUrls: ['./recentes.component.scss']
})
export class RecentesComponent implements OnInit {

  public dados: any = []
  public pagination: string = '' // Configurar a Paginação
  
  constructor(private recentesService: RecentesService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.recentesService.getPostsRecentes().subscribe({
      next: (dados: any) => {
        let noticias: any = []
        dados.data.forEach((noticia: any) => {
          noticias.push({
            titulo: noticia.attributes.Titulo,
            conteudo: noticia.attributes.Conteudo,
            midia: noticia.attributes.Midias.data ? noticia.attributes.Midias.data[0].attributes : null,
            dataPublicacao: this.converteData(noticia.attributes.publishedAt)
          })
        })
        
        this.dados = {
          titulo: "Notícias",
          noticias: noticias
        }
        setTimeout(() => {
          noticias.forEach((noticia: any, i: number) => {
            TextoUtils.preencheElementoDOM("conteudo"+i, TextoUtils.markDownParaHtml(noticia.conteudo));
          });
        }, 10);
      }
    })
  }

  converteData(data: string): string {
    return `${data.slice(8, 10)}/${data.slice(5, 7)}/${data.slice(0, 4)}`
  }
}
