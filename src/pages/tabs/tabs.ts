import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {ConfiguracoesPage} from "../configuracoes/configuracoes";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactPage;
  tab2Root = ConfiguracoesPage;

  constructor() {

  }
}
