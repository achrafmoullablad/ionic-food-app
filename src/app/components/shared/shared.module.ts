import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { BadgeComponent } from './badge/badge.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    IconButtonComponent,
    BadgeComponent,
    CartItemComponent,
    CategoryItemComponent,
    FoodCardComponent,
    IconButtonComponent,
    SearchbarComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    InputComponent,
    ButtonComponent,
    IconButtonComponent,
    BadgeComponent,
    CartItemComponent,
    FoodCardComponent,
    CategoryItemComponent,
    IconButtonComponent,
    SearchbarComponent]
})
export class SharedModule {}
