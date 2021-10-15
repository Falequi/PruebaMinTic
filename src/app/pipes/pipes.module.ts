import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlHeroesPipe } from './url-heroes.pipe';



@NgModule({
  declarations: [UrlHeroesPipe],
  imports: [
    CommonModule
  ],
  exports: [UrlHeroesPipe]
})
export class PipesModule { }
