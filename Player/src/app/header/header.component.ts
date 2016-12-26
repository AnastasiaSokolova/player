import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public bool: boolean = false;
  display: boolean = false;

  

  constructor() { }

  ngOnInit() {
  }

  logout(): any {
  	localStorage.removeItem('username');
  	this.bool = false;
    this.showDialog()
    setTimeout(() => {
       this.display = false;
     }, 2000)
   
  }

  isUser(): boolean {
    return !!localStorage.getItem('username');
  }

  showDialog() {
      this.display = true;
  }

}
