import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact/contact';
import { ContactService } from 'src/app/contact/contact.service';
import { contacts } from 'src/app/contact/store';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit,OnDestroy {
 
 public contacts:Array<Contact>;
  
  constructor(private contactService:ContactService) { }
   cso=null;
  ngOnInit() {
    
    this.cso = this.contactService.findAllO();
    this.cso.subscribe((data)=>{
      this.contacts=data;
    });
  }
  ngOnDestroy(){
    this.cso.unsubscribe(()=>{
      console.log("destroy")
    });
  }
  public addRecord(name,email,cell){
    var rec=new Contact(name.value,email.value,cell.value);
    contacts.push(rec);
    name.value=null;
    email.value=null;
    cell.value=null;

  }
  // async load(){
  //   this.contacts= await this.getdata();
  // }
 
  // private async getdata(){
  //   let p=new Promise((resolve,reject)=>{
  //     resolve(this.contactService.findAll());
  //   });
  //   return p;
  // }

}
