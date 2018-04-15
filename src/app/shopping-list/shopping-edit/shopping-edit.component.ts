import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
// adding properties nameInput & amountInput
// adding Object to EventEmitter; TS definition with 2 properties; not a value
// ingredientAdded = new EventEmitter<{name:string, amount: number}>();
// better alternative: using Ingredient Model; has ti be imported
// @Output() ingredientAdded = new EventEmitter<Ingredient>();

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

// aim: passing data to parent component, shopping-list c
// const bc vars won't change
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
    // old way: this.ingredientAdded.emit(newIngredient);
  }
}
