import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/contact/contact.service';
import { Contact } from 'src/app/contact/contact';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {
  private name=null;
  con=null;
  constructor(private activatedRoute:ActivatedRoute, private contactService:ContactService) {
    
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p)=>{
      this.name=p['nm'];
    });
   this.con =this.contactService.findByName(this.name);
   
  }


}
