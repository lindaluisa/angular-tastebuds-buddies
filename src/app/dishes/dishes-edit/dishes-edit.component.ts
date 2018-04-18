import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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

// +params to convert it into a number; id refers to route set-up
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=null; // checking if params has an id property
        // only not undefined if in edit mode; if null then undefined
        console.log(this.editMode); // true
        this.initForm();
      }
    );
  }

  private initForm() {
    let dishName = '';
    let dishImagePath = '';
    let dishDescription = '';
    if (this.editMode) {
      const dish = this.dishService.getDish(this.id);
      dishName = dish.name;
      dishImagePath = dish.imagePath;
      dishDescription = dish.description;
    }
    this.dishForm = new FormGroup({
      'contrName': new FormControl(dishName),
      'contrImagePath': new FormControl(dishImagePath),
      'contrDescription': new FormControl(dishDescription)
    });
  }

  onSubmit() {
    console.log(this.dishForm);
  }
}

// note: subscribing to params in edit & detail component;
// no need for cleaning up subscription bc its inherintly from Angular
// however, when using customized observables, unsubscription is required 