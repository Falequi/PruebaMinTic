import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Heroe } from '../interfaces/heroe';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  dataHeroes: Heroe[]=[];

  constructor( private heroService: HeroesService ) { }

  ngOnInit() {
   this.heroService.getHeroes().subscribe((res)=>{
     this.dataHeroes = res;
   });
  }

}
