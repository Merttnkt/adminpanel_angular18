import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  items: {icon:string , title:string, link:string}[]=[
    {icon : 'team_dashboard' ,title: 'Dashboard' , link:'dashboard'},
    {icon : 'description' ,title: 'Header Text' , link:'header'},
    {icon : 'contact_page' ,title: 'About' , link:'about'},
    {icon : 'code' ,title: 'Projects' , link:'projects'},
    {icon : 'call' ,title: 'Contact' , link:'contact'},
  ]
}
