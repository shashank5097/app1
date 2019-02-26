import { Contact } from 'src/app/contact/contact';
import { contacts } from 'src/app/contact/store';

export class ContactService{
    private contacts:Array<Contact>;
    constructor(){
        this.contacts=contacts;
    }
    public findAll():Array<Contact>{
        return this.contacts;
    }

}
