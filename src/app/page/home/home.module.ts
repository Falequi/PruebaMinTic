import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from '../../material/material.module';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule,
    ComponentsModule,
    PipesModule
  ],
  exports: [HomePage,ListComponent,DetailComponent,CarouselComponent],
  declarations: [
    HomePage,
    ListComponent,
    DetailComponent,
    CarouselComponent,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class HomePageModule {}
