import { Component, OnInit } from '@angular/core';
import { HorarioCalendarioService } from './horario-calendario.service';

@Component({
  selector: 'app-horario-calendario',
  templateUrl: './horario-calendario.component.html',
  styleUrls: ['./horario-calendario.component.scss']
})
export class HorarioCalendarioComponent implements OnInit {

  public dados: any = []

  constructor(private horarioCalendarioService: HorarioCalendarioService) { }

  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {
    this.horarioCalendarioService.getHorarioCalendario().subscribe({
      next: (dados: any) => {
        const infos = dados.data.attributes
        console.log(infos);
        
        let listaHorarios: Array<any> = infos.horarioECalendario
        listaHorarios.forEach(listaAno => {
          console.log(listaAno);
        });

        this.dados = {
          titulo: infos.titulo,
          listaHorarios: listaHorarios
        }        
        console.log(this.dados);
      }
    })
  }
}
