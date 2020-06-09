import { Component, OnInit, Input } from '@angular/core';
import { Termo } from 'src/app/shared/models/termo.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  primeiroTermo: Termo;
  segundoTermo: Termo;

  constructor() { }

  ngOnInit(): void {
    this.primeiroTermo = {
      descricao: "Mamão com Açúcar",
      singular: true
    }
    this.segundoTermo = {
      descricao: "Seção de comentários do Youtube",
      singular: true
    }
  }

  public sortearTermos() {
    this.primeiroTermo = {
      descricao: "Feijão no dente",
      singular: true
    }
    this.segundoTermo = {
      descricao: "Saci com um patinete",
      singular: true
    }
  }

}
