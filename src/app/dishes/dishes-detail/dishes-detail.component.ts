import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dishes.model'

@Component({
  selector: 'app-dishes-detail',
  templateUrl: './dishes-detail.component.html',
  styleUrls: ['./dishes-detail.component.css']
})

export class DishesDetailComponent implements OnInit {
  @Input() dish: Dish;
  constructor() { }

  ngOnInit() {
  }

}
