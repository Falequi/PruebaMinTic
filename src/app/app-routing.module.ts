import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './page/home/home.page';
import { ListComponent } from './page/home/list/list.component';


const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import('./page/home/home.module').then(m=>m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }