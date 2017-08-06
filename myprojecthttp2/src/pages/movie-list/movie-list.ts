import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { HttpService } from '../service/http-service';
import { MovieInfoPage } from '../movie-info/movie-info';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
  providers: [HttpService]
})
export class MovieListPage {

	movies: Array<any>;

	constructor(public navCtrl: NavController,public toast: ToastController, private httpservice: HttpService,private network: Network) {

	}
  
	searchMovieDB(event, key) {
		console.log(event.target.value);
		if(event.target.value.length > 2) {
			var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(event.target.value) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
			this.httpservice.serviceGet(url).subscribe(
				data => {
					this.movies = data.results; 
				},
				err => {
					this.toast.create({
				    message: 'No hay conexion con el servidor',
	    			duration: 3000
				  }).present();
				},
				() => console.log('Movie Search Complete')
			);
		}
	}   
	ionViewDidEnter() {
	  this.network.onConnect().subscribe(data => {
	    console.log(data)
	    this.displayNetworkUpdate(data.type);
	  }, error => console.error(error));
	 
	  this.network.onDisconnect().subscribe(data => {
	    console.log(data)
	    this.displayNetworkUpdate(data.type);
	  }, error => console.error(error));
	}
	displayNetworkUpdate(connectionState: string){
	  let networkType = this.network.type
	  console.log(connectionState);
	  this.toast.create({
	    message: `You are now ${connectionState}`,
	    duration: 3000
	  }).present();
	}
	
	itemTapped(event, movie) {
		this.navCtrl.push(MovieInfoPage, {
			movie: movie
		});
	}
}
