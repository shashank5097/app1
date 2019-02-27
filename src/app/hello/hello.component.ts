import { Component } from '@angular/core';
import { concat } from 'rxjs/internal/observable/concat';
import { HelloService } from 'src/app/hello/hello.service';


@Component({
    selector:'app-hello',
    templateUrl:'./hello.component.html',
    styleUrls:['./hello.component.css']
})
export class HelloComponent{
    constructor(private hs:HelloService){

    }

    msg :string = "welcome to angular class";
    loc: string = "PSL,Nagpur";
    schedule = '25Feb - 1 Mar';
    count=0;
    isDisabled:boolean=false;
    display:boolean=false;
    isSpecial:boolean=true;
    canSave:boolean=true;
    stylename:string ='s1';
    stext:string="";


    public handleClick(e:Event):void{
        this.canSave=!this.canSave;
        this.isSpecial=!this.isSpecial;
        alert(this.hs.greet());
        this.count++;

    }
    public showfun(e):void{
        console.log("click")
        this.stext=e;
    }
}