import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from "angularfire2/database";
import {Observable} from "rxjs/Observable";


@Injectable()
export class DatabaseProvider {

  constructor(private _af: AngularFireDatabase) {}

  contatos(): Observable<any[]>{
    return this._af.list('/usuarios').valueChanges();
  }

  login(email): AngularFireList<any>{
    return this._af
      .list('/usuarios', ref => ref.orderByChild('email').equalTo(email));
  }

  mensagens(origem): AngularFireList<any> {
    return this._af
      .list('/mensagens', ref => ref.orderByChild('origem').equalTo(origem));
  }
}
