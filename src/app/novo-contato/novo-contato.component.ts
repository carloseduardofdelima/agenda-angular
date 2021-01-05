import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from './contato';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.css']
})
export class NovoContatoComponent implements OnInit {
  contato: Contato;
  contatos: Contato[];

  constructor(private as: AgendaService) {
    this.contato = new Contato();
  }

  ngOnInit(): void {
  }

  cadastrar() {
    this.as.adicionar(this.contato);
    this.contatos = this.as.obterContatos();
  }

  excluir(contato) {
    console.log(contato);
    this.as.remover(contato)
  }

}
