import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent extends MatPaginatorIntl {
  override nextPageLabel = 'Próxima página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primeira página';
  override lastPageLabel = 'Última página';

  public dados: any = []
  public pageCount: number = 1;
  public totalNoticias: number = 5;
  public paginaAtual: number = 1
  
  constructor(private NoticiasService: NoticiasService) {
    super();
  }

  ngOnInit(): void {
    this.buscarDados()
  }

  trocaPagina(event: any): void {
    this.paginaAtual = event.pageIndex+1
    this.buscarDados()
  }

  buscarDados() {
    this.NoticiasService.getNoticias(this.paginaAtual).subscribe({
      next: (dados: any) => {        
        this.pageCount = dados.meta.pagination.pageCount
        this.totalNoticias = dados.meta.pagination.total

        let noticias: any = []
        dados.data.forEach((noticia: any) => {
          noticias.push({
            titulo: noticia.attributes.Titulo,
            conteudo: noticia.attributes.Conteudo,
            midia: noticia.attributes.Midias.data ? noticia.attributes.Midias.data[0].attributes : null,
            dataPublicacao: TextoUtils.converteData(noticia.attributes.publishedAt)
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
      }, 
      error: (err: any) => {
        console.log(err)
      }
    })
  }
}
