import { Component, OnInit } from '@angular/core';
import { PosGraduacaoService } from './pos-graduacao.service';

@Component({
  selector: 'app-pos-graduacao',
  templateUrl: './pos-graduacao.component.html',
  styleUrls: ['./pos-graduacao.component.scss']
})
export class PosGraduacaoComponent implements OnInit {
  
  public dados: any = {}
  
  constructor(private posGraduacaoService: PosGraduacaoService) { }

  ngOnInit() {
    this.buscarDados()
  }

  buscarDados() {
    this.posGraduacaoService.getPosGraduacao().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        this.dados = {
          titulo: infos.titulo,
          listaPos: infos.CursoPosGraduacao
        }
      }, 
      error: (err) => {
        console.log(err)
      }
    });
  }
}
