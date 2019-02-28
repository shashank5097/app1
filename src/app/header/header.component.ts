import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  private txt;

  @Output()
  private upper = new EventEmitter();

  constructor() { }
  public convert(){
    this.upper.emit(this.txt.toUpperCase())
  }

  ngOnInit() {
  }

}
