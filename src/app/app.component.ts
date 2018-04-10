import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// dish as the passed argument in the header html
export class AppComponent {
  loadedElement = 'dish';

  onNavigate(element: string) {
    this.loadedElement = element;
  }
}
