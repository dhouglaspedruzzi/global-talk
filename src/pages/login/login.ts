import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {DatabaseProvider} from "../../providers/database/database";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider, private toast: ToastController) {
    this.usuario = {};
  }

  entrar() {
    if (!this.usuario.email)
      return false;

    this.database.login(this.usuario.email).valueChanges().subscribe(ref=> {
      if(ref.length == 0) {
        let toast = this.toast.create({
          message: 'Email ou Senha inválidos',
          duration: 3000
        });
        toast.present();
        return false;
      }

      const usuario = ref[0];

      if (usuario.senha == this.usuario.senha) {
        window.sessionStorage.setItem('usuario_logado', JSON.stringify(usuario));
        this.navCtrl.push(TabsPage, usuario);
      } else {
        let toast = this.toast.create({
          message: 'Email ou Senha inválidos',
          duration: 3000
        });
        toast.present();
      }
    }, err => {
      let toast = this.toast.create({
        message: 'Erro ao enviar requisição',
        duration: 3000
      });
      toast.present();
    });
  }
}
