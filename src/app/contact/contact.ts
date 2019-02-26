export class Contact{
    

    constructor(private _name:string,private _email:string,private _cell:string){

    }
    public get name():string{
        return this._name;
    }
    public set name(nm:string){
        this._name=nm;
    }
    public get email():string{
        return this._email;
    }
    public set email(nm:string){
        this._email=nm;
    }
    public get cell():string{
        return this._cell;
    }
    public set cell(nm:string){
        this._cell=nm;
    }
}