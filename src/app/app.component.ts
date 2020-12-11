import {Component, Input} from '@angular/core';
import {Room} from "./models/Room";
import {Pipe} from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Z01';

  name:string;
  description:string;
  price:number;
  imgPath:string;

    rooms = [
      new Room(
        "room1,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        40,
        "https://novazgrada.rs/files/artbud/styles/boom-property/public/images/property/ml-27-4.jpg?itok=dXIX74Zn"),
      new Room(
        "room2,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        17,
        "https://cf.bstatic.com/images/hotel/max1024x768/149/149111438.jpg"),
      new Room(
        "room3,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        20,
        "https://cf.bstatic.com/images/hotel/max1024x768/180/180503648.jpg"),
]

  addRoom(name,description,price,imgPath){
    this.name = name;
    this.description = description;
    this.price =price;
    this.imgPath = imgPath;
    this.rooms.push(new Room(name,description,price,imgPath));
  }




}
