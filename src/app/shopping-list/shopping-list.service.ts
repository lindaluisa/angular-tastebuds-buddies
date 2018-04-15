import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  ingredsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Peanut butter', 2),
    new Ingredient('Cocos Cream', 1),
    new Ingredient('Soy Sauce', 1),
  ];

  // slice builds a copy of the ingredients array
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredsChanged.emit(this.ingredients.slice())
  }
}