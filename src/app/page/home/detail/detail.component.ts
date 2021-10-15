import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../interfaces/heroe';
import { HeroesService } from '../services/heroes.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  heroe:Heroe[];

  constructor( private activeRouter: ActivatedRoute,
               private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(({id})=>{
      this.heroe = JSON.parse(id);
    })
  }

}
