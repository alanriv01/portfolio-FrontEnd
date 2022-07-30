import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { NewacercadeComponent } from './components/acerca-de/newacercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaeduc', component: NeweducacionComponent},
  { path: 'editeducacion/:id', component: EditeducacionComponent},
  { path: 'nuevoproy', component: NewproyectoComponent},
  { path: 'editproyecto/:id', component: EditproyectoComponent},
  { path: 'nuevocampo', component: NewacercadeComponent},
  { path: 'editcampo/:id', component : EditacercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
