import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent  {

  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      path: './template/basics'
    },
    {
      text: 'Dynamic',
      path: './template/dynamic'
    },
    {
      text: 'Switches',
      path: './template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      path: './reactive/basics'
    },
    {
      text: 'Dynamic',
      path: './reactive/dynamic'
    },
    {
      text: 'Switches',
      path: './reactive/switches'
    }
  ];
  

}
