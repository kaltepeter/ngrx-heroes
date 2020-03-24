import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.scss']
})
export class TopHeroesComponent implements OnInit {
  @Input() heroes: Hero[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() heroClicked = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  heroClick(hero) {
    this.heroClicked.emit();
  }

}
