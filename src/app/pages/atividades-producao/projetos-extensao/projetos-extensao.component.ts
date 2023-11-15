import { Component, OnInit } from '@angular/core';
import { ProjetosExtensaoService } from './projetos-extensao.service';

@Component({
  selector: 'app-projetos-extensao',
  templateUrl: './projetos-extensao.component.html',
  styleUrls: ['./projetos-extensao.component.scss']
})
export class ProjetosExtensaoComponent implements OnInit {

  public dados: any = {
    titulo: "",
    listaProjetos: <Array<any>> []
  }

  constructor(private projetosExtensao: ProjetosExtensaoService) { }

  ngOnInit(): void {
    this.buscarProjetosExtensao();
  }

  buscarProjetosExtensao() {
    this.projetosExtensao.buscarProjetosExtensao().subscribe({
      next: (dados: any) => {
        this.dados = dados.data.attributes
        this.dados.listaProjetos = this.dados.ProjetoDeExtensao
        this.dados.listaProjetos.map((proj: any) => delete proj.id)
        delete this.dados.ProjetoDeExtensao
        console.log(this.dados);
      },
    })
  }
}
