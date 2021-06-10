import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';

const routes: Routes = [
  { path: 'mainpage', component:MainPageComponent },
  { path: '', redirectTo: 'mainpage', pathMatch: 'full'  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
