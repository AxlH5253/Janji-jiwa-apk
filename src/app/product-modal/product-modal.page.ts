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
  price = 0;
  initPrice = 0;

  qnty = 1;

  cincau = false;
  coffe = false;
  extra = false;
  vanilla = false;
  matcha = false;
  chocolate = false;

  constructor(navParams: NavParams) {
    this.id = navParams.get('id')
    this.getFeaturedProduct()
  }

  setPrice(price){
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return price
  }

  getFeaturedProduct(){
    fetch('./assets/data/api-featured-product.json').then(res => res.json())
    .then(json => {
      this.img = json.data[this.id].img
      this.name = json.data[this.id].name
      this.price = Number(json.data[this.id].price)
      this.initPrice = Number(json.data[this.id].price)
    });
  }

  updateQntValue(value){
    if(value == 'add'){
      this.qnty+=1
    }else if((value == 'sub')&&(this.qnty>=2)){
      this.qnty-=1
    }
  }

  addCincau(){
    if(this.cincau == false){
      this.price+=3000
      this.cincau = true
    }else{
      this.price-=3000
      this.cincau = false
    }
  }

  addCoffe(){
    if(this.coffe == false){
      this.price+=3000
      this.coffe = true
    }else{
      this.price-=3000
      this.coffe = false
    }
  }

  addExtra(){
    if(this.extra == false){
      this.price+=5000
      this.extra = true
    }else{
      this.price-=5000
      this.extra = false
    }
  }

  addVanilla(){
    if(this.vanilla == false){
      this.price+=8000
      this.vanilla = true
    }else{
      this.price-=8000
      this.vanilla = false
    }
  }

  addMatcha(){
    if(this.matcha == false){
      this.price+=8000
      this.matcha = true
    }else{
      this.price-=8000
      this.matcha = false
    }
  }

  addChocolate(){
    if(this.chocolate == false){
      this.price+=8000
      this.chocolate = true
    }else{
      this.price-=8000
      this.chocolate = false
    }
  }

}
