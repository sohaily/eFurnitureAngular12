import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.css']
})
export class LoungeComponent implements OnInit {
  baseUrl: string="http://localhost:64276/api/";
  DbImages:any;
  Images:any = []; 
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this. getBedRoomImages();
  }
  getBedRoomImages(){
    this.http.get(this.baseUrl + 'ImageManagement/4', {
    }).subscribe((event:any) => {
      this.DbImages = event;
      for(let key in this.DbImages) {
        debugger
        let imagePath = this.DbImages[key].path;
        var object={
          image:"http://localhost:64276/"+imagePath
        }
        this.Images.push(object)
        }
        debugger
    });
  }
}
