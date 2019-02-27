import { Contact } from 'src/app/contact/contact';
import { contacts } from 'src/app/contact/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { renderTemplate } from '@angular/core/src/render3/instructions';
@Injectable()
export class ContactService{
    private contacts:Array<Contact>;
    constructor(){
        this.contacts=contacts;
    }
    public findAll():Array<Contact>{
        // return setTimeout(()=>{
            return this.contacts;
        // },5000);
        
    }
    public findAllO() {
        var obs = Observable.create((o)=>{
            o.next(this.contacts);
        });
        return obs;
    }
    


}
