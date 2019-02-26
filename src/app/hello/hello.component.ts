import { Component } from '@angular/core';

@Component({
    selector:'app-hello',
    templateUrl:'./hello.component.html'
})
export class HelloComponent{
    msg :string = "welcome to angular class";
    loc: string = "PSL,Nagpur";
    schedule = '25Feb - 1 Mar'
}