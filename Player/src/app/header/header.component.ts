import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public bool: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  logout(): any {
  	localStorage.removeItem('username');
  	this.bool = false;
  }

}
