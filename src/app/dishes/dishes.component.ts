import { Component, OnInit } from '@angular/core';

import { Dish } from './dishes.model';
import { DishService } from './dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishService]
})
export class DishesComponent implements OnInit {
selectedDish: Dish; 

// injecting service
  constructor(private dishService: DishService) { }

  // listening to event in dishService & receiving data thereby
  // dishSelected (eventEmitter) is within the service
  // .subscribe is from rxjs which Ang uses behind the scenes--> informing about any changes
  // the selectedDish equal to the dish of the event
  ngOnInit() {
    this.dishService.dishSelected
      .subscribe((dish: Dish) => {
          this.selectedDish = dish;
        }
      )
  }

}
