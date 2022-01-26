import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Palit.co";

  constructor() { }

  ngOnInit(): void {
  }

  cartView() {
    console.log("Car View");
  }

}
