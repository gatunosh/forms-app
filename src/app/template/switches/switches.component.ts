import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent {

  user = {
    gender: 'W',
    notification: true,
  }

  terms: boolean = false;


}
