import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   name      : new FormControl('RTX 4080ti'),
  //   price     : new FormControl(1500),
  //   qty       : new FormControl(5),
  // });

  myForm: FormGroup = this.formBuilder.group({
    name: [ , [Validators.required, Validators.minLength(3)] ],
    price: [ , [Validators.required, Validators.min(0)] ],
    qty: [ , [Validators.required, Validators.min(0)] ]
  })

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.myForm.reset({
      name: 'RTX 4080ti',
      price: 1600
    })
  }

  fieldIsNotValid( field: string ) {
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched;
  }

  save() {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
