import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HoroscopeService } from 'src/app/horoscope/service/horoscope.service';

@Component({
  selector: 'dialog-delete-horoscope',
  templateUrl: './delete-horoscope.component.html',
  styleUrls: ['./delete-horoscope.component.css']
})
export class DeleteHoroscopeComponent implements OnInit {
  @Output("gethoroscope")gethoroscope: EventEmitter<any> = new EventEmitter();
  horosIdToDelete: any;
  constructor(private _horoscopeservice:HoroscopeService) { }

  ngOnInit(): void {
  }

  deleteHorosId(id: any){
    this.horosIdToDelete = id;
    console.log(this.horosIdToDelete);    
  }

  confirmDeleteId(){
    this._horoscopeservice.deleteById(this.horosIdToDelete).subscribe({
      next:(x:any) =>{
        console.log("Horoscope"+ x + "Deleted");        
      },
      error:(err:any) =>{
       console.log(err)       
      },
      complete:()=>{
        this.gethoroscope.emit();
      }
    })
  }
} 
