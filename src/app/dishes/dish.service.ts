import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Dish } from './dishes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class DishService {
  dishesChanged = new Subject<Dish[]>();
  private dishes: Dish[] = [
    new Dish(
      'Rice Rolls with Satay Sauce', 
      'Super yummy summer dish',
      'http://laurencariscooks.com/1_lcc/wp-content/uploads/2017/05/Vegan-Tofu-Summer-Rolls-with-Two-kinds-of-dipping-sauce-1-2-600x600.jpg',
      [
        new Ingredient('Rice Paper',10),
        new Ingredient('Vermicelli Noodles',2),
        new Ingredient('Cilantro',1)
      ]),
    new Dish(
      'Yellow Rice Curry with Tempeh',
      'Pachamama protein bomb',
      'https://nourisheveryday.com/wp-content/uploads/2017/11/Easy-Vegan-Yellow-Curry-Tempeh-2-500x500.jpg',
      [
        new Ingredient('Basmati Rice',1),
        new Ingredient('Tempeh',3)
      ]),
    new Dish(
      'Calçots with Romesco Sauce',
      'Catalan gastronomic masterpiece',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi39iLyXJAOUVSjdlvsf9TK0od6_rAZhe5fBzSHbYd4Bs6zrWN',
      [
        new Ingredient('Almonds',32),
        new Ingredient('Olive oil', 1)
      ])
   ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setDishes(dishes: Dish[]) {
    this.dishes = dishes;
    this.dishesChanged.next(this.dishes.slice());
  }
// return a new array; exact copy of the exact service file 
// we cannot access the dishes array stored from outside, we only get a copy
// way to get dishes

   getDishes() {
     return this.dishes.slice();
   }
// alternative id: number
   getDish(index: number) {
    return this.dishes[index];
   }

   addIngredsToShoppingList(ingreds: Ingredient[]) {
    this.shoppingListService.addIngreds(ingreds);
   }

   addDish(dish: Dish) {
    this.dishes.push(dish);
    this.dishesChanged.next(this.dishes.slice());
   }
   updateDish(index: number, newDish: Dish) {
     this.dishes[index] = newDish;
     this.dishesChanged.next(this.dishes.slice());
   }

  deleteDish(index: number) {
    this.dishes.splice(index, 1);
    this.dishesChanged.next(this.dishes.slice());
  }
  }