import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { DettagliCocktailComponent } from './componenti/dettagli-cocktail/dettagli-cocktail.component';
import { HomeComponent } from './componenti/home/home.component';
import { MenuComponent } from './componenti/menu/menu.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Menu", component:MenuComponent},
  { path: 'cocktail/:id', component: DettagliCocktailComponent },
  {path:'About', component:AboutComponent},
  {path:'Contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
