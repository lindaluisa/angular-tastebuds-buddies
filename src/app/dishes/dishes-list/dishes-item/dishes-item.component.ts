import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../../dishes.model'; // type Dish

@Component({
  selector: 'app-dishes-item',
  templateUrl: './dishes-item.component.html',
  styleUrls: ['./dishes-item.component.css']
})

// old way: 
// Dish not defined; bc dish should come from outside
// <void> since it does not pass any information
// @Output() dishClicked = new EventEmitter<void>(); - again: @Output, to listen to event from outside
export class DishesItemComponent  implements OnInit {
  @Input() dish: Dish;
  @Input() index: number;

  ngOnInit() {
  }

  // onSelected() {
  //   this.dishClicked.emit();
  // }

  // dishService defined in constructor
  // dishSelected = EventEmitter in service
  // and emit the dish of this dish item component; that's the data we want to pass
  // onSelected() {
  //   this.dishService.dishSelected.emit(this.dish);
  // }

}
