import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponentComponent } from './components/course-list-component/course-list-component.component';
import { CourseDetailComponentComponent } from './components/course-detail-component/course-detail-component.component';
import { CourseCreateComponentComponent } from './components/course-create-component/course-create-component.component';
import { EnrollmentComponentComponent } from './components/enrollment-component/enrollment-component.component';
import { ProgressComponentComponent } from './components/progress-component/progress-component.component';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProgressComponent } from './components/progress/progress.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponentComponent,
    CourseDetailComponentComponent,
    CourseCreateComponentComponent,
    EnrollmentComponentComponent,
    ProgressComponentComponent,
    AuthComponentComponent,
    AuthComponent,
    ProgressComponent,
    EnrollmentComponent,
    CourseCreateComponent,
    CourseDetailComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
