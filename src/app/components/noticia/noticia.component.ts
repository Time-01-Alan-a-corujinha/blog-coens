import { Component, Input, OnInit } from '@angular/core';
import { TextoUtils } from 'src/app/services/texto-util/texto-util';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {
  @Input() titulo: string = ""
  @Input() midia: any = ""
  @Input() idConteudo: string = ""
  @Input() conteudo: string = ""
  @Input() dataPublicacao: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    setTimeout(() => {
      TextoUtils.preencheElementoDOM(this.idConteudo, TextoUtils.markDownParaHtml(this.conteudo));
    }, 10);
  }

}
