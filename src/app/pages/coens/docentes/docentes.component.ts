import { Component, OnInit } from '@angular/core';
import { DocentesService } from './docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {
  public dados: any = {
    docentes: <object>[]
  }
  constructor(private docentesService: DocentesService) { }

  ngOnInit(): void {
    this.getDocentes();
  }

  getDocentes(){
    this.docentesService.getDocentes().subscribe({
      next: (dados:any) => { 
        console.log(dados)

        const info = dados.data.attributes

        this.dados.docentes.push({titulo: "Nome", descricao: info.nome})
        this.dados.docentes.push({titulo: "Email", descricao: info.email})
        this.dados.docentes.push({titulo: "lattesLink", descricao: info.lattesLink})
        this.dados.docentes.push({titulo: "Nivel Superior", descricao: info.nivelSuperior})
        this.dados.docentes.push({titulo: "ProfileImagem", descricao: info.ProfileImagem.dados.attributes.url})

      },error:(err) =>{
        console.log(err)
      }
    })
  }
}
