import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite = false;
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit() {
  }

  faveClicked() {
    this.isFavorite = true;
  }

}
