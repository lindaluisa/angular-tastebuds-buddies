import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// adding new Property (elementSelected) to emit own event
// parentheses to instantiate it, to create an object based on the eventEmitter class

// in order for the event to be listened to from outside of the component
// to make it accessible from the parent component (app component), need for Output decorator
export class HeaderComponent {
  @Output() elementSelected = new EventEmitter<string>();

  // element refers to the argument declared in click="onSelect('dish')"
  onSelect(element: string) {
    this.elementSelected.emit(element);
  }

}
