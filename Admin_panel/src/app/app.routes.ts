import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {path:'dashboard', component:DashboardComponent},
    {path:'header' , component:HeaderTextComponent},
    {path:'about' , component:AboutComponent},
    {path:'projects' , component:ProjectsComponent},
    {path:'contact' , component:ContactComponent},
   
];
