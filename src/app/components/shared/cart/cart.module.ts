import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    SharedModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
