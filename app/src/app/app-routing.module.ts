import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';

import { DetailsCourseComponent } from './components/details-course/details-course.component';

import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: ListCoursesComponent },
  { path: 'courses/:id', component: DetailsCourseComponent },
  { path: 'courses', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
