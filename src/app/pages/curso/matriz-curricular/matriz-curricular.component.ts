import { Component, OnInit } from '@angular/core';
import { MatrizCurricularService } from './matriz-curricular.service';

@Component({
  selector: 'app-matriz-curricular',
  templateUrl: './matriz-curricular.component.html',
  styleUrls: ['./matriz-curricular.component.scss']
})
export class MatrizCurricularComponent implements OnInit {

  public dados: any = {
    titulo: <string> "",
    matrizesCurriculares: <Array<any>> []
  }

  constructor(private matrizCurricularService: MatrizCurricularService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.matrizCurricularService.getMatrizCurricular().subscribe({
      next: (dados: any) => {
        let matrizes: Array<any> = []

        dados.data.attributes.MatrizCurricular.forEach((matriz: any) => {
          matrizes.push({
            titulo: matriz.tituloMatriz,
            linkTitulo: matriz.projetoPedagogicoPDF.data.attributes.url,
            subtitulo: matriz.subtituloMatriz,
            linkImagem: matriz.imagemMatriz.data[0].attributes.url
          })
        });

        this.dados.titulo = dados.data.attributes.titulo,
        this.dados.matrizesCurriculares = matrizes
      }
    })
  }
}
