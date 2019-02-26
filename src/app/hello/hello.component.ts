import { Component } from '@angular/core';

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
    stylename:string ='s1'
}