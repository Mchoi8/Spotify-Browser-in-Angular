import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';


@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html'})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData;

  constructor() { }

  ngOnInit() {

    this.resource.id = "http://localhost:4200/" + this.resource.category + "/" + this.resource.id;                                                                                              + this.resource.id;

  }

}
