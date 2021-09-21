import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  Images = [
    {id :1 ,text: "BEDROOM",url:"/catalog/bedroom", path: '../assets/catalogue-banner/bedroom.jpg'},
    {id :3 ,text: "DINNING",url:"/catalog/dinning", path:  '../assets/catalogue-banner/drawing.jpg'}, 
    {id :3 ,text: "DRAWING",url:"/catalog/drawing", path:  '../assets/catalogue-banner/drawing.jpg'}, 
    {id :4 ,text: "LOUNGE",url:"/catalog/lounge", path: '../assets/catalogue-banner/loungue.jpg'}, 
    {id :5 ,text: "ACCESSORIES",url:"/catalog/accessories", path: '../assets/catalogue-banner/assesories.jpg'}
    ]; 
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor() { }

  ngOnInit(): void {
  }

}
