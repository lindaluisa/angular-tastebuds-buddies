import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredsChanged = new Subject<Ingredient[]>();
  onEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Calçots',50),
    new Ingredient('Tomatoes',4),
    new Ingredient('Garlic',3),
  ];

  // slice builds a copy of the ingredients array
  getIngredients() {
    return this.ingredients.slice();
  }
  
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredsChanged.next(this.ingredients.slice())
  }


  // spread operator (ES6 feature) 
  // allows to turn array of elements into a list of elements
  addIngreds(ingredients: Ingredient[]) {
    this.ingredients.push (...ingredients);
    this.ingredsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index]= newIngredient;
    this.ingredsChanged.next(this.ingredients.slice());
  }

  deleteIngred(index: number) {
    this.ingredients.splice(index,1);
    this.ingredsChanged.next(this.ingredients.slice());
  }
}