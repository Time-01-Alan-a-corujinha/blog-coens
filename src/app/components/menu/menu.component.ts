import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger} from '@angular/material/menu';
import { HttpConfigService } from 'src/app/services/http-config/http-config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  public listaSistemas: Array<any> = []

  constructor(private httpConfig: HttpConfigService) { }

  ngOnInit(): void {
    this.buscarLinksSistema()
  }

  buscarLinksSistema() {
    this.httpConfig.get("sistemas").subscribe({
      next: (dados: any) => {
        dados.data.forEach((sistema: any) => {
          this.listaSistemas.push({
            titulo: sistema.attributes.nomeSistema,
            link: sistema.attributes.linkSistema
          })
        });
      }, 
      error: (err) => {
        console.log(err)
      }
    })
  }

  openMenu(){
    this.trigger.openMenu();
  }
}
