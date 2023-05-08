import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../../models/food.model';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent  implements OnInit {
  @Input() item !: Food;
  @Output() clicked:any = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
