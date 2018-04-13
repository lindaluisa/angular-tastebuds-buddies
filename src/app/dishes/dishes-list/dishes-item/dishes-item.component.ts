import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dish } from '../../dishes.model'; // type Dish

@Component({
  selector: 'app-dishes-item',
  templateUrl: './dishes-item.component.html',
  styleUrls: ['./dishes-item.component.css']
})

// Dish not defined; bc dish should come from outside
// <void> since it does not pass any information
// again: @Output, to listen to event from outside
export class DishesItemComponent  implements OnInit {
  @Input() dish: Dish;
  @Output() dishClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.dishClicked.emit();
  }

}
