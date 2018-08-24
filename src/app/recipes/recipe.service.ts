import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe(
            'Egg with meat', 
            'What else you want to say? Best protien combination.',
            'http://saltandwind.com/media/_versions/recipes/150316_mashed-potato-pancakes-recipe_v_medium.jpg',
             [
                 new Ingredient('Egg',2),
                 new Ingredient('Meat',1)
             ]),
        new Recipe(
            'Inside Out French Toast Sandwich', 
            'Best breakfast recipe which is easy and fast to cook',
            'https://img.taste.com.au/khB7s7_i/w643-h428-cfill-q90/taste/2017/04/strawberry-hazelnut-french-toast-sandwich_1980x1320-125523-1.jpg',
            [
                new Ingredient('Bread',2),
                new Ingredient('Peanut Butter',1)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredietsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}