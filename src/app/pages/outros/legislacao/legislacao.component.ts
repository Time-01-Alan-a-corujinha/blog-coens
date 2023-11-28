import { Component, OnInit } from '@angular/core';
import { LegislacaoService } from './legislacao.service';

@Component({
  selector: 'app-legislacao',
  templateUrl: './legislacao.component.html',
  styleUrls: ['./legislacao.component.scss']
})
export class LegislacaoComponent implements OnInit {
  
  public dados: any = []

  constructor(private legislacaoService: LegislacaoService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.legislacaoService.getLegislacao().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        
        this.dados = {
          titulo: infos.titulo,
          link: infos.link,
          descricao: infos.descricao
        }
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }
}
