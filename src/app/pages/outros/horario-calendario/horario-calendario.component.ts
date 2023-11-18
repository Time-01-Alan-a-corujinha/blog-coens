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

        let listaHorarios: Array<any> = infos.horarioECalendario
        listaHorarios.map(listaAno => {
          listaAno.open = false
          listaAno.horario1Semestre = listaAno.horario1Semestre.data.attributes.url
          listaAno.horario2Semestre = listaAno.horario2Semestre.data.attributes.url
        });

        this.dados = {
          titulo: infos.titulo,
          listaHorarios: listaHorarios
        }
      }
    })
  }
}
