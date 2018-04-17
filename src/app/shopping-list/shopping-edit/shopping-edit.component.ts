import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
// adding properties nameInput & amountInput
export class ShoppingEditComponent implements OnInit {
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

// aim: passing data to parent component, shopping-list c
// const bc vars won't change
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
