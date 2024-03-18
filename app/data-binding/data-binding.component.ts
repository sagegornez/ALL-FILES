import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css' 
})
export class DataBindingComponent {
  
  title: string = "Username";
  showusername(event: Event)
  {
    console.log(event);
     this.title="Username"
    return this.title;
  }

  textboxKeyPress(event: Event)
{
  console.log(event);
}

}

