import { Injectable } from '@angular/core';
import { Contato } from './novo-contato/contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  contato: Contato;
  contatos: Contato[];

  constructor() {
    this.contatos = [];
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }

  existe(c: Contato): boolean {
    return this.contatos.includes(c);
  }

  adicionar(c: Contato): boolean {
    if(this.contatos.includes(c)) {
      return false;
    }
    else {
      this.contatos.push(c);
      return true;
    }
  }

  remover(c: Contato): boolean {
    if(this.contatos.includes(c)) {
      this.contatos.splice(this.contatos.indexOf(c), 1);
      return true;
    }
    else {
      return false;
    }
  }

}
