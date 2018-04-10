import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Peanut butter', 2),
    new Ingredient('Cocos Cream', 1),
    new Ingredient('Soy Sauce', 1),
  ];

  constructor() { }

  ngOnInit() {
  }

}
