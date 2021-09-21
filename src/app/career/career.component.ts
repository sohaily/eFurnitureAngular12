import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  Images = ['../assets/slider/Carousel1.jpg', '../assets/slider/Carousel2.jpg', '../assets/slider/Carousel3.jpg']; 
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor() { }

  ngOnInit(): void {
  }

}
