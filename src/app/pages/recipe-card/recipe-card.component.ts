import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {
  MatDialog,
} from '@angular/material/dialog';
import { UpdateRecipeComponent } from '../../update-recipe/update-recipe.component';
import { RecipeServiceService } from '../../services/Auth/Recipe/recipe-service.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {

  @Input() recipe:any // p -> c
  @Input() toggle:any

  constructor(public dialog: MatDialog, private recipeService: RecipeServiceService) {
  }

  handleOpenEditeRecipe(){
    this.dialog.open(UpdateRecipeComponent,{
      data:this.recipe
    })
  }

  ngOnInit(){
    console.log("toggle ",this.toggle)
  }

  // Delete
  handleDeleteRecipe(){
    this.recipeService.deleteRecipes(this.recipe.id).subscribe()
  }
}
