import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../page/home/interfaces/heroe';

@Pipe({
  name: 'urlHeroes'
})
export class UrlHeroesPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    
    return `assets/heroes/${heroe}.jpg`;
  }

}
