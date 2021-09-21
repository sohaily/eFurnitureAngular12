import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-room',
  templateUrl: './bed-room.component.html',
  styleUrls: ['./bed-room.component.css']
})
export class BedRoomComponent implements OnInit {
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
    this.http.get(this.baseUrl + 'ImageManagement/1', {
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
