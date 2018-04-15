import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dishes-edit',
  templateUrl: './dishes-edit.component.html',
  styleUrls: ['./dishes-edit.component.css']
})

// making sure if editing or creating a new one
export class DishesEditComponent implements OnInit {
  id: number;
  editMode = false; // new property; initially not in editMode

  constructor(private route: ActivatedRoute) { }

// +params to convert it into a number; id refers to route set-up
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=null; // checking if params has an id property
        // only not undefined if in edit mode; if null then undefined
        console.log(this.editMode) // true
      }
    )
  }
}

// note: subscribing to params in edit & detail component;
// no need for cleaning up subscription bc its inherintly from Angular
// however, when using customized observables, unsubscription is required 