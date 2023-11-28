import { Component, OnInit } from '@angular/core';
import { LogomarcasService } from './logomarcas.service';

@Component({
  selector: 'app-logomarcas',
  templateUrl: './logomarcas.component.html',
  styleUrls: ['./logomarcas.component.scss']
})
export class LogomarcasComponent implements OnInit {
  public listaImagens: any = []

  constructor(private logomarcasService: LogomarcasService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.logomarcasService.getLogomarcas().subscribe({
      next: (dados: any) => {
        dados.data.forEach((imagem: any) => {
          this.listaImagens.push(imagem.attributes.logomarca.data.attributes)
        })
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }
}
