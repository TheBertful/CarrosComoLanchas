import { Component, OnInit, Input } from '@angular/core';
import { Termo } from '../../models/termo.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() public termo: Termo;

  constructor() { }

  ngOnInit(): void {
  }

}
