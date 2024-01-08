package com.example.Service;

import java.util.List;

import com.example.model.Recipe;
import com.example.model.User;

public interface RecipeService {

	public Recipe createRecipe(Recipe recipe, User user);
	
	public Recipe findRecipeById(Long id) throws Exception;
	
	public void deleteRecipe(Long id)throws Exception;
	
	public Recipe updateRecipe(Recipe recipe, Long Id)throws Exception;

	public List<Recipe>findAllRecipe();
	
	public Recipe likeRecipe(Long recipeId, User user)throws Exception;

}
