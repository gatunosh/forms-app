import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
})
export class DynamicComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  myForm: FormGroup = this.formBuilder.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array( [
      [ 'Metal Gear', [Validators.required] ],
      [ 'Death Stranding', [Validators.required] ],
    ], [Validators.required])
  });

  newFavorite: FormControl = this.formBuilder.control('', [Validators.required])

  insertGame() {
    if(this.newFavorite.invalid) {
      return;
    }

    this.favoritesArr.push(this.formBuilder.control( this.newFavorite.value, [Validators.required] ));
    this.newFavorite.reset();

  }

  removeGame(index: number) {
    //My Way
    // const myArray = this.myForm.get('favorites') as FormArray;
    // myArray.controls.splice(index, 1);

    //Course Way
    this.favoritesArr.removeAt(index);
  }

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  fieldIsNotValid( field: string ) {
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched;
  }

  ngOnInit(): void {
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

  }

}
