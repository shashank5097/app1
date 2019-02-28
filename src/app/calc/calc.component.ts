import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  @Input()
  private n1:number;
  @Input()
  private n2:number;

  @Output()
  private add=new EventEmitter();

  @Output()
  private mul=new EventEmitter();

  public sendadd(){
    // let n3=parseInt(this.n1)+parseInt(this.n2);
    // this.add.emit(n3)
  }

  public sendmul(){
    this.mul.emit(this.n1*this.n2)
  }

  constructor() { }

  ngOnInit() {
  }

}
