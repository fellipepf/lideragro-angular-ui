import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtos-grid',
  templateUrl: './produtos-grid.component.html',
  styleUrls: ['./produtos-grid.component.css']
})
export class ProdutosGridComponent  {
  
  @Input()  produtos = [];


}
