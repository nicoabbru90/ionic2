import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieService } from '../pages/service/movie-service';
import { HttpService } from '../pages/service/http-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MovieListPage,
    MovieInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovieListPage,
    MovieInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    Network
  ]
})
export class AppModule {}
