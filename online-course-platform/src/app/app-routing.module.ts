import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { ProgressComponent } from './components/progress/progress.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'admin/create-course', component: CourseCreateComponent },
  { path: 'enrollments', component: EnrollmentComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', redirectTo: '/courses' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
