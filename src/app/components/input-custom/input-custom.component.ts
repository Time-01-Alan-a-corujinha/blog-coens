import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss']
})
export class InputCustomComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() icone: string = '';
  @Input() tipoInput: string = 'text';
  public hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.tipoInput == 'password') {
      this.hide = true;
    }
  }

}
