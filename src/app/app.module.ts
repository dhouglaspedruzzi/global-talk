import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from "@ionic-native/http";

import {enableProdMode} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ApiProvider} from "../providers/api/api";
import {LoginPage} from "../pages/login/login";
import {ChatPage} from "../pages/chat/chat";
import {AngularFireModule} from "angularfire2";
import { DatabaseProvider } from '../providers/database/database';
import {AngularFireDatabase} from "angularfire2/database";
import {ConfiguracoesPage} from "../pages/configuracoes/configuracoes";

enableProdMode();

const firebaseConfig = {
  apiKey: "AIzaSyCvIPiECCcWJl6AZDDHN0S108tBIxpD9X4",
  authDomain: "globalchat-aaed8.firebaseapp.com",
  databaseURL: "https://globalchat-aaed8.firebaseio.com",
  projectId: "globalchat-aaed8",
  storageBucket: "globalchat-aaed8.appspot.com",
  messagingSenderId: "282586184434"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ChatPage,
    ConfiguracoesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ChatPage,
    ConfiguracoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
