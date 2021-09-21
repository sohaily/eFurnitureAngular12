import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http'
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  baseUrl: string="http://localhost:64276/api/";
  progress: any;
  profileForm:any= FormGroup;
  @ViewChild('labelImport', { static: true })
  labelImport: any=ElementRef;
  constructor(private http: HttpClient) {
  //  this.baseUrl = baseUrl;
  }
  onSubmit() {
    console.log(this.profileForm.value, this.profileForm.valid);
    debugger
    const formData = new FormData();
    for (const key of Object.keys(this.profileForm.value)) {
      const value = this.profileForm.value[key];
      formData.append(key, value);
    }
    this.http.post(this.baseUrl + 'ImageManagement/Upload', formData, {
      //this.http.post(this.baseUrl + 'FileManagement/createprofile', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((event:any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
        this.profileForm.reset();
        //this.profileForm
        alert("Saved")
      }
    });
  }
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('test'),
      email: new FormControl('test@gmail.com'),
      ComponentId: new FormControl(1),
      picture: new FormControl('', [Validators.required])
    });
  }
  get form() {
    return this.profileForm.controls;
  }

  upload(files:any) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (const file of files) {
      formData.append(file.name, file);
    }

    const uploadReq = new HttpRequest('POST', this.baseUrl + 'ImageManagement/upload', formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe((event:any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      };
    });
  }

onFileChanged(event:any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.labelImport.nativeElement.innerText = file.name;
    this.profileForm.patchValue({
      picture: file,
    });
  }
}
}