import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.myForm.reset({...this.user, terms:true});

    // this.myForm.get('terms')?.valueChanges
    //     .subscribe({
    //       next: newValue => {
    //         console.log(newValue);
    //       }
    //     })

    this.myForm.valueChanges.subscribe({
      next: (form) => {
        delete form.terms;
        this.user = form;
      }
    })
  }

  user = {
    gender: 'F',
    notification: true
  }

  myForm: FormGroup = this.fb.group({
    gender: [ 'M', [Validators.required] ],
    notification: [true, [Validators.required]],
    terms: [true, [Validators.requiredTrue]]
  });

  save() {
    const formValue = {...this.myForm.value};
    delete formValue.terms;
    this.user = formValue;
  }

}
