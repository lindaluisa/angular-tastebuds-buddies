import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
  //  initForm() has to be called whenever the id params changes
  //  if we are not in edit mode,
  // seeing the dish that we want to edit;
  //  because this means we reload the page
  private initForm() {
    let dishName = '';
    let dishImagePath = '';
    let dishDescription = ''; 
    let dishIngreds = new FormArray([]);

    if (this.editMode) {
      const dish = this.dishService.getDish(this.id);
      dishName = dish.name; // overwriting in case we are in editMode
      dishImagePath = dish.imagePath;
      dishDescription = dish.description;
      if (dish['ingreds']) { 
        for (let ingredient of dish.ingreds) {
          dishIngreds.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount' : new FormControl(ingredient.amount, [
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.dishForm = new FormGroup({
      // this will be either empty string; or
      //  if we happen to be in edit mode; will have the name of the dish we are editing
      'name': new FormControl(dishName, Validators.required), 
      'imagePath': new FormControl(dishImagePath, Validators.required),
      'description': new FormControl(dishDescription, Validators.required),
      'ingredients': dishIngreds
    });
  }

  onSubmit() {
    const newDish = this.dishForm.value;
    this.dishService.addDish(newDish); 
  }

  OnAddIngredient() {
    (<FormArray>this.dishForm.get('ingredients')).push(
      new FormGroup({
         'name': new FormControl(null, Validators.required),
         'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
}

// note: subscribing to params in edit & detail component;
// no need for cleaning up subscription bc its inherintly from Angular
// however, when using customized observables, unsubscription is required 