import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eFurniture';
  // Images = ['../assets/slider/Carousel1.jpeg', '../assets/slider/Carousel2.jpeg', '../assets/slider/Carousel3.jpeg']; 
  Images = ['../assets/slider/Carousel1.jpeg', '../assets/slider/Carousel2.jpeg', '../assets/slider/Carousel3.jpeg']; 
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  

  
}
