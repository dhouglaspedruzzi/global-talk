import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";
import {DatabaseProvider} from "../../providers/database/database";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contatos: any[];
  usuario_logado: any;

  constructor(public navCtrl: NavController, private database: DatabaseProvider) {
    this.usuario_logado = JSON.parse(window.sessionStorage.getItem('usuario_logado'));
    this.contatos = [];
    this.database.contatos().subscribe(ref => {
      this.contatos = ref.filter(item => {
          return item.email != this.usuario_logado.email
      });
    }, err => {
        console.error(err);
    });
  }

  conversar(contato) {
    this.navCtrl.push(ChatPage, contato);
  }

}
