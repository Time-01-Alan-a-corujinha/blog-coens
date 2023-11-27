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
        const info = dados.data.attributes

        this.dados = {
          docentes: info.Professores,
          titulo: info.titulo
        }
      },error:(err) =>{
        console.log(err)
      }
    })
  }
}
