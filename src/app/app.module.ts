import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesListComponent } from './dishes/dishes-list/dishes-list.component';
import { DishesDetailComponent } from './dishes/dishes-detail/dishes-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DishesItemComponent } from './dishes/dishes-list/dishes-item/dishes-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishesListComponent,
    DishesDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DishesItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
