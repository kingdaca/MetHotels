import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from "../models/Room"; [Room]


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
 @Input() rooms:Room[]
 textSearch:string = "";

  randomize() {
    if (this.textSearch !== ''){
      alert(`Can't use randomize with search bar`);
      return;
    }
    let currentIndex = this.rooms.length;
    let randomIndex;
    let temp;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = this.rooms[currentIndex];
      this.rooms[currentIndex] = this.rooms[randomIndex];
      this.rooms[randomIndex] = temp;
    }
  }



  public deleteRoom(room:Room){
    this.rooms = this.rooms.filter(it => {
      return it.price !== room.price;
    })
  }

  public changeRoom(room:Room){

    let index = this.rooms.findIndex(i => i.price === room.price);
    let num;
    this.rooms[index].name = prompt("Change name",this.rooms[index].name);
    this.rooms[index].description = prompt("Change description",this.rooms[index].description);
    num = prompt("Change price",this.rooms[index].price.toString());
    this.rooms[index].imgPath = prompt("Change imgPath",this.rooms[index].imgPath);
    this.rooms[index].price = parseInt(num);
  }




}


