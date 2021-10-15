import { Component, Input } from '@angular/core';
import { Heroe } from '../../page/home/interfaces/heroe';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss'],
})
export class CardHeroComponent {
  
  @Input() dataHeroes: Heroe;

  constructor() { }


}
