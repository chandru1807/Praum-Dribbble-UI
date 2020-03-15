import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public activeItem:string = 'home';
  @Output() activeNavChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  navItemClicked(itemName:string){
    
    this.activeItem = itemName;
    console.log(this.activeItem);
    this.activeNavChange.emit(itemName);
  }

}
