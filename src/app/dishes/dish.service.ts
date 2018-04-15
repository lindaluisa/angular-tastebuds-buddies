import { EventEmitter } from '@angular/core';
import { Dish } from './dishes.model';

export class DishService {
  dishSelected = new EventEmitter<Dish>();
  private dishes: Dish[] = [
    new Dish('Rice Rolls with Satay Sauce', 'Super yummy summer dish', 'http://laurencariscooks.com/1_lcc/wp-content/uploads/2017/05/Vegan-Tofu-Summer-Rolls-with-Two-kinds-of-dipping-sauce-1-2-600x600.jpg'),
    new Dish('Yellow Rice Curry with Tempeh', 'Pachamama protein bomb', 'https://nourisheveryday.com/wp-content/uploads/2017/11/Easy-Vegan-Yellow-Curry-Tempeh-2-500x500.jpg'),
    new Dish('Calçots with Romesco sauce', 'Catalan gastronomic masterpiece', 'http://boroughmarket.org.uk/images/2570/default/bmml31_jennychandler0041.jpg')
   ];

// return a new array; exact copy of the exact service file 
// we cannot access the dishes array stored from outside, we only get a copy
// way to get dishes
   getDishes() {
     return this.dishes.slice();
   }

  }