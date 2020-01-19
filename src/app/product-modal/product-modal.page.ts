import { Component } from '@angular/core';
import { NavParams} from '@ionic/angular';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage {
  id : any;
  img: any;
  name: any;
  price: any;

  constructor(navParams: NavParams) {
    this.id = navParams.get('id')
    this.getFeaturedProduct()
  }

  getFeaturedProduct(){
    fetch('./assets/data/api-featured-product.json').then(res => res.json())
    .then(json => {
      this.img = json.data[this.id].img
      this.name = json.data[this.id].name
      this.price = json.data[this.id].price
    });
  }

}
