import { Component, OnInit } from '@angular/core';
import {FilmsServiceService} from '../services/films/films-service.service';

export class Film {
  idFilm: number;
  nom: string;
  realisateur: string;
  duree: number;
  troisD: boolean;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  tabFilms: Array<Film>;

  constructor(private service: FilmsServiceService) { }

  initTableau() {
    this.service.getFilms().subscribe(data => this.tabFilms = data);
  }

  ngOnInit(): void {
    this.initTableau();
  }

}
