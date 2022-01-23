import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-daily',
  templateUrl: './preview-daily.component.html',
  styleUrls: ['./preview-daily.component.css']
})
export class PreviewDailyComponent implements OnInit {
 url = "assets/img1.jpg"  
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload= (event:any)=>{
        this.url=event.target.result;
      }
    }
  }
}
