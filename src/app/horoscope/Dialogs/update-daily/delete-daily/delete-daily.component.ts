import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UpdateDailyService } from 'src/app/horoscope/service/update-daily.service';

@Component({
  selector: 'dialog-delete-daily',
  templateUrl: './delete-daily.component.html',
  styleUrls: ['./delete-daily.component.css']
})
export class DeleteDailyComponent implements OnInit {
  selectedId!:number;
  @Output() getDailyHoros: EventEmitter<any> = new EventEmitter();
  constructor(  private _dailyservice: UpdateDailyService) { }

  ngOnInit(): void {
  }
  assignAll(id:any){
    this.selectedId = id;
  }

  confirmDelete(){
    this._dailyservice.delete(this.selectedId).subscribe({
      next:()=>{},
      error:(err:any)=>{
        console.log("Error:"+err);
      },
      complete:()=>{
        this.getDailyHoros.emit();
      }
    });
  }
}
