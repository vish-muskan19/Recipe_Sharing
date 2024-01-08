import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { Route, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user:any = null;

  constructor(public authService:AuthServiceService,private router:Router){}

  ngOnInit(){
    this.authService.authSubject.subscribe(
      (auth) => {
        console.log("auth state",auth)
        this.user = auth.user
      }
    )
    }

    handlelogout(){
      this.authService.logout()
    }
}
