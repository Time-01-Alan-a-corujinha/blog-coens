import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';
import { NoticiasService } from '../noticias/noticias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public dados: any = {}

  constructor(
    private inicioService: InicioService,
    private noticiasService: NoticiasService,
  ) { }

  ngOnInit() {
    this.buscarDados()
  }

  buscarDados() {
    this.inicioService.getInicio().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes

        TextoUtils.preencheElementoDOM("texto", TextoUtils.markDownParaHtml(infos.descricao));

        this.dados.videoInstitucionalLink = infos.videoInstitucional.data.attributes.url

        this.dados.barraLateral = [
          ({ titulo: "Tipo de Curso", descricao: infos.tipoCurso }),
          ({ titulo: "Modalidade", descricao: infos.modalidade }),
          ({ titulo: "Duração", descricao: infos.duracao }),
          ({ titulo: "Turno", descricao: infos.Turno }),
          ({ titulo: "Número de Vagas", descricao: infos.numeroDeVagas }),
          ({ titulo: "Forma de Ingresso", descricao: infos.formaDeIngresso })
        ]

        this.noticiasService.getNoticias(1, 3).subscribe({
          next: (noticias: any) => {
            let listaNoticias: any = []
            noticias.data.forEach((noticia: any) => {
              listaNoticias.push({
                titulo: noticia.attributes.Titulo,
                conteudo: noticia.attributes.Conteudo,
                midia: noticia.attributes.Midias.data ? noticia.attributes.Midias.data[0].attributes : null,
                dataPublicacao: TextoUtils.converteData(noticia.attributes.publishedAt)
              })
            })
            this.dados.noticias = listaNoticias
            this.dados.tituloNoticias = "Notícias mais recentes"

            setTimeout(() => {
              listaNoticias.forEach((noticia: any, i: number) => {
                TextoUtils.preencheElementoDOM("conteudo" + i, TextoUtils.markDownParaHtml(noticia.conteudo));
              });
            }, 10);
          },
          error: (err: any) => {
            console.log(err)
          }
        })
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

}
