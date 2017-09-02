import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Danilo Oliveira",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "12h ago"
  }

  public lista_filmes = new Array<any>();


  public nomeUsuario: string = "Danilo Oliveira";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MoovieProvider) {
  }

  public somaNumero(num1:number, num2:number):void{
    let resultado = num1+num2
    alert("Chegou na função! Soma: " + resultado );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaNumero(10,10);
    this.movieProvider.getLatesMovies().subscribe(data =>{
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_filmes = objeto_retorno.results;


      console.log(objeto_retorno);
    }, error => {
      console.log(error);
    })
  }

}
