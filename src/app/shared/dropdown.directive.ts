import { Directive, HostListener, HostBinding } from '@angular/core';

// selector defines how you can add your directive
// [ ] attribute selector
@Directive({
  selector: '[appDropdown]'

})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}