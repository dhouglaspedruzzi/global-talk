import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {DatabaseProvider} from "../../providers/database/database";



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  textoEnvio: string;
  mensagensRef: AngularFireList<any>;
  mensagens: Observable<any[]>;

  contato_atual: any;
  usuario_logado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, private database: DatabaseProvider) {
    this.contato_atual = this.navParams.data;
    this.usuario_logado = JSON.parse(window.sessionStorage.getItem('usuario_logado'));

    this.mensagensRef = this.database.mensagens(this.usuario_logado.email);
    this.mensagens = this.mensagensRef.valueChanges();
  }

  enviar() {
    if (!this.textoEnvio)
      return false;

    this.api.traduzir(
      this.textoEnvio,
      this.usuario_logado.linguagem,
      this.contato_atual.linguagem
    ).then(res => {

        if (res.hasOwnProperty('translations')) {
          const mensagem = res['translations'].map(traducao => traducao.translation ).join('');

          this.mensagensRef.push({
            origem: this.usuario_logado.email,
            mensagem: this.textoEnvio,
            de: this.usuario_logado.email,
            para: this.contato_atual.email
          });

          this.mensagensRef.push({
            origem: this.contato_atual.email,
            mensagem: mensagem,
            de: this.usuario_logado.email,
            para: this.contato_atual.email
          });

          this.textoEnvio = '';
        }
      })
      .catch(err => console.error(err) )
  }

}
