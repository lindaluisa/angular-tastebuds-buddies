import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DishStartComponent } from './dishes/dish-start/dish-start.component';
import { DishesDetailComponent } from './dishes/dishes-detail/dishes-detail.component';


// id refering to the position in the array of dishes
const appRoutes: RouterModule = [
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: 'dishes', component: DishesComponent, children: [
    { path: '', component: DishStartComponent },
    { path: ':id', component: DishesDetailComponent }, // :id - dynamic parameter
  ] },
  { path: 'shopping-list', component: ShoppingListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}