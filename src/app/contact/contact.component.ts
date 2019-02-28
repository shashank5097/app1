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
export class ContactComponent implements OnInit {
   msg2="";
 
 public contacts:Array<Contact>;
  
  constructor(private contactService:ContactService) { }
   cso=null;
  ngOnInit() {
    
    this.cso = this.contactService.findAllO();
    this.cso.subscribe((data)=>{
      this.contacts=data;
    });
  }
  
  public addRecord(name,email,cell){
    if (name.value != ""){
      var rec=new Contact(name.value,email.value,cell.value);
      contacts.push(rec);
      name.value=null;
      email.value=null;
      cell.value=null;
    }
    else{
      this.msg2="*Please Enter Name Atleast";
    }
  }
  public delrow(e){
    console.log(e);
    // console.log(contacts.find(item => item.name===e.id));
    // var item1=contacts.find(item => item.name===e.id);
    contacts.splice(contacts.indexOf(e),1);

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
