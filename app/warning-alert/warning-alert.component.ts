import { Component } from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  template: `
 
 <div class="warningalert">{{message}}</div>

  `,
  styles: [`
  .warningalert {
   border: 3px solid  #283747   ;
   font-size: 50px;
    text-align: center;
    font-family:'Times New Roman';
    background-color: #C0392B ;
  }
  
  ` ]
})
export class WarningAlertComponent {
message = ` WARNING ALERT! WARNING ALERT! WARNING ALERT! `;
}
