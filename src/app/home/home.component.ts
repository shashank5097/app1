import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  images=["./../../assets/img1.jpg","./../../assets/img2.jpg","./../../assets/img3.jpg","./../../assets/img4.jpg","./../../assets/img5.jpg","./../../assets/img6.jpg"]
  constructor() { }
  public handleUpper(e){
    alert (e);
  }
  public showres(e){
    alert(e);
  }
  ngOnInit() {
  }

}
