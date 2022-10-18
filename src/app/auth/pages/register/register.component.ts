import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['',[ Validators.required, Validators.pattern(this.validationServices.nameLastNamePattern) ]],
    email: ['',[ Validators.required, Validators.pattern(this.validationServices.emailPattern) ], [this.emailValidator] ],
    username: ['',[ Validators.required, this.validationServices.dontBeGatunosh ]],
    password: ['',[ Validators.required, Validators.minLength(6) ]],
    confirmPass: ['',[ Validators.required ]],
  }, {
    validators: [ this.validationServices.equalFields('password', 'confirmPass') ]
  });


  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.['required']){
      return 'The email is mandatory';
    } else if(errors?.['pattern']) {
      return 'The value doesn not have email format';
    } else if (errors?.['emailExist']) {
      return 'The email already exists';
    }
    return '';
  }

  constructor(private fb: FormBuilder,
              private validationServices: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Adrian Lima',
      email: 'test1@test.com',
      username: 'stridersxd',
      password: '123456',
      confirmPass: '123456'
    })
  }

  fieldNotValid(field:string) {
    return this.myForm.get(field)?.invalid
          && this.myForm.get(field)?.touched;
  }

  submit() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }

}
