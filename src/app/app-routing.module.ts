import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SetsComponent } from './sets/sets.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sets', component: SetsComponent},
  {path: 'sets/:id', component: SetsComponent},
  {path: '', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
