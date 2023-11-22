import { Component, OnInit } from '@angular/core';
import { CoordenacaoService } from './coordenacao.service';

@Component({
  selector: 'app-coordenacao',
  templateUrl: './coordenacao.component.html',
  styleUrls: ['./coordenacao.component.scss']
})
export class CoordenacaoComponent implements OnInit {
  public dados: any = {
    coordenacao:<object>[]
  }
  constructor(private CoordenacaoService: CoordenacaoService) { }

  ngOnInit(): void {
    this.getCoordenacao();
  }

  getCoordenacao(){
    this.CoordenacaoService.getCoordenacao().subscribe({
      next:(dados:any) => {
        const info = dados.data.attributes
        console.log(this.dados)
      },error:(err) => {
        console.log(err)
      }
    })
  }
}
