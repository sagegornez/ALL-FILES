import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  show: boolean = false;
  serverNames: String[] = [];
  serverName="";
  ViewServer(){
this.show = true;
this.serverNames.push(this.serverName);
console.log(this.serverNames)
  } 

}
