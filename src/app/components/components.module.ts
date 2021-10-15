import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CardHeroComponent } from './card-hero/card-hero.component';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';






@NgModule({
  declarations: [MenuComponent,CardHeroComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PipesModule
  ],
  exports: [MenuComponent,CardHeroComponent]
})
export class ComponentsModule { }
