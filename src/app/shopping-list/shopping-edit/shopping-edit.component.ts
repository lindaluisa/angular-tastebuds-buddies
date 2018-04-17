import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
// adding properties nameInput & amountInput
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.onEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            iname: this.editedItem.name,
            iamount: this.editedItem.amount
            // refering to HTML
            // name="iname"
            // name="iamount"
          })
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

// aim: passing data to parent component, shopping-list c
// const bc vars won't change
// ingredient name = iname (see HTML file)
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.iname, value.iamount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
  }
}
