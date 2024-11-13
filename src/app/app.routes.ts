import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
   
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'team', component: TeamComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
