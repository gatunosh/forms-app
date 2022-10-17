import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent implements OnInit {

  @ViewChild('templateForm') templateForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validName():boolean {
    return this.templateForm?.controls['product']?.invalid 
          && this.templateForm?.controls['product']?.touched;
  }

  validPrice():boolean {
    return this.templateForm?.controls['price']?.touched 
          && this.templateForm?.controls['price']?.value < 0;
  }

  save() {
    console.log(this.templateForm);
  }

}
