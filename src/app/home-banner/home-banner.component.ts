import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {
  Images = ['../assets/section2_1.jpg', '../assets/section2_2.jpg', '../assets/section2_3.jpg']; 
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor() { }

  ngOnInit(): void {
  }

}
