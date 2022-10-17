import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  username: string;
  favorites: Favorite[]
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
})
export class DynamicComponent  {

  person: Person = {
    username: 'Adrian',
    favorites: [
      {id: 1, name: 'Legue of leguends'},
      {id: 2, name: 'Fortnite'},
    ]
  }

  newGame: string = '';

  save() {
    console.log('Form posted');
  }

  insertGame() {
    this.person.favorites.push({
      id: this.person.favorites.length + 1,
      name: this.newGame
    })
    this.newGame = '';
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

}
