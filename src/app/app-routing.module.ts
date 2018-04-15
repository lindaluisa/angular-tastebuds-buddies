import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DishStartComponent } from './dishes/dish-start/dish-start.component';
import { DishesDetailComponent } from './dishes/dishes-detail/dishes-detail.component';
import { DishesEditComponent } from './dishes/dishes-edit/dishes-edit.component';


// id refering to the position in the array of dishes
// 'new' has to go before :id !! to not be treated as dynamic parameter
const appRoutes: RouterModule = [
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: 'dishes', component: DishesComponent, children: [
    { path: '', component: DishStartComponent },
    { path: 'new', component: DishesEditComponent },
    { path: ':id', component: DishesDetailComponent }, // :id - dynamic parameter
    { path: ':id/edit', component: DishesEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}