import { Component } from '@angular/core';

@Component({
  selector: '[app-success-alert]',
  template: `<div class="successalert">{{message}}</div>
  `,
  styles:[`
     .successalert {
   border: 3px solid #283747  ;
   font-size: 50px;
    text-align: center;
    font-family:'Times New Roman';
    background-color: #27AE60 ;
  }
 ` ]
  

})
export class SuccessAlertComponent {
message = `GREAT! SUCCESSFUL OPERATION! `;
}
