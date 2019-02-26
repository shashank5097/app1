import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact/contact';
import { ContactService } from 'src/app/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 public contacts:Array<Contact>;
  private contactService:ContactService=new ContactService;
  constructor() { }

  ngOnInit() {
    this.contacts=this.contactService.findAll();
  }

}
