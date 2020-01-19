import { Component, ViewChild  } from '@angular/core';;
import { ModalController } from '@ionic/angular';
import { ProductModalPage} from '../product-modal/product-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  
  sliderData: any;
  featuredProduct:any;
 
  slideOpts = {
    initialSlide: 1,
    autoplay:true,
    slidesPerView: 1,
    speed: 400,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  };

  slideProductOpts = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 400,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  };

  constructor( private modalController:ModalController) {}

  ionViewDidEnter(){
    this.getDataSlider();
    this.getFeaturedProduct();
  }

  getDataSlider(){
    fetch('./assets/data/api-slider.json').then(res => res.json())
    .then(json => {
      this.sliderData = json.data
    });
  }

  getFeaturedProduct(){
    fetch('./assets/data/api-featured-product.json').then(res => res.json())
    .then(json => {
      this.featuredProduct = json.data
    });
  }
  
  async presentModal(id) {
    const modal = await this.modalController.create({
      component: ProductModalPage,
      componentProps: {
        'id': id,
      },
      cssClass: 'modal',
    });
    
    return await modal.present();
  }

 

}
