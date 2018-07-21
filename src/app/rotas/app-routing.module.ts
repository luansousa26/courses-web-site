import { EventosComponent } from './../telas/eventos/eventos.component';
import { SobreComponent } from './../telas/sobre/sobre.component';
import { CursosComponent } from './../telas/cursos/cursos.component';
import { HomeComponent } from './../telas/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'eventos', component: EventosComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
