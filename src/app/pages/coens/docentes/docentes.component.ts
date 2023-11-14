import { Component, OnInit } from '@angular/core';
import { DocentesService } from './docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {

  constructor(private docentesService: DocentesService) { }

  ngOnInit(): void {
    this.getDocentes();
  }

  getDocentes(){
    this.docentesService.getDocentes().subscribe({
      next: (dados:any) => { 
        console.log(dados)
      }
    })
  }
}
