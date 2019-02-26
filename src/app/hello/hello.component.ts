import { Component } from '@angular/core';
import { concat } from 'rxjs/internal/observable/concat';


@Component({
    selector:'app-hello',
    templateUrl:'./hello.component.html',
    styleUrls:['./hello.component.css']
})
export class HelloComponent{
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
        this.display=!this.display;
        this.count++;
    }
    public showfun(e):void{
        console.log("click")
        this.stext=e;
    }
}