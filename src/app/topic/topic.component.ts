import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics=['angular','react','regex'];

  constructor() { }

  ngOnInit() { 
    
    }
  public addli(val){
    this.topics.push(val);
  }


   

}
