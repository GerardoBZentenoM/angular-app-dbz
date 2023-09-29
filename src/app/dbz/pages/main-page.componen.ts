import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 500,
    },
    {
      name: "Goku",
      power: 9500,
    },
    {name: "Vegeta",
    power: 800,
  }
  ];
}
