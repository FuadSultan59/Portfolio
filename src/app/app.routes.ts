import { Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';

export const routes: Routes = [
     
    {'path': '', component: HomeComponent},
    {'path': 'Education', component: EducationComponent },
    {'path': 'About-Me', component: AboutComponent },
    {'path': 'Contact-Me', component: ContactComponent},
    {'path': 'Projects', component: ProjectComponent},
    {'path': 'Skill', component: SkillComponent},
    {'path': 'About', component: AboutComponent},
    { 'path': '**', redirectTo: '', pathMatch: 'full' }
];
