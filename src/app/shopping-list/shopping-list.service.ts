import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  ingredsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Calçots',50),
    new Ingredient('Tomatoes',4),
    new Ingredient('Garlic',3),
  ];

  // slice builds a copy of the ingredients array
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredsChanged.emit(this.ingredients.slice())
  }

 
  // spread operator (ES6 feature) 
  // allows to turn array of elements into a list of elements
  addIngreds(ingredients: Ingredient[]) {
    this.ingredients.push (...ingredients);
    this.ingredsChanged.emit(this.ingredients.slice());
  }

}