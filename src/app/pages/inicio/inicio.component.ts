import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public dados: any = {
    descricao: <string> "",
    videoInstitucionalLink: <string> "",
    barraLateral: <object> []
  }

  constructor(private inicioService: InicioService) { }

  ngOnInit() {
    this.buscarDados()
  }

  buscarDados() {
    this.inicioService.getInicio().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes 
        
        TextoUtils.preencheElementoDOM("texto", TextoUtils.markDownParaHtml(infos.descricao));
        
        this.dados.videoInstitucionalLink = infos.videoInstitucional.data.attributes.url

        this.dados.barraLateral.push({titulo: "Tipo de Curso", descricao: infos.tipoCurso})
        this.dados.barraLateral.push({titulo: "Modalidade", descricao: infos.modalidade})
        this.dados.barraLateral.push({titulo: "Duração", descricao: infos.duracao})
        this.dados.barraLateral.push({titulo: "Turno", descricao: infos.Turno})
        this.dados.barraLateral.push({titulo: "Número de Vagas", descricao: infos.numeroDeVagas})
        this.dados.barraLateral.push({titulo: "Forma de Ingresso", descricao: infos.formaDeIngresso})
      }, 
      error: (err) => {
        console.log(err)
      }
    });
  }

}
