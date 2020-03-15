import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PraumDribbleUi';
  activeItem: string = 'home'
  onActiveItemChange(itemName:string){
    this.activeItem = itemName;
  }
}
