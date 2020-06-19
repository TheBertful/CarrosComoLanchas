import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Termo } from 'src/app/shared/models/termo.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  primeiroTermo: Termo;
  segundoTermo: Termo;

  wordarts = ['rainbow', 'blues', 'superhero', 'purple', 'horizon', 'italic-outline', 'slate', 'brown', 'green-3d', 'white-3d', 'redblue'];
  isOpen: boolean = true;
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
    this.sortearTermos();
  }

  public sortearTermos() {
    this.isOpen = false;
    this.primeiroTermo = {
      descricao: "Exemplo",
      singular: true
    }
    this.segundoTermo = {
      descricao: "Exemplo que é maior pra fins de teste",
      singular: true
    }
    this.sortearCSSCards();
    console.log(this.isOpen);
    this.isOpen = true;
  }

  public sortearCSSCards() {
    this.sortearCSS('firstCard');
    this.sortearCSS('secondCard');
  }

  private sortearCSS(id: string) {
    let card = document.getElementById(id).getElementsByClassName('wordart').item(0) as HTMLDivElement;
    this.wordarts.forEach(element => {
      card.classList.remove(element);
    });
    let randomElement = this.wordarts[Math.floor(Math.random() * this.wordarts.length)];
    card.classList.add(randomElement);
  }

}
