import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: LandingComponent},
  {path: 'resume', component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
