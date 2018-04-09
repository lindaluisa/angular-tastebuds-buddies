import { Component, OnInit } from '@angular/core';
import { Dish } from '../dishes.model';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})

// stating the type of the array of dishes, namly the created Dish Model
// receiving objects as defined in model

// instantiating new object based on Dish class
// new Dish like a method; defining expected 
// calling the constructor; we need to pass the arguments we are expecting in the constructor
export class DishesListComponent implements OnInit {
 dishes: Dish[] = [
   new Dish('Rice Rolls with Satay Sauce', 'Super yummy summer dish', 'http://laurencariscooks.com/1_lcc/wp-content/uploads/2017/05/Vegan-Tofu-Summer-Rolls-with-Two-kinds-of-dipping-sauce-1-2-600x600.jpg'),
   new Dish('Yellow Rice Curry with Tempeh', 'Pachamama protein bomb', 'https://nourisheveryday.com/wp-content/uploads/2017/11/Easy-Vegan-Yellow-Curry-Tempeh-2-500x500.jpg'),
   new Dish('One pot pumpkin meal', 'Cocos, chickpeas and dates', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--513500_11.jpg?itok=iMsAt6Ty')
  ];
  constructor() { }

  ngOnInit() {
  }

}
