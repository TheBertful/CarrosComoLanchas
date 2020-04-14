import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public asdf(id: string) {
    let element = document.getElementById(id) as HTMLElement;
    console.log(element);
    element.classList.add('current-link');
  }

}
