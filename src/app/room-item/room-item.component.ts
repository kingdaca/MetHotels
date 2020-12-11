import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../models/Room";

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent{
@Output() roomToDelete: EventEmitter<Room>;
@Output() roomToChane: EventEmitter<Room>
@Input() room:any;

constructor() {
  this.roomToDelete = new EventEmitter()
  this.roomToChane = new EventEmitter()
}

public  deleteProduct(): void{
  this.roomToDelete.emit(this.room);
}

public  changeProduct(): void{
  this.roomToChane.emit(this.room);
}

}


