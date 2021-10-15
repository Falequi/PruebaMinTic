import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesData : Heroe[] = [];

  constructor( private http: HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>('../assets/heroes.json');
  }

}
