import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  
  
    Username: string = "" ;
    randomNumber: number=0;
    constructor(){
      this.randomNumber = Math.random();
    }
    getBackground()
    {
      if(this.randomNumber < 0.5)
      return "Yellow";
    else
    return "Blue";
    }
    showusername(event: Event)
    {
      console.log(event);
      
       this.Username=""
      return this.Username ;
    }
  
    resetUsername(event:Event): void {
      this.Username = "";
    }
    textboxKeyPress(event: Event)
  {
    console.log(event);
  }
  

}
