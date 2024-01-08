import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {
  MatDialog,
} from '@angular/material/dialog';
import { CreateRecipeComponent } from '../../create-recipe/create-recipe.component';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { RecipeServiceService } from '../../services/Auth/Recipe/recipe-service.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RecipeCardComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  recipes=[]


  constructor(
    public dialog: MatDialog, 
    public authService:AuthServiceService,
    private recipeService:RecipeServiceService
    ) {}

  handleOpenCreateRecipe(){

    this.dialog.open(CreateRecipeComponent)
  }

  ngOnInit(){
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe(

    )
    this.recipeService.recipeSubject.subscribe(
      (state) =>{
        console.log("state ",state)
        this.recipes=state.recipes
      }
    )
  }
}
