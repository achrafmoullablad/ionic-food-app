import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food.model';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { CartService } from '../../services/cart.service';
import { ToastController } from '@ionic/angular';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food !: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private toastCtrl: ToastController
  ) {
    //@ts-ignore
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    //@ts-ignore
    this.food = this.foodService.getFood(this.id);
  }

  addItemToCart() {
    const cartitem: CartItem = {
      id: this.food.id,
      name: this.food.title,
      price: this.food.price,
      image: this.food.image as string,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
    console.log(cartitem);
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Food added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

}
