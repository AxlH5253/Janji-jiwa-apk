import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductModalPage} from '../product-modal/product-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  featuredProduct : any;
  lastPurchaseProduct: any;

  constructor(private modalController:ModalController) {}

  ionViewDidEnter(){
    this.getFeaturedProduct();
    this.getLastPurchaseProduct();
  }

  setPrice(price){
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return price
  }
  
  getFeaturedProduct(){
    fetch('./assets/data/api-featured-product.json').then(res => res.json())
    .then(json => {
      this.featuredProduct = json.data
    });
  }

  getLastPurchaseProduct(){
    fetch('./assets/data/api-last-purchased.json').then(res => res.json())
    .then(json => {
      this.lastPurchaseProduct = json.data
    });
  }

  async presentModal(id,type) {
    const modal = await this.modalController.create({
      component: ProductModalPage,
      componentProps: {
        'id': id,
        'type': type
      },
      cssClass: 'modal',
    });
    
    return await modal.present();
  }
  
}
