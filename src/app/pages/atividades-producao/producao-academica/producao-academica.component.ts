import { Component, OnInit } from '@angular/core';
import { ProducaoAcademicaService } from './producao-academica.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-producao-academica',
  templateUrl: './producao-academica.component.html',
  styleUrls: ['./producao-academica.component.scss']
})
export class ProducaoAcademicaComponent implements OnInit {
  
  public dados: any = []
  public displayedColumns: string[] = ['academico', 'orientadores', 'anoESemestre', 'tituloDoTrabalho'];

  constructor(private producaoAcademicaService: ProducaoAcademicaService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.producaoAcademicaService.getProducaoAcademica().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        console.log(infos);
        
        
        let listaProducoes: Array<any> = infos.producoesAcademicasPorAno
        listaProducoes.map(listaProducao => {
          listaProducao.open = false
        });
        
        TextoUtils.preencheElementoDOM("descricao", TextoUtils.markDownParaHtml(infos.descricao));
        this.dados = {
          titulo: infos.titulo,
          link: infos.link,
          listaProducoes: listaProducoes
        }
      }
    })
  }
}
