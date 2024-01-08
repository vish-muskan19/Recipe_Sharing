import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthComponent } from './auth/auth.component';
import { AuthServiceService } from './services/Auth/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    AuthComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe';

  user:any = null;

constructor(public authService:AuthServiceService){}

  ngOnInit(){
    console.log("ngOnInit")
    this.authService.getUserProfile().subscribe({
      next:data => console.log("req user ",data),
      error:error =>console.log("error",error)
    });

    this.authService.authSubject.subscribe(
      (auth) => {
        console.log("auth state",auth)
        this.user = auth.user
      }
    )
    }
}
