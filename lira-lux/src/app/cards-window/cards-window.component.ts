import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-cards-window',
  templateUrl: './cards-window.component.html',
  styleUrls: ['./cards-window.component.scss']
})
export class CardsWindowComponent implements OnInit {

  constructor(public storageService: StorageService) { }
  cards: any = [];

  ngOnInit(): void {
    this.cards = this.storageService.getCards();
  }

}
