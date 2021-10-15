import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCarouselModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCarouselModule,
    MatCardModule
  ]
})
export class MaterialModule { }
