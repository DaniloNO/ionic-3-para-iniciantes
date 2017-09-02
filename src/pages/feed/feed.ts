import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario: string = "Danilo Oliveira";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaNumero(num1:number, num2:number):void{
    let resultado = num1+num2
    alert("Chegou na função! Soma: " + resultado );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaNumero(10,10);
  }

}
