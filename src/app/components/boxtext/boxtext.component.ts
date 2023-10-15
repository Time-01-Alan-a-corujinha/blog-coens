import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxtext',
  templateUrl: './boxtext.component.html',
  styleUrls: ['./boxtext.component.scss']
})
export class BoxtextComponent implements OnInit {
  public editor: any

  constructor() { }

  ngOnInit(): void {
    this.editor = document.getElementById('textarea_p')    
  }

  buttonattach() {
  }

  buttonaleft(){    
    this.editor.style.textAlign = 'left';
  }

  buttonacenter(){
    this.editor.style.textAlign = 'center';
  }
  
  buttonajustify(){
    this.editor.style.textAlign = 'justify';
  }
  
  buttonaright(){
    this.editor.style.textAlign = 'right';
  }
  
  buttonbold(){
    if(this.editor.style.fontWeight == "bold")
      this.editor.style.fontWeight = '';
    else
      this.editor.style.fontWeight = 'bold';
  }

  buttonitalic(){
    if(this.editor.style.fontStyle == "italic")
      this.editor.style.fontStyle = 'normal';
    else
      this.editor.style.fontStyle = 'italic';
  }
}
