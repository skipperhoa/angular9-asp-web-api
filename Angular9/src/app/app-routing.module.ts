import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AddStudentComponent} from './form/add-student.component';
import {EditStudentComponent} from './form/edit-student.component';


const routes: Routes = [

  {
    path: 'edit-student/:id',
    component: EditStudentComponent
  },
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
