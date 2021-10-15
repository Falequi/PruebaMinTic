import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Heroe } from '../interfaces/heroe';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  dataHeroes: Heroe[]=[];

  constructor( private heroService: HeroesService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(res=>{
      this.dataHeroes = res;
    })
  }


}
