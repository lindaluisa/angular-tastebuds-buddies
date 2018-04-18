import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes-edit',
  templateUrl: './dishes-edit.component.html',
  styleUrls: ['./dishes-edit.component.css']
})

// making sure if editing or creating a new one
export class DishesEditComponent implements OnInit {
  id: number;
  editMode = false; // new property; initially not in editMode
  dishForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private dishService: DishService) { }

// +params to convert to number; id refers to route set-up
// only not undefined if in edit mode; if null then undefined
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=null; // checking if params has id property
        console.log(this.editMode); // true
        this.initForm();
      }
    );
  }

  private initForm() {
    let dishName = '';
    let dishImagePath = '';
    let dishDescription = '';
    let dishIngreds = new FormArray([]);

    if (this.editMode) {
      const dish = this.dishService.getDish(this.id);
      dishName = dish.name;
      dishImagePath = dish.imagePath;
      dishDescription = dish.description;
      if (dish['ingreds']) { 
        for (let ingredient of dish.ingreds) {
          dishIngreds.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name),
              'amount' : new FormControl(ingredient.amount)
            })
          )
        }
      }
    }
    this.dishForm = new FormGroup({
      'contrName': new FormControl(dishName),
      'contrImagePath': new FormControl(dishImagePath),
      'contrDescription': new FormControl(dishDescription),
      'contrIngredients': dishIngreds

    });
  }

  onSubmit() {
    console.log(this.dishForm);
  }

  OnAddIngredient() {
    (<FormArray>this.dishForm.get('contrIngredients')).push(
      new FormGroup({
         'name': new FormControl(),
         'amount': new FormControl()
      })
    )
  }
}

// note: subscribing to params in edit & detail component;
// no need for cleaning up subscription bc its inherintly from Angular
// however, when using customized observables, unsubscription is required 