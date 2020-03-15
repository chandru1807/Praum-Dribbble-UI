import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public activeItem:string = 'home';
  constructor() { }

  ngOnInit(): void {
  }

  navItemClicked(itemName:string){
    console.log(itemName);
    this.activeItem = itemName;
    console.log(this.activeItem);
    
  }

}
