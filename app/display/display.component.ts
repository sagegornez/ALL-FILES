import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent{
    
 Ipakita: string[] = [];
    Display(){
      const IpakitaS = `Clicked ${this.Ipakita.length + 1}`;
      
      this.Ipakita.push(IpakitaS);



    } 

}

  
