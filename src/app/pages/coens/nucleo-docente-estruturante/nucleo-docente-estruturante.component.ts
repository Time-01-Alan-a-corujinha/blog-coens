import { Component, OnInit } from '@angular/core';
import { NucleoDocenteEstruturanteService } from './nucleo-docente-estruturante.service';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-nucleo-docente-estruturante',
  templateUrl: './nucleo-docente-estruturante.component.html',
  styleUrls: ['./nucleo-docente-estruturante.component.scss']
})
export class NucleoDocenteEstruturanteComponent implements OnInit {

  public dados: any = {}

  constructor(private nucleoDocenteEstruturanteService: NucleoDocenteEstruturanteService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.nucleoDocenteEstruturanteService.getNucleoDocente().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        TextoUtils.preencheElementoDOM("descricao", TextoUtils.markDownParaHtml(infos.descricao));
        this.dados = {
          titulo: infos.titulo,
          regulamento: {
            titulo: infos.RegulamentoNDEs[0].texto,
            link: infos.RegulamentoNDEs[0].media.data.attributes.url
          },
          atas: infos.AtasNDE.map((ata: any) => 
            ata = {
              titulo: ata.texto,
              link: ata.media.data.attributes.url
            }
          )
        }
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }
}
