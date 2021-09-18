import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  titulo = 'Calculadora';
  numero1:number= 0;
  numero2:number= 0;
  resultado:number= 0;

  onSumar():void{
    this.resultado= this.numero1 + this.numero2;
  }
  onRestar():void{
    this.resultado= this.numero1 - this.numero2;
  }
  onMultiplicar():void{
    this.resultado= this.numero1 * this.numero2;
  }
  onDividir():void{
    this.resultado= this.numero1 / this.numero2;
  }

}
