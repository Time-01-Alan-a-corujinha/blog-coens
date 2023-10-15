import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public LOGIN: number = 0
  public CADASTRO: number = 1
  public ESQUECEU_SENHA: number = 2
  public telaAtual: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
